import dotenv from 'dotenv'
import express from 'express';
dotenv.config()
const app = express();
const port = 3000;
import fetch from 'node-fetch';


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

const api_key = process.env.API_KEY;

app.get('/dadjoke', async (req, res) =>{

    const url = 'https://joke110.p.rapidapi.com/random_joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': api_key,
        'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
      }
    };
    
        const response = await fetch(url, options);
        const dadJokes = await response.json();
        console.log(dadJokes);
        res.json(dadJokes);
   

});

app.get('/dadimage', async (req, res) =>{

    const url = 'https://bing-image-search1.p.rapidapi.com/images/search?q=Willem%20Dafoe&count=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': api_key,
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    };
    
        const response = await fetch(url, options);
        const dadimage = await response.json();
        console.log(dadimage);
        res.json(dadimage);
   

});