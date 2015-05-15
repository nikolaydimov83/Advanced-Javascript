/**
 * Created by User on 14.5.2015 ã..
 */

var shapes = shapes||{};

(function(shapes){
    function Rectangle(pointA,color, width, heigth){
        checkFunctions.checkValidNumberEntry(width);
        checkFunctions.checkValidNumberEntry(heigth);
        shapes.Shape.call(this,pointA,color);
        this._width=width;
        this._heigth=heigth
    }
    Rectangle.extends(shapes.Shape);
    Rectangle.prototype={
        toString: function () {
            var parentToString=shapes.Shape.prototype.toString.call(this);
            return parentToString + " Width: "+this._width+" Height:"+this._heigth;
        },
        setWidth: function(width){
            checkFunctions.checkValidNumberEntry(width);
            this._width=width;
            return this;
        },
        getWidth: function(){
            return this._width;
        },
        setHeigth: function(heigth){
            checkFunctions.checkValidNumberEntry(heigth);
            this._heigth=heigth;
            return this;
        },
        getHeigth: function(){
            return this._width;
        },
        draw: function draw(elementToDrawOn){
            var ctx=shapes.Shape.prototype.draw.call(this, elementToDrawOn);
                ctx.fillRect (this._pointA._x, this._pointA._y, this._width, this._heigth);
            return ctx;

        }
    }
    shapes.Rectangle=Rectangle;
}(shapes));


