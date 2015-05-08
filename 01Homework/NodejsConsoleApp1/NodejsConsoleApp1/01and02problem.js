function printArgsInfo() {
    for (var i=0; i< printArgsInfo.arguments.length;i++) {
        console.log(printArgsInfo.arguments[i]);
        console.log(typeof printArgsInfo.arguments[i]);
    }  
}


printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log("==============================================================");
printArgsInfo(null, undefined, "", 0, [], {});
console.log("==============================================================");
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log("==============================================================");
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 })
console.log("==============================================================");
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log("==============================================================");
printArgsInfo.call(null);
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);

printArgsInfo.apply(null);
printArgsInfo.apply(null, [2, 3, 2.5, -110.5564, false]);
