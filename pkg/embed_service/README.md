# wf4 embedding service

Local embedding microservice for wf4.

## Setup

```bash
cd embed-service
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Run

```
uvicorn app.main:app --host 0.0.0.0 --port 7001 --reload
```

## Test

```
curl http://localhost:7001/health
curl -X POST http://localhost:7001/embed \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world"}'
```
