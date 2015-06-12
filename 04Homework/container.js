/**
 * Created by User on 19.5.2015 �..
 */
if (!Object.create) {
    Object.create = function (proto) {
        function F() {};
        F.prototype = proto;
        return new F;
    };
};

Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

Object.prototype.getClassName = function() {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};

var taskList = taskList||{};

(function(taskList){
    function Container(heading, width,heigth,startPoint,arrayOfChildren) {
        this._heading = heading;
        this._width = width;
        this._heigth = heigth;
        this._startPoint = startPoint;
        this._arrayOfChildren = [];
        this._type="Container";
        if (typeof this._arrayOfChildren === 'undefined') {
            this._arrayOfChildren = [];
        }
    }

 Container.prototype={
     toString: function() {
         return this._heading + " " + this._width+" "+ this._heigth+" "+this._startPoint+" "+this._arrayOfChildren;
     },
     addToDOM: function(parent){
         var containerToCreate = document.createElement('div');
         containerToCreate.id = this._type+this._heading;
         containerToCreate.innerHTML=this._heading;
         containerToCreate.style.width=this._width;
         containerToCreate.style.height=this._heigth;
         containerToCreate.style.position='relative';
         containerToCreate.style.left=this._startPoint._x;
         containerToCreate.style.top=this._startPoint._y;
         switch(this._type) {
             case "Container":
                 document.body.appendChild(containerToCreate);
                 break;
             case "Section":
                 var idParent=parent._type+parent._heading;
                 document.getElementById(idParent).appendChild(containerToCreate);
                 break;
             default:
                 var idParent=parent._type+parent._heading;
                 document.getElementById(idParent).appendChild(containerToCreate);
         }

         var containerInput=document.createElement('input');
         containerInput.id=this._type+this._heading+'Input';
         containerInput.type='text';
         document.getElementById(this._type+this._heading).appendChild(containerInput);

         for (var i = 0; i < this._arrayOfChildren.length; i++) {
             this._arrayOfChildren[i].addToDOM();

         }

         var containerButton = document.createElement('button');
         containerButton.innerHTML='+';
         containerButton.id=this._type+this._heading+'Button';
         containerButton.class=this._type;
         document.getElementById(this._type+this._heading).appendChild(containerButton);


     }
  }
    taskList.Container=Container;
}(taskList));

