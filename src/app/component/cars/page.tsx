
import Image from "next/image";
import Link from "next/link";

export default function Cars() {
    return (
        
        <div className="bg-slate-100 mt-4">
        <div className="flex ">
            <h2 className="flex text-xl text-gray-700 font-semibold font-sans mt-12  ml-32">Featured New Cars</h2>
            
        </div>

            <ul className="flex ml-28 mt-6">
                <li className="flex text-lg hover:text-xl border-b-2 border-green-600 hover:border-blue-400 text-gray-700 ml-4 hover:cursor-pointer hover:text-blue-500 font-medium font-sans"
                >Popular</li>
                <li className="flex text-lg hover:text-xl text-gray-700 ml-4 hover:cursor-pointer hover:text-blue-500 font-medium font-sans"
                >Up Coming</li>
                <li className="flex text-lg hover:text-xl text-gray-700 ml-4 hover:cursor-pointer hover:text-blue-500 font-medium font-sans"
                >Newly Launched</li>
            </ul>

        {/* cars */}
        <div className="flex w-full m-4 h-96 bg-slate-100   justify-center ">
      
        {/* Corolla */}
          <div className="w-56 h-64 mr-6 mt-11 gap-6 bg-white">
            <Link href="/carDetails/corolla">
              
            <Image id="corolla" src="/corolla.jpg" className="w-56 hover:mt-1 h-40 hover:cursor-pointer" width={200} height={200} alt="Corolla-X-Car" />
            <p className="ml-14 text-base font-semibold text-blue-800 hover:cursor-pointer hover:text-blue-500">Toyota Corolla</p>
                <p className="flex justify-center text-sm font-normal text-green-600">PKR 59.7 - 75.5 lacs</p>
           <div className="flex justify-center mt-4">
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <p className="flex justify-center text-sm font-normal text-gray-500 ml-2 hover:cursor-pointer hover:text-blue-500">621 Reviews</p>
                
           </div>
            </Link>
          </div>
  
          {/* Suzuki_Alto */}
          <div className="w-56 h-64 hover:cursor-pointer mr-6  mt-11 bg-white">
          <Link href="/carDetails/suzuki"> 
          <Image src="/Suzuki_Alto.png" className="w-56 hover:mt-1 h-40" width={100} height={100} alt="Suzuki_Alto" />
          <p className="ml-16 text-base font-semibold text-blue-800 hover:cursor-pointer hover:text-blue-500"
          >Suzuki Alto</p>
          <p className="flex justify-center text-sm font-normal text-green-600">PKR 23.3 - 30.5 lacs</p>
          <div className="flex justify-center mt-4">
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <p className="flex justify-center text-sm font-normal text-gray-500 ml-2 hover:cursor-pointer hover:text-blue-500">200 Reviews</p>
                
           </div>
          </Link>
          </div>
            
          {/* Honda_City */}
          <div className="w-56 h-64 hover:cursor-pointer mr-6  mt-11 bg-white">
          <Link href="/carDetails/hondaCity">
          <Image src="/Honda_City.jpg" className="w-56 hover:mt-1 h-40" width={100} height={100} alt="Honda_City" />

          <p className="ml-16 text-base font-semibold text-blue-800 hover:cursor-pointer hover:text-blue-500"
          >Honda City</p>
          
          <p className="flex justify-center text-sm font-normal text-green-600">PKR 46.5 - 58.5 lacs</p>
          <div className="flex justify-center mt-4">
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <p className="flex justify-center text-sm font-normal text-gray-500 ml-2 hover:cursor-pointer hover:text-blue-500">458 Reviews</p>
           </div>
                
          </Link>
          </div>
  
          {/* Honda_Civic */}
          <div className="w-56 h-64 hover:cursor-pointer mr-6  mt-11 bg-white">
  
          <Link href="/carDetails/civic">
          <Image src="/Honda_Civic.jpg" className="w-56 h-40 hover:mt-1" width={100} height={100} alt="Honda_Civic" />
            <p  className="ml-16 text-base font-semibold text-blue-800 hover:cursor-pointer hover:text-blue-500"
            >Honda Civic</p>
          <p className="flex justify-center text-sm font-normal text-green-600 PKR 86.6 - 99.0 lacs">PKR 86.6 - 99.0 lacs</p>
          <div className="flex justify-center mt-4">
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/star.jpeg" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <Image src="/starGray.png" width={100} height={100} alt="star" className="w-4 h-4 hover:cursor-pointer"  />
            <p className="flex justify-center text-sm font-normal text-gray-500 ml-2 hover:cursor-pointer hover:text-blue-500">358 Reviews</p>
                
           </div>
          </Link>
          </div>
  
        </div>
        </div>
        
    );
  }
