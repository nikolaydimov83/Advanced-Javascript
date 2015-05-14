/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function (shapes) {
    function Point(x, y) {
        checkFunctions.checkCoordinateValidity(Point.arguments,Point.length);
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
            checkFunctions.checkCoordinateValidity(Point.prototype.setX.arguments,Point.prototype.setX.length);
            this._x=x;
            return this;
        },
        setY: function (y) {
            checkFunctions.checkCoordinateValidity(Point.prototype.setY.arguments,Point.prototype.setY.length);
            this._y=y;
            return this
        }

    };
    shapes.Point=Point;
}(shapes));
