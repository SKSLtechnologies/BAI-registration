
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

    });
});

// $(input).hover(function () {
//   $(this).focus();
// });