
import Image from "next/image";

import Link from "next/link";
export default function Corolla() {
    return (
        
     <div className="grid  h-screen  bg-white"> 
  
        <div className="flex ml-32  flex-col w-10/12 h-screen ">
            <p className="text-4xl underline underline-offset-2  font-bold text-center mt-20"
            >Tayota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</p>
            <div className="flex items-center justify-center mt-14">
               <Image src="/corolla.jpg" className="flex justify-center hover:cursor-pointer "
                width={400} height={300} alt="Corolla-X-Car" />
            </div>

                 
            
            <div className="grid justify-center text-center">
            <p className="flex text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem 
                nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at
                molestias reprehenderit repudiandae. Voluptatum! Omnis ex laudantium rem quibusdam nobis ab
                veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet
                laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel! Voluptas mollitia 
                eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos
                voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis
                error. Minus, beatae eius. Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus 
                nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam 
                explicabo soluta alias provident incidunt? Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta
                nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate.
                Adipisci veritatis quas provident distinctio.

                </p>
                <p className="text-xl mt-7 font-bold text-green-700">PKR 6500000</p>

                <Link href="/carDetails/payment/paycorola" className="grid mx-auto hover:bg-blue-700 mt-10 items-center w-44 rounded-lg 
                 bg-blue-500 text-xl mb-10 font-bold h-12 text-white">Make Payment</Link>
            </div>
       
        </div>
     </div>
    );
  }
