# Ask My CV

A RAG chatbot API that answers questions about your CV/resume, built with LangChain and FastAPI.
Drop in your PDF, add your OpenAI key, and query it from any frontend or client.

## How It Works

```
User question
     │
     ▼
FastAPI /chat endpoint
     │
     ▼
LangChain RAG chain
  ├── ChromaDB retriever  →  finds the most relevant CV chunks
  └── OpenAI LLM          →  generates an answer from those chunks
     │
     ▼
JSON response
```

## Quick Start

```bash
cd backend/
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # fill in OPENAI_API_KEY and CV_PATH
python -m app.ingest        # index your CV (run once)
uvicorn app.main:app --reload --port 8000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Returns `{"status": "ok"}` — confirms the server is running |
| `POST` | `/chat` | Accepts `{"question": "..."}` and returns `{"answer": "..."}` |

**Example:**
```bash
curl -X POST http://localhost:8000/chat \
     -H "Content-Type: application/json" \
     -d '{"question": "What are your technical skills?"}'
```

Interactive docs available at `http://localhost:8000/docs` when the server is running.

## Repository Structure

```
ask_my_cv/
├── backend/
│   ├── app/
│   │   ├── config.py       # environment variables
│   │   ├── prompts.py      # LangChain prompt template
│   │   ├── ingest.py       # CV → ChromaDB indexing script
│   │   ├── rag.py          # RAG chain
│   │   └── main.py         # FastAPI server
│   ├── data/               # place your CV PDF here
│   ├── vectorstore/        # auto-generated (gitignored)
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
└── README.md
```

## Configuration

Copy `backend/.env.example` to `backend/.env` and fill in your values.

| Variable | Required | Default | Description |
|---|---|---|---|
| `OPENAI_API_KEY` | Yes | — | Your OpenAI secret key — get one at [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| `CV_PATH` | Yes | `data/your_cv.pdf` | Path to your CV PDF, relative to the `backend/` directory |
| `CHROMA_DIR` | No | `vectorstore` | Directory where ChromaDB persists the vectorstore (created automatically) |
| `MODEL_NAME` | No | `gpt-4o-mini` | OpenAI chat model used to generate answers (`gpt-4o-mini`, `gpt-3.5-turbo`, `gpt-4o`) |
| `EMBEDDING_MODEL` | No | `text-embedding-3-small` | OpenAI embedding model used to index and search the CV — must be the same for both `ingest.py` and `rag.py` |

## Customization

- **System prompt**: edit `backend/app/prompts.py` to change how the bot introduces itself.
- **Chunk size**: tune `chunk_size` and `chunk_overlap` in `ingest.py` for better retrieval.
- **Model**: change `MODEL_NAME` in `.env` to use a different OpenAI model.
