$(".back").click(function () {
    localStorage.setItem("on_load_counter", 0)
    window.location.replace("/list");
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

var url; 
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
            url ='https://raw.githubusercontent.com/SKSLtechnologies/StatesCities/master/Guajarat.json'
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






//   });

// $(input).hover(function () {
//   $(this).focus();
// });