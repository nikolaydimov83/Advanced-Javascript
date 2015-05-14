/**
 * Created by User on 14.5.2015 ã..
 */

var checkFunctions = checkFunctions||{};

(function(checkFunctions) {
    function checkCoordinateValidity(arguments, requiredProperties){
        for (var i=0;i<requiredProperties;i++){
            if (typeof arguments[i]==='undefined'||typeof arguments[i]!='number'){
                throw new Error("Coordinate cannot be null")
            }

        }

    }
    function isPoint(point){
        if ((point instanceof shapes.Point)===false){
            throw new Error("Invalid entry. Point is expected.");
        }

    }

    function checkValidNumberEntry(radius) {
        if (radius < 0 || (typeof radius != 'number')) {
            throw new Error("Argument must be number > 0");
        }
    }

    function checkValidHexNumber(number){
        var result  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(number);
        if (result===false){
            throw new Error("Invalid color entered");
        }
    }
    checkFunctions.checkCoordinateValidity=checkCoordinateValidity;
    checkFunctions.isPoint=isPoint;
    checkFunctions.checkValidNumberEntry=checkValidNumberEntry;
    checkFunctions.checkValidHexNumber=checkValidHexNumber;
}(checkFunctions));
