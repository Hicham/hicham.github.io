let scroller = document.getElementsByClassName('scroller');
let trigger = false;

for (let i = 0; i < scroller.length; i++){

    window.setInterval(function(){
        if (trigger){
            trigger = false;
            scroller[i].style.opacity = 1;
        }else{
            trigger = true;
            scroller[i].style.opacity = 0;
        }
    }, 2000);
}
