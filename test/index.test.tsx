import React from "react";
import { render } from "@testing-library/react";
import { rcc } from "../src";
import "@testing-library/jest-dom/extend-expect";

describe("rcc", () => {
  describe("random element", () => {
    it("adds class", () => {
      const Span = rcc("span")`my-class`;
      const { container } = render(<Span />);
      expect(container.firstChild).toHaveClass("my-class");
    });

    it("renders children", () => {
      const Span = rcc("span")``;
      const { container } = render(<Span>Some content</Span>);
      expect(container.firstChild).toHaveTextContent("Some content");
    });

    it("can extend default classes", () => {
      const Span = rcc("span")`my-class`;
      const { container } = render(<Span className="second-class" />);
      expect(container.firstChild).toHaveClass("my-class");
      expect(container.firstChild).toHaveClass("second-class");
    });

    it("adds conditional class from function expression", () => {
      const Span = rcc<{ yes: boolean } & React.HTMLAttributes<HTMLElement>>(
        "span"
      )`${({ yes }) => (yes ? "yes" : "no")}`;
      const { container } = render(<Span yes />);
      expect(container.firstChild).toHaveClass("yes");
      expect(container.firstChild).not.toHaveClass("no");
    });

    it("adds conditional class from object expression", () => {
      const Span = rcc<
        { yes: boolean; oui: boolean; no: boolean } & React.HTMLAttributes<
          HTMLElement
        >
      >("span")`${{ yes: "yes-class", oui: "oui-class", no: "no-class" }}`;
      const { container } = render(<Span yes oui={true} no={false} />);
      expect(container.firstChild).toHaveClass("yes-class");
      expect(container.firstChild).toHaveClass("oui-class");
      expect(container.firstChild).not.toHaveClass("no-class");
    });
  });

  describe("div", () => {
    it("adds class", () => {
      const Div = rcc.div`div-class`;
      const { container } = render(<Div />);
      expect(container.firstChild).toHaveClass("div-class");
    });
  });

  describe("button", () => {
    it("accepts type attribute", () => {
      const Button = rcc.button``;
      const { container } = render(<Button type="button" />);
      expect(container.firstChild).toHaveAttribute("type", "button");
    });
  });
});
