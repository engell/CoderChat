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
        .setAuthUser("xenodesystems.com")
        .setCallback(onPicked)
        .build().setVisible(true);
    }
 
		

    function onPicked(data) {
      if (data.action !== 'picked') return;
      var k, v, picked, li;
      $('#picked').empty();
      for (k in data.docs) {
        picked = data[google.picker.Response.DOCUMENTS][k];
				$("#log").append("<b><font size=+1 color='red'>Host</font></b>" + ": "  + nme +  " ha enviado: ");
        $('<img>', {src:picked.iconUrl}).appendTo("#log");
        $('<a ></a>', {href:picked.url, target:'_blank'}).text(picked.name).appendTo("#log");
				$("#message").focus();
      }
    }

  }());
