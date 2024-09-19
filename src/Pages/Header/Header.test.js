import { Provider } from "react-redux";
import appStore from "../../Redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("testing Header component", () => {
  it("should check for login,cart and Fav text in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByText("Login");
    expect(loginBtn).toBeInTheDocument();
  });
  it("should check for cart text in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText("Cart");
    expect(cart).toBeInTheDocument();
  });
  it("should check for  Fav text in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const fav = screen.getByText("Fav");
    expect(fav).toBeInTheDocument();
  });
  it("should check for search bar in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const searchBar = screen.getByPlaceholderText("Search..")
    expect(searchBar).toBeInTheDocument();
  });
});
