<!--hide script from old browsers
/*DO NOT ERASE! VERSION:&MeetProTemplate_v1.0*/

        var $prev_event;
        var $current_event;
        var $next_event;
        var ev_top_stuck;
        var ev_top_unstuck;
        $(document).ready(function() {
            $current_event = $('.event').first();
            $current_event.prev('.event')[0] ? $prev_event = $current_event.prev('.event') : $prev_event = null;
            $current_event.next('.event')[0] ? $next_event = $current_event.next('.event') : $next_event = null;
        });
        
        
        
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        $(window).resize(function() {
            if($(window).width() >= 992 && !$('.sidebar').is(':visible'))
                $('.sidebar').show();
        });        
            
        $('.event-list li > a').click(function() {
            event.preventDefault();
            var offset;
            $(this).parent().hasClass('active') ? offset = 0 : offset=-30;
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, offset);
            if($(this).parent().parent().parent().hasClass('collapse')) {
                $('#mob-ev-list').collapse('hide');
            } else if($(window).width() < 992) 
                $('.sidebar').hide();
            $current_event.children('.event-header').addClass('static');
            $current_event.children('.event-header').removeClass('fixed');
            $current_event.children('.event-header').removeClass('stuck');
            $current_event.css('padding-top', ev_top_unstuck + 'px');
            $('[data-spy="scroll"]').each(function () {
              var $spy = $(this).scrollspy('refresh')
            });
            if($(this).attr('href') == '#top') {
                $current_event = $('.event').first();
            }    
            else {
                $current_event = $($(this).attr('href'));
            }    
            $current_event.prev('.event')[0] ? $prev_event = $current_event.prev('.event') : $prev_event = null;
            $current_event.next('.event')[0] ? $next_event = $current_event.next('.event') : $next_event = null;
            $current_event.children('.event-header').removeClass('static');
            $current_event.children('.event-header').addClass('fixed');
            $current_event.children('.event-header').addClass('stuck');
            $current_event.css('padding-top', ev_top_stuck + 'px');
            $('.nav-title').addClass('col-sm-9');
            $('.nav-title').removeClass('col-sm-6');
        });    
        
        function menuButton() {
            if($(window).width() < 992 && $(window).width() >= 768)
                $('.sidebar').toggle();
        }
        
        function toTop() {
            event.preventDefault();
            $current_event.children('.event-header').addClass('static');
            $current_event.children('.event-header').removeClass('fixed');
            $current_event.children('.event-header').removeClass('stuck');
            $('#top')[0].scrollIntoView();
            $current_event = $('.event').first();
            $next_event = $current_event.next('.event');
            $current_event.children('.event-header').removeClass('static');
            $current_event.children('.event-header').addClass('fixed');
            $current_event.children('.event-header').addClass('stuck');
            return false;
        }    
            
        $(window).scroll(function() {
           if($(window).width() < 768) {
               ev_top_stuck = 108;
               ev_top_unstuck = 35;
           }   
           else {
               ev_top_stuck = 93;
               ev_top_unstuck = 0;
           }       
            
          if (vert_collision($('#meet-nav'), $current_event)) {
             $current_event.children('.event-header').removeClass('static');
             $current_event.children('.event-header').addClass('fixed');
             $current_event.children('.event-header').addClass('stuck');
             $current_event.css('padding-top', ev_top_stuck + 'px');
             $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
             });
             $('.nav-title').addClass('col-sm-9');
             $('.nav-title').removeClass('col-sm-6');

          }
           if(vert_collision($('#meet-header'), $current_event.children('.event-header'))) {
            $current_event.children('.event-header').addClass('static');
            $current_event.children('.event-header').removeClass('fixed');
            $current_event.children('.event-header').removeClass('stuck');
            $current_event.css('padding-top', ev_top_unstuck + 'px');
            $('.nav-title').removeClass('col-sm-9');
            $('.nav-title').addClass('col-sm-6');
            
            $('[data-spy="scroll"]').each(function () {
              var $spy = $(this).scrollspy('refresh')
            });
             
           }
        
            
          if($next_event && (vert_collision($current_event.children('.event-header'), $next_event.children('.event-header')) || vert_collision($current_event.children('.event-header'), $next_event) )) {
            $current_event.children('.event-header').addClass('static');
            $current_event.children('.event-header').removeClass('fixed');
            $current_event.children('.event-header').removeClass('stuck');
            $current_event.css('padding-top', ev_top_unstuck + 'px');
            $next_event.children('.event-header').removeClass('static');
            $next_event.children('.event-header').addClass('fixed');
            $next_event.children('.event-header').addClass('stuck');
            $next_event.css('padding-top', ev_top_stuck + 'px');
            $('[data-spy="scroll"]').each(function () {
              var $spy = $(this).scrollspy('refresh')
            });
            $current_event = $('.stuck').parent();
            $current_event.next('.event')[0] ? $next_event = $current_event.next('.event') : $next_event = null;
            $prev_event = $current_event.prev('.event');
          } 
            
            if($prev_event && vert_collision($prev_event, $current_event.children('.event-header'))) {
                $current_event.children('.event-header').addClass('static');
                $current_event.children('.event-header').removeClass('fixed');
                $current_event.children('.event-header').removeClass('stuck');
                $current_event.css('padding-top', ev_top_unstuck + 'px');
                $prev_event.children('.event-header').removeClass('static');
                $prev_event.children('.event-header').addClass('fixed');
                $prev_event.children('.event-header').addClass('stuck');
                $prev_event.css('padding-top', ev_top_stuck + 'px');
                $('[data-spy="scroll"]').each(function () {
                  var $spy = $(this).scrollspy('refresh')
                });
                $current_event = $('.stuck').parent();
                $next_event = $current_event.next('.event');
                $current_event.prev('.event')[0] ? $prev_event = $current_event.prev('.event') : $prev_event = null;
          }  
       });
    } else {
        $('.event-list li > a').click(function() {
            event.preventDefault();
            $('#mob-ev-list').collapse('hide');
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, -60);
        });    
        if (vert_collision($('#meet-nav'), $('.event'))) {
            $('.nav-title').addClass('col-sm-9');
            $('.nav-title').removeClass('col-sm-6');
        }
        if (vert_collision($('#meet-header'),$('#meet-nav'))) {
            $('.nav-title').removeClass('col-sm-9');
            $('.nav-title').addClass('col-sm-6');
        }
    }    
        function vert_collision($div1, $div2) {
          var y1 = $div1.offset().top;
          var h1 = $div1.outerHeight(true);
          var b1 = y1 + h1;
          var y2 = $div2.offset().top;
          var h2 = $div2.outerHeight(true);
          var b2 = y2 + h2;
  
          if (b1 < y2 || y1 > b2) return false;
          return true;
        }
// end hide script from hold browsers-->