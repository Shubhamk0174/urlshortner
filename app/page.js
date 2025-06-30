import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row min-h-[80vh] p-20">
        <div className="flex flex-col justify-center items-center font-bold text-2xl">
          <p className="text-center">
            The best URL Shortener in the Market
          </p>
          <p className="text-center">
            We are the most straighforward URL Shortener in the world
          </p>
          <div>
            <div><Link href={'/shorten'}><button className=" mt-7 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium -disabled:text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none -disabled:focus:ring-blue-300 focus:ring-blue-800">
            <span className="relative min-w-40 px-3 py-1 transition-all ease-in duration-75 -disabled:bg-white bg-gray-900 rounded-md group-hover:bg-transparent">
             Try Now -&gt;
            </span>
          </button></Link></div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com/gsjfryhc.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{width:"300px", height: "300px"}}>
          </lord-icon>
        </div>
      </section>
    </main>
  );
}
