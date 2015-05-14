/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function(shapes){
    function Segment(pointA, pointB, color){
        checkFunctions.isPoint(pointB);
        shapes.Shape.call(this,pointA,color);
        this._pointB=pointB;
    }
    Segment.extends(shapes.Shape);
    Segment.prototype={
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
        }
    }
    shapes.Segment=Segment;
}(shapes));
