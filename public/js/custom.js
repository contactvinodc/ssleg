function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<span>Read more</span>"; 
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "<span>Read less</span>"; 
    moreText.style.display = "inline";
    }
}
function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
  dots.style.display = "flex";
  btnText.innerHTML = "<span>Load More</span>"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "<span>Read less</span>"; 
  moreText.style.display = "flex";
  }
}
$(function(){
    // Wrap your File input in a wrapper <div>
    var wrapper = $('<div/>').css({height:0,width:0,'overflow':'hidden'});
    var fileInput = $(':file').wrap(wrapper);

    // When your file input changes, update the text for your button
    fileInput.change(function(){
      $this = $(this);
      // If the selection is empty, reset it
      if($this.val().length == 0) {
        $('#file').text("No file chosen");
      }else{
        $('#file').text($this.val());
      }
    })

    // When your fake button is clicked, simulate a click of the file button
    $('#file').click(function(){
      fileInput.click();
    }).show();
  });
$(document).ready(function(){
    
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
$('.filter-button').on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})
});
