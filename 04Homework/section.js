/**
 * Created by User on 19.5.2015 ã..
 */



var taskList = taskList||{};

(function(taskList){
    function Section(heading, width,heigth,startPoint,arrayOfChildren){
        taskList.Container.call(this, heading, width,heigth,startPoint,arrayOfChildren);
    }

    Section.prototype={
        toString: function() {
            return taskList.Container.prototype.call(this);
        },
        addToDOM: function(){
        taskList.Container.prototype.call(this);
        },
        addSection:function(parent){
            parent._arrayOfChildren.push(this);
            this.addToDOM();

        }
    }

    taskList.Section=Section;
}(taskList));
