import Image from "next/image";
import { partnerCompanies } from "../app/data/partnerCompanies";
import { InfiniteSlider } from "./InfiniteSlider";

export function PartnerCompaniesList() {
  return (
    <InfiniteSlider gap={64} reverse className="w-full h-full bg-white">
      {partnerCompanies.map((company, index) => (
        <Image
          key={index}
          src={company.logo}
          // className="h-[120px] w-auto object-contain"
          alt={`${company.name} logo`}
          width={120}
          height={48}
          className="h-12 w-auto mx-auto object-contain"
        />
      ))}
    </InfiniteSlider>
  );
}
