function PredictionCard({ prediction }) {
  return (
    <div className="prediction-card">
      <h2>Predicted GPA</h2>

      <h1>{prediction}</h1>
    </div>
  );
}

export default PredictionCard;
