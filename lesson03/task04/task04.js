(function($, window) {
    $(function() {
      // ここに処理を書きます
      $('#date_picker').flatpickr({
        "locale" : "ja",
        "onChange" : function(selectedDates, dateStr, instance) {
            $('#date_form').val(dateStr);
            $('#date_picker').val('日付選択');
            console.log(selectedDates);
            console.log(instance);
            
        }
      })
    });
  })(jQuery, window);
  