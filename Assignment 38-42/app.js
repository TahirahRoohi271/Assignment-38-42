// Question 1

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
// }
// document.write(power(5, 3));


// Question 2

// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + ' is a leap year');
//     } else {
//         document.write(year + ' is not a leap year');
//     }
// }
// var year = prompt('Enter a year:');
// checkLeapYear(year);


// Question 3

// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }
// function triangleArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var areaSquared = s * (s - a) * (s - b) * (s - c);
  
//     if (areaSquared < 0) {
//     return "Invalid triangle. Cannot calculate area.";
//     }
  
//     var area = Math.sqrt(areaSquared);
//     return area;
// }
// var sideA = 3;
// var sideB = 4;
// var sideC = 5;
// var triangleArea = triangleArea(sideA, sideB, sideC);
// document.write(triangleArea);


// Question 4

// function average(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }  
// function mainFunction(subject1, subject2, subject3) {
//     var averageOfMarks = average(subject1, subject2, subject3).toFixed(2);    
//     document.write("Average: " + averageOfMarks + "%");
// }
// mainFunction(74, 43, 88);
  

// Question 5

// function overtimePayment(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var overtimePay = 0.00;
//     if (hoursWorked > regularHours) {
//       const overtimeHours = hoursWorked - regularHours;
//       overtimePay = overtimeHours * overtimeRate;
//     }
//     return overtimePay;
// }
// var hoursWorked = 45;
// var overtimePay = overtimePayment(hoursWorked);
// document.write(overtimePay);


// Question 6

// function deleteVowels(sentence) {
//     if (sentence.length > 25) {
//         return "Sentence is longer than 25 Characters";
//       }
//     var vowels = ["a", "e", "i", "o", "u"];
//     var result = "";
//     for (let i = 0; i < sentence.length; i++) {
//       var char = sentence[i].toLowerCase();
  
//       if (!vowels.includes(char)) {
//         result += sentence[i];
//       }
//     }
//     return result;
// }
// var sentence = prompt("Enter any Sentence within 25 Characters");
// var result = deleteVowels(sentence);
// document.write(result);


// Question 7

// function countVowels(text) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;
//     text = text.toLowerCase();
//     for (let i = 0; i < text.length - 1; i++) {
//       switch (text[i]) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           if (vowels.includes(text[i + 1])) {
//             count++;
//           }
//           break;
//         default:
//           break;
//       }
//     }
  
//     return count;
// }
// var text = "Pleases read this application and give me gratuity";
// var count = countVowels(text);
// document.write(count);


// Question 8

// function distanceConversions(km) {
//     var meters = km * 1000;
//     var feet = km * 3280.84;
//     var inches = km * 39370.1;
//     var centimeters = km * 100000;

//     document.write("Distance in kilometers: " + km + " km" + "<br>");
//     document.write("Distance in meters: " + meters + " m" + "<br>");
//     document.write("Distance in feet: " + feet + " ft" + "<br>");
//     document.write("Distance in inches: " + inches + " in" + "<br>");
//     document.write("Distance in centimeters: " + centimeters + " cm");
// }
// var distanceInKm = 100;
// distanceConversions(distanceInKm);


// Question 9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var overtimePay = 0.00;
  
//     if (hoursWorked > regularHours) {
//       const overtimeHours = hoursWorked - regularHours;
//       overtimePay = overtimeHours * overtimeRate;
//     }
//     return overtimePay;
// }
// var hoursWorked = 45;
// var overtimePay = calculateOvertimePay(hoursWorked);
// document.write(overtimePay); // Output: 60.00
  

// Question 10
