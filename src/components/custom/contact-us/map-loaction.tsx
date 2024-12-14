import Map from "../map";

export default function MapLocation() {
  return (
    <div className="py-20">
      <section className="section">
        <Map query="pune" aspectRatio="8/3" />
      </section>
    </div>
  );
}
