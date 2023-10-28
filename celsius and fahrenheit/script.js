const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;



    const celtofah=(cel)=>{
        let fahrenheit=Math.round((cel*9/5)+32);
        return fahrenheit;

    }
    const fahtocel=(fah)=>{
        let Celsius=Math.round((fah-32)*5/9);
        return Celsius;
    }
    
    let result;

if(valueTemp=='cel')
{
result=celtofah(numberTemp);
document.getElementById('resultcontainer').innerHTML=`= ${result} Fahrenheit`;
}
else{
    result=fahtocel(numberTemp);
    document.getElementById('resultcontainer').innerHTML=`= ${result} Celsius`;
}


}

