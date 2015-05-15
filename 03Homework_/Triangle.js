/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function(shapes){
    function Triangle(pointA, pointB, pointC, color){
        checkFunctions.isPoint(pointB);
        checkFunctions.isPoint(pointC);
        shapes.Shape.call(this,pointA,color);
        this._pointB=pointB;
        this._pointC=pointC;
    }
    Triangle.extends(shapes.Shape);
    Triangle.prototype={
        toString: function () {
            var parentToString=shapes.Shape.prototype.toString.call(this);
            return parentToString + " pointB: "+this._pointB+" pointC:"+this._pointC;
        },
        setPointB: function(pointB){
            checkFunctions.isPoint(pointB);
            this._pointB=pointB;
            return this;
        },
        getPointB: function(){
            return this._pointB;
        },
        setPointC: function(pointC){
            checkFunctions.isPoint(pointC);
            this._pointC=pointC;
            return this;
        },
        getPointC: function(){
            return this._pointC;
        },
        draw: function draw(elementToDrawOn){
            var ctx=shapes.Shape.prototype.draw.call(this, elementToDrawOn);
            ctx.beginPath();
            ctx.moveTo(this._pointA._x,this._pointA._y);
            ctx.lineTo(this._pointB._x,this._pointB._y);
            ctx.lineTo(this._pointC._x,this._pointC._y);
            ctx.lineTo(this._pointA._x,this._pointA._y);
            ctx.fill();
            return ctx;

        }
    }
    shapes.Triangle=Triangle;
}(shapes));
