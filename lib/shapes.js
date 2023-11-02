class Shape {
    logo
    render() {
        return this.logo
    }
    setColor(colorFill) {
        this.shapeColor = colorFill
    }
    setTextColor(colorText) {
        this.textColor = colorText
    }
}
class Triangle extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super()
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.textContent = textContent
        this.logo = `
            <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
            </svg>
            `
    }
};

class Square extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super()
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.textContent = textContent
        this.logo = `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
            </svg>
            `
    }

};

class Circle extends Shape {
    constructor(shapeColor, textColor, textContent) {
        super()
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.textContent = textContent
        this.logo = `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
            </svg>
            `
    }

};

module.exports = {
    Triangle,
    Square,
    Circle,
    Shape
};
