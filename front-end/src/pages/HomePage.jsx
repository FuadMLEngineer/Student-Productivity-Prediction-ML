import StudentForm from "../components/forms/StudentForm";
import Footer from "../components/layout/Footer";
import PredictionCard from "../components/ui/PredictionCard";

import { usePrediction } from "../hooks/usePrediction";

function HomePage() {
  const { prediction, loading, error, getPrediction } = usePrediction();

  return (
    <div>
      <StudentForm onSubmit={getPrediction} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {prediction && <PredictionCard prediction={prediction} />}
    </div>
  );
}

export default HomePage;
