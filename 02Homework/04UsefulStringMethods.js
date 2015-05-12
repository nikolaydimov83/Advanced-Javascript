/**
 * Created by User on 12.5.2015 ã..
 */

/**
 * Created by User on 12.5.2015 ?..
 */

String.prototype.startsWith = function(substring){
    return this.slice(0,substring.length)==substring;
}

String.prototype.endsWith = function(substring){
    return this.substr((this.length-substring.length),substring.length)==substring;
}

String.prototype.left = function(count){
    return this.slice(0,count);
}

String.prototype.right = function(count){
    var startIndex;
    if (this.length-count<0){
        startIndex=0;
    }
    else{
        startIndex = this.length-count;
    }
    return this.substr(startIndex,count);
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log("========");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith (""));
console.log(example.startsWith("something else"));

console.log("========");
console.log(example.left(9));
console.log(example.left(90));
console.log(example);

console.log("========");

console.log(example.right(9));
console.log(example.right(90));

