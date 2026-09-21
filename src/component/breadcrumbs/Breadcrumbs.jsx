import React from "react";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index} className="breadcrumbsItem">
          {index < items.length - 1 ? (
            <span className="breadcrumbsLink">{item}</span>
          ) : (
            <span className="breadcrumbsCurrent">{item}</span>
          )}
          {index < items.length - 1 && (
            <span className="breadcrumbsSeparator"> - </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
