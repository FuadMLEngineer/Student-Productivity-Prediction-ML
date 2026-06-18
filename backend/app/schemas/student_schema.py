from pydantic import BaseModel


class StudentData(BaseModel):

    Study_Hours_Per_Day: float

    Extracurricular_Hours_Per_Day: float

    Sleep_Hours_Per_Day: float

    Social_Hours_Per_Day: float

    Physical_Activity_Hours_Per_Day: float

    Stress_Level: str
