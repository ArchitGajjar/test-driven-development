import React from "react";

describe('JSX', () => { 
  it("calls React.createElement", () => {
    const createElement = jest.spyOn(React, 'createElement');
    <h1>Hello, JSX</h1>
    expect(createElement).toHaveBeenCalledWith("h1", null, "Hello, JSX")
  })
})