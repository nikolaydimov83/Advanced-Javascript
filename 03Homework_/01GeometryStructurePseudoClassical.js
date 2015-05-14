/**
 * Created by User on 14.5.2015 ã..
 */

Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

if (!Object.create) {
    Object.create = function (proto) {
        function F() {};
        F.prototype = proto;
        return new F;
    };
};
var Shapes = (function() {
    var Point = (function () {
        function Point(x, y) {
            this._x=x;
            this._y=y;
        }
        Point.prototype = {
            toString: function () {
                return "X:"+this._x+" Y:"+this._y;
            },
            getX: function () {
                return this._x;
            },
            getY: function () {
                return this._y;
            },
            setX: function (x) {
                this._x=x;
                return this;
            },
            setY: function (y) {
                this._y=y;
                return this
            }

        };
        return Point;
    }());

    var Shape=(function () {
        function Shape(pointA,color) {
            this._pointA=point;
            this._color=color;
        }

        Shape.prototype = {

            toString: function () {
                return "Color: "+this._color+" PointA: "+this._pointA;
            },
            getPointA: function () {
                return this._pointA;
            },
            getColor: function () {
                return this._color;
            },
            setPointA: function (point) {
                this._pointA=point;
                return this;
            },
            setColor: function (point) {
                this._color=point;
                return this;
            }
        };
        return Shape;
    }());
    var Circle=(function(){
        function Circle(pointO,color, radius){
        Shape.call(this,pointO,color);
        this._radius=radius
        }
        Circle.extends(Shape);
        Circle.prototype={
            toString: function () {
                var parentToString=Shape.prototype.toString.call(this);
                return parentToString + "Radius: "+this._radius;
            },
            getRadius: function(){
                return this._radius;
            },
            setRadius: function(radius){
                this._radius=radius;
                return this;
            }
        }
        return Circle;
    }());

    var Rectangle=(function(){
        function Rectangle(pointA,color, width, heigth){
            Shape.call(this,pointA,color);
            this._width=width;
            this._heigth=heigth
        }
        Rectangle.extends(Shape);
        Rectangle.prototype={
            toString: function () {
                var parentToString=Shape.prototype.toString.call(this);
                return parentToString + " Width: "+this._width+" Height:"+this._heigth;
            },
            setWidth: function(width){
                this._width=width;
                return this;
            },
            getWidth: function(){
                return this._width;
            },
            setHeigth: function(heigth){
                this._heigth=heigth;
                return this;
            },
            getHeigth: function(){
                return this._width;
            }
        }
        return Rectangle;
    }());

    var Triangle=(function(){
        function Triangle(pointA, pointB, pointC, color){
            Shape.call(this,pointA,color);
            this._pointB=pointB;
            this._pointC=pointC;
        }
        Triangle.extends(Shape);
        Triangle.prototype={
            toString: function () {
                var parentToString=Shape.prototype.toString.call(this);
                return parentToString + " pointB: "+this._pointB+" pointC:"+this._pointC;
            },
            setPointB: function(pointB){
                this._pointB=pointB;
                return this;
            },
            getPointB: function(){
                return this._pointB;
            },
            setPointC: function(pointC){
                this._pointC=pointC;
                return this;
            },
            getPointC: function(){
                return this._pointC;
            }
        }
        return Triangle;
    }());

    var Line=(function(){
        function Line(pointA, pointB, color){
            Shape.call(this,pointA,color);
            this._pointB=pointB;
        }
        Line.extends(Shape);
        Line.prototype={
            toString: function () {
                var parentToString=Shape.prototype.toString.call(this);
                return parentToString + " pointB: "+this._pointB;
            },
            setPointB: function(pointB){
                this._pointB=pointB;
                return this;
            },
            getPointB: function(){
                return this._pointB;
            }
        }
        return Line;
    }());

    var Segment=(function(){
        function Segment(pointA, pointB, color){
            Shape.call(this,pointA,color);
            this._pointB=pointB;
        }
        Segment.extends(Shape);
        Segment.prototype={
            toString: function () {
                var parentToString=Shape.prototype.toString.call(this);
                return parentToString + " pointB: "+this._pointB;
            },
            setPointB: function(pointB){
                this._pointB=pointB;
                return this;
            },
            getPointB: function(){
                return this._pointB;
            }
        }
        return Segment;
    }());

    return {
        Point:Point,
        Shape:Shape,
        Circle:Circle,
        Rectangle:Rectangle,
        Triangle:Triangle,
        Line:Line
    }
}());


var point = new Shapes.Point(10,5);
var point1 = new Shapes.Point(15,20);
var point2 = new Shapes.Point(25,25);
var shape = new Shapes.Shape(point,"black");
var circle = new Shapes.Circle(point,"blue",15);
var rectangle =new Shapes.Rectangle(point,"green",15,20);
var triangle = new Shapes.Triangle(point, point1, point2,"red");
var line = new Shapes.Line(point1,point2,"purple");

console.log(line);
console.log(line.toString());
console.log(triangle);
console.log(triangle.toString());
console.log(rectangle);
console.log(rectangle.toString());
circle.setRadius(20);
console.log((circle));
//console.log(point.toString());
//console.log(shape.toString());
console.log(circle.toString());
