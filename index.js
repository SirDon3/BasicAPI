import express from 'express';
const app = express();
const port = 3000;
import fetch from 'node-fetch';


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

app.get('/dadjoke', async (req, res) =>{

    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2f99d7204cmsh85c19c62c243facp1bfe25jsne82c9107d4b3',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    
        const response = await fetch(url, options);
        const dadJokes = await response.json();
        console.log(dadJokes);
        res.json(dadJokes);
   

});

app.get('/dadimage', async (req, res) =>{

    const url = 'https://bing-image-search1.p.rapidapi.com/images/search?q=Willem%20Dafoe&count=10';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2f99d7204cmsh85c19c62c243facp1bfe25jsne82c9107d4b3',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    };
    
        const response = await fetch(url, options);
        const dadimage = await response.json();
        console.log(dadimage);
        res.json(dadimage);
   

});