from dotenv import load_dotenv
import os

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
CV_PATH = os.getenv("CV_PATH", "data/your_cv.pdf")
CHROMA_DIR = os.getenv("CHROMA_DIR", "vectorstore")
MODEL_NAME = os.getenv("MODEL_NAME", "gpt-5.4-nano")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "text-embedding-ada-002")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY is not set. Check your .env file.")
