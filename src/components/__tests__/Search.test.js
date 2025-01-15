import Body from "../Body";
import { fireEvent, render, screen} from "@testing-library/react";
import MOCK_REST_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_REST_DATA);
        },
    })
}) 

it("Should render the Body component with Search Button", async() =>{
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

    const searchBtn=screen.getByRole("button", { name: "Search"});
   // console.log(searchBtn);

   const searchInput = screen.getByTestId("searchInput");
   //console.log(searchInput);

   fireEvent.change(searchInput, {target: { value : "sandwich" }});

   fireEvent.click(searchBtn);

  // screen should load 2 rescards

  const cards = screen.getAllByTestId("resCard");

  console.log(cards);

//  expect(cards.length).toBe(1);

// expect(searchBtn).toBeInTheDocument();
})