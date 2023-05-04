const generateCard = function() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://gamingquizapi.azurewebsites.net/api/random/card", requestOptions)
        .then(response => response.json())
        .then(data => {
            this.data = data;
            document.getElementById("question").innerHTML = this.data[0].question;
            document.getElementById("answer").innerHTML = this.data[0].answer;
        })
        .catch(error => console.log('error', error));
}

window.onload = function() {
    generateCard();
    document.getElementById("generate").addEventListener('click', generateCard);
}

