  var yourHeader = $("#first-page").height();

  $(document).ready(function(){
   $(window).scroll(function() {
       if($(window).scrollTop()> yourHeader){
            $("#navbar").css("position", "fixed");
            $("#navbar").css("top", 0);
            $("#navbar").css("width", "100%");
            $("#navbar").css("z-index","1");
            $("#myimg").css("display", "block");
            $("#logoimg").css("display", "none");
            $("#second-page").css("padding-top", "100px");
            $("#fourth-page").css("padding-top", "100px");
           
     } else {
            $("#navbar").css("position", "relative");
            $("#myimg").css("display", "none");
            $("#logoimg").css("display", "block");
            $("#second-page").css("padding-top", "0");
            $("#fourth-page").css("padding-top", "0");
       }
   });
});

// " INSPIRATIE " - mai simplu pentru scroll in functie de dimensiunea header-ului.

/* var yourNavigation = $("#navbar");
    stickyDiv = "sticky";
    yourHeader = $('#first-page').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
}); */

$(document).ready(function() {
   $("#Arata").click(function() {
      $("#arata").css("display","block");
      $("#arata1").css("display", "none");
      $("#arata2").css("display", "none");
      $("#arata3").css("display", "none");
      $("#arata4").css("display", "none");
   }); 
});

$(document).ready(function() {
   $("#Arata1").click(function() {
      $("#arata1").css("display","block");
      $("#arata").css("display", "none");
      $("#arata2").css("display", "none");
      $("#arata3").css("display", "none");
      $("#arata4").css("display", "none");
   }); 
});

$(document).ready(function() {
   $("#Arata2").click(function() {
      $("#arata1").css("display","none");
      $("#arata").css("display", "none");
      $("#arata2").css("display", "block");
      $("#arata3").css("display", "none");
      $("#arata4").css("display", "none");
   }); 
});

$(document).ready(function() {
   $("#Arata3").click(function() {
      $("#arata1").css("display","none");
      $("#arata").css("display", "none");
      $("#arata2").css("display", "none");
      $("#arata3").css("display", "block");
      $("#arata4").css("display", "none");
   }); 
});

$(document).ready(function() {
   $("#Arata4").click(function() {
      $("#arata1").css("display","none");
      $("#arata").css("display", "none");
      $("#arata2").css("display", "none");
      $("#arata3").css("display", "none");
      $("#arata4").css("display", "block");
   }); 
});



// THE PROGRESS BAR //

