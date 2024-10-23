import "./header.component.css";
import { Percentage } from "@utils/custom-types";
import { Icon } from "@components/icon/icon.component";
import { NavLink } from "react-router-dom";

export default function HeaderComponent(props: {
  transparent?: boolean;
  percentage?: Percentage;
}) {
  return (
    <header>
      <Icon icon={"MulhouseGaming"} style={{ width: "50px" }}></Icon>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}
