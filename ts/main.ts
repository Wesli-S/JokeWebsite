window.onload = function() {
    let randomJokeButton = document.querySelector("#get-joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke(){
    //only retrieves safe programming jokes. If you want any kind of joke, change "Programming?" to "Any?"
    let randomJokeURL = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";

    fetch(randomJokeURL)
        .then(
            //gets the response object and return the json data
            (response) => response.json()
        )
        .then(
            //lets us use the response
            (jsonData) => {
                console.log(jsonData);
            }
        )
}