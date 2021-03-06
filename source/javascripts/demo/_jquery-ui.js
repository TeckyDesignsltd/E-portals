function setupJqUi() {
  //####### Accordion
  $("#menu-collapse").accordion({
    header: "h3"
  });

  //####### Dialogs

  // Dialog Simple
  $('#btn-dialog-simple').click(function() {
    $('#modal-simple').dialog('open');
    return false;
  });

  $('#modal-simple').dialog({
    autoOpen: false,
    buttons: [
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  // Dialog message
  $('#btn-dialog-message').click(function() {
    $('#modal-message').dialog('open');
    return false;
  });

  $("#modal-message").dialog({
    autoOpen: false,
    modal: true,
    buttons: [
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  //Dialog multi button
  $('#btn-dialog-button').click(function() {
    $('#modal-button').dialog('open');
    return false;
  });
  // Dialog Button
  $('#modal-button').dialog({
    autoOpen: false,
    width: 600,
    buttons: [
      {
        text: "Delete",
        click: function() {
        },
        "class": "btn btn-danger ui-button-danger"
      },
      {
        text: "Edit",
        click: function() {
        },
        "class": "btn btn-warning ui-button-warning"
      },
      {
        text: "Other",
        click: function() {
        },
        "class": "btn btn-inverse ui-button-inverse"
      },
      {
        text: "Close",
        click: function() {
          $(this).dialog("close");
        },
        "class": "btn ui-button-inverse"
      }
    ]
  });

  //hover states on the static widgets
  $('#btn-dialog-simple, #btn-dialog-message, #btn-dialog-button, ul#icons li').hover(
          function() {
            $(this).addClass('ui-state-hover');
          }, function() {
    $(this).removeClass('ui-state-hover');
  }
  );

  // Remove focus from buttons
  $('.ui-dialog :button').blur();

  //####### Tabs
  $('#tabs2, #tabs, #tabs3').tabs();

  // Dynamic tabs
  var tabTitle = $("#tab_title"),
          tabContent = $("#tab_content"),
          tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
          tabCounter = 2;

  var tabs = $("#tabs2").tabs();

  // modal dialog init: custom buttons and a "close" callback reseting the form inside
  var dialog = $("#dialog2").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function() {
        addTab();
        $(this).dialog("close");
      },
      Cancel: function() {
        $(this).dialog("close");
      }
    },
    close: function() {
      form[ 0 ].reset();
    }
  });

  // addTab form: calls addTab function on submit and closes the dialog
  var form = dialog.find("form").submit(function(event) {
    addTab();
    dialog.dialog("close");
    event.preventDefault();
  });

  // actual addTab function: adds new tab using the input from the form above
  function addTab() {
    var label = tabTitle.val() || "Tab " + tabCounter,
            id = "tabs-" + tabCounter,
            li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
            tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
    tabs.tabs("refresh");
    tabCounter++;
  }

  // addTab button: just opens the dialog
  $("#add_tab").button().click(function() {
    dialog.dialog("open");
  });

  // close icon: removing the tab on click
  $("#tabs2").on("click", 'span.ui-icon-close', function() {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    tabs.tabs("refresh");
  });

  //Combination examples (tabs) and open dialog
  $('#sampleButton').on('click', function(event) {
    event.preventDefault();
    $('#modal-simple').dialog({
      autoOpen: true,
      modal: true,
      width: 600,
      buttons: {
        "Save": function() {
          $(this).dialog("close");
        },
        "Cancel": function() {
          $(this).dialog("close");
        }
      }
    });
  });

  //####### Datepicker
  $('#datepicker').datepicker({
    inline: true
  });

  //####### Slider

  // Horizontal slider
  $('#h-slider').slider({
    range: true,
    values: [17, 67]
  });

  // Vertical slider
  $("#v-slider").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      $("#amount").val(ui.value);
    }
  });
  $("#amount").val($("#v-slider").slider("value"));

  // Autocomplete
  var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

  $("#tags-autocomplete").autocomplete({
    source: availableTags,
    appendTo: '#autocomplete'
  });

  //####### Menu
  $("#menu").menu();

  //####### Spinner

  var spinner = $("#spinner").spinner();

  $("#disable").click(function() {
    if (spinner.spinner("option", "disabled")) {
      spinner.spinner("enable");
    } else {
      spinner.spinner("disable");
    }
  });
  $("#destroy").click(function() {
    if (spinner.data("ui-spinner")) {
      spinner.spinner("destroy");
    } else {
      spinner.spinner();
    }
  });
  $("#getvalue").click(function() {
    alert(spinner.spinner("value"));
  });
  $("#setvalue").click(function() {
    spinner.spinner("value", 5);
  });

  //####### Tooltip

  $("#tooltip").tooltip();
  /**
   * Tooltip top
   */
  $("#tooltip-top").tooltip({
    position: {
      my: "center bottom-15",
      at: "center top",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow bottom")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  /**
   * Tooltip right
   */
  $("#tooltip-right").tooltip({
    position: {
      my: "left+15 left",
      at: "right center",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow left")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  $("#tooltip-left").tooltip({
    position: {
      my: "right-15 center",
      at: "left center",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow right")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  /**
   * Tooltip bottom
   */
  $("#tooltip-bottom").tooltip({
    position: {
      my: "center top+15",
      at: "center bottom",
      using: function(position, feedback) {
        $(this).css(position);
        $("<div>")
                .addClass("arrow top")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
      }
    }
  });
  //####### progressbar
  $("#progressbar").progressbar({
    value: 37
  });

  //Custom progress bar
  var customprogressbar = $("#custom-progressbar"),
          progressLabel = $(".progress-label");

  customprogressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text(customprogressbar.progressbar("value") + "%");
    },
    complete: function() {
      progressLabel.text("Complete!");
    }
  });
  function progress() {
    var val = customprogressbar.progressbar("value") || 0;
    customprogressbar.progressbar("value", val + 1);
    if (val < 99) {
      setTimeout(progress, 100);
    }
  }
  setTimeout(progress, 3000);

  // DOCS
  var $window = $(window)
  var $body = $(document.body)

  var navHeight = $('.navbar').outerHeight(true) + 10

  $body.scrollspy({
    target: '.bs-sidebar',
    offset: navHeight
  })

  $window.on('load', function() {
    $body.scrollspy('refresh')
  })

  $('section [href^=#]').click(function(e) {
    e.preventDefault()
  })

  // back to top
  setTimeout(function() {
    var $sideBar = $('.bs-sidebar')

    $sideBar.affix({
      offset: {
        top: function() {
          var offsetTop = $sideBar.offset().top
          var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
          var navOuterHeight = $('.bs-docs-nav').height()

          return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        }
        , bottom: function() {
          return (this.bottom = $('.bs-footer').outerHeight(true))
        }
      }
    })
  }, 100)

  setTimeout(function() {
    $('.bs-top').affix()
  }, 100)

  // Buttons download
  $('.download-btn').button();

  // make code pretty
  window.prettyPrint && prettyPrint();

  //function replace targetblank for valid w3c
  $('a.targetblank').on('click', function() {
    window.open($(this).attr('href'));
    return false;
  });
}

$(document).on('ready page:load', setupJqUi);
