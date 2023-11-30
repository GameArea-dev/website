import './home.component.scss'
import HomeHeroComponent from "./hero/hero.component";
import LandDisplayComponent from "@components/home/lan-display/lan-display.component";
import DiscoverUsComponent from "@components/home/discover-us/discover-us.component";

export default function HomeComponent() {
    return(
        <div id='home'>
            <HomeHeroComponent/>
            <LandDisplayComponent/>
            <DiscoverUsComponent/>
        </div>
    )
}