/**
 * Created by User on 19.5.2015 ã..
 */
Object.prototype.extend = function(properties) {
    function f() {};
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}

var taskList = taskList||{};

(function(taskList){
    var container = {
        init: function(heading, width,heigth,startPoint,arrayOfChildren) {
            this._heading = heading;
            this._width = width;
            this._heigth = heigth;
            this._startPoint = startPoint;
            this._arrayOfChildren = arrayOfChildren;
        },
        toString: function() {
            return this._heading + " " + this._width+" "+ this._heigth+" "+this._startPoint+" "+this._arrayOfChildren;
        },
        addToDOM: function(){
            var containerToCreate = document.createElement('div');
            containerToCreate.id = 'container';
            containerToCreate.innerHTML=this._heading;
            containerToCreate.style.width=this._width;
            containerToCreate.style.height=this._heigth;
            containerToCreate.style.position='relative';
            containerToCreate.style.left=this._startPoint._x;
            containerToCreate.style.top=this._startPoint._y;
            document.appendChild(containerToCreate);
            for (var i = 0; i < this._arrayOfChildren.length; i++) {
                this._arrayOfChildren[i].addToDOM();

            }
        }
    }
    taskList.container=container;
}(taskList));

