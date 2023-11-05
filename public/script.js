

console.log("Logged in");

document.querySelector('#bntLoadJoke').addEventListener('click', () => {

    getDadJoke();
    getDadImage(); 

});

async function getDadJoke() {
    const response = await fetch('/dadjoke');
    const data = await response.json();
    const jokeSetup = data.body[0].setup;
    const jokePunchline = data.body[0].punchline;
    console.log(jokeSetup, jokePunchline);
}

async function getDadImage() {
    const response = await fetch('/dadimage');
    const data = await response.json();
    const dadImage = data.value[0].thumbnailUrl;
    console.log(dadImage);
}