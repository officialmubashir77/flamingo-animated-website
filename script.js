    const tl = gsap.timeline() ;

tl
.from(".section" , {
    stagger : .3 ,
    width: 0 ,
    duration : 2, 
    opacity : 0 ,
    ease : "Expo.easeInOut" ,
})
.from("nav a" , {
    stagger : .1 ,
    x : 30 ,
    duration : 1.5 ,
    opacity : 0 ,
    ease : "Expo.easeInOut"
} , "-=1")
.from("#circle" , {
    rotate : "90deg",
    opacity : 0 ,
    duration : 2 ,
    ease : "Expo.easeInOut"
} , "-=0.5")
.from("#vsmcircle" , {
    rotate : "-90deg",
    duration : 2 ,
    ease : "Expo.easeInOut"
} , "-=1.5")
.from("#vsmcircle i" , {
    opacity : 0 ,
    scale : .6 ,
    ease : "Expo.easeInOut",
    duration : 1 ,
} , "-=.5")
.from("#circle img" , {
    y : 800 ,
    duration : 1.5 ,
    ease : "Expo.easeInOut",
} , "-=1")
.from("#list .lists" , {
    opacity : 0 ,
    stagger : .2 ,
    y : 60 ,
    duration : 3 ,
    ease : "Expo.easeInOut",
} , "-=3")
