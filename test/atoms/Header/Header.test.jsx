import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../../components/atoms/Header/Header";

describe("Test render proper tag and label", () => {
  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];

  for (let tag of tags) {
    test(`it should be ${tag} HTML tag and ${tag} as text`, () => {
      render(<Header Tag="h1" label={`This is ${tag}`} />);
      const headers = document.getElementsByTagName("h1");
      const innerText = screen.getByText(`This is ${tag}`);
      expect(innerText).toBeInTheDocument();
      expect(headers.length).toEqual(1);
    });
  }

  it("correctly renders override header level", () => {
    const { getByRole } = render(<Header Tag="h2" label="h2" />);
    console.log(getByRole);

    expect(getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
