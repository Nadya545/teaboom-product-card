import React, { useState } from "react";
import { packOptions } from "../consts/const";
import Icon from "./icons/Icon";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import { breadcrumbsItems } from "../consts/const";
import DescriptionProduct from "./DescriptionProduct";

const ProductCard = () => {
  const [variants, setVariants] = useState(packOptions);
  return (
    <>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className="productCardContainer">
        <h1 className="productCardTitle">Ананасовый улун</h1>
        <main className="productCardMain">
          <img
            className="productCardImg"
            src="https://media.teaboom.ru/images/e4bb1618-fb80-41e2-8758-86f884ce095d.jpg"
            alt="Ананасовый улун"
          ></img>
          <section className="productCardPrice">
            <div className="btns">
              <button className="btnRepost">
                <Icon name="sms" />
                <span> оставить отзыв</span>
              </button>
              <button className="btnRepostHeart">
                <Icon name="heartInCircle" size={48} />
              </button>
            </div>

            {variants.map((variant) => (
              <div className="variant" key={variant.weight}>
                <div className="variantWeight">
                  <span className="weight">{variant.weight}</span>{" "}
                  <span className="art">арт: {variant.article}</span>
                </div>
                <div className="variantMainInfo">
                  <div className="variantPrice">
                    <span className="price">{variant.price} ₽ </span>{" "}
                    <span className="oldPrice">{variant.oldPrice} ₽</span>
                  </div>
                  <button className="btn">
                    <Icon name="cart" size={24} />
                  </button>
                  <div className="variantStock">
                    <span className="varStock">наличие:</span>
                    <span className="varStockPack">{variant.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      <DescriptionProduct />
    </>
  );
};

export default ProductCard;
