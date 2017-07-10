 $(function() {
    $(".rslides").responsiveSlides();
  });

// OPS //

(function(){
    
    var display = $('.maincontent__soldr');
    var sections = $('.section');
    var inScroll = false;
    
    /**
    * Транзишн до секции
    *@param {integer} sectionEq
    */
    
    var performTransition = function(sectionEq) {
    var position = (sectionEq * -100) + '%';
        
        if(inScroll) return;
        inScroll = true;
        
    sections.eq(sectionEq).addClass('active')
      .siblings().removeClass('active');  
        
        display.css({
            'transform' : 'translate(0, '+ position +')'
        });
        
        setTimeout(function(){
            inScroll = false;
            
            $('.vertical-menu__buttons').eq(sectionEq).addClass('vertical-menu__link-active')
                .siblings().removeClass('vertical-menu__link-active')
            
        }, 1300);
    };
    
    $('.wrapper').on('wheel', function (e){
        var activeSection = sections.filter('.active');
        var nextSection = activeSection.next();
        var prevSection = activeSection.prev();
        
        if (e.originalEvent.deltaY > 0 && nextSection.length) { // скроллим вниз
            
            
          performTransition(nextSection.index());  
        }  
        
        if (e.originalEvent.deltaY < 0 && prevSection.length) { // скроллим вверх
           performTransition(prevSection.index());
        } 
    });
    
    $('.vertical-menu__link, .horizontal-menu__link, .order__button, .production__buy, .slide__link').on('click', function(e){
       performTransition($(this).attr('href'));

        e.preventDefault();
        

    });
    
    
})();