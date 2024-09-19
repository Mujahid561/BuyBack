import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../Redux/store";
import NewProductComponent from "../../components/NewProductComponent";
import { MOCK_DATA } from "./MockData";

it("should check for Navbar", () => {
  // jest.mock('../../Assets/PromoBanner.jpg', () => "../../Assets/PromoBanner.jpg", { virtual: true });
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  const nav = screen.getByTestId("NavBar");
  expect(nav).toBeInTheDocument();
});
// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//       json: () => {
//         return Promise.resolve(MOCK_DATA);
//       },
//     });
//   });

it("should check for product card in Newproducts component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <NewProductComponent />
        </Provider>
      </BrowserRouter>
    )
  );
  const productcards = screen.getByTestId("Productcard");
  expect(productcards).toBe(4);
});
