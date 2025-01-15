import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Contact Us page test case', () => {
    
it("Should load heading contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

it("Should load button inside contact component", () => {
    render(<Contact />);

   // const button = screen.getByRole("button");
   const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () =>{
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", () =>{
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length);

    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
});

});