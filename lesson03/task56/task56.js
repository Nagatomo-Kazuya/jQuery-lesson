(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#search-button').jpostal({
    		click : '#search-button',
        postcode : [
            '#zip1',
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);
