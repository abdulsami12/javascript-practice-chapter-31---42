//                                 chapter 31 - 41                                   // 

// var date = new Date();
// document.write(date);


// var date = new Date();
// var date1 = date.getMonth()
// var a;
// document.write(date1)
// if (date1==0){
//     a=January
// }else if (date1 === 1){
//     a = "February"
// }else if (date1 === 2){
//     a = "March"
// }else if (date1 === 3){
//     a =" April"
// }else if (date1 === 4){
//     a = "May"
// }else if (date1 === 5){
//     a = "June"
// }else if (date1 === 6){
//     a = "July"
// }else if (date1 === 7){
//     a = "August"
// }else if (date1 === 8){
//     a =" September"
// }else if (date1 === 9){
//     a =" October"
// }else if (date1 === 10){
//     a = "November"
// }else if (date1 === 11){
//     a = "December"
// }
// alert("Current month: "+a);


// var date1 =new Date()
// var b = date1.toString();
// var c = b.slice(0,3);
// alert("Today is "+c);

// var date1 =new Date()
// var b = date1.toString();
// var c = b.slice(0,3);
// if(c == 'Sat' || c=='Sun'){
//     alert("Its Fun day");
// }else{
//     alert("Its not a Fun day");
// }


// var date1 =new Date()
// var b =date1.toString();
// var c = Number(b.slice(7,10));

// if(c < 16){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last fifteen days of the month");
// }


// var date = new Date();
// var date1 =date.getTime();
// var a=date1/(60);
// var b=date1*1000
// document.write("Current Date:"+date);
// document.write("<br>Elapsed milliseconds since January 1,1970: "+b);
// document.write("<br>Elapsed minute since January 1,1970: "+a);



// var date = new Date();
// var date1 =Number(date.getHours());
// if(date1 <=12){
//     alert("Its AM");
// }else{
//     alert("Its PM");
// }



// var laterDate = new Date("12-31-2020");
// document.write("Later Date: " date1);


// var date = new Date();
// var laterDate = new Date("6-18-2015");
// var second = date.getTime();
// var second2 = laterDate.getTime();
// var nummer_1 = Number(second);
// var nummer_2 = Number(second2);
// var different = nummer_1 - nummer_2;
// var day = different/(86400000);
// document.write(day);



// var date = new Date();
// date.setFullYear(2005);
// date.setMonth(11);
// date.setDate(05);
// var datee = date.getTime();
// var spec =  new Date();
// spec.setFullYear(2015);
// spec.setMonth(0);
// spec.setDate(1);
// var datey = spec.getTime();
// var diff = (datey - datee);
// var abc = (diff/1000);
// document.write("On reference date " + date + "<br>" + abc + " seconds has been has past since the begining of 2015.");



// var date = new Date();
// document.write("Current date:",date);
// var e=date.getHours()
// var date1= e + 1
// var b = date.toString();
// var c = b.slice(0,16);
// var d = b.slice(18,60)
//  document.write("<br>1 hour ago, it was ",c);
//  document.write(date1);
//  document.write(d);


// var date = new Date();
// document.write("Current date:",date);
// var e=date.getFullYear()
// var date1= e -100
// var b = date.toString();
// var c = b.slice(0,11);
// var d = b.slice(15,60)
//  document.write("<br>100 years back, it was ",c);
//  document.write(date1);
//  document.write(d);


// var date = new Date();
// var age = prompt("Enter your age")
// var a = date.getFullYear(34);
// var b = a - age
// document.write("your age is ",age);
// document.write("<br>Your birth year is",b);


// document.write("<h1>K-Electric Bill</h1>")
// var date = new Date();
// var date1 = date.getMonth()
// var a;
// if (date1==0){
//     a=January
// }else if (date1 === 1){
//     a = "February"
// }else if (date1 === 2){
//     a = "March"
// }else if (date1 === 3){
//     a =" April"
// }else if (date1 === 4){
//     a = "May"
// }else if (date1 === 5){
//     a = "June"
// }else if (date1 === 6){
//     a = "July"
// }else if (date1 === 7){
//     a = "August"
// }else if (date1 === 8){
//     a =" September"
// }else if (date1 === 9){
//     a =" October"
// }else if (date1 === 10){
//     a = "November"
// }else if (date1 === 11){
//     a = "December"
// }
// var customer =prompt("Customer name ");
// var b= Number(prompt("enter number of unit"));
// var c = 16;
// var payment = b*c;
// var lateCharge = 350;
// var latePayement= payment+lateCharge;
// document.write("Customer Name: "+customer  );
// document.write("<br>Month",a);
// document.write("<br>Number of units: ",b);
// document.write("<br>Charges of units:",c);
// document.write("<br><br>Net Amount Payable(within Due Date):",payment);
// document.write("<br>late payment surcharge :",lateCharge);
// document.write("<br>Gross Amount Payable (after Due Date): ",latePayement);



//                                   chapter  35 - 38                               // 

// var date = new Date();
// document.write(date); 


// var first_Name=prompt("enter first name");
// var Last_Name= prompt("Enter last name");
// document.write(first_Name+" "+Last_Name);


// var num1=Number(prompt("Enter first number"));
// var num2=Number(prompt("Enter second number"));
// var add= num1+num2;
// document.write("The sum of two number is :",add);




// var num1 = Number(prompt("Enter first number"));
// var num2 = Number(prompt("Enter second number"));
// var oper= prompt("Enter operator (+,-,*,/,%)");
// var a;
// if(oper == "+"){
//     a= num1+num2;
//     document.write("Sum of number is :",a);
// } else if(oper == "-"){
//     a=num1-num2;
//     document.write("subraction of two number is :",a);
// }else if(oper == "*"){
//     a=num1*num2;
//     document.write("Multiplication of two number is :",a);
// }else if(oper == "/"){
//     a=num1/num2;
//     document.write("Division of two number is :",a);
// }else if(oper == "%"){
//     a=num1-num2;
//     document.write("Reminder of two number is :",a);
// }else{
//     alert("wrong operator");
// }





// var argument = prompt("enter argument")
// var two = argument + argument;
// document.write(two)




// var num1 = Number(prompt("enter number for factorial"));
// var a=1;
// var i;
// for ( i = 1; i <= num1; i++) {
//     a= a*i;
// }
// document.write("Factorial of number is: ",a);




// var start = Number(prompt("Enter starting number of count"));
// var end =Number(prompt("Enter ending number of count"));
// for (i=start;start<=end;++i){
//     start = ++start;
//     document.write(start,",");
// }


// var base =Number(prompt("Enter Base of a triangle"));
// var perpend=Number(prompt("Enter Perpendicular of a triangle"));
// var base1 = base * base ;
// var perpend1 = perpend*perpend;
// class1(base1 ,perpend1);
// function class1(base1,perpend1){
//     var hyp = (Math.sqrt(base1+perpend1));
// var hyp1=hyp.toFixed(2)
//     document.write("Hypotenuse of a triangle is: ",hyp1);
// }



// var width= Number(prompt("Enter width of a rectangle"));
// var height=Number(prompt("Enter height of a rectangle"));
// cal(width,height);
// function cal(width1,height1){
// var b = (width1 * height1);
// document.write("The area of triangle is : ", b);
// } 



// var str = prompt("enter string to cheack it is a palinder or not:");
// var b =fun(str);
// function fun(str){
// var j = str.length-1;
// for(var i =0 ; i < j/2 ; i++){
//     var x =str[i];
//     var y = str[j-i];
// }
// if(x == y){
//     document.write("it is palindrome")
// }else{
//     document.write("it is not a palindrome");
// }
// }


// var  input = prompt("enter string :")
// var words = input.split(" ");
// var i;
// for (i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// var b=words.join(" ");
// document.write(b)



// var wording=prompt("ENTER THE WORD");
// var b= longestWord(wording)
// function longestWord(wording){
//     var maxword;
//     var maxLength =0;
//     wording=wording.toLowerCase();
//     wording=wording.split(" ")
//     for(var i =0;i<wording.length;i++){ 
//         if(wording[i].length>maxLength){
//             maxLength=wording[i].length
//              maxword=wording[i]
//         }
//         } 
//         document.write("The longest word is ",maxword);
//         return maxword;
//     }






    // var text;
    // var countWord;
    // var countWord3=0;
    // for(var i=0;i<text.length;i++){
    //     if(text[i]===countWord){
    //         ++countWord3
    //     }
    // }
    // document.write("<h2>"+"THE GIVEN TEXT IS : "+text+"</h2>")
    // document.write("<h2>"+"THE OCCURENCE OF : "+countWord +" IS "+countWord3+"TIMES"+"</h2>")






// function countingWords(text,countWord){
//     var text;
//     var countWord;
//     var countWord3=0;
//     for(var i=0;i<text.length;i++){
//         if(text[i]===countWord){
//             ++countWord3
//         }
//     }
//     document.write("<h2>"+"THE GIVEN TEXT IS : "+text+"</h2>")
//     document.write("<h2>"+"THE OCCURENCE OF : "+countWord +" IS "+countWord3+"TIMES"+"</h2>")


//     return countWord3
// }








// var radius = Number(prompt("Enter radius of circle"))
// var circum1=circum(radius);
// var area1 = area(radius);
// function circum(radius){
// var total = 2 *radius*3.14
// return total;} 
// function area(radius){
// var total = radius*radius*3.14
// return total.toFixed(2);}
// document.write("The circumference is ",circum1);
// document.write("<br>Area of circle ",area1);


//                                  chapter 38 - 42                                 //

// var a = Number(prompt("enter number"))
// var b = Number(prompt("enter power value"))
// var c = power(a,b)
// function power(a,b){
//     var num1 = Math.pow(a,b);
// document.write(" the value of a raised to b is",num1)
// }




// var  year = Number(prompt("Enter year to check leap year"));
// year1(year);
// function year1(year){
// var my1 = year%4;
// var my2 = year % 100;
// var my3 = year % 400;
// if(my1==0){
//     if(my2==0){
//         if(my3==0){
//             document.write("This is not a leap year")
//         }else{
//             document.write("This year is not a leap year")
//         }

//     }else{
//         document.write("This is a leap year")
//     }
// }else{
//     document.write("not a leap year")
// }
// }



// var a =Number(prompt("enter first length of triangle"));
// var b=Number(prompt("enter second length of triangle"));
// var c = Number(prompt("enter third length of triangle"));
// var a1=cal1(a,b,c);
// cal2(a1);
// function cal1(a , b ,c) {
//     var s = (a + b+c)/2;
// return s;
// }
// function cal2(s){
//     var area =(s*((s-a)*(s-b)*(s-c)));
//     document.write("the area of triangle is ",area);
// }



// var num1 = 23;
// var num2 = 23;
// var num3 = 32;
// var avg1=avg(num1,num2,num3);
// function avg(a,b,c){
//     var average = (a + b+ c/3);
//     return average.toFixed(2);
// }
// var per1 = per(num1,num2,num3);
// function per(a,b,c){
//     var percentage = (a+b+c/300) 
// return percentage.toFixed(2);
// }
// document.write("your average score is :",avg1);
// document.write("<br>your percentage is :",per1);







// function index() {
//     var input = prompt("Enter your Sentence").toLowerCase();
//     var index = prompt("Enter your letter to find its Index number");
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] === index) {
//             document.write(i);
//             break;
//         }
//         else if (i === input.length - 1) {
//             document.write("not found");
//         }
//     }
// }   
// index();








// function vowel() {     
// var text=prompt("ENTER THE TEXT");
// var text=text.toLowerCase();
// for(var i=0;i<text.length;i++){
//     if(text[i]==="a"  || text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
//         text=text.slice(0,i) +text.slice(i+1)
//     }
// }
// document.write(text);
// }
// vowel();










// function vowel() {     
// var text=prompt("ENTER THE TEXT");
// var text=text.toLowerCase();
// for(var i=0;i<text.length;i++){
//     if(text[i]==="a"  || text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
//         text=text.slice(0,i-1) +text.slice(i)
//     }
// }
// document.write(text);
// }
// vowel();







// var a = Number(prompt("Enter distance in KM :"));
// var meter1 =meter(a);
// var feet1=feet(a);
// var inches1=inches(a);
// var cen1=centimeter(a);
// document.write("The distance in meter is ",meter1);
// function meter(a){
//     var b = a *1000;
//     return b;
// }
// function feet(a){
//     var b = a *3281
//     return b;
// }
// document.write("<br>The distance in feet is ",feet1);

// function inches(a){
//     var b = a *39370;
//     return b;
// }
// document.write("<br>The distance in inches is ",inches1);

// function centimeter(a){
//     var b = a *100000;
//     return b;
// }
// document.write("<br>The distance in centimeter is ",cen1);






// var a = +prompt("Enter your Total Work Hour");

// function overtime(a) {
//     if ((a - 40 !== Math.abs(a - 40))) {
//         return alert("You Didn't do Overtime");
//     }
//     else {
//         return alert("You get " + (a - 40) * 12 + " Rs for your overtime");
//     }
// }        
// overtime(a);




        
        
        // var a = prompt("Enter amount to withdraw!!");
        // function currencyDemonation(a) {
        //     var string = a.slice(-2);
        //     var calc = Number(a.slice(-2));
        //     var hundred = Number(a.slice(0, a.length - 2));
        //     var ten = Number(a.slice(0, a.length - 2));
        //     var fivety = 0;
        //     if (calc - 50 === Math.abs(calc - 50)) {
        //         calc = calc - 50;
        //         string = calc.toString();
        //         ten = string.slice(0, 1);
        //         fivety = 1;
        //     }
        //     else {
        //         string = calc.toString();
        //         ten = string.slice(0, 1);
        //     }
        //     var result = `You will have ${hundred} hundred notes ${fivety} fivety notes ${ten} ten notes.`;
        //     return alert(result);
        // }        
        // currencyDemonation(a);