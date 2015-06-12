/**
 * Created by User on 19.5.2015 ã..
 */

var taskList = taskList||{};

(function(taskList){

    function Item(heading, width,heigth,startPoint,arrayOfChildren,status){
        taskList.Container.call(this, heading, width,heigth,startPoint,arrayOfChildren);
        this._status=status;
        this._type="Item";
    }

    Item.prototype={
        toString: function() {
            return taskList.Container.prototype.call(this);
        },
        addToDOM: function(parent){
            taskList.Container.prototype.addToDOM.call(this,parent);
        },
        addSection:function(parent){
            taskList.Section.prototype.addSection.call(this,parent);
           // parent._arrayOfChildren.push(this);
            //this.addToDOM(parent);

        }
    }

    taskList.Item=Item;
}(taskList));