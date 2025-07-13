from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # Required for cross-origin requests


app = FastAPI()

# Enable CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
	return {"Hello": "World"}


def fib_n(n: int):
	if n < 2:
		return 1
	else:
		return fib_n(n-1) + fib_n(n-2)

@app.get("/fib/{n}")
def read_fib(n: int):
	return {"fib_n": fib_n(n)}
