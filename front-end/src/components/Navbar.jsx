function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EduPredict</div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#predict">Predict</a>
        </li>

        <li>
          <a href="#analytics">Analytics</a>
        </li>

        <li>
          <a href="#performance">Model Performance</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button>GitHub</button>
    </nav>
  );
}

export default Navbar;
