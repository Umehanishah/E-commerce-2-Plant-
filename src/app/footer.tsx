import Image from "next/image"
export default function Home() {
  return (
    <main className="my-2 md:my-10">
    
      {/* footer Section */}

<section className="flex gap-2 items-center w-full bg-teal-800 text-white">
{/* Left side */}
<div className="flex-1 pt-5 md:pt-10 pb-5 md:pb-10 px-5 md:px-10">
<h2 className="text-lg md:text-3xl">Greenmind</h2>
<p className="text-xs pt-3 md:pt-5">We help you find your dream plant</p>
<div className="flex gap-3 md:gap-5 pt-3 md:pt-5">
<Image width={40} height={20} src="/icon-1.png" alt="facebook" />
<Image width={40} height={20} src="/icon-2.png" alt="instagram" />
<Image width={40} height={20} src="/icon-3.png" alt="twitter" />
</div>

<div className="">
  <p className="text-xs pt-5 md:pt-10">2023 all Rights reserved Term of use Greenmind</p>
</div>
</div>

{/* Right Side */}
<div className="grid grid-cols-3 gap-5 md:gap-14 px-5 md:px-10">
<div className="">
  <h3 className="text-base md:text-lg font-semibold pb-3 md:pb-5">Information</h3>
  <p className="text-xs pt-2">About</p>
  <p className="text-xs pt-2">Products</p>
  <p className="text-xs pt-2">Blog</p>
</div>

<div className="">
  <h3 className="text-base md:text-lg font-semibold pb-3 md:pb-5">Company</h3>
  <p className="text-xs pt-2">Community</p>
  <p className="text-xs pt-2">Career</p>
  <p className="text-xs pt-2">Our story</p>
</div>

<div className="">
  <h3 className="text-base md:text-lg font-semibold pb-3 md:pb-5">Contact</h3>
  <p className="text-xs pt-2">Getting started</p>
  <p className="text-xs pt-2">Pricing</p>
  <p className="text-xs pt-2">Resources</p>
</div>

 </div> 
</section> 
</main>
  )
}
