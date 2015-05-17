/**
 * Created by User on 17.5.2015 ã..
 */

var h=new handlerAPI.HandlerAPI("dfsddgdsfgsfd");
var arrayOfFigures=[];
document.getElementById("geometric-shape").onchange=h.redrawAPI;
document.getElementById("-").addEventListener('click', h.processForm);
document.getElementById("-").addEventListener('click',drawOnCanvasWrapped);
document.getElementById("remove").addEventListener('click',removeFromCanvasWrapped);
document.getElementById("remove").addEventListener('click',drawOnCanvasWrapped);
document.getElementById("arrow-up").addEventListener('click',moveUpFiguresInCanvasWrapped);
document.getElementById("arrow-up").addEventListener('click',drawOnCanvasWrapped);

function removeFromCanvasWrapped(){
    arrayOfFigures=handlerAPI.HandlerAPI.removeFiguresFromArray(arrayOfFigures);
}

function moveUpFiguresInCanvasWrapped(){
    handlerAPI.HandlerAPI.moveUpFiguresInArray(arrayOfFigures);
}

function drawOnCanvasWrapped(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    var select = document.getElementById("generated-figures");
    var length = select.options.length;
    for (index in select) {
        select.options[index] = null;
    }
    arrayOfFigures=handlerAPI.HandlerAPI.addFiguresInArray(formsSubmitted,arrayOfFigures);
    for (var i = 0; i < arrayOfFigures.length; i++) {
        arrayOfFigures[i].draw("canvas");
    }

    for(var index in arrayOfFigures)
    {
        var opt = document.createElement("option");
        opt.value= index;
        opt.innerHTML = arrayOfFigures[index].toString(); // whatever property it has

        // then append it to the select element
        select.appendChild(opt);

    }

}







