


// ๐ API
// /covid-19/counties
let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';
let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=500';


/*๐fetch- api-breakingbad*/
fetch('https://www.breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => console.log(data));


/*๐ fetch- api-poke */

const fetchPokeList = (url) => {
fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data);
  console.log(data.results[24].name);
  pokeName.innerHTML=`${data.results[24].name}`;

  // ๐when name is match , show the other data.
  if (data.results[24].name ==='pikachu') {
  console.log("hello")
  pokeUrl.innerHTML=`${data.results[24].url}`;
  }
});
};

fetchPokeList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");

/*๐ fetch 3- api- words */
const url = "https://random-word-api.herokuapp.com/word?number=1000";

getWords();
function getWords() {
    fetch(url)
    .then((res) => res.json())
    .then((a_data) => {
        console.log(a_data);
        /*๐ ~~~coding~~~ */
     
        a_data.forEach((a) => {
            if (a.length < 7) {
                words.push(a)            
            }  
        });
        console.log(words)
        buttonChange('game start');   
    });    
}

 

//๐ axios 

function mynaming() {

  axios.get(url_usa)
    .then(function (response) {
      // handle success   
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

mynaming();


//๐ axios /  rapidApi ์ฌ์ฉํ๊ธฐ

function covidStates() {

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,    //config์์ rapid api key๋ฅผ ๋ณ์๋ก ๊ฐ์ ธ์ด
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}
covidStates();