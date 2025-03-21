import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main>
        <section className="bg-purple-200  grid grid-cols-2 h-[75vh]" >
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className="relative group w-max cursor-pointer transition duration-500 ease-in-out " >
           <p className="text-4xl font-bold   hover:text-blue-400 block transition duration-300 ease-in-out group-hover:hidden"> The best URL shortener </p>
           <p className="text-4xl font-bold   hover:text-blue-400 hidden group-hover:block transition duration-300 ease-in-out"> The best URL shortener 😉</p>
           </div>
           <p>We are the most straightforward shortner</p>
           <li className="list-none">
                <Link href="/shorten"><button className='hover:scale-110 bg-purple-400 text-white shadow-lg p-3 rounded-xl py-2'> Try Now</button> </Link>       
                <Link href="/github"><button  className='hover:scale-110 bg-purple-400 shadow-lg p-3 text-white rounded-xl py-2 '>Github</button></Link>
            </li>
          </div>
          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" alt="fala fala " src={"/vector.jpg"} fill={true}></Image>
          </div>
        </section>
      </main>
    </div>
  );
}

