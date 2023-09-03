const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y: -15,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".anime-elem", {
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
    })
    .from ("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
    })
}

function circleDistort(){
    var xprev = 0;
    var yprev = 0;
    var diffx = 0;
    var diffy = 0;

    window.addEventListener("mousemove",function(det){
         diffx = det.clientX - xprev
         diffy = det.clientY - yprev
         xprev = det.clientX
         yprev = det.clientY
         
         if(diffx<0.8){
            diffx=0.8
         }else if(diffx>1.2){
            diffx = 1.2;
         }
         else if(diffx>0.8&&diffx<1.2) {
            diffx = diffx
         }
         if(diffy<0.8){
            diffy=0.8
         }else if(diffy>1.2){
            diffy = 1.2;
         }
         else if(diffy>0.8&&diffy<1.2){
            diffy = diffy
         }
         mouseCircleMove(diffx, diffy)
    })
}

document.querySelectorAll(".elem").forEach(function(e){ 
    e.addEventListener("mouseleave",function(det){
       gsap.to(e.querySelector("img"),{
        opacity: 0,
        ease: Power1,
       });  
       gsap.to(e.querySelector("h1"),{
        opacity: 0.5,
        translateX: 0
    })
       
    })

    var rotate = 0;
    var diffrot = 0;
     
    e.addEventListener("mousemove",function(det){
        var diff = det.clientY - e.getBoundingClientRect().top; 
        diffrot = det.clientX - rotate
        rotate = det.clientX
        gsap.to(e.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top: diff,
        left: det.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot*.5)
        })
        gsap.to(e.querySelector("h1"),{
            opacity:0.2,
            translateX: 40
        })
          
    });
});




function mouseCircleMove(x,y){
    window.addEventListener("mousemove",function(det){
        document.querySelector("#mini-circle").style.transform = `translate(${det.clientX}px,${det.clientY}px) scale(${x}, ${y})`
    })
}
circleDistort();
mouseCircleMove();
firstPageAnim();