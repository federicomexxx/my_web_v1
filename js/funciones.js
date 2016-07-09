 $(document).ready(function() {
    
    stickyNavbar();
    toggleAnyButton();
    toogleInfoProject();
    animatedAnchor();
    toggleNav();
    toogleInfoContact();

    //inicializa reveal animation
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 240,
        callback: function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

//End document ready
});


function animatedAnchor() {
    $(document).ready(function() {
        $('a.btn-down').on('click', function() {
            event.preventDefault()
            var elementID = $(this).attr('href');
            var scrollLength = $(elementID).offset().top;
        
            $('html, body').animate({
                scrollTop : scrollLength
            }, 1300);
        });
    });
}



function toggleAnyButton() {
    // toogleButton(auxCont);
}


// //////////show contact info
// function toogleButton() {
//     $('.toggle_button').on('click', function() { 
//         event.preventDefault();
//         var thisBtn = $(this);
//         $(this).toggleClass('btn_open');
//         $(thisBtn).siblings('.toggle_content').toggleClass('open');
//     });
// }


function toogleInfoProject() {
    showProjectInfo();
    showProjectDescription();
}


function showProjectInfo() {

    $('.cont_info_project').each(function(){
        var contentInfoHeight = $(this).outerHeight();
        $(this).css('bottom', -contentInfoHeight);
        //console.log(contentInfoHeight);
    });

    $('.item_work').hover(
        function () {
            $(this).find('.cont_info_project').css('bottom', '0');
        }, 
        function () {
            $(this).find('.cont_info_project').each(function(){
                var contentInfoHeight = $(this).outerHeight();
                $(this).css('bottom', -contentInfoHeight);
            });

        }
    );
}


function showProjectDescription() {

    var auxCont = 1;

    $('.project_info').each(function(){
        var infoHeight = $(this).outerHeight();
        $(this).css('bottom', -infoHeight);
    });

    $('.btn_work').on('click', function() {
        event.preventDefault();
       
        var thisBtn = $(this);

        if(auxCont == 1) {
            $(this).addClass('btn_open');
            $(this).siblings('.project_info').css('bottom', '50px');
            auxCont = 0;
        } else {
            $(this).removeClass('btn_open');

            $(this).siblings('.project_info').each(function(){
                var infoHeight = $(this).outerHeight();
                $(this).css('bottom', -infoHeight);
            });
            auxCont = 1;
        }
    });
}


// //////////show contact info
function toogleInfoContact() {
    var auxCont = 1;

    $('.btn_info').on('click', function() {
        event.preventDefault();
        var thisBtn = $(this);
        if(auxCont == 1) {
            $(this).addClass('btn_open');
            $('.contact_info').slideDown('fast');
            auxCont = 0;
        } else {
            $(this).removeClass('btn_open');
            $('.contact_info').slideUp('fast');
            auxCont = 1;
        }
    });
}


// //////////show main menu
function toggleNav() {
    var auxCont = 1;
    var menuWidth = $('#main_menu').width();
    
    $('#btn_menu').on('click', function() {
        event.preventDefault();
        var thisBtn = $(this);

        if (auxCont == 1) {
            $('#main_menu').css('right','0');
            $(thisBtn).addClass('animated flash');
            $('.overlay_nav').css('display','block');
            $('.overlay_nav').on('click', function() {
                $(this).css('display','none');
                $('#main_menu').css('right', -menuWidth);
                auxCont = 1;
            });
            auxCont = 0;
        } else {
            $('#main_menu').css('right', -menuWidth);
            $(thisBtn).removeClass('animated flash');
            $('.overlay_nav').css('display','none');
            auxCont = 1;
        }

    });

}



// //////////fixed menu
function stickyNavbar() {
    $(window).scroll(function(){
        var windowPosition = $(this).scrollTop();
        var heightNavbar = $('#smart_navbar').height();
        
        if (windowPosition > (heightNavbar + 50)) {
            $('#smart_navbar').addClass('fixed_menu');
        } else {
            $('#smart_navbar').removeClass('fixed_menu');
        }
    });
}