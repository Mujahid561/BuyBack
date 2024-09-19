
import "@testing-library/jest-dom";
import Login from "./Login";
import { screen,render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


it("should check for login button in the Header component", () => {
    render(
        <BrowserRouter> <Login/></BrowserRouter>
    
    );
    const loginBtn=screen.getByRole("button",{name:"submit"})
    expect(loginBtn).toBeInTheDocument()
  
  });