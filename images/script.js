$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.nav').addclass("sticky"); 
        }else
    })
})