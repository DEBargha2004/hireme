import { MapPin, PhoneCall } from "lucide-react";

const list = [
  {
    Icon: <MapPin size={20} className="shrink-0" />,
    label:
      "NO 26 WE WORK PRESTIGE CLUB, LASKAR HOSUR ROAD ADUGODI, STAR HYPCR ADUGODI, BANGALORE, 560030, KARNATAKA, INDIA.",
  },
  {
    Icon: <PhoneCall size={20} className="shrink-0" />,
    label: "+91 8446164920",
  },
];

export default function Office() {
  return (
    <div className="py-20 bg-muted">
      <section className="section grid md:grid-cols-2 gap-2">
        <div className="w-full aspect-video bg-red-950"></div>
        <div className="w-full aspect-video flex flex-col justify-center items-start">
          <div className="md:w-4/5 ml-auto text-left space-y-5">
            <h1 className="md:text-4xl text-3xl font-bold">Pune Office</h1>
            {list.map((li, idx) => (
              <div
                key={idx}
                className="flex justify-start items-start gap-3 [&>svg]:mt-1"
              >
                {li.Icon}
                <p className="text-muted-foreground text-lg text-left">
                  {li.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
