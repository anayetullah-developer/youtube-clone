import "./App.css";
import { LiaBarsSolid } from "react-icons/lia";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import youtubeImg from "../public/youtube.png";

function App() {
  return (
    <>
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <span>
            <LiaBarsSolid />
          </span>
          <img src={youtubeImg} alt="" />
        </div>
        <div>
          <input type="text" className="border-2" />
          <span>
            <HiMiniMicrophone />
          </span>
        </div>
        <div>
          <span>
            <RiVideoAddLine />
          </span>
          <span>
            <BsBell />
          </span>
          <img src="" alt="image" />
        </div>
      </div>
      <div className="flex container mx-auto justify-between">
        <div className="w-[10%] border-2">Left Sidebar</div>
        <div className="relative overflow-hidden w-90%">
          <div className="marquee flex gap-3">
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
