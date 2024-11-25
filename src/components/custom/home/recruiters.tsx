import lenskart from "@/../public/companies/lenskart.png";
import byjus from "@/../public/companies/Byju_s.png";
import ajio from "@/../public/companies/Ajio.png";
import squareYards from "@/../public/companies/squareyards.png";
import flipkart from "@/../public/companies/Flipkart.png";
import udaan from "@/../public/companies/Udaan.png";
import amazon from "@/../public/companies/Amazom.png";
import upgrad from "@/../public/companies/upgrad.png";
import freecharge from "@/../public/companies/FreeCharge.png";
import adityaBirla from "@/../public/companies/aditya_birla.png";
import walmart from "@/../public/companies/walmart.png";
import nobroker from "@/../public/companies/NOBroker.png";
import Image from "next/image";

const images = [
  lenskart,
  byjus,
  ajio,
  squareYards,
  flipkart,
  udaan,
  amazon,
  upgrad,
  freecharge,
  adityaBirla,
  walmart,
  nobroker,
];

export default function Recruiters() {
  return (
    <div className="w-full pt-20">
      <div className="section space-y-16">
        <h1 className="text-4xl font-bold">
          More than <span className="text-primary">190K</span> Recruiters trust{" "}
          <span className="text-primary">Hireme</span>
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
          {images.map((i, idx) => (
            <div key={idx} className=" w-full grid place-content-center">
              <div className="px-4 py-2 bg-accent rounded">
                <Image
                  src={i}
                  alt="image"
                  height={100}
                  width={100}
                  className="w-14 h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
