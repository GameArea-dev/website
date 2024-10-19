import "./home.component.css";
import HomeHeroComponent from "./home-hero/home-hero.component";
import HomeUpcomingComponent from "./home-upcoming/home-upcoming.component";

export default function HomeComponent() {
  return (
    <div id="home" className="page standard">
      <HomeHeroComponent />
      <HomeUpcomingComponent />
    </div>
  );
}
