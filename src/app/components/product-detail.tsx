import Image from "next/image";
import CustomizeProducts from "./customize-product";

export default function ProductDetail() {
  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr] mt-[3.5rem] border-y border-black/30 h-fill overflow-hidden px-12">
      <div className="description flex flex-col justify-between py-16">
        <div className="text-5xl font-bold">
          <h2 className="">Product Name</h2>
          <p className="price">$1,192.00</p>
        </div>
        <div className="desc--text pr-6">
          <h3 className="text-2xl font-bold py-4">Product Info</h3>
          <p className="text-[1.05rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nulla recusandae repudiandae officia minus nisi repellendus
            corrupti, quas fuga eius, aperiam autem placeat quibusdam saepe quam
            dicta soluta ut. Labore?
          </p>
        </div>
      </div>
      <div className="image h-full border-x border-black/30 overflow-hidden flex justify-center bg-[#ebebeb]">
        <Image
          src={"/products/hero_2.webp"}
          width={912}
          height={1313}
          alt="product image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="checkout py-16 pl-6 flex flex-col justify-between">
        <CustomizeProducts />
        <div className="carousel relative w-full aspect-[4/3] overflow-hidden border border-black/30">
          <div
            className={`flex max-w-max`}
            style={{
              transform: `translateX(-${100}%)`,
            }}
          >
            <div className="min-w-full">
              <Image
                src={"/products/hero_2.webp"}
                width={912}
                height={1313}
                alt="product"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="min-w-full">
              <Image
                src={"/products/hero_2.webp"}
                width={912}
                height={1313}
                alt="product"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="min-w-full">
              <Image
                src={"/hero/hero_3_bg_removed.png"}
                width={912}
                height={1313}
                alt="product"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="button absolute w-full bottom-2 flex items-center justify-center gap-2">
            <span className="inline-block h-[0.75rem] w-[0.75rem] bg-slate-400 rounded-full"></span>
            <span className="inline-block h-[0.75rem] w-[0.75rem] bg-slate-400 rounded-full"></span>
            <span className="inline-block h-[0.75rem] w-[0.75rem] bg-slate-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
