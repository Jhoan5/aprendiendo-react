export default function Products({ products }) {
  return (
    <section>
      <h2>Products</h2>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,200px)",
          gap: "20px",
          listStyle: "none",
        }}
      >
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <article>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
