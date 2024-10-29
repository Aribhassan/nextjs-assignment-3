
import Link from "next/link";
import Image from "next/image";
import { Html, Head, Main, NextScript } from 'next/document';

export default function Navbar() {
    return (
      <div>
        {/* <Image className="ml-10" src="/pakWheel" alt="image" /> */}
         <header>
          
      <nav className="flex w-full bg-black h-32 items-center text-base font-extralight">
          {/* <p>Download </p> */}
        <hr />
        <Image className="ml-10" src={'https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg'}  alt="Logo" height={50} width={150}></Image>
        <div className="flex justify-end w-auto items-center gap-1 ml-6 mt-12">
        <Link href="/component/usedCar" 
        className=" h-14 w-28 text-center text-white hover:mt-3 hover:cursor-pointer hover:bg-white hover:text-red-500"
        >Used Cars<span style={{ fontSize: '12px' }}>▼</span></Link>

        <Link href="/component/newCar" 
        className="h-14 w-28 text-center text-white hover:mt-3 hover:cursor-pointer  hover:bg-white hover:text-red-500"
        >New Cars<span style={{ fontSize: '12px' }}>▼</span></Link>

        <Link href="/component/bikes" 
        className="h-14 w-24 text-center text-white hover:mt-3 hover:cursor-pointer  hover:bg-white hover:text-red-500"
        >Bikes<span style={{ fontSize: '12px' }}>▼</span></Link>

        <Link href="/component/autoStore" 
        className="h-14 w-28 text-center text-white hover:mt-3 hover:cursor-pointer  hover:bg-white hover:text-red-500"
        >Auto Store<span style={{ fontSize: '12px' }}>▼</span></Link>

        <Link href="/component/videos" 
        className="h-14 w-24 text-center text-white hover:mt-3 hover:cursor-pointer  hover:bg-white hover:text-red-500"
        >Videos</Link>

        <Link href="/component/forums" 
        className="h-14 w-24 text-center text-white hover:mt-3 hover:cursor-pointer hover:bg-white hover:text-red-500"
        >Forums</Link>
        <Link href="/component/blog" 
        className="h-14 w-24 text-center text-white hover:mt-3 hover:cursor-pointer hover:bg-white hover:text-red-500"
        >Blog</Link>
        <Link href="/component/more" 
        className="h-14 w-24 text-center text-white hover:mt-3 hover:cursor-pointer hover:bg-white hover:text-red-500"
        >More<span style={{ fontSize: '12px' }}>▼</span></Link>
        </div>
        <button className=" py-2 px-5 rounded-lg mt-6 ml-6
                 bg-red-700 text-base font-bold text-white">Post an Ad<span style={{ fontSize: '12px' }}>▼</span></button>
      
      </nav>
      </header>
      
     </div>
    );
  }
  
