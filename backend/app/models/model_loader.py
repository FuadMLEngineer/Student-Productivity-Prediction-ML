import joblib

from config import MODEL_PATH, SCALER_PATH

model = joblib.load(MODEL_PATH)

scaler = joblib.load(SCALER_PATH)
