import "./Catalogue.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import CatalogueList from "../../components/CatalogueList/CatalogueList";
import CategoryList from "../../components/CategoryList/CategoryList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Catalogue() {
  const [productItems, setProductItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  const itemsPerPage = 6;

  useEffect(function () {
    (async function () {
      const products = await productsAPI.getAll();
      categoriesRef.current = [
        ...new Set(products.map((product) => product.category.name)),
      ];
      setProductItems(products);
      setActiveCat(categoriesRef.current[0]);
      console.log(categoriesRef);
    })();
    (async function () {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    })();
  }, []);
  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addItemToCart(productId);
    setCart(updatedCart);
  }

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(
            productItems.filter(
              (product) => product.category.name === activeCat
            ).length / itemsPerPage
          )}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          className="flex justify-end"
        />
      </Stack>
      <CatalogueList
        productItems={productItems
          .filter((product) => product.category.name === activeCat)
          .slice(startIndex, endIndex)}
        handleAddToOrder={handleAddToOrder}
      />
      <Pagination
          count={Math.ceil(
            productItems.filter(
              (product) => product.category.name === activeCat
            ).length / itemsPerPage
          )}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          className="mt-5 mb-5 flex justify-end"
        />
    </>
  );
}
