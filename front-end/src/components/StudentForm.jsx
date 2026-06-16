import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    Study_Hours_Per_Day: "",

    Extracurricular_Hours_Per_Day: "",

    Sleep_Hours_Per_Day: "",

    Social_Hours_Per_Day: "",

    Physical_Activity_Hours_Per_Day: "",

    Stress_Level: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    // call backend API here
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="Study_Hours_Per_Day"
        placeholder="Study Hours"
        onChange={handleChange}
      />

      <input
        type="number"
        name="Extracurricular_Hours_Per_Day"
        placeholder="Extracurricular Hours"
        onChange={handleChange}
      />

      <input
        type="number"
        name="Sleep_Hours_Per_Day"
        placeholder="Sleep Hours"
        onChange={handleChange}
      />

      <input
        type="number"
        name="Social_Hours_Per_Day"
        placeholder="Social Hours"
        onChange={handleChange}
      />

      <input
        type="number"
        name="Physical_Activity_Hours_Per_Day"
        placeholder="Physical Activity Hours"
        onChange={handleChange}
      />

      <select name="Stress_Level" onChange={handleChange}>
        <option value="">Select Stress Level</option>

        <option value="Low">Low</option>

        <option value="Moderate">Moderate</option>

        <option value="High">High</option>
      </select>

      <button type="submit">Predict</button>
    </form>
  );
}

export default StudentForm;
