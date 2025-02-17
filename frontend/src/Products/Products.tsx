import data from "./data1";


function Products() {
  return (
    <div className="content">
      <ul className="products">
        {data.products.map((product) => (
          <li key={product.name}>
            <div className="product">
              <img
                className="product-image"
                src={product.imageUrl}
                alt={product.name}
              />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numberOfReviews} reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;