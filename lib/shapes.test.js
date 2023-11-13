const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100, 15 200, 200 0, 200" fill="blue" />');

    });
});
