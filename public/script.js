

console.log("Logged in");

document.querySelector('#bntLoadJoke').addEventListener('click', () => {

    getDadJoke();
    getDadImage(); 

});

async function getDadJoke() {
    const response = await fetch('/dadjoke');
    const data = await response.json();
    let jokeSetup = data.body[0].setup;
    let jokePunchline = data.body[0].punchline;
    console.log(jokeSetup, jokePunchline);
    document.querySelector('#jokeSetup').textContent = jokeSetup;
    document.querySelector('#jokePunchline').textContent = jokePunchline;

}

async function getDadImage() {
    const response = await fetch('/dadimage');
    const data = await response.json();
    let dadImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dadImageURL = dadImage.thumbnailUrl;
    let dadImageALT = dadImage.name;

    if (document.querySelector('#dadImage') !== null){

        document.querySelector('#dadImage').remove();

    }
        let img = document.createElement('img');
        img.src = dadImageURL;
        img.id = 'dadImage';
        img.alt = dadImageALT;
        document.querySelector('body').appendChild(img);
        console.log(dadImageURL, dadImageALT);
    

}