import {render, screen} from "@testing-library/react";
import React from "react";
import NotFoundComponent from "./not-found.component";

test('renders 404 message', () => {
    render(<NotFoundComponent />);
    const linkElement = screen.getByText(/404 ... Uh ... That's weird/i);
    expect(linkElement).toBeInTheDocument();
});