(function () {
    google.setOnLoadCallback(function () {
      $('#gDocsButton').on('click', showDocsPicker);
    });
    google.load('picker', '1', {'language':'es'});
    function showDocsPicker() {
      new google.picker.PickerBuilder()
        .addViewGroup(
          new google.picker.ViewGroup(google.picker.ViewId.DOCS)
            .addView(google.picker.ViewId.DOCUMENTS)
            .addView(google.picker.ViewId.SPREADSHEETS)
            .addView(google.picker.ViewId.PRESENTATIONS)
            .addView(google.picker.ViewId.FOLDERS)
            .addView(google.picker.ViewId.FORMS)
            .addView(google.picker.ViewId.PDFS)
        )
        .addView(google.picker.ViewId.MAPS)
        .addView(google.picker.ViewId.IMAGE_SEARCH)
        .addView(new google.picker.DocsUploadView())
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setCallback(onPicked)
        .build().setVisible(true);
    }
    function onPicked(data) {
      if (data.action !== 'picked') return;
      var k, v, picked, li;
      $('#picked').empty();
      for (k in data.docs) {
        picked = data[google.picker.Response.DOCUMENTS][k];
				fileName = (picked.name)
        url = (picked.url)
				img = (picked.iconUrl)
        var d = new Date();
				contend = ("<li><span id='time'>"+d.getHours()+":"+d.getMinutes()+"</span> <b><span id='outHost'>Host:</span></b> <b><span id='outNick'>"+nme+"</span></b> ha enviado: <a href='"+url+"' target='_blank'><img src='"+img+"'> "+fileName+"</a> </li>")
				cli3nt.publish('/message', {text: contend});
				$("#message").focus();
        $("#submit").val(fileName+": "+url);
        $("#date").val(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
        $("#toGoogle").click();
      }
    }
  }());
