var favFoods = ["bacon", "Lettuce" , "Tomato"];
//made an array of favorite foods//
var students = ["Michael" , "Raene" , "Chuck" , "Ryan"];
//made an array of students//

window.alert(students[2] + " " + favFoods[0]);
//made a window alert that said chuck bacon. chuck index number is 3 and bacon is 0//

//take users information
//ask them waht they want to replace bacon with
//replace bacon
//then output the entire array to the screen

var newFood = prompt("What do you want to replace bacon with?");
//took users information and asked them what they wanted to replace bacon with
favFoods[0] = newFood;
//replaced bacon
window.alert(favFoods[0] + " " + favFoods[1] + " " + favFoods[2]);
//outputted the entire new modified array