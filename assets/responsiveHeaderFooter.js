$(document).ready(function() {
    function adjustTitle() {
        var win = $(window);
        if (win.width() <= 768) { 
            $('.header-title-kanji').text('蘆洲会');
            $('.header-title-english').text('Roshukai');
            $('.footer-area-text').text('© 2024 TAR UK');
            $('td:nth-child(5), th:nth-child(5)').hide();
        } else {
            $('.header-title-kanji').text('東京足立蘆洲会');
            $('.header-title-english').text('Tokyo Adachi Roshukai UK');
            $('.footer-area-text').text('© 2024 Tokyo Adachi Roshukai UK');
            $('td:nth-child(5), th:nth-child(5)').show();
        }
        if (win.width() <= 600) { 
            $('#bridge-image').attr('src', '../assets/images/bridge_sq.jpg');
            $('#dojo-image').attr('src', '../assets/images/dojo_s_sq.png');
            $('#teachers-welcome').attr('src', '../assets/images/teachers-welcome-sq.jpg');
            $('#dojo-cho').attr('src', '../assets/images/jhg_v48_edited_sq.jpg');
            $('#river-of-time').attr('src', '../assets/images/river-of-time-s-sq.png');
        } else {
            $('#bridge-image').attr('src', '../assets/images/bridge.jpg');
            $('#dojo-image').attr('src', '../assets/images/dojo_s.png');
            $('#teachers-welcome').attr('src', '../assets/images/teachers-welcome.jpg');
            $('#dojo-cho').attr('src', '../assets/images/jhg_v48_edited.jpg');
            $('#river-of-time').attr('src', '../assets/images/river-of-time-s.png');
        }
    }

    // Run adjustTitle on page load
    adjustTitle();

    // Run adjustTitle on window resize
    $(window).on('resize', adjustTitle);
});

$(document).ready(function() {
    // Check if page is scrolled more than 20px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    // Scroll to the top of the document
    $('#scroll-to-top').click(function() {
        $(this).addClass('scrolling'); // Add the 'scrolling' class
    
        // Change the src attribute of the image
        var img = $(this).find('img');
        var src = img.attr('src');
        img.attr('src', ''); // Clear the src
        img.attr('src', src + '?' + new Date().getTime()); // Set the src to a new URL
    
        $('html, body').animate({scrollTop : 0}, {
            duration: 1500,
            easing: 'easeInOutQuad', // Starts slow, speeds up, then ends slow
            complete: function() {
                $('#scroll-to-top').removeClass('scrolling'); // Remove the 'scrolling' class
            }
        });
        return false;
    });
});