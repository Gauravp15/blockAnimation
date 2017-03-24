$(window).load(function() {
    WhatIsTwo();
});

function WhatIsTwo(){

 var initAnimTL = new TimelineMax()
    initAnimTL
    
            .from(".bigBlock", 1, {y:-150, ease:Bounce.easeOut}, "0") 
            .from(".bigBlock", .7, {alpha:0, ease:Quint.easeOut}, "-=1") 
            .to([".block.b-1", ".block.b-2", ".block.b-3"], .1 ,{alpha:1}, "+=0")
            .to(".bigBlock", .5, {autoAlpha:0, ease:Quad.easeOut}, "+=0.1") 

            .to(".block.b-3", 1, {y:-40, ease:Quint.easeOut}, "+=0")     
            .to(".block.b-2", 1, {y:-20, ease:Quint.easeOut}, "-=1")    
            
            .from(".info.i-1", 1, {y:20, alpha:0, ease:Quint.easeOut}, "-=0")    
            .from(".line.l-1", 1, {css:{opacity:0, height:0}, ease:Quint.easeOut}, "-=.7") 
            .from(".info.i-2", 1, {y:20, alpha:0, ease:Quint.easeOut}, "-=.8")    
            .from(".line.l-2", 1, {css:{opacity:0, height:0}, ease:Quint.easeOut}, "-=.7") 
            .from(".info.i-3", 1, {y:20, alpha:0, ease:Quint.easeOut}, "-=.8")    
            .from(".line.l-3", 1, {css:{opacity:0, height:0}, ease:Quint.easeOut}, "-=.7") ;
    initAnimTL.stop();



  TweenMax.fromTo(initAnimTL, initAnimTL.totalDuration() ,{progress:0},{progress:1, ease:Linear.easeNone, delay:.5});

}
/*
function enableInteraction(){
  $('.block').click(function(){
    console.log(this);
  })
}*/
