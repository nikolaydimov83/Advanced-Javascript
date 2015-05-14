/**
 * Created by User on 14.5.2015 �..
 */

var shapes = shapes||{};

(function (shapes) {
    function Shape(pointA,color) {
        checkFunctions.checkValidHexNumber(color);
        checkFunctions.isPoint(pointA);
        this._pointA=pointA;
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
        setPointA: function (pointA) {
            checkFunctions.isPoint(pointA);
            this._pointA=pointA;
            return this;
        },
        setColor: function (color) {
            checkFunctions.checkValidHexNumber(color);
            this._color=color;
            return this;
        }
    };
    shapes.Shape=Shape;
}(shapes));