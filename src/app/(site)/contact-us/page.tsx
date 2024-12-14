import MapLocation from "@/components/custom/contact-us/map-loaction";
import Office from "@/components/custom/contact-us/office";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="">
        <section className="py-20 section">
          <p className="text-left text-2xl text-muted-foreground">
            If you have any questions regarding Hirect, please email us at{" "}
            <a
              href={"mailto:support@hireme.in"}
              className="text-black font-medium"
            >
              support@hireme.in
            </a>
            .
          </p>
        </section>
      </div>
      <Office />
      <MapLocation />
    </div>
  );
}
