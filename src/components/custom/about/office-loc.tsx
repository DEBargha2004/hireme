import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../map";

const infos = [
  {
    logo: MapPin,
    label:
      "NO 26 WE WORK PRESTIGE CLUB, LASKAR HOSUR ROAD ADUGODI, STAR HYPCR ADUGODI, BANGALORE, 560030, KARNATAKA, INDIA.",
  },
  {
    logo: Phone,
    label: "+91 8446164920",
  },
  {
    logo: Mail,
    label: "support@hireme.in",
  },
];

export default function OfficeLocation() {
  return (
    <div className="w-full py-24 bg-blue-50 ">
      <div className="section grid md:grid-cols-2 gap-16">
        <Map />
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-4xl font-bold">Bengaluru Office</h1>
          {infos.map((info, idx) => (
            <div
              key={idx}
              className="flex justify-start items-start gap-4 w-full @container"
            >
              <div className="h-10 w-10 rounded-full border border-black/80 shrink-0 grid place-content-center">
                <info.logo size={18} />
              </div>
              <p className="@lg:text-lg text-left text-muted-foreground self-stretch my-auto">
                {info.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
