let currShape = new activeShape();
let drawing = false;
let myShapes = [];
let othersShapes = [];

function setup() {
    let cnv = createCanvas(1000, 600);
    cnv.parent('drawBoard');
    noFill();
    textSize(16);
}

function draw() {
    background(225);
    myShapes.forEach(element => {
        element.drawShape();
    });
    othersShapes.forEach(element => {
        element.drawShape();
    });
    if (drawing) {
        currShape.setEnd(mouseX, mouseY);
        currShape.drawShape();
    }
}

function mousePressed() {
    if (!drawing) {
        currShape.setStart(mouseX, mouseY);
        drawing = true;
    }
}

function mouseReleased() {
    if (drawing) {
        currShape.setEnd(mouseX, mouseY);
        const copyObj = new Shape();
        copyObj.copy(currShape.clone());
        pushShape(copyObj)
        console.log(myShapes);
        drawing = false;
    }
}


window.addEventListener('load', () => {
    document.querySelector('#shapeSelector-circle').addEventListener('click', () => currShape.setType('circle'));
    document.querySelector('#shapeSelector-rectangle').addEventListener('click', () => currShape.setType('rectangle'));
    document.querySelector('#shapeSelector-line').addEventListener('click', () => currShape.setType('line'));
    document.querySelector('#shapeSelector-text').addEventListener('click', () => {
        currShape.setType('text');
        document.querySelector('#textInputField').focus();
        drawing = true;
        currShape.setStart(0, 0);
    });

    document.querySelector('#textInputField').addEventListener('input', () => {
        currShape.setText(document.querySelector('#textInputField').value);
    });
})