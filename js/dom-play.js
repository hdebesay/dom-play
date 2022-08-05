// alert("It's working!");


// for (let i = 0; i < actors.length; i++){

// actors[i].style.backgroundColor = "yellow";
// document.querySelectorAll(".hamlet").style.background = "yeloow";

// }

function myAlert(){
    alert("I'm Clicked!");
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click", function(ev){
        highlightActor(mySpan.dataset.actor);
    });
    // alert(mySpan.dataset.actor);
    
}

function highlightActor(actor){
    
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor = 'yellow';

        }else{//not current actor, remove highlight
            mySpan.style.backgroundColor = 'white';
        }
    }
    
}

// function highlight(el){
//     if( el.style.backgroundColor == "yellow"){
//         el.style.backgroundColor = 'white';

//     }else{
//         el.style.backgroundColor = 'yellow';
//     }
// }