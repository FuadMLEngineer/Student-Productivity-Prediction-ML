import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudentForm from "../components/StudentForm";
import Footer from "../components/Footer";
import PredictionCard from "../components/PredictionCard";

function HomePage() {
  const [prediction, setPrediction] = useState(null);

  return (
    <div className="home-page">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="predict">
        <StudentForm setPrediction={setPrediction} />

        {prediction && <PredictionCard prediction={prediction} />}
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
