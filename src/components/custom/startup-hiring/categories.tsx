const categories = [
  "Back-end Developers",
  "Mobile App Developers",
  "Web Developers",
  "DevOps Engineer",
  "Data Engineer",
  "Full Stack Engineer",
  "Marketing",
  "Business Development",
  "Human Resource",
  "Design",
  "Product Management",
  "Sales",
];

export default function Categories() {
  return (
    <div className="py-20">
      <section className="section space-y-20">
        <h1 className="md:text-5xl text-4xl font-bold">
          Get candidates in 50+ categories
        </h1>
        <div className="flex flex-wrap gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="p-2 px-6 border-2 rounded-full text-muted-foreground text-lg font-semibold"
            >
              {category}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
