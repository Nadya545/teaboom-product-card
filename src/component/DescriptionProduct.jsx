import React from "react";

const DescriptionProduct = () => {
  return (
    <div className="description">
      <div className="descriptionBtns">
        <button className="descriptionBtn">Описание</button>
        <button className="descriptionBtn">Свойства</button>
        <button className="descriptionBtn">Отзывы</button>
      </div>
      <article className="article">
        <div className="structure">
          Состав: китайский бирюзовый чай, цукаты, натуральные ароматические
          масла. Светлый Фуцзяньский улун с ароматом ананаса. В сухом виде —
          красивый крупный лист изумрудного цвета, скруткой листа напоминающий
          Те Гуань Инь. В прогретой посуде аромат свежей, весенней зелени и
          спелого ананаса. Скрученный лист медленно раскрывается, отдавая весь
          свой аромат. Тем, кому пришёлся по вкусу этот чай, может также
          понравиться связанный чай «Ананасовый рай».
        </div>
        <h2 className="taste">Вкус</h2>
        <div className="tasteInfo">
          Настой прозрачный, светло-янтарного цвета. Классическая нота светлого
          фуцзяньского улуна переплетается c яркой ананасовой нотой.
        </div>
        <h2 className="property">Полезные свойства</h2>
        <ul className="propertyList">
          <li>отличный антиоксидант</li>
          <li>снижает уровень холестерина</li>
          <li>снижает лишний вес</li>
        </ul>
      </article>
    </div>
  );
};

export default DescriptionProduct;
