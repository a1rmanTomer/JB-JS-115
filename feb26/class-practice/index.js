// board
// rectangle
// arrow
// text

const board = {
  height: "500px",
  width: "500px",
  background: "white",
  createdAt: new Date().toString(),
  shapes: [],
};

function RectangleShape(_location) {
  this.width = "20px";
  this.id = `rectangle-${Date.now() + Math.ceil(Math.random() * 9999)}`;
  this.height = "20px";
  this.location = { x: _location.x, y: _location.y };
  this.color = "white";
  this.createdAt = new Date().toString();
}

RectangleShape.prototype.setLocation = function (_location) {
  this.location = _location;
};

function TextItem(_value) {
  this.id = `text-${Date.now() + Math.ceil(Math.random() * 9999)}`;
  this.value = _value;
  this.fontSize = "16px";
  this.location = "center";
  this.color = "black";
  this.createdAt = new Date().toString();
}

function Arrow(_source, _target) {
  this.sourceLocation = _source.location;
  this.targetLocation = _target.location;
  this.id = `arrow-${Date.now() + Math.ceil(Math.random() * 9999)}`;
  this.location = "center";
  this.thickness = "1px";
  this.type = "solid";
  this.color = "black";
  this.createdAt = new Date().toString();
}

RectangleShape.prototype.setText = function (_text) {
  this.text = _text;
};

Arrow.prototype.setText = function (_text) {
  this.text = _text;
};

const rec1 = new RectangleShape({ x: 100, y: 100 });
rec1.setText(new TextItem("company1"));

const rec2 = new RectangleShape({ x: 100, y: 200 });
rec2.setText(new TextItem("company"));

const rec3 = new RectangleShape({ x: 300, y: 100 });
rec2.setText(new TextItem("company"));

const rec4 = new RectangleShape({ x: 300, y: 600 });
rec2.setText(new TextItem("company"));

const rec5 = new RectangleShape({ x: 100, y: 600 });
rec2.setText(new TextItem("company"));

const arrow1 = new Arrow(rec1, rec2);

const arrow2 = new Arrow(rec3, rec4);
arrow2.setText(new TextItem("arrow_company_object"));

const arrow3 = new Arrow(rec2, rec5);

board.shapes.push(rec1, rec2, rec3, rec4, arrow1, arrow2, rec5, arrow3);

// insert all the rest of objects, 3 rectangles, 2 arrows
console.log(board);
