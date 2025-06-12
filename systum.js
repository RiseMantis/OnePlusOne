const container = document.querySelector("#container");
const screen = document.querySelector("#screen");
let cnt = 0;

let value1 = "";
let value2 = "";
let opt = "";
opr = ["+", "-", "*", "/"];

function Calc(val1, val2, operate){
    num1 = parseInt(val1);
    num2 = parseInt(val2);
    switch(operate){
        case "+":
            return (num1+num2);
        case "-":
            return (num1-num2);
        case "*":
            return (num1*num2);
        case "/":
            return (num1/num2);
    }
}

function Val(j){
    if(opt == ""){
        value1 += j.toString();
        console.log(value1);
    }
    else{
        value2 += j.toString();
        console.log(value2);
    }
}

for(let i = 0; i<= 4; i++){
    
    const row = document.createElement("div");
    row.setAttribute("style", "display:flex;");

    for(let k=0; k<=1; k++){
        const btn = document.createElement("button");
        btn.setAttribute("style","flex:1 1 0; background-color:green; color:white;");
        btn.textContent = cnt.toString();
        btn.classList.add("btn");
        console.log(cnt);
        btn.addEventListener("click", function(e){Val(i*2 + k); disp();});
        cnt++;
        row.appendChild(btn);
        if(cnt%2 == 1){
            container.appendChild(row);
        }
    }
}

for(let i = 0; i<4; i++){
    const arith = document.createElement("button");
    arith.setAttribute("style","flex:1 1 0; background-color:green; color:white;");
    arith.textContent = opr[i];
    arith.classList.add("btn");

    arith.addEventListener("click", function(e){opt = opr[i]; console.log(opt); disp();});
    container.appendChild(arith);
}

let ans = document.createElement("button");
ans.setAttribute("style","flex:2 1 auto; background-color:orangered; color:white;");
ans.classList.add("btn");
ans.textContent = "Answer";
ans.addEventListener("click", function(e){value1 = Calc(value1, value2, opt); opt=""; value2=""; disp();});

container.appendChild(ans);

//screen :
const text = document.createElement("div");
text.setAttribute("style", "font-size: 100px; font-weight:bold;");
text.textContent = "|";
screen.appendChild(text);
function disp(){
    if(screen.contains(text)){
        screen.removeChild(text);
    }
    text.textContent = value1 + opt + value2 + "|";
    screen.appendChild(text);
}
