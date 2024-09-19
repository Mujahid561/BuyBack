// ProductCard.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "./ProductCard"; // Adjust the import path as needed
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

// Mock functions
const mockAddFavorite = jest.fn();
const mockDeleteFavorite = jest.fn();

const defaultProps = {
  name: "Test Product",
  img: "http://example.com/image.jpg",
  price: 500,
  id: 1,
  AddFavorite: mockAddFavorite,
  DeleteFavorite: mockDeleteFavorite,
  isFavorite: false,
};

describe("ProductCard", () => {
  test("renders correctly and shows product details", () => {
    render(
      <BrowserRouter>
        <ProductCard {...defaultProps} />
      </BrowserRouter>
    );

    // Check if product details are rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("₹ 500")).toBeInTheDocument();
    expect(screen.getByAltText("Product Image")).toHaveAttribute(
      "src",
      "http://example.com/image.jpg"
    );
  });

  test("shows MdFavoriteBorder icon when not selected and not favorite", () => {
    render(
      <Router>
        <ProductCard {...defaultProps} />
      </Router>
    );

    expect(screen.getByTestId("Productcard")).toBeInTheDocument();
    expect(screen.getByTestId("prodimg")).toBeInTheDocument();
    expect(screen.getByTestId("AddtoFav")).toBeInTheDocument();
  });

  test("shows MdOutlineFavorite icon when selected", () => {
    const props = { ...defaultProps };
    render(
      <Router>
        <ProductCard {...props} />
      </Router>
    );

    // Click to select and test
    fireEvent.click(screen.getByTestId("AddtoFav"));
    expect(mockAddFavorite).toHaveBeenCalledWith(props);

    expect(screen.getByTestId("RemovefromFav")).toBeInTheDocument();
  });

  test("calls DeleteFavorite when MdOutlineFavorite icon is clicked", () => {
    const props = { ...defaultProps, isFavorite: true };
    render(
      <Router>
        <ProductCard {...props} />
      </Router>
    );

    fireEvent.click(screen.getByTestId("RemovefromFav"));
    expect(mockDeleteFavorite).toHaveBeenCalledWith(1);
  });
});
