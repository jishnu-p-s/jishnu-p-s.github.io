import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts /*addnum*/ } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import Loading from "react-fullscreen-loading";
import styles from "./productcomponent.module.css";

const ProductListing = () => {
  // const { sum } = useSelector((state) => state.addSub);
  const { error, loading } = useSelector((state) => state.loading);
  const { theme } = useSelector((state) => state.theme);
  const { searchText } = useSelector((state) => state.allProducts);
  let products = useSelector((state) => state.allProducts.products);
  products = useMemo(() => {
    return products.filter(
      (item) => (item.original_price = item.original_price * 1.05)
    );
  }, [products]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ query: searchText || "" }));
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      {/* <button onClick={() => dispatch(addnum(10))}>click me {sum}</button> */}
      <div className={styles.product}>
        {error && (
          <div
            style={{ width: "100vw", textAlign: "center", fontSize: "35px" }}
          >
            Error occured !!
          </div>
        )}
        {loading ? (
          <Loading
            loading={true}
            background={theme.backgroundColor}
            loaderColor="#3498db"
          />
        ) : (
          <ProductComponent products={products} />
        )}
      </div>
    </>
  );
};

export default ProductListing;
