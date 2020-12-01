$(function(){
	$(function(){
            $(document).ready(function(){


  $('.ar').click(function(){
  	$('.box1-ar').show();
    $('.body-container-2').show();
    $('.end-box1').show();
  	$('.box1-en').hide();
    $('.box1-en').hide();
    $('.body-container').hide();
  
      return false;
    });
    
  $('.en').click(function(){
    $('.body-container').show();
     $('.body-container-2').hide();
    $('.box1-ar').hide();
    $('.end-box').show();
    $('.box1-en').show();
    $('.end-box1').hide();

    return false;
  });
  });
});
});