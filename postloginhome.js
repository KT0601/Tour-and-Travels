function update(){
    var toPlace = document.planTrip.to.value;
    var element = document.getElementById("mumbai");
    var element2 = document.getElementById("city1");
    element.innerHTML = toPlace;
    element2.style.visibility = "visible";
}