$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".navbar").css({"background":"white" , "box-shadow" : "0 2px 15px rgba(0,0,0,0.76)"});
            $(".navbar  li a").css("color" , "blue");
         
        }else{
            $(".navbar").css({"background":"" , "box-shadow" : ""})
            $(".navbar  li a").css("color" , "white");
        }
    })
})
  $(document).ready(function(){
      $(window).scroll(function(){
          let button = document.getElementById("myBtn");
         let showw = $(window).scrollTop();

          if(showw > 190){
            button.style.transition = " all 1s ease";
              $(button).css("display" , "block");
        
          
        
                }else{
              button.style.transition = "all 1s ease";
         
             $(button).css("display" , "none");
          }
      })

     
  })
 

 
  function topFunction() {
 document.body.scrollTop = 0; // For Chrome, Safari and Opera 
 document.documentElement.scrollTop = 0; // For IE and 


      
    }




    



                
          function page(){
            document.getElementById("home").style.display = "none";
              document.getElementById("load").style.display = "none";
              document.getElementById("show").style.display = "block";
          }      
                setInterval(page , 1000);