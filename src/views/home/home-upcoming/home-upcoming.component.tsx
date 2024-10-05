import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./home-upcoming.component.css";

export default function HomeUpcomingComponent() {
  const [upcoming, setUpcoming] = useState(null);

  return (
    <div>
      {upcoming ? <div></div> : <p>Aucun évènement prévu pour l'instant :(</p>}
      <div className="ols-capt">
        <h3>Nos lans</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <NavLink to="/">En savoir plus &gt;</NavLink>
      </div>
    </div>
  );
}
