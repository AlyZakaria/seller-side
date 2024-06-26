import Product from "@components/Product/Product";
import { useContext } from "react";
import { ProductsContext } from "@contexts/productsContext";

function Products() {
  let { productsState } = useContext(ProductsContext);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center ">
        {!productsState.length ? (
          <h1>No Products Found</h1>
        ) : (
          productsState.map((product) => (
            <Product key={product.sku} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
