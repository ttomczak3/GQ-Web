const generateCard = function() {
    let url ="https://gamingquizapi.azurewebsites.net/api/random/card";
 
     fetch(url)
     .then(function(response) {
         return response.json(); 
     }) // Getting the raw JSON data
     .then(function(data) {
 
         // Storing the card internally upon 
         // successful completion of request
         this.data = data; 
 
         // Displaying the card When the Webpage loads
         console.log(this.data);
         document.getElementById("question").innerHTML = this.data[0].question;
         document.getElementById("answer").innerHTML = this.data[0].answer;
 }).catch(function() {
    console.log("error");
 });
 
}
window.onload = function() {
     generateCard();
     document.getElementById("generate").addEventListener('click', generateCard);
}
 