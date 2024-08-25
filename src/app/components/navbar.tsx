import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./searchbar";
import dynamic from "next/dynamic";
import NavIcons from "./nav-icons";

// const Navbar = () => {
//   return (
//     <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
//       {/* MOBILE */}
//       <div className="h-full flex items-center justify-between md:hidden">
//         <Link href="/">
//           <div className="text-2xl tracking-wide">Aurora</div>
//         </Link>
//         <Menu />
//       </div>
//       {/* BIGGER SCREENS */}
//       <div className="hidden md:flex items-center justify-between gap-8 h-full">
//         {/* LEFT */}
//         <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
//           <Link href="/" className="flex items-center gap-3">
//             <Image src="/logo.png" alt="" width={24} height={24} />
//             <div className="text-2xl tracking-wide">LAMA</div>
//           </Link>
//           <div className="hidden xl:flex gap-4">
//             <Link href="/">Homepage</Link>
//             <Link href="/">Shop</Link>
//             <Link href="/">Deals</Link>
//             <Link href="/">About</Link>
//             <Link href="/">Contact</Link>
//           </div>
//         </div>
//         {/* RIGHT */}
//         <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
//           <SearchBar />
//           <NavIcons />
//         </div>
//       </div>
//     </div>
//   );
// };

function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 h-14 fixed top-0 z-20 w-full">
      <div className="logo">
        <h2 className="text-3xl font-bold uppercase">Aurora</h2>
      </div>
      <nav className="h-full flex items-center text-black/80 uppercase">
        <ul className="nav--links flex  gap-6 h-full items-center">
          <li className="px-4 h-full items-center flex">Home</li>
          <li className="px-4 h-full items-center flex">Shop</li>
          <li className="px-4 h-full items-center flex">Deals</li>
          <li className="px-4 h-full items-center flex">Contact</li>
        </ul>
      </nav>
      {/* <div className="search flex items-center gap-2">
        <div className="search--icon h-8 w-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          className="bg-transparent text-lg"
        />
      </div> */}
      <SearchBar />
      <div className="cart"></div>
      <div className="flex gap-2 items-center ">
        <div className="black h-8 w-8 rounded-full bg-black text-white font-bold items-center justify-center flex">
          O
        </div>
        <div className="cart">
          <Image
            src="/icons/trolley.png"
            height={30}
            width={30}
            alt="Cart icon"
            className=""
          />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
