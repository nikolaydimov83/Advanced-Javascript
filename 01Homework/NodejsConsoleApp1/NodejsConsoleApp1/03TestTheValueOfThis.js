function testContext() {
    console.log(this);
}

function testFunction(){
    testContext();
    
}

testContext();
console.log("==================================");
testFunction();
console.log("==================================");
var test = new testContext();
