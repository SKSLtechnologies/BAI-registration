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
            "Delhi/NCR": null,
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
            // "": null
        },
        limit: 5,

    });

});


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
        console.log(url);
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



