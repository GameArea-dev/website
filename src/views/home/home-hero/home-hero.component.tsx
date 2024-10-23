import HeaderComponent from "@components/header/header.component";
import NewsBannerComponent from "@components/home/news-banner/news-banner.component";
import "./home-hero.component.css";

export default function HomeHeroComponent() {
  return (
    <div id="home-hero">
      <HeaderComponent transparent={true} />
      <h1 className="white-default">
        Game<span className="primary">Area</span>
      </h1>
      <NewsBannerComponent />
    </div>
  );
}
