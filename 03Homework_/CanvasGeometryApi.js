/**
 * Created by User on 15.5.2015 ã..
 */
function readFormInDocumentByID(formID){
    var kvpairs = [];
    var form = document.getElementById(formID);
    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        /*if (e.type==="button"){
         continue
         }*/
        if (e.id!==""){
            var key=encodeURIComponent(e.id);
            var value=encodeURIComponent(e.value);
            kvpairs[key]=value;
        }

    }
    return kvpairs
}

function ProcessForm(hiddenFields,form,arrayWithDefaultTypes){
    var allFormValues = readFormInDocument();
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

    var figureType=document.getElementById("geometric-shape").value;

    var form = new shapeElementsParser.ProcessedForm(pointAx,pointAy,pointBx,pointBy,pointCx,
                                    pointCy,radius,figureColor,width,height);

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
    var formAsArray = readFormInDocumentByID("form1");
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


}
var readForm;
document.getElementById("-").onclick = function(){ readFormInDocumentByID("form1")};
console.log(readForm);
document.getElementById("geometric-shape").onchange=ProcessForm;