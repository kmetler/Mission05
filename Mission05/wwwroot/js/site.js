// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        if (hours <= 0 || isNaN(hours)) {
            $("#error-message").show();
            $("#total").val("");
        } else {
            $("#error-message").hide();
            let total = hours * rate;
            $("#total").val(total.toFixed(2));
        }
    });
});