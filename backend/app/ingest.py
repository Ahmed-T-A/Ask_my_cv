from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from app.config import CV_PATH, CHROMA_DIR, EMBEDDING_MODEL


def ingest():
    try:
        pdf_loader = PyPDFLoader(CV_PATH)
        cv_pdf = pdf_loader.load()

        char_splitter = RecursiveCharacterTextSplitter(
            chunk_size=700,
            chunk_overlap=100,
            separators=[
                "\nEDUCATION\n",
                "\nEXPERIENCE\n",
                "\nPROJECTS\n",
                "\nTECHNICAL SKILLS\n",
                "\n\n",
                "\n",
                " ",
                "",
            ],
        )

        chunks = char_splitter.split_documents(documents=cv_pdf)
        embedding = OpenAIEmbeddings(model=EMBEDDING_MODEL)

        Chroma.from_documents(
            documents=chunks,
            embedding=embedding,
            persist_directory=CHROMA_DIR,
        )

        print("CV indexed successfully ✅")

    except Exception as e:
        print(f"An error occurred: {e}")


def show_docs_stored():
    try:
        vectorstore = Chroma(
            persist_directory=CHROMA_DIR,
            embedding_function=OpenAIEmbeddings(model=EMBEDDING_MODEL),
        )
        for doc in vectorstore.get()["documents"]:
            print(doc, "\n----------\n")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    ingest()
    show_docs_stored()
