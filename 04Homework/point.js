/**
 * Created by User on 19.5.2015 ã..
 */

var taskList = taskList||{};

(function(taskList){
    var point = {
        init: function(x,y) {
            this._x = x;
            this._y = y;

        },
        toString: function() {
            return this._x + " " + this._y;
        }
    }
    taskList.point=point;
}(taskList));