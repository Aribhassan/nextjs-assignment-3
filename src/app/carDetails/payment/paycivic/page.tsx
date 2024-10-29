
import Image from "next/image";
import Link from "next/link";
export default function  HondaCiVic() {
    return (
        
     <div className="grid h-screen bg-white grid-cols-2 "> 
            <div className="grid-flow-col bg-blue-100">
            <h1 className="text-4xl mt-10 text-center font-bold text-black"> Honda CiVic</h1>
            <p className="text-2xl text-black">The Honda CiVic is a car manufactured by Honda in Japan.</p>
            <Image src="/Honda_Civic.jpg" className="mt-8 bg-blue-100 ml-16" alt="Corolla" width={500} height={200} />
        </div>
        <div className=" grid-flow-col bg-blue-100">
        <div>
            <form className="mt-20 flex gap-5 justify-center items-center flex-col border">
                <h2 className="text-3xl font-bold">Enter Your Details</h2>
                <input type="name" className="p-2 mt-11 rounded w-10/12 border border-blue-800"
                 placeholder="Enter your Name" />
                 
                <input type="email" className="p-2 rounded w-10/12 border border-blue-800"
                 placeholder="Enter your Email" />

                <input type="adress" className="p-2 rounded w-10/12 border border-blue-800"
                 placeholder="Enter your Adress" />

                <input type="email" className="p-2 rounded w-10/12 border border-blue-800"
                 placeholder="Enter your Card" />

                <input type="password" className="p-2 rounded w-10/12 border border-blue-800" 
                placeholder="Enter your Password" />

                <Link href="/carDetails/thanks" className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</Link>
            </form>
            </div>

        </div>
     </div>
    );
  }
