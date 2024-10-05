import NewsBannerComponent from "@components/home/news-banner/news-banner.component";
import "./home-hero.component.css";

export default function HomeHeroComponent() {
  return (
    <div id="home-hero">
      <h1>
        Game<span className="secondary">Area</span>
      </h1>
      <NewsBannerComponent />
    </div>
  );
}
