let miles = 0.0;
let gallons = 0.0;
let mpg = 0.0;

let calculationMsg;
let again = 'y';
do{
    miles = prompt('Enter the number of miles travelled:');
    miles = parseFloat(miles);
    gallons = prompt('Enter the number of gallons used:');
    gallons = parseFloat(gallons);

    if(!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0){
        //good data
        mpg = miles / gallons;
        mpg = parseInt(mpg);
        calculationMsg = `<p>MPG: Miles travlled: <strong>${miles}</strong> miles, Gallons consumed:
        <strong>${gallons}</strong>, Consumption rate: <strong>${mpg} miles/gallon</strong></p>`;
    }else{
        //bad data
        calculationMsg = '<p style="color:red;">One or more invalid inputs.</p>';
    }
    again = prompt('All set? Print to HTML page?', 'y');
} while(again != 'y');


