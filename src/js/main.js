const burger=document.querySelector(".burger> div");
const burgerdr=document.querySelector(".burger > ul");
let i=true; 
burger.addEventListener("click",function(){
    if(i){burgerdr.style.display="block"
    i=false;
}
    else{burgerdr.style.display="none"
    i=true;
}
})