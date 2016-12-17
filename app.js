
$(document).ready(function() {
    $("#cars").click(function(){
  $("#fun").attr("src", "http://www.vpcrc.com/images/g11.jpg")
  $("#fun").css("margin-left", "400px")
});

$("#poll").click(function(){
  $("#fun").attr("src", "http://images.indianexpress.com/2015/06/global-warming-l.jpg")
  $("#fun").css("margin-left", "400px")
});

$("#mal").click(function(){
  $("#fun").attr("src","http://sapiencia.eu/wp-content/uploads/2016/08/2cefeb5f5e72c9f38ad557eca1fe019f.jpg")
  $("#fun").css("margin-left", "400px");
});


   var x = 1300;
   
   function moveRight() {
     x = x + 20;
     $("#bear").css("left", x);
   }
  

  function moveLeft() { 
    x = x - 20; 
    if (x < 20) { 
      $("#garbage").css("display", "none");
    }
    $('#bear').css('left', x);
   } 

    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
            case 37:
				moveLeft(); 
				break;
			// Up Arrow Pressed
			case 38:
				//$('#bear').animate({up: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				moveRight();
				break;
			// Down Arrow Pressed
			case 40:
				//$('#bear').animate({down: "+=10px"}, 'fast');
				break;
		}
	});
   
 });


