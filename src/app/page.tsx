// "use client";

import CategoryList from "@/app/components/category-list";
import ProductList from "@/app/components/product-list";
import Slider from "@/app/components/slider";
import Landing from "./components/landing";

const HomePage = async () => {
  return (
    <div className="">
      <Landing />
      {/* <Slider /> */}
      <div className="mt-44 px-4 md:px-8 lg:px-24">
        <div className="heading flex">
          <h1 className="text-6xl font-bold uppercase">For Him</h1>
          <div className=""></div>
        </div>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
