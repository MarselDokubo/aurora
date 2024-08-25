import Add from "@/app/components/add";
import CustomizeProducts from "@/app/components/customize-product";
import ProductImages from "@/app/components/product-images";
import Reviews from "@/app/components/reviews";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductDetail from "../components/product-detail";

const SinglePage = ({ params }: { params: { slug: string } }) => {
  return <ProductDetail />;
};
export default SinglePage;
