/**
 * Created by User on 14.5.2015 �..
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
        }
    }
    shapes.Triangle=Triangle;
}(shapes));
