import CompanyNames from "@/components/custom/enterprise-hiring/company-names";
import Features from "@/components/custom/enterprise-hiring/features";
import Hero from "@/components/custom/enterprise-hiring/hero";
import EnterpriseSteps from "@/components/custom/enterprise-hiring/steps";

export default function Page() {
  return (
    <div className="space-y-10 py-10">
      <Hero />
      <EnterpriseSteps />
      <Features />
      <CompanyNames />
    </div>
  );
}
