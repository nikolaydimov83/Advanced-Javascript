/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function (shapes) {
    function Shape(pointA,color) {
        checkFunctions.checkValidHexNumber(color);
        checkFunctions.isPoint(pointA);
        this._pointA=pointA;
        this._color=color;
        this._=this.constructor.name;
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
        },
        draw: function (idOfElementToDrawOn) {
        var canvas = document.getElementById(idOfElementToDrawOn);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = this._color;
            return ctx;

        }
    }
    };
    shapes.Shape=Shape;
}(shapes));