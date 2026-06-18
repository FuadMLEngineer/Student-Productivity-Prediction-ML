import pandas as pd

from app.models.model_loader import scaler

stress_map = {

    "Low": 0,

    "Moderate": 1,

    "High": 2

}


def preprocess(data):

    df = pd.DataFrame([data])

    df["Stress_Level"] = df["Stress_Level"].map(stress_map)

    return scaler.transform(df)
