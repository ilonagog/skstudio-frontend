import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/app/components/ProductCard";

const product = {
  id: 1,
  name: "Painting",
  price: 5,
  description: "Painting of colors",
  image: "/painting.jpg",
};

describe("ProductCard", () => {
  it("shows the product name, price and description", () => {
    render(<ProductCard productItem={product} />);

    expect(screen.getByText("Painting")).toBeInTheDocument();
    expect(screen.getByText("$5")).toBeInTheDocument();
    expect(screen.getByText("Painting of colors")).toBeInTheDocument();
  });

  it("offers an add to cart action", () => {
    render(<ProductCard productItem={product} />);

    expect(
      screen.getByRole("button", { name: /add to the cart/i }),
    ).toBeInTheDocument();
  });
});
