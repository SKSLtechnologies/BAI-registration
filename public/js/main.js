$("select.org_type").change(function () {
  var selectedOption = $(this).children("option:selected").val();
  if (selectedOption == "Others") {
    $('#orgSpan').show()
  } else {
    $('#orgSpan').hide()
  }
});

$("select.member").change(function () {
  var selectedOption = $(this).children("option:selected").val();
  if (selectedOption == "Yes") {
    $('#bai_code').show()
  } else {
    $('#bai_code').hide()
  }
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    $('#equipmentSpan').hide()
    $('#selectAllEquip').show()
  } else {
    $('#equipmentSpan').show()
    $('#selectAllEquip').hide()
  }
}

var x = window.matchMedia("(max-width: 850px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if ($('#city').val() == "" || $('#state').val() == "" || $('#address').val() == "" ||
    $('#contractor-name').val() == "" || $('#pin-code').val() == "" || $('#email').val() == "" ||
    $('#office').val() == "") {

    alert("Please fill out required fields to proceed. (*)")
  } else {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    next_fs.show();
    current_fs.animate({
      opacity: 0
    }, {
      step: function (now, mx) {
        scale = 1 - (1 - now) * 0.2;
        left = (now * 50) + "%";
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')',
          'position': 'absolute'
        });
        next_fs.css({
          'left': left,
          'opacity': opacity
        });
      },
      duration: 300,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: 'easeInQuad'
    });
  }
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      scale = 0.8 + (1 - now) * 0.2;
      left = ((1 - now) * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'left': left
      });
      previous_fs.css({
        'transform': 'scale(' + scale + ')',
        'opacity': opacity
      });
    },
    duration: 300,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    easing: 'easeInQuad'
  });
});

$('select').material_select();
$(function () {
  $('input.autocompleteState').autocomplete({
    data: {
      "Andhra Pradesh": null,
      "Arunachal Pradesh": null,
      "Assam": null,
      "Bihar": null,
      "Chhattisgarh": null,
      "Goa": null,
      "Gujarat": null,
      "Haryana": null,
      "Himachal Pradesh": null,
      "Jammu and Kashmir": null,
      "Jharkhand": null,
      "Karnataka": null,
      "Kerala": null,
      "Madhya Pradesh": null,
      "Maharashtra": null,
      "Manipur": null,
      "Meghalaya": null,
      "Mizoram": null,
      "Delhi": null,
      "Nagaland": null,
      "Odisha": null,
      "Punjab": null,
      "Rajasthan": null,
      "Sikkim": null,
      "Tamil Nadu": null,
      "Telangana": null,
      "Tripura": null,
      "Uttar Pradesh": null,
      "Uttarakhand": null,
      "West Bengal": null,
    },
    limit: 5,

  });
});

// $(input).hover(function () {
//   $(this).focus();
// });

$("#state").change(function () {
  switch ($('#state').val()) {
      case "Andhra Pradesh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Andhra.json'
          break;
      case "Arunachal Pradesh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Arunanchal.json'
          break;
      case "Assam":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Assam.json'
          break;
      case "Bihar":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Bihar.json'
          break;
      case "Chhattisgarh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Chhattisgarh.json'
          break;
      case "Goa":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Goa.json'
          break;
      case "Gujarat":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Guajarat.json'
          break;
      case "Haryana":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Haryana.json'
          break;
      case "Himachal Pradesh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Himachal.json'
          break;
      case "Jammu and Kashmir":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Jammu.json'
          break;
      case "Jharkhand":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Jharkhand.json'
          break;
      case "Karnataka":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Karnataka.json'
          break;
      case "Kerala":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Kerala.json'
          break;
      case "Nagaland":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Nagaland.json'
          break;
      case "Odisha":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Odisha.json'
          break;
      case "Rajasthan":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Rajasthan.json'
          break;
      case "Tamil Nadu":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Tamil%20Nadu.json'
          break;
      case "Telengana":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Telengana.json'
          break;
      case "Tripura":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Tripura.json'
          break;
      case "Uttar Pradesh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Uttar%20Pradesh.json'
          break;
      case "Uttarakhand":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Uttarakhand.json'
          break;
      case "West Bengal":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/West%20Bengal.json'
          break;
      case "Maharashtra":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Maharashtra.json'
          break;
      case "Manipur":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Manipur.json'
          break;
      case "Meghalaya":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Meghalaya.json'
          break;
      case "Mizoram":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Mizoram.json'
          break;
      case "Madhya Pradesh":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Madhya%20Pradesh.json'
          break;
      case "Delhi/NCR":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Delhi.json'
          break;
      case "Punjab":
          url = 'https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Punjab.json'
          break;
  }
  $(function () {
      $.ajax({
          type: 'GET',
          url: url,
          success: function (response) {

              var cities = JSON.parse(response);
              var dataCountry = {};
              for (var i = 0; i < cities.length; i++) {
                  dataCountry[cities[i].name] = null; //countryArray[i].flag or null
              }
              $('input.autocompleteCity').autocomplete({
                  data: dataCountry,
                  limit: 3,
              });
          }
      });
  });
});

$('#msform').validate({
  errorElement: "div",
  errorPlacement: function (error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});

$(".home").click(function () {
  window.location.replace("/");
});