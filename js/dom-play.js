// alert("It's working!");

let actors = document.querySelectorAll(".hamlet");

for (let i = 0; i < actors.length; i++){

// actors[i].style.backgroundColor = "yellow";
// document.querySelectorAll(".hamlet").style.background = "yeloow";

}

function highlight(el){
    if(el.style.backgroundColor == "yellow"){
        el.style.backgroundColor = 'white';

    }else{
        el.style.backgroundColor = 'yellow';
    }
}