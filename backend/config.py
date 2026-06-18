from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "app" / "models" / "model.pkl"

SCALER_PATH = BASE_DIR / "app" / "models" / "scaler.pkl"

API_TITLE = "Student Performance Prediction API"

API_VERSION = "1.0.0"

HOST = "127.0.0.1"

PORT = 8000
