

//Task 1: Kilometer To Meter

function kilometerToMeter(kilometer){
    // validate for negative input and type for number
    if(kilometer > 0 && typeof(kilometer) === "number"){  
        return kilometer * 1000; // 1kilometer = 1000 meter
    }else{
        // return msg if input is invalid
        return "Invalid Input";
    }
}

kilometerToMeter(1);



// Task 2: Budget Calculator 

function budgetCalculator(watch, phone, laptop){
    // check input is for negative and string
    if(watch < 0 || phone < 0 || laptop < 0 ||
        typeof(watch) !== "number" ||
        typeof(phone) !== "number" ||
        typeof(laptop) !== "number"){
        return "Items number should not be negative or string";
    }else{
        //caculate cost for each items
        var totalWatchCost = 50 * watch;
        var totalPhoneCost = 100 * phone;
        var totalLaptopCost = 500 * laptop;
        //calculate the cost of total items
        var total = totalWatchCost + totalPhoneCost + totalLaptopCost;
        return total; 
    }
}

budgetCalculator(1,10,20);



// Task 3: Hotel Cost Calculation

function hotelCost(days){
    //check the input for 0 and less, and their type
    if(days > 0 && typeof(days) === "number"){
        if(days > 0 && days <=10){
            var totalCost = days * 100;
            return totalCost;
        }else if(days > 10 && days <= 20){
            var totalDays = days; 
            var dayPart1 = 10 * 100; //cost for 1st 10 days
            var remainDays = totalDays - 10;
            var dayPart2 = remainDays * 80; //cost for remaining days
            // calculate total cost
            var totalCost =  dayPart1 + dayPart2;
            return totalCost;
        }else{
            var totalDays = days;
            var dayPart1 = 10 * 100; //cost for 1st 10 days
            var dayPart2 = 10 * 80; //cost for 2nd 10 days
            var remainDays = totalDays - 20;
            var dayPart3 = remainDays * 50; // cost for after 20 days
            // calculate total cost
            var totalCost =  dayPart1 + dayPart2 + dayPart3;
            return totalCost;
        }
    }else{
        return "Invalid Input"
    }
}

hotelCost(1);



//Task 4: Longest name of the array

function megaFriend(arr){
    //check the array is empty or not
    if(arr.length > 0){
        var firstName = arr[0];
        for(var i = 1;  i < arr.length; i++){
            // check the largest name using length
            if(firstName.length < arr[i].length){
                firstName = arr[i];
            }
        }
        return firstName;
    }else{
        return "Array should not be empty ";
    }  
}

megaFriend(["rahim","karim", "Kashem","marzia haque", "rafiq"]);
