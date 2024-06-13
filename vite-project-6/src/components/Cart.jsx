export default function Cart({ products }) {
  return (
    <section
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "200px",
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <h2>Cart</h2>
      <ul></ul>
    </section>
  );
}
