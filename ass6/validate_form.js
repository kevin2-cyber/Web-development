var form, firstName, lastName, nationality, address, treat, sickness, gender, response;
response = document.querySelector(".response");
gender = document.querySelectorAll(".gender");
form = document.querySelector("form");
firstName = document.querySelector("#firstName");
lastName = document.querySelector("#lastName");
nationality = document.querySelector("#nationality");
address = document.querySelector(".address");
treat = document.querySelectorAll(".treat");
sickness = document.querySelectorAll(".health");




form.onsubmit = function(){
  if(firstName.value.length == 0 ){
    alert("Enter first name");
    return
  }else if (firstName.value.length > 50){
    alert("Your first name should not be longer than 50 ");
    return;
  }
    if (lastName.value.length == 0) {
      alert("Enter last name");
      return;
    } else if (lastName.value.length > 50) {
      alert("Your last name should not be longer than 50 ");
      return;
    }
  if (address.value.length == 0) {
    alert("Enter your address");
    return;
  } else if (address.length > 300) {
    alert("Your last name should not be longer than 300 ");
    return;
  }
  var genderTicked;
  var genderSelected;
  for(let i of gender){
    if(i.checked){
      genderTicked = true;
      genderSelected = i.value;
    }
  }
  if(!genderTicked){
    alert("Select gender");
    return;
  }
    var sicknessChecked;
    var medicalArr = [];
  for(let i of sickness){
    if(i.checked){
      medicalArr.push(i.value);
      sicknessChecked = true;
    }
  }
  if(!sicknessChecked){
    alert("You must select a medical history");
    return;
  }
  var valueForTreat;
  for(let i of treat){
    if(i.checked){
    valueForTreat = i.value;
    }
  }
  if(valueForTreat == "no"){
    response.value = "";
  }else if(response.value == 0 && valueForTreat == "yes"){
    alert("Indicate medication");
    return;
  }

  alert("Information is successfully sent"
  +" "+firstName.value+ " "+ lastName.value +" "+ nationality.value + " "+ address.value + " "+ genderSelected + " "+ valueForTreat + " "+ response.value+ " "+ medicalArr.toString()
  );
}