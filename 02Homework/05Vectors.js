/**
 * Created by User on 12.5.2015 ã..
 */

var Vector = (function () {
    function Vector(array) {
        for (var i= 0; i<array.length;i++){
            var dimensionName=(i+1)+"d"
            this[dimensionName]=array[i];
            this._numberofDimensions=array.length;
        }

    }

    Vector.prototype = {
        getVector: function () {
                var vectorAsArray3DNaming= new Array();
            for (var i=0;i<this._numberofDimensions;i++){
                var stringA=(i+1)+"d";
               vectorAsArray3DNaming[stringA]=this[stringA];
            }
            return vectorAsArray3DNaming;
        },
        getVectorAsArray: function () {
            var vectorAsArray = new Array(this._numberofDimensions);
            for (var i = 0; i < this._numberofDimensions; i++) {
                var stringA = (i + 1) + "d";
                vectorAsArray[i] = this[stringA];
            }
            return vectorAsArray;
        },
        setVectorProperty: function (dimension,value) {
            this[dimension]=value;
        },
        add: function (other) {
            if (this._numberofDimensions !== other._numberofDimensions){
                throw new RangeException("Cannot perform functions ot vectors with different dimensions");
            }
            var thisAsArray=this.getVectorAsArray();
            var otherAsArray=other.getVectorAsArray();
            var result = new Array(this._numberofDimensions);

            for (var i=0; i<this._numberofDimensions;i++){
                result[i]=thisAsArray[i]+otherAsArray[i];
            }
            return new Vector(result);
        },
        substract: function (other) {
            if (this._numberofDimensions !== other._numberofDimensions){
                throw new RangeException("Cannot perform functions ot vectors with different dimensions");
            }
            var thisAsArray=this.getVectorAsArray();
            var otherAsArray=other.getVectorAsArray();
            var result = new Array(this._numberofDimensions);

            for (var i=0; i<this._numberofDimensions;i++){
                result[i]=thisAsArray[i]-otherAsArray[i];
            }
            return new Vector(result);
        },
        dot: function (other) {
            if (this._numberofDimensions !== other._numberofDimensions){
                throw new RangeException("Cannot perform functions ot vectors with different dimensions");
            }
            var thisAsArray=this.getVectorAsArray();
            var otherAsArray=other.getVectorAsArray();
            var result = new Array(this._numberofDimensions);
            var sum=0;

            for (var i=0; i<this._numberofDimensions;i++){
                result[i]=thisAsArray[i]*otherAsArray[i];
                sum+=result[i];
            }
            return sum;
        },
        norm: function () {
            var thisAsArray=this.getVectorAsArray();
            var sum=0;
            var result=new Array(this._numberofDimensions);

            for (var i=0; i<this._numberofDimensions;i++){
                result[i]=thisAsArray[i]*thisAsArray[i];
                sum+=result[i];
            }
            return Math.sqrt(sum);
        }

    };

    return Vector;
}());
var a=[5,6,7]
var vec=new Vector(a);
console.log(vec)
console.log(vec.getVectorAsArray());
console.log(vec.getVector());
vec.setVectorProperty("3d",8);
console.log(vec);
var vec1=new Vector(a);
var vec2 =vec.add(vec1);
var vec3=vec.substract(vec1);
console.log("===================");
console.log(vec2);
console.log(vec3);
console.log(vec1.dot(vec1));
console.log(vec1);

console.log("===================");
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
