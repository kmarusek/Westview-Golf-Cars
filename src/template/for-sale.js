import React, { useCallback, useMemo } from "react";
import { Link, navigate } from "gatsby";
import Img from "gatsby-image";
import qs from "query-string";
import cn from 'classname';
import { useLocation } from '@reach/router';
import Footer from "../components/footer";
import HeaderMobile from "../components/header-mobile";
import Layout from "../components/layout";
import { mediumScreen } from "../utils/utils";
import Header from "../components/header";
import { useWindowSize } from "../utils/hook";

const Sales = ({ pageContext }) => {
  const location = useLocation()
  const { screen } = useWindowSize();
  const { products: _products } = pageContext;

  const queries = qs.parse(location.search);
  const onSetType = useCallback((type) => {
    if (queries.type === type) {
      navigate(`/for-sale`);
      return
    }
    
    navigate(`/for-sale?type=${type}`);
  }, [queries.type]);

  const products = useMemo(() => {
    if (!queries.type) {
      return _products
    }
    if (typeof queries.type !== 'string') {
      return _products
    }
    
    return _products.filter(p => {
      if (Array.isArray(p.type) && p.type.includes(queries.type)) {
        return true
      }
      
      return false
    })
  }, [_products, queries.type]) 

  return (
    <Layout
      title="Westview Golf Cars | For Sale"
      description="We sell new and refurbished gas, electric, and custom golf cars. If you’re looking for a custom golf car, get in touch and we’ll build something you love."
    >
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <Header />
      </div>
      <h1
        className="bg-black text-white uppercase text-4xl text-center font-semibold mt-8"
        style={{ letterSpacing: "0.15em" }}
      >
        For sale
      </h1>
      <div>
        <p className="text-xl text-center uppercase mt-6 mb-2 tracking-widest font-semibold">
          Filters
        </p>
        <div className="container bg-primary py-2 mb-4">
          <div className="max-w-4xl mx-auto flex justify-around px-4 lg:px-0">
            <button
              className={cn(["p-2 px-4 tracking-widest uppercase font-semibold transition duration-300", {
                "bg-black text-white": queries.type !== 'electric',
                "bg-white text-black": queries.type === 'electric'
              }])}
              onClick={() => onSetType("electric")}
            >
              Electric
            </button>
            <button
              className={cn(["p-2 px-4 tracking-widest uppercase font-semibold transition duration-300", {
                "bg-black text-white": queries.type !== 'gas',
                "bg-white text-black": queries.type === 'gas'
              }])}
              onClick={() => onSetType("gas")}
            >
              Gas
            </button>
            <button
              className={cn(["p-2 px-4 tracking-widest uppercase font-semibold transition duration-300", {
                "bg-black text-white": queries.type !== 'custom',
                "bg-white text-black": queries.type === 'custom'
              }])}
              onClick={() => onSetType("custom")}
            >
              Custom
            </button>
          </div>
        </div>
        <div className="container p-4 flex flex-wrap justify-center md:justify-between">
          {products.map((product) => (
            <div key={product.productId} className="mb-6 max-w-xs" style={{minHeight: 368}}>
              <Link className="w-full mx-auto" to={`/products/${product.productId}`}>
                <Img
                  fluid={product.image.fluid}
                  alt="product-image"
                  style={{ width: screen === "sm" ? "16rem" : "18rem" }}
                />
              </Link>
              <p className="text-xl p-2 text-center font-semibold">
                {product.name}
              </p>
              <p className="text-lg text-center">
                {Number(product.price).toLocaleString("en-US", {
                  currency: "USD",
                  style: "currency",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </p>
              <Link to={`/products/${product.productId}`}>
                <div className="flex justify-center mt-2">
                  <button className="bg-black text-white p-2 px-8 tracking-widest uppercase font-semibold">
                    View
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer className="bottom-0" />
    </Layout>
  );
};

export default Sales;
