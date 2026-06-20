import { useState } from "react";
import { predictGPA } from "../services/api";

export const usePrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPrediction = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const result = await predictGPA(data);

      setPrediction(result.predicted_gpa);
    } catch (err) {
      setError("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    prediction,
    loading,
    error,
    getPrediction,
  };
};
