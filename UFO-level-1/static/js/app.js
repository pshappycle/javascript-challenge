// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var date = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]



var addRow = (data) => {
    data.forEach(occurence => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(occurence[column])
        )
    });
}

addRow(tableData);


button.on("click", () => {


    var inputDate = date.property("value");



    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);


    tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addRow(filterDate);
    }

})
