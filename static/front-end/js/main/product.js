
var product = {
    comment : function(){
        $.post(laroute.route('home.product.comment'), $('#form-comment').serialize(), function(res){
            if(!res.error)
            {
                $('#popup-comment').modal();
                $('#form-comment').trigger("reset");
            }
            else
            {
                $('#my-popup').html(res.data);
                $('#my-popup').find('#popup-error').modal();
                $('#form-comment').find('.box-code').html(res.captcha);
            }
        });
    }
};