/**
 * Created by User on 20.5.2015 ã..
 */


var point=taskList.point.init(0,0);
var containerToAdd = new taskList.Container("Try me out",400,100,point,[]);

containerToAdd.addToDOM();



function addSectionWrapped(){
    var headingID=this.getClassName()+this._heading+'Input'
    var headingOfTheSegment=document.getElementById(headingID).value;
    var segmentToAdd= new taskList.Section(headingOfTheSegment,50,50,point,[]);
    segmentToAdd.addSection(containerToAdd);

}

document.getElementById("addSection"+containerToAdd._heading).addEventListener('click',addSectionWrapped);