/**
 * Created by User on 16.5.2015 ã..
 */

var shapeElementsParser = shapeElementsParser||{};

(function(shapeElementsParser){
    function ProcessedForm(pointAx,pointAy,pointBx,pointBy,pointCx,pointCy,radius,figureColor,width,height){
        this._pointAx=pointAx;
        this._pointAy=pointAy;

        this._pointBx=pointBx;
        this._pointBy=pointBy;

        this._pointCx=pointCx;
        this._pointCy=pointCy;

        this._radius=radius;
        this._figureColor=figureColor;

        this._width=width;
        this._height=height;

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
        },
        getRadius: function(){
            return this._radius;
        },
        setRadius: function(radius){
            this._radius=radius;
            return this;
        },
        getFigureColor: function(){
            return this._figureColor;
        },
        setFigureColor: function(figureColor){
            this._figureColor=figureColor;
            return this;
        },
        getWidth: function(){
            return this._width;
        },
        setWidth: function(width){
            this._width=width;
            return this;
        },
        getHeight: function(){
            return this._height;
        },
        setHeight: function(height){
            this._height=height;
            return this;
        }

    }
    shapeElementsParser.ProcessedForm=ProcessedForm;
}(shapeElementsParser));


