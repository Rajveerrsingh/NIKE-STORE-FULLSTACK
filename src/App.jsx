import React from "react";
import sneakers from "./data/sneakers"; // <-- make sure path is correct
import SneakerList from "./components/SneakerList";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sneaker Showcase</h1>
      <SneakerList sneakers={sneakers} />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px"
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px"
  }
};

export default App;