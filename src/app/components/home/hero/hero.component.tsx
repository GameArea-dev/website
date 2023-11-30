import './hero.component.scss'
import HeaderComponent from "@shared/header/header.component";
import DynamicBannerComponent from "@shared/dynamic-banner/dynamic-banner.component";

export default function HomeHeroComponent() {
    return(
        <div id='home-hero'>
            <HeaderComponent/>
            <div className='center-content'>
                <h1><span className='primary main-hand'>game</span>area</h1>
                <div className='primary short-news'>Le site fait peau neuve 🔥🎮</div>
            </div>
            <DynamicBannerComponent/>
        </div>
    )
}