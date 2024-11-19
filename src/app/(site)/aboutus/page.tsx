import AboutHirect from "@/components/custom/about/about-hirect";
import MeetTheTeam from "@/components/custom/about/meet-the-team";
import MileStones from "@/components/custom/about/mile-stone";

export default function Page() {
  return (
    <div className="space-y-10">
      <AboutHirect />
      <MeetTheTeam />
      <MileStones />
    </div>
  );
}
