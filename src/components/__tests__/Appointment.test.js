/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment";
import {get} from "__mocks__/axios"

/*
  A test that renders a React Component
*/

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});

