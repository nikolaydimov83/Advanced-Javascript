/**
 * Created by User on 11.5.2015 ã..
 */

Array.prototype.flatten = function(array){
    var result=array;
    var finalResult;
    function checkIfEllementIncludesArrays(element){
        var includesArrays=false;
        for (var j=0;j<element.length;j++){
            if (element[j] instanceof Array){
                includesArrays=true;
                break;
            }
        }
        return includesArrays;
    }
    if (checkIfEllementIncludesArrays(result)===false){
       return result;
    }
    var result1=[];
    for (var k=0;k<array.length;k++){
     if (checkIfEllementIncludesArrays(array[k])===true){
         for (var l =0;l<array[k].length;l++){
             result1.push(array[k][l]);

         }
         result1=result1.flatten(result1);
     }
     else{
         if (array[k] instanceof Array){

                 for (var l = 0; l < result[k].length; l++) {
                     result1.push(array[k][l]);

                 }


         }
         else{
             result1.push(array[k]);
         }


     }
        /*if (k===result.length){
            result=result1;
            break;
        }*/
    }
    return result1;
}
var array=[5,[24,25,[26,27,[28,29,30,[31,32]]]],6,[7,8,[9,10,[14,15,16,[17,18,19,[21,22,23]]]],[11,12]]];
var result = array.flatten(array);
console.log(result);