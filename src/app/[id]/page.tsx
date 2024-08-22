import Add from "@/app/components/add";
import CustomizeProducts from "@/app/components/customize-product";
import ProductImages from "@/app/components/product-images";
import Reviews from "@/app/components/reviews";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odit
          praesentium similique iusto, eius reiciendis nulla? Recusandae, beatae
          et quam, accusantium dolores error eius vitae placeat quibusdam
          pariatur, corporis sit?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4"> section title</h4>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            iusto, ad voluptatum blanditiis fugit libero, quaerat optio error
            ullam dolorem dicta excepturi maxime ex earum, quae minima veniam
            harum aliquid!{" "}
          </p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
      </div>
    </div>
  );
};

export default SinglePage;
