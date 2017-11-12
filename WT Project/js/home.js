var commentBox=function()
{
	var fixmeTop = $('.fixme').offset().top;       // get initial position of the element
		console.log("fixme"+fixmeTop)
		$(window).scroll(function()
		{

    		var currentScroll = $(window).scrollTop(); // get current position
			console.log("current"+currentScroll)
    		if ((currentScroll >= fixmeTop)&&(currentScroll>590)&&(currentScroll<2180))
    		{
        			$('.fixme').css
        			({
            			position: 'fixed',
            			top: '0',
            			left: '0'
        			});
    		}
    		else if (currentScroll<595)
    		{
    			$('.fixme').css
    			({
    			position: 'absolute',
				top:'595'
				});
        		}
        		else if (currentScroll>2185)
    		{
    			$('.fixme').css
    			({
    			position: 'absolute',
				top:'2185'
				});
			}
		});


}
commentBox();

var slideshow=function()
{
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
}
slideshow();
