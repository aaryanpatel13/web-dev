// // // Rock-Paper-Scissor Logic

// // function game(A,B){
// //     if (A == B) return "Draw"
// //     if (A == "rock" && B == "scissors") return "Player A wins"
// //     if (A == "paper" && B == "rock") return "Player A wins"
// //     if (A == "scissors" && B == "paper") return "Player A wins"

// //     return "Player B wins"
// // }

// // console.log(game("scissors", "rock"))


// //for loop

// // for(let i = 1; i<=10; ++i){
// //     console.log(i);
// // }

// // // while loop
// // let i = 0;
// // while(i<=10){
// //     console.log(i);
// //     i += 2;
// // } 


// // // Take user input and return input is odd or even

// // let num = prompt("Enter a number");
// // for (let i = 1; i<=num; i++){
// //     if (i%2 == 0){
// //         console.log(`${i} is even`);
// //     }
// //     else{
// //         console.log(`${i} is odd`)
// //     }
// // 
// // function getGrade(score){
// //     if (score > 90){
// //         return "A";
// //     }
// //     else if (score > 80){
// //         return "B";
// //     }
// //     if (score > 70){
// //         return "C";
// //     }
// //     if (score > 60){
// //         return "D";
// //     }
// //     else{
// //         return "Fail";
// //     }
// // }
// // console.log(getGrade(90))



// //                  Practice
// //Q1. Print numbers from 1 to 10
// for(i =1;i <=10;i++){
//     console.log(i);
// }
// console.log("------------------------------------------------------------------------------")
// console.log("------------------------------------------------------------------------------")

// //Q2. Print numer from 10 to 1
// for(i = 10;i>=1;i--){
//     console.log(i);
// }

// console.log("------------------------------------------------------------------------------")
// console.log("------------------------------------------------------------------------------")

// //Q3. Print even numbers from 1 to 20:
// for (i = 2;i <=20; i += 2){
//     console.log(i);
// }

// console.log("------------------------------------------------------------------------------")
// console.log("------------------------------------------------------------------------------")

//Q4. Print number from 1 to 15 using while
// let i = 1;
// while(i<= 15){
//     console.log(i);
//     i++;
// }

// console.log("------------------------------------------------------------------------------")
// console.log("------------------------------------------------------------------------------")

//Q5. Sum of numv=bes between 1 to 100
// let sum = 0;
// for (i = 1;i <= 100;i++){
//     sum += i;
// }
// console.log(sum);

//Q6. Take user input and check wheather the number from 1 to that inout is even or odd.

// let num = prompt("Enter num");
// for(i = 1; i <= num;i++){
//     if (i % 2 == 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

//Q7.Print number from 1 to 30 while skipping those which are divisible by 3.
// for (let i = 1;i <= 30;i++){
//     if (i % 3 === 0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


//                      Practice for function
// //Q1. Write a BMI calculator
// function bmi(mass,height){
//     height = height/100;
//     return mass/(height*height);
// }

// console.log(bmi(100, 187).toFixed(2))

//Q2. Create a reusable discount calculator (High order function)

// function discount(mrp){
//     return calculate(val){
//         let discounted = (mrp * val/100);
//         console.log(dicounted)
//     }

// }

// let arr = [1,2,3,4,5];
// let newArr = arr.map(function(val){
//     return val* val;
// });

// const post = {
//     username : "@Aryan",
//     content : "This is my first post",
//     like : 100,
//     repost : 120,
//     tagged : ["@"]
// }
// let h1 = document.querySelector("h1");
// h1.textContent = "Hey Aryan !!! kaisa hai?";

// let para = document.querySelector("p");
// para.innerHTML = "<b>Updated</b> by Javascript";
// console.log(para) 

// let li = document.querySelectorAll("ul li:nth-child(2n");
// console.log(li);

// li.forEach(function(elem){
//     elem.classList.add("highlight");
// });

// let h1 = document.querySelector("h1")
// window.addEventListener("keydown",function(dets){
//     if (dets.key === " "){
//         h1.textContent = "SPACE";
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// });

// let btn = document.querySelector("#btn")
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click",function(){
//     fileinp.click();
// });

//     // fileName = dets.target.files[0].fileName;
//     // console.log(fileName);
// fileinp.addEventListener("change", function(dets){
//     btn.textContent = dets.target.files[0].name;
// });


//                  Creating element directly from JS
// let main = document.querySelector("#main")
// let inputs = document.querySelectorAll("input")
// let form = document.querySelector("form")
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(event.target.files);
    
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute(
//         "src",inputs[0].value);

//     let h3 =document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;


//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if (inp.type !== "submit"){
//             inp.value = "";
//         };
        
//     });
// });



//                  MouseOver   & MouseOut 
// let trial = document.querySelector("#trial");

// trial.addEventListener("mouseover",function(){
//     trial.style.backgroundColor = "yellow";
// });


// trial.addEventListener("mouseout",function(){
//     trial.style.backgroundColor = "red";
// });


//                  Window pw=e eventListener add krenge

// let trial = document.querySelector("#trial");

// window.addEventListener("mousemove",function(dets){
//     trial.style.top = dets.clientY + "px";
//     trial.style.left = dets.clientX + "px";
//     console.log(dets.clientX, dets.clientY);
// });


//      Event bubbling