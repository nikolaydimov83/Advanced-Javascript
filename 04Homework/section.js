/**
 * Created by User on 19.5.2015 ã..
 */



var taskList = taskList||{};

(function(taskList){
    var segment = taskList.container.extend({
        init: function init(heading, width,heigth,startPoint,arrayOfChildren) {
            this._super.init.call(heading, width,heigth,startPoint,arrayOfChildren);
            this.grade = grade;
            return this;
        },
        addToDOM: function(){
            var sectionToAdd = document.createElement('div');
            sectionToAdd.id = "section"+this._heading;
            sectionToAdd.innerHTML=this._heading;
            sectionToAdd.style.width=this._width;
            sectionToAdd.style.height=this._heigth;
            sectionToAdd.style.position='relative';
            sectionToAdd.style.left=this._startPoint._x;
            sectionToAdd.style.top=this._startPoint._y;
            document.getElementById("container").appendChild(sectionToAdd);
            var form=document.createElement('form');
            var textInput=document.createElement('input')
            textInput.setAttribute('type','text');
            textInput.id='text'+this._heading;
            var plusButton=document.createElement('button');
            plusButton.id='button'+this._heading
            plusButton.class='item-adder';
            form.appendChild(textInput)
            form.appendChild(plusButton);
            document.getElementById("section"+this._heading).appendChild(form);
            for (var i = 0; i < this._arrayOfChildren.length; i++) {
                this._arrayOfChildren[i].addToDOM();

            }
        }
    });
    taskList.segment=segment;
}(taskList));
