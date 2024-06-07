import "./css/Filter.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Filter = () => {
  const location = useLocation();

  const isActive = (path) => {
    const locationSplit = location.pathname.split('/');
    const pathEndpoint = locationSplit[locationSplit.length - 1]
    return pathEndpoint.includes(path);
  };

  return (
    <section id="filter">
      <ul className="categories">
        <li className="category">
          <Link
            className={`${
              isActive("all") || isActive("shop-products") ? "active" : "inactive"
            } all`}
            to="shop-products/all"
          >
            All
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("wood") ? "active" : "inactive"
            }`}
            to="shop-products/wood"
          >
            Wood
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("lighting") ? "active" : "inactive"
            }`}
            to="shop-products/lighting"
          >
            Lighting
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("appliances") ? "active" : "inactive"
            }`}
            to="shop-products/appliances"
          >
            Appliances
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("landscaping") ? "active" : "inactive"
            }`}
            to="shop-products/landscaping"
          >
            Landscaping
          </Link>
        </li>
        <li className="category">
          <Link
            className={`${
              isActive("paint") ? "active" : "inactive"
            }`}
            to="shop-products/paint"
          >
            Paint
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
