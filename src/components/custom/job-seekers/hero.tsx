import jsHeroBanner from "@/../public/job-seeker/js-banner-image.png";
import { Button } from "@/components/ui/button";
import { InputPhone } from "@/components/ui/input-phone";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-cyan-50/50 pt-28">
      <div className="section flex md:flex-row flex-col justify-start items-end gap-10">
        <section className="">
          <Image
            src={jsHeroBanner}
            alt="jsHeroBanner"
            height={600}
            width={600}
            className="w-full h-auto"
          />
        </section>
        <section className="flex flex-col justify-center md:items-start items-center xl:gap-8 gap-4 md:text-left text-center">
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold">
            Get the <span className="text-primary">Hireme</span> App
          </h1>
          <p>
            We will send you a link via SMS. To download the app, simply open
            it.
          </p>
          <div className="hidden lg:flex justify-between items-center gap-4 w-full">
            <InputPhone className="w-full" />
            <Button className="text-black font-semibold px-7 py-5 rounded-full">
              Get App
            </Button>
          </div>
          <div className="flex lg:hidden justify-center items-center w-full">
            <Link href={""}>
              <Button className="text-black font-semibold px-7 py-5 rounded-full">
                Get App
              </Button>
            </Link>
          </div>
          <div className="md:mt-0 mt-10 h-28 aspect-square shrink-0 grid place-content-center rounded-xl border border-black">
            QR Code
          </div>
        </section>
      </div>
    </div>
  );
}
