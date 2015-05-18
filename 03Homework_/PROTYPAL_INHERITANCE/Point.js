/**
 * Created by User on 18.5.2015 ã..
 */

Object.prototype.extend = function(properties) {
    function f() {};
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}

var point = {
    init: function(x, y) {
        this._x = x;
        this._y = y;
    },
    toString: function() {
        return this._x + " " + this._y
    }
}

var shape = {
    init: function(pointA, color) {
        this._pointA = pointA;
        this._color = color;
    },
    toString: function() {
        return this._pointA + " " + " "+this._color;
    }
}


var circle = shape.extend({
    init: function init(pointA, color,radius) {
        this._super.init.call(this, pointA, color);
        this._radius = radius;
        return this;
    },
    toString:function toString(){
        return this._super.toString.call(this)+this._radius;
    }
});

var rectangle = shape.extend({
    init: function init(pointA, width, heigth, color) {
        this._super.init.call(this, pointA, color);
        this._width = width;
        this._heigth = heigth;
        return this;
    },
    toString:function toString(){
        return this._super.toString.call(this)+" "+this._radius;
    }
});

var triangle = shape.extend({
    init: function init(pointA, pointB, pointC, color) {
        this._super.init.call(this, pointA, color);
        this._pointB = pointB;
        this._pointC = pointC;
        return this;
    },
    toString:function toString(){
        return this._super.toString.call(this)+" "+this._pointB+" "+this._pointC;
    }
});

var line = shape.extend({
    init: function init(pointA, pointB, color) {
        this._super.init.call(this, pointA, color);
        this._pointB = pointB;

        return this;
    },
    toString:function toString(){
        return this._super.toString.call(this)+" "+this._pointB;
    }
});
