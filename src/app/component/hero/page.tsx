
export default function Hero() {
    return (
        
        <div className="grid w-auto bg-white">
        
  
        <div className="grid  justify-evenly mt-7 gap-2 border-separate">
          {/* <div className="h-60 w-96  "> */}
  
          <fieldset className="grid md:grid-cols-2 gap-6 p-4 border border-gray-300">
            <legend className="text-xl text-center font-semibold text-gray-700">
              Sell Your Car on PakWheels and Get the Best Price
            </legend>
  
            <div className=" space-y-2 border-r mt-9">
              <h2 className="text-lg font-bold text-blue-800">
                Post your Ad on PakWheels
              </h2>
              <div className="space-y-1 bg-slate-100 mr-16 rounded mt-9">
                        <p><span className="bg-green-400">✓</span>Post your Ad for Free in 3 Easy Steps</p>
                        <p><span className="bg-green-400">✓</span>Get Genuine offers from Verified Buyers</p>
                        <p><span className="bg-green-400">✓</span>Sell your car Fast at the Best Price</p>
              </div>
              <button className=" py-2 px-7 rounded-lg ml-10 mt-10
                   bg-red-700  text-lg text-white">Post Your Ad</button>
        
            </div>
  
            <div className="space-y-2 mt-9">
              <h2 className="text-lg font-bold text-blue-800">
                Try PakWheels Sell It For Me
              </h2> 
              <div className="space-y-1  bg-slate-100 rounded mt-9">
                     <p><span className="bg-green-400">✓</span>Dedicated Sales Expert to Sell your Car</p>
                     <p><span className="bg-green-400">✓</span>We Bargain for you and share the Best Offer</p>
                     <p><span className="bg-green-400">✓</span>We ensure Safe & Secure Transaction</p>
              </div>
              <button className=" py-2 px-7 rounded-lg ml-10
                   bg-blue-400 text-lg text-white">Register Your Car</button>
            </div>
          </fieldset>
        </div>
                  {/* <div className="w-full h-44 bg-gray-300"></div> */}
      </div>
    );
  }
