const list = document.querySelectorAll("li");
console.log(list);

const removes = list[9];
console.log(removes);
removes.classList.add("remove");

const btn = document.querySelector(".btn");
console.log(btn);

let a = 0;

btn.addEventListener("click",function(){
    if(a == 0){
        removes.classList.remove("remove");
        a = 1;
    }else{
        removes.classList.add("remove");
        a = 0;
    }
})

const states = document.querySelectorAll(".state");
console.log(states);
for(let i=0;i<states.length;i++){
    if(states[i].innerHTML == "true"){
        states[i].innerHTML = "販売中";
    }else{
        states[i].innerHTML = "売り切れ";
    }
}