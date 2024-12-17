type DataType = {
  groupLogolink: string;
  items: {
    img: string;
    description: React.ReactNode;
    link: string;
  }[];
};

const data: DataType[] = Array.from({ length: 3 }, (_, i) => ({
  groupLogolink: "",
  items: Array.from({ length: 4 }, (_, i) => ({
    link: "",
    description: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat beatae
        eaque natus at exercitationem dignissimos alias
      </p>
    ),
    img: "",
  })),
}));

export default function InfluencersWithinGroup() {
  return (
    <div className="py-20">
      <div className="section space-y-10 @container">
        {data.map((di, idx) => (
          <div className="space-y-10" key={idx}>
            <div className="h-12 w-[200px] bg-red-600 mx-auto rounded-3xl" />
            <div className="grid @3xl:grid-cols-4 @2xl:grid-cols-3 @sm:grid-cols-2 gap-6">
              {di.items.map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-3xl overflow-hidden border"
                >
                  <div className="p-4 space-y-3">
                    <div className="w-full aspect-square bg-muted rounded-3xl" />
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                  <div className="w-full py-3 bg-muted text-center">
                    Read More
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
