/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function(shapes){
    function Line(pointA, pointB, color){
        checkFunctions.isPoint(pointB);
        shapes.Shape.call(this,pointA,color);
        this._pointB=pointB;
    }
    Line.extends(shapes.Shape);
    Line.prototype={
        toString: function () {
            var parentToString=shapes.Shape.prototype.toString.call(this);
            return parentToString + " pointB: "+this._pointB;
        },
        setPointB: function(pointB){
            checkFunctions.isPoint(pointB);
            this._pointB=pointB;
            return this;
        },
        getPointB: function(){
            return this._pointB;
        },
        draw: function draw(elementToDrawOn){
            var ctx=shapes.Shape.prototype.draw.call(this, elementToDrawOn);
            ctx.beginPath();
            ctx.moveTo(this._pointA._x,this._pointA._y);
            ctx.lineTo(this._pointB._x,this._pointB._y);
            ctx.stroke();
            return ctx;

        }
    }
    shapes.Line=Line;
}(shapes));
