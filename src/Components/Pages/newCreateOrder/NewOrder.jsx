import React from "react";
import "./NewOrder.css";
import ProductBar from "../../ProductBar/ProductBar";
import ProductCard from "../../featureWidgetCard/WidgetProductCard/ProductCard";
import { ArrowLeftOutlined } from "@ant-design/icons";
import OrderDetail from "../../OrderDetails/OrderDetail";
import { Link } from "react-router-dom";

const NewOrder = () => {
  return (
    <div className="new-order-container">
      <div className="new-order-div">
        <Link to="/layout/orders">
          <ArrowLeftOutlined className="new-order-arrow" />
        </Link>
        <span className="create-newOrder-span">Create New Order</span>
      </div>
      <>
        <OrderDetail />
      </>
      <>
        <ProductBar />
      </>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default NewOrder;
