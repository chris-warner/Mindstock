$(document).ready(function(){
    "use strict";
        var window_width 	 = $(window).width(),
        window_height 		 = window.innerHeight,
        header_height 		 = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen 			 = window_height - header_height;
       
        $(".fullscreen").css("height", "70vh")
        $(".fitscreen").css("height", fitscreen);
    
})