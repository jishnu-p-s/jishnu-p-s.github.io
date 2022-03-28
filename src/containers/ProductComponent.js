import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./productcomponent.module.css";

const ProductComponent = ({ products }) => {
  const formatNumber = (number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(number);
  const [num, setnum] = useState(0);
  const changeNum = (x) => {
    if ((x === -1 && num !== 0) || (x === 1 && num !== 99)) {
      setnum(num + x);
    }
  };
  const renderList = products.map((product) => {
    const { id, name, image, selling_price, original_price } = product;
    const discountPercent = (cp = 1, sp = 1) =>
      Math.round((100 * (cp - sp)) / cp);
    return (
      <div className={styles.card} key={id}>
        <div className={styles.productcard}>
          {/* <Link className={styles.link} to={`/product/${id}`}> */}
          <Link to={`#`}>
            <div className={styles.imagediv}>
              <img src={image} alt={name} />
            </div>
            <div className={styles.textfield}>
              <div className={styles.title}>{name}</div>
              <div>per piece</div>
              <div className={styles.pricecontainer}>
                <div className={styles.sp}>
                  Price {formatNumber(selling_price)}
                </div>
                <div className={styles.cp}>
                  <s>{formatNumber(original_price)}</s>
                </div>
                <div className={styles.discount}>
                  {discountPercent(original_price, selling_price)}% Off
                </div>
              </div>
            </div>
          </Link>
          <div className={styles.buttonGroup}>
            {num !== 0 ? (
              <>
                <button disabled={num === 0} onClick={() => changeNum(-1)}>
                  -
                </button>
                <div>{num}</div>
              </>
            ) : (
              <>
                <div
                  className={styles.addDiv}
                  onClick={() => changeNum(1)}
                  style={{ width: "60px" }}
                >
                  Add
                </div>
              </>
            )}
            <button disabled={num === 99} onClick={() => changeNum(1)}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
