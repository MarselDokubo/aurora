import Image from "next/image";
import Link from "next/link";
import { wixClient } from "../lib/wixClient";

const PRODUCT_PER_PAGE = 10;

const CategoryList = async () => {
  const cats = await wixClient.collections.queryCollections().find();
  return (
    <div className="mt-6 flex gap-x-8 gap-y-16 justify-between overflow-scroll scrollbar-hidden">
      {cats.items.map((item, index) => (
        <Link
          href={`/list?cat=${item.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:min-w-[33%] overflow-hidden"
          key={item._id}
        >
          <div className="relative w-full aspect-[1/1.2]">
            <Image
              src={item.media?.mainMedia?.image?.url || "cat.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover z-10 hover:scale-[.98] transition-all easy duration-500"
            />
            {!item.media?.mainMedia?.image?.url && (
              <Image
                src={"/product.png"}
                alt=""
                fill
                sizes="25vw"
                // className="absolute object-cover"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-lg">Shop {item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
