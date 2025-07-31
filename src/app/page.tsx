import { Advocates } from "@/components/advocates";
import { Filters } from "@/components/filters";
import { TwoColumnLayout } from "@/components/layout/TwoColumn";

export default function Home() {
  return <TwoColumnLayout sideBar={<Filters />} content={<Advocates />} />;
}
