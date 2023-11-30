import './header.component.scss'
import {ReactComponent as MGLogoNoTxt} from '@svg/logo_ours_v7_sans_txt.svg'

export default function HeaderComponent(){
    return(
        <header>
            <MGLogoNoTxt className='logo'/>
            <div></div>
        </header>
    )
}