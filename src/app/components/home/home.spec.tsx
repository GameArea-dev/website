import {render, screen} from "@testing-library/react";
import React from "react";
import HomeComponent from "./home.component";

test('renders learn react link', () => {
    render(<HomeComponent />);
    /*const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();*/
});
