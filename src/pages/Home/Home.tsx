import { HomeContainer } from "./Home.style";

import { HomeContent } from "@/components/organisms/HomeContent";
import { NavBar } from "@/components/organisms/NavBar";

export function Home() {
  return (
    <HomeContainer>
      <NavBar />
      <HomeContent />
    </HomeContainer>
  );
}
