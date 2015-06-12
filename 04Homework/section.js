/**
 * Created by User on 19.5.2015 ã..
 */



var taskList = taskList||{};

(function(taskList){
    function Section(heading, width,heigth,startPoint,arrayOfChildren){
        taskList.Container.call(this, heading, width,heigth,startPoint,arrayOfChildren);
        this._type="Section";
    }

    Section.prototype={
        toString: function() {
            return taskList.Container.prototype.call(this);
        },
        addToDOM: function(parent){
        taskList.Container.prototype.addToDOM.call(this,parent);
        },
        addSection:function(parent){
            parent._arrayOfChildren.push(this);
            this.addToDOM(parent);

        }
    }

    taskList.Section=Section;
}(taskList));
