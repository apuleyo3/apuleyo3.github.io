$(function() {
    $('a[href*="#"]').smoothscroll();

    $('span#Modules').click(function(e){
        //doModule();
        //e.preventDefault();
    });
    $('.do-module').click(function(e){
        //doModule();
        //e.preventDefault();
    });
    $('span#overlay-close').click(function(){
        doModule(false);
    });

    $('.lgroup li.list-group-item').click(function(){
        let idx = parseInt($(this).index()) + 1;
        let tgt = '#m1-u' + idx;

        $('.module-item').collapse('hide')
        $(tgt).collapse('show')

        $('.lgroup li.list-group-item').removeClass('active');
        $(this).addClass('active')


    });
    
    $('.mod-wrp').click(function(){
        let nidx = $(this).attr('data-mod');
        let elem = '#left-nav-' +  nidx;
        
        if($(elem).hasClass('show')){
            $(elem).collapse('hide')
        }else{
            $(elem).collapse('show')
        }
        
    });
});

function doModule(a = true){
    if(a == true){
        $('div#module-overlay').addClass('active');
    }else{
        $('div#module-overlay').removeClass('active');
    }
}