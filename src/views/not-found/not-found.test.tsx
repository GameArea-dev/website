import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import NotFoundComponent from "./not-found.component";

it("navigates back to the previous page if `to` prop is not passed", async () => {
  render(
    <MemoryRouter initialEntries={["/not-found"]}>
      <NotFoundComponent />
    </MemoryRouter>,
  );

  expect(document.getElementById("not-found")).toBeInTheDocument();
});
