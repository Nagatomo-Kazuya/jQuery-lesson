
//【課題1】jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。
(function($, window) {
    $(function() {
      // この中に処理を書きます
      $('h2').remove();
    });
})(jQuery, window);




//【課題2】#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみましょう。
//①text()メソッドの場合
(function($, window) {
    $(function() {
        //この中に処理を書きます。
        var str =$('#index').text();
        alert(str);
    });
})(jQuery, window);


//②html()メソッドの場合
(function($, window) {
    $(function() {
        //この中に処理を書きます。
        var str =$('#index').html();
        alert(str);
    });
})(jQuery, window);




//【課題3】子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみましょう。
(function($, window) {
    $(function() {
        //この中に処理を書きます。
        $('#index').append('<li>hogehoge</li>');
    });
})(jQuery, window);




//【課題4】ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。
(function($, window) {
    $(function() {
        //この中に処理を書きます。
        $('#index').find('li').each(function() {
            alert($(this).text().length);
        });
    });
})(jQuery, window);




//【課題5】でalertではなく、各文字列の最後にその長さを追加してみましょう。例：jQueryのはじめ方[11文字]
(function($, window) {
    $(function() {
        //この中に処理を書きます。
        $('#index').find('li').each(function() {
            var strCount = $(this).text().length;
            $(this).append(`[${strCount}文字]`);
        });
    });
})(jQuery, window);