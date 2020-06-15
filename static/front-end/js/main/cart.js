var cart = {
    _app_id : '',
    _is_mobile : 0,
    _init : function(){

    },

    _initFB : function(){
        window.fbAsyncInit = function() {
            FB.init({
                appId            : cart._app_id,
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v3.0'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

    btnShareFB : function(href_share){
        $('#fade').show();

        if(cart._is_mobile)
        {
            window.location.href = "https://www.facebook.com/dialog/share?app_id= " + cart._app_id + " &display=popup&hashtag=%23SieuThiHangPhap&href="+ cart._hrefShare;
        }
        else
        {
            FB.ui({
                    method: 'share',
                    href: cart._hrefShare,
                    hashtag: '#SieuThiHangPhap'
                },
                // callback
                function (response) {
                    if(response && !response.error_message)
                    {
                        $('#ajax-loading').hide();
                        window.location.href = cart._hrefShare;
                    }
                });
        }

        $('#fade').hide();
    },

    payment : function(){
        $.post(laroute.route('home.payment'), $('#frm-payment').serialize(), function(res){
            if(!res.error)
            {
                window.location.href = laroute.route('home.payment.success');
            }
            else
            {
                $('#my-popup').html(res.data);
                $('#my-popup').find('#popup-error').modal();
                $('#frm-payment').find('.box-code').html(res.captcha);
            }
        });
    },

    wishlist : function(obj, id){
        $.post(laroute.route('home.cart.add-to-wishlist'), {product_id:id}, function(res){
            if(!res.error)
            {
                $(obj).closest('.item-heart').removeAttr('onclick').find('.wl-img').attr('src','/static/front-end/images/heart-checked.png');
                $('#popup-wishlist-ok').modal();
            }
            else
            {
                $('#popup-not-loggin').modal();
            }
        });
    },

    removeWishlist : function(obj, id){
        $.post(laroute.route('home.cart.remove-wishlist'), {product_id:id}, function(res){
            if(!res.error)
            {
                $(obj).closest('tr').remove();
            }
        });
    },

    loadCart: function(){
        $.post(laroute.route('home.cart.load-cart'), {}, function(res){
            if(!res.error)
            {
                $('#cart-qty').html(res.total_qty);
                $('#cartformpage').html(res.data);
            }
        });
    },

    addToCart : function (id, qty) {
        $.post(laroute.route('home.cart.add-to-cart'), {product_id:id, qty:qty}, function(res){
            if(!res.error)
            {
                $('#cart-qty').html(res.data);
                $('#popup-order-cart').modal();
            }
        });
    },

    addToCartNow : function (id, qty) {
        $.post(laroute.route('home.cart.add-to-cart'), {product_id:id, qty:qty}, function(res){
            if(!res.error)
            {
                window.location.href = laroute.route('home.cart');
            }
        });
    },

    changeQty : function(id, qty){
        $.post(laroute.route('home.cart.update'), {product_id:id, qty:qty}, function(res){
            if(!res.error)
            {
                cart.loadCart();
            }
        });
    },

    removeProduct : function(id){
        $.post(laroute.route('home.cart.remove-product'), {product_id:id}, function(res){
            if(!res.error)
            {
                cart.loadCart();
            }
        });
    },
}