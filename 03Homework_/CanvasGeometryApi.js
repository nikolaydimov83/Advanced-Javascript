/**
 * Created by User on 15.5.2015 ã..
 */

var context = context||{};

(function(context){
    function ProcessedForm(pointAx,pointAy,pointBx,pointCx,pointCy,radius,figureColor,width,heigth){
        this._pointAx=parseFloat(document.getElementById("pointA._x").value);
        this._pointAy=parseFloat(document.getElementById("pointA._y").value);

        this._pointBx=parseFloat(document.getElementById("pointB._x").value);
        this._pointBy=parseFloat(document.getElementById("pointB._y").value);

        this._pointCx=parseFloat(document.getElementById("pointC._x").value);
        this._pointCy=parseFloat(document.getElementById("pointC._y").value);

        this._radius=parseFloat(document.getElementById("radius").value);
        this._figureColor=parseFloat(document.getElementById("figureColor").value);

        this._width=parseFloat(document.getElementById("width").value);
        this._height=parseFloat(document.getElementById("height").value);

    }

    ProcessedForm.prototype={
        toString: function () {

        },
        getPointAx: function(){
            return this._pointAx;
        },
        setPointAx: function(pointAx){
            this._pointAx=pointAx;
            return this;
        },
        getPointAy: function(){
            return this._pointAy;
        },
        setPointAy: function(pointAy){
            this._pointAy=pointAy;
            return this;
        },
        getPointBx: function(){
            return this._pointBx;
        },
        setPointBx: function(pointBx){
            this._pointBx=pointBx;
            return this;
        },
        getPointBy: function(){
            return this._pointBy;
        },
        setPointBy: function(pointBy){
            this._pointBy=pointBy;
            return this;
        },
        getPointCx: function(){
            return this._pointCx;
        },
        setPointCx: function(pointCx){
            this._pointBx=pointCx;
            return this;
        },
        getPointCy: function(){
            return this._pointCy;
        },
        setPointCy: function(pointCy){
            this._pointCy=pointCy;
            return this;
        }

    }
    context.Constructor=Constructor;
}(context));

function ProcessForm(){
    var pointAx = parseFloat(document.getElementById("pointA._x").value);
    var pointAy=parseFloat(document.getElementById("pointA._y").value);
    var pointA = new shapes.Point(pointAx,pointAy);
    var figureColor=document.getElementById("color").value;
    var radius = parseFloat(document.getElementById("radius").value);
    var figureToDraw=new shapes.Circle(pointA,figureColor,radius);
    var canvas="canvas";
    figureToDraw.draw(canvas);
}


document.getElementById("-").onclick =ProcessForm;