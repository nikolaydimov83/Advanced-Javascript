/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function(shapes){
    function Circle(pointO,color, radius){
        checkFunctions.checkValidNumberEntry(radius);
        shapes.Shape.call(this,pointO,color);
        this._radius=radius
    }
    Circle.extends(shapes.Shape);
    Circle.prototype={
        toString: function () {
            var parentToString=shapes.Shape.prototype.toString.call(this);
            return parentToString + "Radius: "+this._radius;
        },
        getRadius: function(){
            return this._radius;
        },
        setRadius: function(radius){
            checkFunctions.checkValidNumberEntry(radius);
            this._radius=radius;
            return this;
        },
        draw: function draw(elementToDrawOn){
            var ctx=shapes.Shape.prototype.draw.call(this, elementToDrawOn);
            ctx.beginPath();
            ctx.arc(this._pointA._x,this._pointA._y,this._radius,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
            return ctx;

        }
    }

    shapes.Circle=Circle;
}(shapes));



