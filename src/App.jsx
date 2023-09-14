import "./App.css";
import { LiaBarsSolid } from "react-icons/lia";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import youtubeImg from "../public/youtube.png";
import asset10 from "../public/yt-image/asset 10.jpeg";
import asset13 from "../public/yt-image/asset 13.webp";
import assed14 from "../public/yt-image/asset 14.webp";
import asset8 from "../public/yt-image/asset 8.webp";
import asset16 from "../public/yt-image/asset 16.webp";
import asset11 from "../public/yt-image/asset 11.webp";
import anayet from "../public/yt-image/anayet.jpg";


function App() {
  return (
    <>
      <div className="flex justify-between items-center container mx-auto mt-5">
        <div className="flex items-center gap-5">
          <span>
            <LiaBarsSolid className="text-2xl"/>
          </span>
          <img src={youtubeImg} className="w-[110px] " alt="" />
        </div>
        <div className="flex items-center">
            <input type="text" className="border-[1px] w-[500px] px-5 focus:border-0 py-2 rounded-r-none rounded-3xl" placeholder="Search" />  
            <button className="flex border-[1px] px-3 border-l-0 py-2 rounded-l-none rounded-3xl bg-[#eeeded]"><span><CiSearch className="text-2xl"/></span></button>
          <div className="bg-[#eeeded] rounded-full p-2 ml-5 hover:bg-[#e0dfdf] cursor-pointer">
            <HiMiniMicrophone className="text-2xl"/>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span>
            <RiVideoAddLine className="text-2xl"/>
          </span>
          <div className="relative">
            <BsBell className="text-2xl"/>
            <div className="absolute top-[-6px] right-[-18px] bg-red-700 text-white rounded-3xl px-[3px] text-[12px]">12+</div>
          </div>
          <img src={anayet} alt="profile-picture" className="w-[32px] h-[32px] rounded-full" />
        </div>
      </div>
      <div className="flex container mx-auto justify-between mt-5">
        <div className="w-[30%] border-2 mr-5">Left Sidebar</div>
        <div className="relative overflow-hidden w-70%">
          <div className="marquee flex gap-3 mb-10">
            <button className="btn bg-[#030303] text-white">All</button>
            <button className="btn">Music</button>
            <button className="btn">Natok</button>
            <button className="btn">Film</button>
            <button className="btn">Programming</button>
            <button className="btn">Freelancing</button>
            <button className="btn">Motivation</button>
            <button className="btn">Life Style</button>
            <button className="btn">Cricket</button>
            <button className="btn">Football</button>
            <button className="btn">Sports</button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset8} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Advantage and Disadvantage of Freelancing</h2>
                <p>CodemanBD</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset13} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CSS flexbox | Design your best layout by yourself</h2>
                <p>Hablu Programmer</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset11} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">জাভাস্ক্রিপ্ট শিখে লাভ কি? | Live with Anam Ahmed</h2>
                <p>ProcoderBD</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={assed14} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> রহমতে আলম নুরে মুজাচ্ছাম | Rahmate Alam | মেহরাজ উদ্দীন</h2>
                <p>AL-MADANI tv 6.1M views 3 months ago</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset16} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Parst of Speech | Adjective Eassy Lesson
                </h2>
                <p>Learn English</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset10} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  নূরের পুতুলা বাবা মাওলানা || রমেশ শীল || NSUSS
                </h2>
                <p>Mizan, Momtaz Begum, Ghaashphoring Choir, and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
