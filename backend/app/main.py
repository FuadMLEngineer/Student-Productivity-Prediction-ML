from fastapi import FastAPI

from config import API_TITLE

from app.routes.predict import router

app = FastAPI(
    title=API_TITLE
)

app.include_router(router)
