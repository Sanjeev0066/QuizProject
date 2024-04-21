let a;
a =[{"quiz question":"What is your home country?",
"option 1":"india",
"option 2" : "canada",
"option 3" : "pakistan",
"option 4" : "srilanka"},
{"quiz question":"I love Sabbo?",
"option 1":"sanjeev",
"option 2" : "pankaj",
"option 3" : "Sanju",
"option 4" : "Thankur"}];

let counter =0;
// console.log(a);
const submitBtn= document.getElementById("submit");
// console.log(submitBtn)
// console.log(a[0]["quiz question"]);
let question=document.getElementById("question");

function myQuestion() {
    document.getElementById("question").innerHTML=a[`${counter}`]["quiz question"];
  } 
myQuestion();
// let c=1;
// let e = document.getElementById(`option_${c}`);
// console.log((e).innerText)
// console.log(a[0]["option one"]);


// function quizOptions() {
//     document.getElementById(`option_${c}`).innerHTML=a[0][`option ${c}`]
//     }
// console.log(document.getElementsByClassName("answer").innerText)
function answers(){
    for (let c=1; c<=4; c++) {   
        document.getElementById(`option_${c}`).innerHTML=a[`${counter}`][`option ${c}`]    
    }
}
answers()


// function counter() {
//     counter++
// }

submitBtn.addEventListener("click",()=>{
    console.log("I am being clicked")
    counter=counter+1;
    console.log(counter)
    console.log(a.length-1);
    if (counter<=(a.length-1)) {
   answers()
   myQuestion();
    }

})