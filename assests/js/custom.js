
    $(document).ready(function(){

        $('.log-button .send').focus(function(){
           
            // $('.community .stable').html($('.modal-content .req').html());
            $('.log-button .send').css('box-shadow','none');
        });
        $('.log-button .send').click(function(){
            let name= $('#name').val();
            let pass= $('#pass').val();
            // $('.community .stable').html($('.modal-content .req').html());
            if(name == '' || pass == ''){
                $('.community .stable').html('<span style="color:white;background:red;width:100%;display:block;font-size:14px;padding:5px 0px;">ERROR: All fields are required</span>');
            }else{
                $('.community .stable').html('<span style="color:white;background:green;width:100%;display:block;font-size:14px;padding:5px 0px;">SUCCESS: Data Stable</span>'); 
            }
        });

        $('.menu-list .navbar-nav .nav-item .hello').click(function(){
            $('.sign-in-form').show();
        });

        
        
        $('.our-slider').owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            mouseDrag:false,
            nav:true,
            animateIn:'fadeIn',
            animateOut:'fadeOut',
            navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        });
        $('.gallary-view p a').prettyPhoto({
            animation_speed: 'slow',
            theme: 'dark_square'
        });

        // $('.product-category-and-button .product-cat-all-btn #buns').click(function(){
        //     $('.product-template #bb').hide();
        // });

        // $('.log-button .send').click(function(){
        //     let name= $('#name').val();
        //     let pass= $('#pass').val();
        //     let check= $('#check').val();

        //     if(name==''|| pass==''|| check==''){
        //         $('.community h5').html('all field required');
        //     }
        // });
    });


// $('.our-slider').owlCarousel({
//     items:1,
//     autoplay:true,
//     loop:true,
//     mouseDrag:false,
//     nav:true,
//     animateIn:'fadeIn',
//     animateOut:'fadeOut',
//     navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
// });
// $('.gallary-view p a').prettyPhoto();