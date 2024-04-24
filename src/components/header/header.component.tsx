import './header.component.css';
import {Percentage} from "@utils/custom-types";
import {Icon} from "@components/icon/icon.component";

export default function HeaderComponent(props: {transparent?: boolean, percentage?: Percentage}) {
    return (
        <header>
            <Icon icon={"MulhouseGaming"} style={{width: '50px'}}></Icon>
        </header>
    )
}
