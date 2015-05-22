/**
 * Created by User on 19.5.2015 ã..
 */

var taskList = taskList||{};

(function(taskList){

    function Item(heading, width,heigth,startPoint,arrayOfChildren,status){
        taskList.Container.call(this, heading, width,heigth,startPoint,arrayOfChildren);
        this._status=status;
    }

    Item.prototype={
        toString: function() {
            return taskList.Container.prototype.call(this);
        },
        addToDOM: function(){
            taskList.Container.prototype.call(this);
        },
        addSection:function(parent){
            taskList.Section.prototype.call(this,parent);

        }
    }

    taskList.Item=Item;
}(taskList));