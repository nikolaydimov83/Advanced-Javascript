/**
 * Created by User on 17.5.2015 �..
 */

var h=new handlerAPI.HandlerAPI("dfsddgdsfgsfd");
var arrayOfFigures=[];
document.getElementById("geometric-shape").onchange=h.redrawAPI;
document.getElementById("-").addEventListener('click', h.processForm);
document.getElementById("-").addEventListener('click',drawOnCanvasWrapped);

function drawOnCanvasWrapped(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    var select = document.getElementById("generated-figures");
    var length = select.options.length;
    for (i = 0; i < length; i++) {
        select.options[i] = null;
    }
    arrayOfFigures=handlerAPI.HandlerAPI.addFiguresInArray(formsSubmitted,arrayOfFigures);
    for (var i = 0; i < arrayOfFigures.length; i++) {
        arrayOfFigures[i].draw("canvas");
    }

    for(var index in arrayOfFigures)
    {
        var opt = document.createElement("option");
        opt.value= arrayOfFigures[index].toString();
        opt.innerHTML = arrayOfFigures[index].toString(); // whatever property it has

        // then append it to the select element
        select.appendChild(opt);

    }

}







