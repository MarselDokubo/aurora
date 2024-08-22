import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {[...new Array(15)].map((item, index) => (
          <Link
            href={`/#`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={index}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={"/cart.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Item Name</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
