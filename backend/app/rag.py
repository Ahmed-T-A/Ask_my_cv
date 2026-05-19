from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from app.config import CHROMA_DIR, MODEL_NAME, EMBEDDING_MODEL
from app.prompts import RAG_PROMPT

vectorstore = Chroma(
    persist_directory=CHROMA_DIR,
    embedding_function=OpenAIEmbeddings(model=EMBEDDING_MODEL),
)


# def clean_markdown_text(text: str) -> str:
#     return text.replace("*", "")

retriever = vectorstore.as_retriever(
      search_type="similarity",
      search_kwargs={"k": 4},
)

llm_chat = ChatOpenAI(model=MODEL_NAME, temperature=0.2)


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


chain = {"context": retriever | format_docs,
          "question": RunnablePassthrough()} | RAG_PROMPT | llm_chat | StrOutputParser()



def ask(question: str) -> str:
    return chain.invoke(question)

if __name__ == "__main__":
    print(ask("Who are you?"))