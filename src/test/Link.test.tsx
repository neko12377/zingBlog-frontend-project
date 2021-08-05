// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../view/page/ModelOne/HomePage";

it("renders correctly", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <button
          className="sc-bdnxRM ZThtS"
          onClick={[Function]}
          onMouseDown={[Function]}
          onMouseLeave={[Function]}
          onMouseOver={[Function]}
          onMouseUp={[Function]}
          onTouchEnd={[Function]}
          onTouchStart={[Function]}
        >
          gogo
        </button>
    `);
});
