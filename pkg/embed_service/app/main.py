from typing import List, Union

from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

# load model
MODEL_NAME = "BAAI/bge-small-en-v1.5"

print(f"[embed-service] Loading embedding model: {MODEL_NAME}")
model = SentenceTransformer(MODEL_NAME)
print("[embed-service] Model loaded.")

# fast api
app = FastAPI(title="wf4 Embedding Service", version="0.1.0")


class EmbedRequest(BaseModel):
    text: Union[str, List[str]]


class EmbedResponse(BaseModel):
    embeddings: List[List[float]]


@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL_NAME}


@app.post("/embed", response_model=EmbedResponse)
def embed(req: EmbedRequest) -> EmbedResponse:
    """
    Embed a single text or a list of texts.
    Returns a list of embeddings (outer list length = number of inputs).
    """
    if isinstance(req.text, str):
        texts = [req.text]
    else:
        texts = req.text

    # sentence-transformers returns a numpy array; convert to plain lists
    vectors = model.encode(texts, convert_to_numpy=True,
                           normalize_embeddings=True)
    embeddings = [v.tolist() for v in vectors]

    return EmbedResponse(embeddings=embeddings)
