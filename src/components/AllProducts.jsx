import Filter from "./Filter";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Filter />
      <Outlet />
    </>
  );
};

export default AllProducts;
