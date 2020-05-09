// from data.js
var tabledata = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each ufo report object
tabledata.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var trow = tbody.append("tr"); //this is how you add table rows, we create a variable so we can call it again
        trow.append("td").text(ufoSightings.datetime); //this will append a single td tag within each row
        trow.append("td").text(ufoSightings.city);
        trow.append("td").text(ufoSightings.state);
        trow.append("td").text(ufoSightings.country); 
        trow.append("td").text(ufoSightings.shape); 
        trow.append("td").text(ufoSightings.durationMinutes);
        trow.append("td").text(ufoSightings.comments);  
      });


  // Select the button
// var button = d3.select("#filter-btn");
var input = d3.select("input")
var button = d3.selectAll(".filter")

// Select the form
// var form = d3.select("#form");

// Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

inputdict = {}

// Complete the event handler function for the form
button.on("change", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault()
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(this).select("input")
    console.log(inputElement)
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputID = inputElement.attr("id")
    inputdict[inputID] = inputValue

    console.log(inputValue);
    console.log(inputdict);
    createnewtable()
});
    // console.log(tabledata);
function createnewtable() {
    let newdata = tabledata
    Object.entries(inputdict).forEach(function([key, value]) {
        newdata = newdata.filter(sighting => sighting[key] === value);
        console.log(newdata);
    });

    var tbody = d3.select("tbody");
    tbody.html("")

    newdata.forEach(function(x){
        var trow = tbody.append("tr");
        Object.entries(x).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = trow.append("td");
            cell.text(value);
        });
    })
}
