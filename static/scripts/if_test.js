var age = 10;

if(age >= 65){
    console.log('You get your income from your pension')
}else if(age < 65 && age >= 18){
    console.log('Each month you get a salary')
}else if(age < 18){
    console.log('You get an allowance')
}else{
    console.log('The value of the age variable is not numerical')
}

//Coding the days of the week program as a switch statement
var day = 'Sunday'

switch(day){
    case 'Monday':
        console.log('Today is on a Monday');
        break;

    case 'Tuesday':
        console.log('Today is on a Tuesday');
        break;

    case 'Wednesday':
        console.log('Today is on a Wednesday');
        break;

    case 'Thursday':
        console.log('Today is on Thursday');
        break;

    case 'Friday':
        console.log('Today is on a Friday');
        break;

    case 'Saturday':
        console.log('Today is on a Saturday');
        break;

    case 'Sunday':
        console.log('Today is on a Sunday');
        break;

    default:
        console.log('There is no such day')
        break;


}