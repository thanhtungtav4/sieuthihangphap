var Profile = {
    _init : function(){
        $(document).ready(function(){
            // province change
            $('.s-province').change(function(){
                var val = $(this).val();
                $.get(laroute.route('home.address.get-district', { province_id: val }), function(e) {
                    $('.s-district').html(e);
                    $('.s-district').change();
                });
            });

            // district change
            $('.s-district').change(function(){
                var val = $(this).val();
                $.get(laroute.route('home.address.get-ward', { district_id: val }), function(e) {
                    $('.s-ward').html(e);
                    $('.s-ward').change();
                });
            });
        });
    },

    login : function(){
        $.post(laroute.route('home.login'), $('#frm-login').serialize(), function(res){
            if(!res.error)
            {
                window.location.href = laroute.route(res.data);
            }
            else
            {
                $('#my-popup').html(res.html);
                $('#my-popup').find('#popup-error').modal();
            }
        });
    },

    updateProfile: function(){
        $.confirm({
            title: "Thông báo",
            content: 'Bạn có chắc muốn thay đổi thông tin',
            theme: 'material',
            type: 'red',
            typeAnimated: true,
            confirmButton: 'OK',
            buttons: {
                confirm: {
                    text: 'Đồng ý!',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post(laroute.route('home.profile.update'), $('#frm-update').serialize(), function(res){
                            if(!res.error)
                            {
                                location.reload();
                            }
                            else
                            {
                                $('#my-popup').html(res.data);
                                $('#my-popup').find('#popup-error').modal();
                            }
                        });
                    }
                },
                cancel: {
                    text: 'Thoát!',
                    btnClass: 'btn-default',
                }
            },
        })

        $('#btnRegister').click(function() {
            $.post(laroute.route('home.user.register'), $('#frmRegisterUser').serialize(), function(res){
                if(!res.error)
                {
                    window.location.href = laroute.route(res.data);
                }
                else
                {
                    $('#my-popup').html(res.data);
                    $('#my-popup').find('#popup-error').modal();
                    $('#frmRegisterUser').find('.box-code').html(res.captcha);
                }
            });
        });
    },

    changePass: function(){
        $.confirm({
            title: "Thông báo",
            content: 'Bạn có chắc muốn đổi mật khẩu',
            theme: 'material',
            type: 'red',
            typeAnimated: true,
            confirmButton: 'OK',
            buttons: {
                confirm: {
                    text: 'Đồng ý!',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post(laroute.route('home.profile.change-pass'), $('#frm-change-pass').serialize(), function(res){
                            if(!res.error)
                            {
                                location.reload();
                            }
                            else
                            {
                                $('#my-popup').html(res.data);
                                $('#my-popup').find('#popup-error').modal();
                            }
                        });
                    }
                },
                cancel: {
                    text: 'Thoát!',
                    btnClass: 'btn-default',
                }
            },
        })

        $('#btnRegister').click(function() {
            $.post(laroute.route('home.user.register'), $('#frmRegisterUser').serialize(), function(res){
                if(!res.error)
                {
                    window.location.href = laroute.route(res.data);
                }
                else
                {
                    $('#my-popup').html(res.data);
                    $('#my-popup').find('#popup-error').modal();
                    $('#frmRegisterUser').find('.box-code').html(res.captcha);
                }
            });
        });
    },

    orderHistory : function(id){
        $.post(laroute.route('home.profile.history'), {order_id : id}, function(res){
            if(!res.error)
            {
                $('#my-popup').html(res.data);
                $('#my-popup').find('#popup-order-detail').modal();
            }
        });
    }

}

Profile._init();

var RegisterProfile = {
    _init : function(){
        $('#btnRegister').click(function() {
            $.post(laroute.route('home.user.register'), $('#frmRegisterUser').serialize(), function(res){
                if(!res.error)
                {
                    window.location.href = laroute.route(res.data);
                }
                else
                {
                    $('#my-popup').html(res.data);
                    $('#my-popup').find('#popup-error').modal();
                    $('#frmRegisterUser').find('.box-code').html(res.captcha);
                }
            });
        });
    }
};
