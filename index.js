let a;
let score=0;
a =[{"quiz question":"What is your home country?",
"option 1":"india",
"option 2" : "canada",
"option 3" : "pakistan",
"option 4" : "srilanka",
"answer": "india"},
{"quiz question":"I love Sabbo?",
"option 1":"sanjeev",
"option 2" : "pankaj",
"option 3" : "Sanju",
"option 4" : "Thankur",
"answer":"sanjeev"},
{"quiz question":"Name of hanumana?",
"option 1":"Anajani k laal",
"option 2" : "kesari k laal",
"option 3" : "dukhbhanjan",
"option 4" : "maruti",
"answer":"maruti"}];

let counter =0;
const submitBtn= document.getElementById("submit");
let question=document.getElementById("question");
function myQuestion() {
    document.getElementById("question").innerHTML=a[`${counter}`]["quiz question"];
  } 
myQuestion();

function evaluate(){
    for (let c=1; c<=4; c++) {   
        // document.getElementById(`option_${c}`).innerHTML=a[`${counter}`][`option ${c}`]          
        // console.log(typeof(document.getElementById(`${c}`).checked))
       if (document.getElementById(`${c}`).checked) {
        if (document.getElementById(`option_${c}`).innerText==a[`${counter}`-1]["answer"]) {
            score=score+1
            console.log(document.getElementById(`option_${c}`).innerText)
            console.log(a[`${counter}`-1]["answer"])
            console.log(`counter is ${counter} and c is ${c}`)
        }
       }
        
          
        
    }
}


function reset() {
    for (let c=1; c<=4; c++) {
        document.getElementById(`${c}`).checked=false
        

    
}}
function reload() {
    for (let c=1; c<=4; c++) {
        
        document.getElementById(`option_${c}`).innerHTML=a[`${counter}`][`option ${c}`]

    
}}
reload();


function result() {
    for (let c=1; c<=4; c++) {
        
        document.getElementById(`option_${c}`).innerHTML=`YOUR SCORE IS ${score}`

    
}}
submitBtn.addEventListener("click",()=>{
    counter=counter+1;
       if (counter<=(a.length-1)) {
   evaluate ()
   myQuestion();
   console.log(score);
   reset()
   reload()
    }
    else{
        evaluate()
        console.log(`your total score is ${score}`);
        reset()
        result()
        quiz.innerHTML =` 
        <div class = "result">
        <h2> your score is ${score} </h2>
        </div>`;
    }
    
})