/**
 * Created by User on 12.5.2015 ã..
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

String.prototype.padLeft = function(count, character){
    var padder="";
    if (character===undefined){
        character=" ";
    }
    for (var i=0;i<count;i++){
        padder+=character;
    }
    return padder+this;
}

String.prototype.padRight = function(count, character){
    var padder="";
    if (character===undefined){
        character=" ";
    }
    for (var i=0;i<count;i++){
        padder+=character;
    }
    return this+padder;
}

String.prototype.repeat = function(count){
    var padder="";

    for (var i=0;i<count;i++){
        padder+=this;
    }
    return padder;
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

console.log("========");

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));


console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("=========");

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
