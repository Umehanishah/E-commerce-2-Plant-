import Image from "next/image"
export default function products() {
  return (
    <main className="pt-3 md:pt-5">
    
      {/* Hero Section */}
      <section className="flex gap-3 md:gap-6 bg-teal-800">
        {/* Left side */}
        <div className="flex-1 px-5 md:px-10 ">
          <h1 className="font- md:font-bold text-2xl md:text-6xl pt-5 md:pt-20 px-5 md:px-10 text-white ">Order your dream plants</h1>
          <p className="text-base md:text-lg text-gray-200 px-5 md:px-10 pt-5 md:pt-10">
            I50+ Plants Species |  100+ Customers</p>
          
          <button className="flex gap-5 md:gap-20 bg-white text-black-900 text-xs md:text-base text-left rounded-md mx-2 md:mx-10 mb-3 md:mb-10 pt-2 md:py-2 mt-5 md:mt-10 px-2 md:px-4" >What are you looking for?<Image width={20} height={20} src="/Search.png" alt="search" /></button>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image width={500} height={500} src="/img-8.jpg" alt="pots" className="pt-5 pb-5" />
        </div>
      </section>
  

      {/* 2nd Section */}
      <section>
        <div className="px-3 md:px-5 pt-5 md:pt-20 text-center">
          <h2 className="text-lg md:text-4xl font-semibold ">Best Selling Plants</h2>
          <p className="text-xs pt-3 md:pt-5 pb-3 md:pb-5">Easiest way to healthy life by buying your favorite plants</p>
           </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 m-3 md:m-10 pb-5 md:pb-20 px-10 md:px-40">
        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt="" className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt="" className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt="" className="hover:scale-125"  />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        </div>

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        </div> 

        </div> 
      </section>
      
      {/* 3rd Section */}
      <section >

        <div className="px-3 md:px-5 pt-5 md:pt-20 text-center">
          <h2 className="text-xl md:text-4xl font-semibold ">Recommended Plants</h2>
          <p className="text-xs pt-3 md:pt-5 pb-3 md:pb-5">Easiest way to healthy life by buying your favorite plants</p>
           </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 m-5 md:m-10 pb-5 md:pb-20 px-10 md:px-40">
        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt="" className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt="" className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt="" className="hover:scale-125"  />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div> 

        <div className="">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs pb-5">$ 1,400.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs pb-5">$ 900.00</p> 
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
        
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs pb-5">$ 3,400.00</p>  
        <button className="flex gap-5 pt-2 bg-teal-800 px-3 pb-2 rounded-md text-xs text-white">Order Now</button>
       
        </div> 

        </div> 
      </section>
      
    
    
</main>
  );
}