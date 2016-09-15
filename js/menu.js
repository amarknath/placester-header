$(document).ready(function() {
    (function($) {

        $('#placester-menu-icon').click(function(e) {
            e.preventDefault();
            var menu_pusher=document.getElementById('placester-menu-pusher');
            menu_pusher.appendChild(document.body.childNodes[2]);
            menu_pusher.style.height = "100%"
            $('#placester-header-container').toggleClass('with--sidebar');
        });

        $('#placester-menu-close').click(function(e) {
        	$('#placester-header-container').removeClass('with--sidebar');
        	document.getElementById('placester-menu-pusher').style.height = "initial";
        	var content=document.getElementById('placester-menu-pusher').lastChild;
        	document.body.insertBefore(content,document.body.childNodes[2]);
            
        });

    })(jQuery);
});