function Conv() {
    var tempType = document.getElementById("tempType").value;
    var inputTemp = document.getElementById("input").value;
    var resultTemp = document.getElementById("result");
  
    if (tempType == "Fahrenheit") {
      var result = (5/9) * (inputTemp - 32);
      resultTemp.value = result.toFixed(2) + " Celsius";
    } else if (tempType == "Celsius") {
      var result = (inputTemp * 9/5) + 32;
      resultTemp.value = result.toFixed(2) + " Fahrenheit";
    } else if (tempType == "Kelvin") {
      var result = parseInt(inputTemp) + 273.15;
      resultTemp.value = result.toFixed(2) + " Kelvin";
    }
  }
  function resetval()
  {
    var tempType = document.getElementById("tempType").value="";
    var inputTemp = document.getElementById("input").value="";
    var resultTemp = document.getElementById("result").value="";

  }