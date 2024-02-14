import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should verify res list filter based on search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  const searchButton = screen.getByRole("button", { name: "search" });

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("restCard");

  expect(searchButton).toBeInTheDocument();
  expect(cards.length).toBe(2);
});

it("Should verify top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeFilter = screen.getAllByTestId("restCard");

  const button = screen.getByRole("button", { name: "Top Rated Restaurants" });

  fireEvent.click(button);

  const cards = screen.getAllByTestId("restCard");

  expect(cards.length).toBe(15);
});
