/**
 * Created by User on 19.5.2015 �..
 */

var taskList = taskList||{};

(function(taskList){
    var point = {
        init: function(x,y) {
            this._x = x;
            this._y = y;
            return this;

        },
        toString: function() {
            return this._x + " " + this._y;
        }
    }
    taskList.point=point;
    return taskList.point;
}(taskList));