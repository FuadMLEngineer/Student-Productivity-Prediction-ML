from fastapi import APIRouter

from app.schemas.student_schema import StudentData

from app.models.model_loader import model

from app.utils.preprocessing import preprocess

router = APIRouter()


@router.post("/predict")
def predict(student: StudentData):

    processed = preprocess(
        student.model_dump()
    )

    prediction = model.predict(
        processed
    )[0]

    return {

        "predicted_gpa": round(
            float(prediction),
            2
        )

    }
