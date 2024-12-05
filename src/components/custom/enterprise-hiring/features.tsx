const features: string[] = [
  "Dedicated Account Managers",
  "Customized Candidate Recommendations",
  "Extensive Filtration Process",
  "Tailor-Made Pricing Model",
];

export default function Features() {
  return (
    <div className="py-36 bg-slate-100">
      <div className="section flex flex-col gap-20 justify-start items-center">
        <h1 className="md:text-4xl text-3xl font-bold">
          Enterprise Hiring Service Offerings
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-20 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="shadow-xl transition-all hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="w-full aspect-square max-w-[250px] grid place-content-center px-5 bg-card text-lg">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
