import AboutHirect from "@/components/custom/about/about-hireme";
import MeetTheTeam from "@/components/custom/about/meet-the-team";
import MileStones from "@/components/custom/about/mile-stone";
import OfficeLocation from "@/components/custom/about/office-loc";
import MediaCoverage from "@/components/custom/about/media-coverage";

export default function Page() {
  return (
    <div className="space-y-10">
      <AboutHirect />
      <MeetTheTeam />
      <MileStones />
      <OfficeLocation />
      <MediaCoverage />
    </div>
  );
}
