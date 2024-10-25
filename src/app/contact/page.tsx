
export default function contact() {
  return (
    <main className="m-5 md:m-10 mx-30 md:mx-60">
      <div className="">
        <h2 className="text-lg md:text-4xl font-serif font-semibold  text-center pt-5 md:pt-10">Contact-Us</h2>
        <p className="text-xs md:text-base font-serif font-medium px-3 md:px-10 pt-3 md:pt-10"> Call: 0900 578 624</p>
        <p className="text-xs md:text-base font-serif font-medium px-3 md:px-10 pt-3 md:pt-10 pb-5 md:pb-10"> Email: abc@gmail.com</p>
        </div>
      
        <div className=" bg-teal-100">
        <h2 className="text-lg md:text-4xl font-serif font-semibold pt-5 md:pt-10 pb-5 md:pb-10 text-center">Complain</h2>
        
            <div className="grid grid-rows-3 gap-3 md:gap-5 px-3 md:px-5 py-3 md:py-5">
            <label form="review" className="text-xs">Name: </label>
            <input type="text" id="name" name="name" required></input>

            <label form="review" className="text-xs">Contact: </label>
            <input type="text" id="name" name="name" required></input>

            <label form="review" className="text-xs">Email: </label>
            <input type="text" id="name" name="name" required></input>

            <label form="review" className="text-xs">Comment: </label>
            <textarea id="name" name="name" required></textarea>

            <div className="text-center">
            <button className="py-2 md:py-3 px-5 md:px-10 inline-flex items-center text-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:bg-tear-900 disabled:opacity-50 disabled:pointer-events-none" type="submit"><b>Send</b></button>
            </div>
            </div>
        
        
        </div>
    </main>
  );
}