import Testimonials from "@/components/custom/home/testimonials";
import InfluencersWithinGroup from "@/components/custom/influencers/influencers-within-group";
import InfluencersWithoutGroup from "@/components/custom/influencers/influencers-without-group";

export default function Page() {
  return (
    <>
      <div className="py-20">
        <div className="section">
          <Testimonials />
        </div>
      </div>
      <InfluencersWithoutGroup />
      <InfluencersWithinGroup />
    </>
  );
}
