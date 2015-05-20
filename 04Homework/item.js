/**
 * Created by User on 19.5.2015 ã..
 */

var taskList = taskList||{};

(function(taskList){
    var item = taskList.container.extend({
        init: function init(heading, width,heigth,startPoint,status,parentID) {
            this._super.init.call(heading, width,heigth,startPoint,[]);
            this._status=status;
            this._arrayOfChildren=[];
            this._parentID=parentID;
            return this;
        },
        addToDOM: function(){
            var itemToAdd = document.createElement('div');
            itemToAdd.id = "section"+this._heading;
            itemToAdd.innerHTML=this._heading;
            itemToAdd.style.width=this._width;
            itemToAdd.style.height=this._heigth;
            itemToAdd.style.position='relative';
            itemToAdd.style.left=this._startPoint._x;
            itemToAdd.style.top=this._startPoint._y;
            var checkBox=document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.id ="checkBox"+this._heading;
            itemToAdd.appendChild(checkBox);
            document.getElementById(this._parentID).appendChild(itemToAdd);
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
        },
        addSection:function(heading){
            var itemToAdd=new taskList.segment.init(heading,'5px','5px',point.init(5,5),null);
            this._arrayOfChildren.push(itemToAdd);
        }
    });
    taskList.item=item;
}(taskList));