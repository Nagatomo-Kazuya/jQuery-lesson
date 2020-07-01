
(function($, window) {
    const formCheck = function (form1, form2) {
        if (form1 == '') {
            alert('メールアドレスを入力してください');
        } else if (form1.indexOf('@') < 0) {
            alert('メールアドレスには必ず「@」が必要です');
        };
        if (form2 == '') {
            alert('パスワードを入力してください');
        } else if (form2.length < 6) {
            alert('パスワードは6文字以上です');
        };
    };


    $(function() {
      $('#login').on('click', function(e) {
        var email = $('#email').val(),
            password = $('#password').val();
        formCheck(email, password);
      });
    });
})(jQuery, window);