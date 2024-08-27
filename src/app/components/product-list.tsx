import Image from "next/image";
import Link from "next/link";
import { wixClient } from "../lib/wixClient";
import { products } from "@wix/stores";
import Pagination from "./pagination";

const PRODUCT_PER_PAGE = 8;
const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId ?? "")
    .find();
  console.log("ProductList", res);

  return (
    <div>
      <div className="mt-6 flex gap-x-8 gap-y-16 justify-between overflow-scroll scrollbar-hidden">
        {res.items.map((product: products.Product) => (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:min-w-[33%]"
            key={product._id}
          >
            <div className="relative w-full aspect-[1/1]">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span className="">{product.name}</span>
              <span className="">${product.price?.price}</span>
            </div>
            <button className="rounded-2xl ring-2 ring-black text-black w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
              Buy Now
            </button>
          </Link>
        ))}
      </div>
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
