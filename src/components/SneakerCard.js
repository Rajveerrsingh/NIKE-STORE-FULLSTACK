import React from "react";

function SneakerCard({ sneaker }) {
  return (
    <div style={styles.card}>
      <img src={sneaker.image} alt={sneaker.name} style={styles.image} />
      <h3>{sneaker.name}</h3>
      <p>{sneaker.price}</p>
      <p style={styles.description}>{sneaker.description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "8px"
  },
  description: {
    fontSize: "0.9rem",
    color: "#555"
  }
};

export default SneakerCard;
