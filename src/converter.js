function forceConverter(measurement, val)
{
    var result1, result2;

    if(measurement == "newton")
    {
        result1 = (val*100000).toFixed(2) + " dyne";
        result2 = (val/4.44822).toFixed(2) + " pound";
    } else if(measurement === "dyne") {
        result1 = (val/100000).toFixed(2) + " newton";
        result2 = (val/444822).toFixed(2) + " pound"; 
    } else if(measurement === "pound") {
        result1 = (val*4.44822).toFixed(2) + " newton";
        result2 = (val*444822).toFixed(2) + " dyne";
    } else {
        return "wrong input";
    }
    return [result1, result2];
}

console.log(forceConverter("newton", 32));
module.exports = {
    forceConverter
}