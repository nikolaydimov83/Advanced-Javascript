/**
 * Created by User on 20.5.2015 ã..
 */


var point=taskList.point.init(0,0);
var containerToAdd = new taskList.Container("Try me out",400,100,point,[]);

containerToAdd.addToDOM();



function addSectionWrapped(){
    var headingID=this.id.substring(0,this.id.lastIndexOf("Button")) + 'Input';
    var headingOfTheSegment=document.getElementById(headingID).value;
    var segmentToAdd= new taskList.Section(headingOfTheSegment,50,50,point,[]);
    segmentToAdd.addSection(containerToAdd);
    document.getElementById("Section"+headingOfTheSegment+"Button").addEventListener('click',addItemWrapped)

}

function addItemWrapped(){
    var headingID=this.id.substring(0,this.id.lastIndexOf("Button")) + 'Input';
    var headingOfTheSegment=document.getElementById(headingID).value;
    var itemToAdd= new taskList.Item(headingOfTheSegment,50,50,point,[]);
    var sectionToAddTo;
    for (var i=0;i<containerToAdd._arrayOfChildren.length;i++){
        if ("Section"+containerToAdd._arrayOfChildren[i]._heading+"Button"===this.id){
        sectionToAddTo=containerToAdd._arrayOfChildren[i];
        }
    }
    itemToAdd.addSection(sectionToAddTo);

}

document.getElementById(containerToAdd._type+containerToAdd._heading+"Button").addEventListener('click',addSectionWrapped);

