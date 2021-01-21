

//Code-01 JS Function for kilometerTometer

function kilometerTometer(kilometer){
    var meter = kilometer * 1000;
    return meter;
}



// Code-02 JS function for budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var result = watch * 10 + phone * 5 + laptop *3 ;
    return result;
}


// Cod-03 JS Function for Hotelcost 

function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    } else if(days <= 17){
       var partOne = 10 * 100;
       var remaining = days - 7;
       var partTwo = remaining * 80
       cost = partOne + partTwo;
    } else{
        var partOne = 10 * 100;
        var partTwo = 7 * 80
        var remaining = days - 23;
        var partThree = remaining * 50;
        cost = partOne + partTwo + partThree;
    }
    return cost;
}



// Code-04 JS Function for Megafriend

var friends = ['abir', 'mamun', 'ahamed', 'shahazad'];

function megaFriend(friends){
var longest = friends[0];
for(var i = 0; i < friends.length; i++){
    var element = friends[i];
    if(element > longest){
        longest = element;
    }
}
return longest;
}





    







