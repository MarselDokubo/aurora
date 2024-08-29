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
    <header className="flex justify-between items-center md:px-10 px-4 h-14 fixed top-0 z-20 w-full">
      <div className="logo">
        <h2 className="md:text-3xl text-2xl font-bold uppercase">
          <Link href={"/"}>Aurora</Link>
        </h2>
      </div>
      <nav className="h-full hidden md:flex items-center text-black/80 uppercase">
        <ul className="nav--links flex  gap-6 h-full items-center">
          <li className="px-4 h-full items-center flex">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-4 h-full items-center flex">Shop</li>
          <li className="px-4 h-full items-center flex">Deals</li>
          <li className="px-4 h-full items-center flex">Contact</li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <SearchBar />
        <div className="flex gap-2 items-center">
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
      </div>
    </header>
  );
}
export default Navbar;
