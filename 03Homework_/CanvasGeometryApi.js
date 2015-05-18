/**
 * Created by User on 15.5.2015 ã..
 */

var handlerAPI = handlerAPI||{};
var formsSubmitted=[];

(function(handlerAPI){
    function HandlerAPI(form){
        this._form=form;
        var form1=this._form;

    }

    HandlerAPI.addFiguresInArray=function addFiguresInArray(formsSubmitted,arrayToDrawIn){
        var formToCreateShapeFrom=formsSubmitted[formsSubmitted.length-1];
        try{
            switch(formToCreateShapeFrom._figureType) {
            case "circle":
                var figure = new shapes.Circle(new shapes.Point(formToCreateShapeFrom._pointAx,formToCreateShapeFrom._pointAy),
                    formToCreateShapeFrom._figureColor,formToCreateShapeFrom._radius);
                arrayToDrawIn.push(figure);
                break;
            case "triangle":
                pointA=new shapes.Point(formToCreateShapeFrom._pointAx,formToCreateShapeFrom._pointAy);
                pointB=new shapes.Point(formToCreateShapeFrom._pointBx,formToCreateShapeFrom._pointBy);
                pointC=new shapes.Point(formToCreateShapeFrom._pointCx,formToCreateShapeFrom._pointCy);
                var figure = new shapes.Triangle(pointA,pointB,pointC,formToCreateShapeFrom._figureColor);
                arrayToDrawIn.push(figure);
                break;
            case "line":
                pointA=new shapes.Point(formToCreateShapeFrom._pointAx,formToCreateShapeFrom._pointAy);
                pointB=new shapes.Point(formToCreateShapeFrom._pointBx,formToCreateShapeFrom._pointBy);
                var figure = new shapes.Line(pointA,pointB,formToCreateShapeFrom._figureColor);
                arrayToDrawIn.push(figure);
                break;
            case "point":
                //to be implemented
                break;
            case "rectangle":
                pointA=new shapes.Point(formToCreateShapeFrom._pointAx,formToCreateShapeFrom._pointAy);
                var figure = new shapes.Rectangle(pointA,formToCreateShapeFrom._figureColor,
                    formToCreateShapeFrom._width,
                    formToCreateShapeFrom._height);
                arrayToDrawIn.push(figure);
                break;
            case "segment":
                pointA=new shapes.Point(formToCreateShapeFrom._pointAx,formToCreateShapeFrom._pointAy);
                pointB=new shapes.Point(formToCreateShapeFrom._pointBx,formToCreateShapeFrom._pointBy);
                var figure = new shapes.Segment(pointA,pointB,formToCreateShapeFrom._figureColor);
                arrayToDrawIn.push(figure);
                break;
            default:
            }
        }
        catch(err) {
            alert(err + ".");
        }
        return arrayToDrawIn;
    }
    HandlerAPI.removeFiguresFromArray=function removeFiguresFromArray(arrayToDrawIn){

        var generatedFiguresSelectTag = document.getElementById("generated-figures");
        var selectedValue = generatedFiguresSelectTag.options[generatedFiguresSelectTag.selectedIndex];
        if (selectedValue.value!=-1){
            arrayToDrawIn.splice(parseFloat(selectedValue.value),1);
        }
        return arrayToDrawIn;
    }
    HandlerAPI.moveUpFiguresInArray=function moveUpFiguresInArray(arrayToDrawIn){

        var generatedFiguresSelectTag = document.getElementById("generated-figures");
        var selectedValue = generatedFiguresSelectTag.options[generatedFiguresSelectTag.selectedIndex];
        if (typeof selectedValue.value!=='undefined'&&parseFloat(selectedValue.value)>0){
            var elementToMoveUp=arrayToDrawIn[parseFloat(selectedValue.value)];
            var elementToMoveDown=arrayToDrawIn[parseFloat(selectedValue.value)-1];
            var temp=elementToMoveUp;
            arrayToDrawIn[parseFloat(selectedValue.value)] = arrayToDrawIn[parseFloat(selectedValue.value)-1];
            arrayToDrawIn[parseFloat(selectedValue.value)-1] = temp;

        }

        return arrayToDrawIn;
    }
    HandlerAPI.moveDownFiguresInArray=function changeFiguresInArray(arrayToDrawIn){

        var generatedFiguresSelectTag = document.getElementById("generated-figures");
        var selectedValue = generatedFiguresSelectTag.options[generatedFiguresSelectTag.selectedIndex];
        if (typeof selectedValue.value!=='undefined'&&parseFloat(selectedValue.value)!==(arrayToDrawIn.length-1)){
            var b = arrayToDrawIn[parseFloat(selectedValue.value)+1];
            arrayToDrawIn[parseFloat(selectedValue.value)+1] = arrayToDrawIn[parseFloat(selectedValue.value)];
            arrayToDrawIn[parseFloat(selectedValue.value)] = b;

        }

        return arrayToDrawIn;
    }
    HandlerAPI.prototype={
        redrawAPI: function redrawAPI(){
            function changeLabelVisibility(element) {
                var labels = document.getElementsByTagName('label');
                for(var i = 0; i < labels.length; i ++) {
                    var attr = labels[i].getAttribute('for'); //or labels[i].htmlFor
                    if(attr === element.id) {
                        if (labels[i].style.visibility === 'hidden'&&element.type!=='hidden'){
                            labels[i].style.visibility = 'visible'
                        }
                        else{
                            labels[i].style.visibility = 'hidden';
                        }
                        //or labels[i].style.display = 'none';
                    }
                }

            }

            function defineHiddenFields(hiddenFields,form){
                for ( var i = 0; i < form.elements.length; i++ ) {
                    var e = form.elements[i];
                    var countHiddenPass=0;
                    var countVisiblePass=0;
                    for (var j = 0; j < hiddenFields.length; j++) {

                        if (e.id===hiddenFields[j]&&countVisiblePass===0){
                            e.type='hidden';
                            changeLabelVisibility(e);
                            countHiddenPass++;
                        }
                        else{
                            if (e.type==='hidden'&&countHiddenPass===0){
                                if (hiddenFields.indexOf(e.id)===-1){
                                    e.type='text';
                                    changeLabelVisibility(e);
                                    countVisiblePass++;
                                }
                            }
                        }
                    }
                }
            }
            var figureType=document.getElementById("geometric-shape").value;
            switch(figureType) {
                case "circle":
                    defineHiddenFields(["pointB._x","pointB._y","pointC._x","pointC._y","width","height"],form1);
                    break;
                case "triangle":
                    defineHiddenFields(["width","height","radius"],form1)
                    break;
                case "line":
                    defineHiddenFields(["pointC._x","pointC._y","width","height","radius"],form1)
                    break;
                case "point":
                    defineHiddenFields(["pointC._x","pointC._y","pointB._x","pointB._y","pointC._x","pointC._y","width","height","radius"],form1)
                    break;
                case "rectangle":
                    defineHiddenFields(["pointC._x","pointC._y","pointB._x","pointB._y","pointC._x","pointC._y","radius"],form1)
                    break;
                case "segment":
                    defineHiddenFields(["pointC._x","pointC._y","width","height","radius"],form1)
                    break;
                default:

            }
        },
        processForm:function ProcessForm(){

            var pointAx=parseFloat(document.getElementById("pointA._x").value);
            var pointAy=parseFloat(document.getElementById("pointA._y").value);

            var pointBx=parseFloat(document.getElementById("pointB._x").value);
            var pointBy=parseFloat(document.getElementById("pointB._y").value);

            var pointCx=parseFloat(document.getElementById("pointC._x").value);
            var pointCy=parseFloat(document.getElementById("pointC._y").value);

            var radius=parseFloat(document.getElementById("radius").value);
            var figureColor=document.getElementById("color").value;

            var width=parseFloat(document.getElementById("width").value);
            var height=parseFloat(document.getElementById("height").value);
            var figureType = document.getElementById("geometric-shape").value

            formsSubmitted.push(new shapeElementsParser.ProcessedForm(pointAx,pointAy,pointBx,pointBy,pointCx,pointCy,radius,figureColor,width,height,figureType));
        }

    }

    handlerAPI.HandlerAPI=HandlerAPI;
}(handlerAPI));




