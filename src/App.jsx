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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false
  };
  return (
    <div className="max-w-8xl">
      <div className="flex justify-between items-center px-8 mx-auto mt-5  ">
        <div className="flex items-center gap-5">
          <span>
            <LiaBarsSolid className="text-2xl" />
          </span>
          <img src={youtubeImg} className="w-[110px] " alt="" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="border-[1px] md:w-[31rem] hidden md:block md:px-5 py-2 rounded-r-none rounded-3xl outline-none"
            placeholder="Search"
          />
          <button className="flex md:border-[1px] px-3 border-l-0 py-2 rounded-l-none rounded-3xl md:bg-[#eeeded]">
            <span>
              <CiSearch className="text-2xl" />
            </span>
          </button>
          <div className="bg-[#eeeded] rounded-full p-2 ml:2 md:ml-5 hover:bg-[#e0dfdf] cursor-pointer">
            <HiMiniMicrophone className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span>
            <RiVideoAddLine className="text-2xl hidden md:block" />
          </span>
          <div className="relative hidden md:block cursor-pointer">
            <BsBell className="text-2xl" />
            <div className="notification">
              12+
            </div>
          </div>
          <img
            src={anayet}
            alt="profile-picture"
            className="w-[32px] h-[32px] rounded-full"
          />
        </div>
      </div>
      <div className="md:flex px-8 justify-between mt-5">
        <div className="w-[15%]  border-2 mr-5 hidden md:block">
          Left Sidebar
        </div>
        <div className="md:w-[85%] px-8">
          <div className="max-w-8xl mb-8 px-8">
            <Slider {...settings}>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">Button</button>
              </div>
              <div style={{ width: 100 }} className="">
                <button className="btn">The last</button>
              </div>
            </Slider>
          </div>
          <div className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset8} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Advantage and Disadvantage of Freelancing
                </h2>
                <p>CodemanBD</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset13} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  CSS flexbox | Design your best layout by yourself
                </h2>
                <p>Hablu Programmer</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={asset11} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  জাভাস্ক্রিপ্ট শিখে লাভ কি? | Live with Anam Ahmed
                </h2>
                <p>ProcoderBD</p>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={assed14} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  রহমতে আলম নুরে মুজাচ্ছাম | Rahmate Alam | মেহরাজ উদ্দীন
                </h2>
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
    </div>
  );
}

export default App;
