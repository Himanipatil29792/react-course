
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component card item is zero", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a card item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
   
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"})


    expect(logoutButton).toBeInTheDocument();
});