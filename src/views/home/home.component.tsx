import "./home.component.css";
import HeaderComponent from "@components/header/header.component";
import HomeHeroComponent from "./home-hero/home-hero.component";
import HomeUpcomingComponent from "./home-upcoming/home-upcoming.component";

export default function HomeComponent() {
  return (
    <div id="home" className="page standard">
      <HeaderComponent transparent={true} />
      <HomeHeroComponent />
      <HomeUpcomingComponent />
    </div>
  );
}
