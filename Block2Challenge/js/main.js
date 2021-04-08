function computePay()
{
    //convert input to numbers
    var hoursWorked = document.getElementById("hoursWorked").value.match(/(\d+)/)[0];
    var wage = document.getElementById("wage").value.match(/(\d+)/)[0];
    console.log(hoursWorked);
    

    //compute wage
    var gross = hoursWorked * wage;
    var tax = gross * 0.15;
    var net = gross - tax;
    net = net.toFixed(2);

    localStorage.setItem("NetPay", net);
    return net;
}
 
function displayPay() {
    document.getElementById('showOutput').innerHTML = "$" + computePay();
}
// window.displayPay = displayPay;
function getExpenses() {

    // get user input and convert it
    var groceries = parseFloat(document.getElementById('groceries').value);
    var housing = parseFloat(document.getElementById('housing').value);
    var basicUtilities = parseFloat(document.getElementById('basicUtilities').value);
    var transportation = parseFloat(document.getElementById('transportation').value);
    var insurance = parseFloat(document.getElementById('insurance').value);

    var groceriesPercentage = (groceries / 100) * computePay();
    groceriesPercentage = groceriesPercentage.toFixed(2);
    localStorage.setItem("AmountToGroceries", groceriesPercentage);
    var housingPercentage = (housing / 100) * computePay();
    housingPercentage = housingPercentage.toFixed(2);
    localStorage.setItem("AmountToHousing", housingPercentage);
    var basicUtilitiesPercentage = (basicUtilities / 100) * computePay();
    basicUtilitiesPercentage = basicUtilitiesPercentage.toFixed(2);
    localStorage.setItem("AmountToBasicUtilities", basicUtilitiesPercentage);
    var transportationPercentage = (transportation / 100) * computePay();
    transportationPercentage = transportationPercentage.toFixed(2);
    localStorage.setItem("AmountToTransportation", transportationPercentage);
    var insurancePercentage = (insurance / 100) * computePay();
    insurancePercentage = insurancePercentage.toFixed(2);
    localStorage.setItem("AmountToInsurance", insurancePercentage);

    document.getElementById('outputExp').innerHTML = "Amount to groceries: $" + groceriesPercentage + "<br/>" 
                                                        + "Amount to housing: $" + housingPercentage + "<br/>"
                                                        + "Amount to basicUtilities: $" + basicUtilitiesPercentage + "<br/>"
                                                        + "Amount to transportation: $" + transportationPercentage + "<br/>"
                                                        + "Amount to insurance: $" + insurancePercentage; 

}

function getGroceriesPercentage() {
    var groceries = parseFloat(document.getElementById('groceries').value);
    var groceriesPercentage = (groceries / 100) * computePay();
    groceriesPercentage = groceriesPercentage.toFixed(2);
    return groceriesPercentage;
}

function getHousingPercentage() {
    var housing = parseFloat(document.getElementById('housing').value);
    var housingPercentage = (housing / 100) * computePay();
    housingPercentage = housingPercentage.toFixed(2);
    return housingPercentage;
}

function getBasicUtilitiesPercentage() {
    var basicUtilities = parseFloat(document.getElementById('basicUtilities').value);
    var basicUtilitiesPercentage = (basicUtilities / 100) * computePay();
    basicUtilitiesPercentage = basicUtilitiesPercentage.toFixed(2);
    return basicUtilitiesPercentage;
}

function getTransportationPercentage() {
    var transportation = parseFloat(document.getElementById('transportation').value);
    var transportationPercentage = (transportation / 100) * computePay();
    transportationPercentage = transportationPercentage.toFixed(2);
    return transportationPercentage;
}

function getInsurancePercentage() {
    var insurance = parseFloat(document.getElementById('insurance').value);
    var insurancePercentage = (insurance / 100) * computePay();
    insurancePercentage = insurancePercentage.toFixed(2);
    return insurancePercentage;
}

  function clearStorage() {
    localStorage.clear();
    location.reload();
}

if (localStorage.getItem("NetPay") === null) {
    // localStorage.style.display === "none";
  } else {

document.getElementById("localStorage").innerHTML = "Net Pay: $" + localStorage.getItem("NetPay") + "<br/>"
                                                    + "Amount to groceries: $" + localStorage.getItem("AmountToGroceries") + "<br/>"
                                                    + "Amount to housing: $" + localStorage.getItem("AmountToHousing") + "<br/>"
                                                    + "Amount to basicUtilities: $" + localStorage.getItem("AmountToBasicUtilities") + "<br/>"
                                                    + "Amount to transportation: $" + localStorage.getItem("AmountToTransportation") + "<br/>"
                                                    + "Amount to insurance: $" + localStorage.getItem("AmountToInsurance");
}
