import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-[100vh] bg-[#d3d7d8] relative">
      <h1 className="text-[20vw] w-full text-center uppercase font-semibold absolute -bottom-32 m-0 text-white mx-auto">
        Aurora
      </h1>
      <div className="landing--img relative flex justify-center h-full w-full">
        <Image
          src="/hero/hero_3_bg_removed.png"
          alt="Hero Image"
          className="h-full w-[40%] absolute top-0 object-cover"
          width={900}
          height={1350}
        />
      </div>
      <div className="collection-detail bg-white w-64 h-max p-6 absolute top-0 bottom-0 left-24 my-auto">
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-xl font-bold lowercase">Adonis</h3>
            <p className="font-light">hoodie</p>
          </div>
          <p className="price">$119</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="color--pick flex gap-2">
            <span className="inline-flex items-center justify-center rounded-full p-[0.12rem] h-4 w-4 border border-black">
              <span className="inline-block h-full w-full bg-black rounded-full "></span>
            </span>
            <span className="inline-flex items-center justify-center rounded-full p-[0.12rem] h-4 w-4 border border-black">
              <span className="inline-block h-full w-full bg-black rounded-full "></span>
            </span>
            <span className="inline-flex items-center justify-center rounded-full p-[0.12rem] h-4 w-4 border border-black">
              <span className="inline-block h-full w-full bg-black rounded-full "></span>
            </span>
          </div>
          <div className="add--btn rounded-full p-4 border-2 border-black/40 h-8 w-8 flex items-center justify-center relative">
            <p className="text-4xl text-black/40">+</p>
          </div>
        </div>
      </div>
      <div className="collection-detail bg-black text-white w-72 h-40 p-6 absolute bottom-10 right-24 ">
        <div className="flex items-center h-full">
          <div className="h-max">
            <p className="font-light">Swipe it</p>
            <h3 className="text-xl font-bold lowercase">next collection</h3>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 border rounded-xl text-white bg-white max-w-max h-max uppercase absolute top-0 bottom-0 right-24 my-auto">
        <span className="inline-flex items-center font-bold py-2 px-6 bg-black rounded-xl">
          Him
        </span>
        <span className="inline-flex items-center font-bold py-2 px-6 bg-black rounded-xl">
          Her
        </span>
        <span className="inline-flex items-center font-bold py-2 px-6 bg-black rounded-xl">
          Kids
        </span>
      </div>
    </div>
  );
}
