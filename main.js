let validateCpCambridge = require('cp');

const btnSearch = $("#search");

btnSearch.click(function (event) {
    event.preventDefault();
    validateCpCambridge();
})
