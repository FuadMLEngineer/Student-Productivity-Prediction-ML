Student CGPA Prediction Using Machine Learning

Overview

This project is a full-stack machine learning application that predicts a student's **CGPA** based on lifestyle and academic behavior factors. It combines a trained ML regression model with a **React frontend** to provide an interactive prediction system.

The goal is to analyze how daily habits influence academic performance and visualize predictions in a simple web interface.

Objective

To build a regression-based system that predicts CGPA using student lifestyle parameters such as study habits, sleep, stress, and extracurricular activities.

Features Used

- Study Hours
- Extracurricular Hours
- Sleep Hours
- Social Hours
- Physical Activity Hours
- Stress Level

Machine Learning Model

- Linear Regression (baseline)
- Random Forest Regressor (improved accuracy)
- Feature scaling and preprocessing applied

Tech Stack used

Frontend:

- React.js
- HTML, CSS, JavaScript

Backend / ML:

- Python
- Flask (or FastAPI if used)
- Scikit-learn
- Pandas, NumPy

Project Workflow

1. Data collection (student behavior dataset)
2. Data preprocessing & cleaning
3. Feature selection
4. Model training (regression models)
5. Model evaluation
6. Backend API creation (ML model serving)
7. React frontend integration
8. Real-time CGPA prediction UI

Project Structure

Student-CGPA-Prediction/
│
├── frontend/ # React application
├── backend/ # Flask/FastAPI ML API
├── model/ # Trained ML model
├── notebooks/ # EDA & training notebooks
├── .gitignore
└── README.md

````
 Key Insights

- Study hours and sleep have strong positive impact on CGPA
- High stress level negatively affects performance
- Balanced lifestyle leads to better academic outcomes
- Physical activity improves productivity indirectly



How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/fumd03/Student-Productivity-Prediction-ML.git
````

2. Run Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

3. Run Frontend

```bash
cd frontend
npm install
npm start
```

Future Improvements

- Deploy project using Render / Vercel
- Add deep learning models
- Improve UI with dashboards
- Add personalized study recommendations
- Expand dataset with real survey data

What This Project Shows

- End-to-end ML pipeline
- Full-stack integration (React + Python API)
- Feature engineering & regression modeling
- Real-world problem solving approach

Author

Fuad Mohammed
GitHub: [https://github.com/fumd03]
