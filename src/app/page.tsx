import Image from "next/image"
export default function Home() {
  return (
    <main className="my-2 md:my-10">
    
      {/* Hero Section */}
      <section className="flex gap-1 md:gap-6 items-center bg-teal-800 w-screen">
        {/* Left side */}
        <div className="flex-1 ">
          <h1 className="font-semibold md:font-bold text-3xl md:text-6xl pt-5 md:pt-20 px-5 md:px-10 text-white ">Buy your dream plants</h1>
          <p className="text-xs md:text-lg text-gray-200 px-5 md:px-10 pt-5 md:pt-10">
            I50+ Plants Species |  100+ Customers</p>
          
          <button className="flex gap-3 md:gap-20 bg-white text-black-900 text-xs md:text-base rounded-md mx-2 md:mx-10 mb-5 md:mb-10 py-2 mt-5 md:mt-10 px-2 md:px-4" >What are you looking for?<Image width={20} height={20} src="/Search.png" alt="search" /></button>
          

        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image width={500} height={400} src="/img-1.jpg" alt="shop"  />
        </div>
      </section>
  

      {/* 2nd Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 pt-5 md:pt-20 pb-5 md:pb-20 px-5 md:px-10">
        <div className="pt-5 md:pt-10">
          <h2 className="text-2xl md:text-4xl font-semibold">Best Selling Plants</h2>
          <p className="text-xs md:text-base pt-5 pb-5 pr-3 md:pr-5">Easiest way to healthy life by buying your favorite plants</p>
          <button className="flex gap-2 md:gap-5 pt-1 md:pt-2 bg-teal-800 px-3 md:px-5 pb-1 md:pb-2 rounded-sm text-xs md:text-sm text-white hover:bg-white hover:border-2 hover:border-teal-800 hover:text-teal-800">See More <Image width={20} height={20} src="/arrow-2.png" alt="" className="" /></button>
        </div>
          
        <div className="w-screen">
        <Image width={200} height={200} src="/img-2.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Natural Plants</p>
        <p className="text-xs">$ 1,400.00</p>  
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-3.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Artifical Plants</p>
        <p className="text-xs">$ 900.00</p>  
        </div>  

        <div className="">
        <Image width={200} height={200} src="/img-4.png" alt=""  className="hover:scale-125" />
        <p className="text-xs pt-5">Herbal Plants</p>
        <p className="text-xs">$ 3,400.00</p>  
        </div>  
      </section>

      {/* 3rd Section */}
      <section className="text-center pt-5 md:pt-10 pb-5 md:pb-10">
        <div className="">
          <h2 className="text-xl md:text-4xl font-semibold">About Us</h2>
          <p className="text-xs md:text-base pt-3 md:pt-5 pb-3 md:pb-5">Order now and appriciate the beauty of nature</p>
        </div>

        <div className="grid grid-cols-3 gap-x-10 pt-5">
        <div className="">
          <div className="px-10 md:px-40 pb-3 md:pb-5 md:h-50">
          <Image width={50} height={50} src="/about-1.png" alt=""  className="hover:scale-125" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Large Assortment</h3>
          <p className="text-xs px-5 md:px-10 pt-2 md:pt-5">we offer many different types of products with fewer variation in each category.</p>
        </div>

        <div className="">
          <div className="px-10 md:px-40 pb-3 md:pb-5 md:h-50">
          <Image width={50} height={50} src="/about-1.png" alt=""  className="hover:scale-125" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Large Assortment</h3>
          <p className="text-xs px-5 md:px-10 pt-2 md:pt-5">we offer many different types of products with fewer variation in each category.</p>
        </div>

        <div className="">
          <div className="px-10 md:px-40 pb-3 md:pb-5 md:h-50">
          <Image width={50} height={50} src="/about-1.png" alt=""  className="hover:scale-125" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Large Assortment</h3>
          <p className="text-xs px-5 md:px-10 pt-2 md:pt-5">we offer many different types of products with fewer variation in each category.</p>
        </div>

        
        </div>
      </section>

      {/* 4th Section */}
      <section className="pt-5 md:pt-10 pb-2 md:pb-10">
        <div className="text-center pt-5 md:pt-10 pb-5 md:pb-10">
          <h2 className="text-xl md:text-4xl font-semibold">Categories</h2>
          <p className="text-xs pt-3 md:pt-5">Find what you are looking for</p>
        </div>

        <div className="grid grid-cols-3 gap-3 pb-5 md:pb-20 bg-teal-800">
          <div className="px-3 md:px-10 pt-3 md:pt-5 items-center text-center">
            <Image width={300} height={500} src="/img-5.png" alt="" className="origin-top" />
            <p className="text-xs font-medium pt-3 md:pt-5 text-white">Natural Plants</p>
          </div>

          <div className="pt-12 md:pt-28 text-center">
            <Image width={300} height={500} src="/img-6.png" alt="" />
            <p className="text-xs font-medium pt-3 md:pt-5 text-white">Natural Plants</p>
          </div>

          <div className="pt-3 md:pt-5 text-center">
            <Image width={300} height={500} src="/img-7.png" alt="" />
            <p className="text-xs font-medium pt-3 md:pt-5 text-white">Natural Plants</p>
          </div>
        
        <div className="flex-1 pt-5 md:pt-10 text-center px-36 md:px-96">
          <button className="pt-2 md:pt-2 bg-white px-20 md:px-40 pb-2 md:pb-2 rounded-md ">More</button>
          </div>

        </div>
      </section>

      {/* 5th Section */}
      <section className="pt-3 md:pt-10 pb-5 md:pb-28">
        <div className="">
          <h2 className="text-lg md:text-4xl text-center font-semibold">What customers say about Greemind?</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 pt-5 md:pt-10">
          <div className="flex-1 text-white bg-teal-800 rounded-md px-3 md:px-5 pt-3 md:pt-5 hover:scale-105">
          <p className="text-xs md:text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos deleniti? Molestias praesentium cupiditate ex beatae cum voluptatibus dolores. Pariatur consequuntur debitis perferendis, temporibus illo aperiam tempore! Sunt, hic atque!</p>
          <div className="flex">
          <Image width={100} height={100} src="/comment-1.png" alt="" />
          <p className="pt-10 md:pt-10 text-sm md:text-base font-semibold">John Doe <br></br>Youtuber</p>
          </div>
          </div>

          <div className="flex-1 text-white bg-teal-800 rounded-md px-3 md:px-5 pt-3 md:pt-5 hover:scale-105">
          <p className="text-xs md:text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dignissimos deleniti? Molestias praesentium cupiditate ex beatae cum voluptatibus dolores. Pariatur consequuntur debitis perferendis, temporibus illo aperiam tempore! Sunt, hic atque!</p>
          <div className="flex">
          <Image width={100} height={100} src="/comment-2.png" alt="" />
          <p className="pt-10 md:pt-10 text-sm md:text-base font-semibold">John Doe <br></br>Youtuber</p>
          </div>
          </div>
        </div>
          
      </section>

</main>
  );
}