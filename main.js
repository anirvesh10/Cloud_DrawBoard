class Shape {
    props = {
        start: {
            x: 0,
            y: 0,
        },
        end: {
            x: 0,
            y: 0,
        },
        type: 'line',
        color: 'black',
        thick: 5,
        text: 'x'
    }

    drawShape() {
        if (this.props && this.props.start)
            switch (this.props.type) {
                case 'circle':
                    const radius = Math.sqrt((this.props.end.x - this.props.start.x) ** 2 + (this.props.end.y - this.props.start.y) ** 2);
                    ellipse(this.props.start.x, this.props.start.y, radius * 2, radius * 2);
                    break;
                case 'rectangle':
                    rect(this.props.start.x, this.props.start.y, this.props.end.x - this.props.start.x, this.props.end.y - this.props.start.y);
                    break;
                case 'text':
                    fill(0);
                    text(this.props.text, this.props.end.x, this.props.end.y);
                    noFill();
                    break;
                default:
                    line(this.props.start.x, this.props.start.y, this.props.end.x, this.props.end.y);
                    break;
            }
    }
    clone() {
        return JSON.parse(JSON.stringify(this.props));
    }
    copy(props) {
        console.log({ props });
        this.props = {...props };
    }
}

class activeShape extends Shape {
    setStart(x, y) {
        this.props.start.x = x;
        this.props.start.y = y;
    }
    setEnd(x, y) {
        this.props.end.x = x;
        this.props.end.y = y;
    }
    setType(shapetype) {
        this.props.type = shapetype;
    }
    setColor(shapeColor) {
        this.props.color = shapeColor;
    }
    setText(iptext) {
        this.props.text = iptext;
    }
}