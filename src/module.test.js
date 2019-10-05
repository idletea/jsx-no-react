import jsxElem, { render } from "jsx-no-react";
import expectExport from "expect";

it("renders a basic html document", () => {
  const element = (
    <div className="highlight" attribute="true">
      Hello <span>world</span>
    </div>
  );

  expect(element.nodeName).toEqual("DIV");
  expect(element.getAttribute("class")).toEqual("highlight");
  expect(element.getAttribute("attribute")).toEqual("true");
  expect(element.innerHTML).toEqual("Hello <span>world</span>");
});

it("renders a style object as string attribute", () => {
  const element = (
    <div className="highlight" style={{ left: "20px", marginBottom: "10px" }} />
  );

  expect(element.nodeName).toEqual("DIV");
  expect(element.getAttribute("class")).toEqual("highlight");
  expect(element.getAttribute("style")).toEqual(
    "left: 20px; margin-bottom: 10px"
  );
});

it("renders other objecs as string without camelcasing", () => {
  const element = (
    <div
      className="highlight"
      attribute={{ left: "20px", marginBottom: "10px" }}
    />
  );

  expect(element.nodeName).toEqual("DIV");
  expect(element.getAttribute("class")).toEqual("highlight");
  expect(element.getAttribute("attribute")).toEqual(
    "left: 20px; marginbottom: 10px"
  );
});
