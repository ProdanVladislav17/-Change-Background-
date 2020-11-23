let color = ["#FF0000","#FFFF00","#008000","#FFA500","#0000FF","#FFC0CB","#000000"];
let i = 0;
document.querySelector("button").addEventListener("click",

function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];

});