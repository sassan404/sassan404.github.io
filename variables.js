
let languages = [
    {
        language: 'French',
        code: 'fr'
    }, {
        language: 'English',
        code: 'en'
    }, {
        language: 'Arabic',
        code: 'ar'
    }, {
        language: 'Spanish',
        code: 'es'
    }, {
        language: 'Dutch',
        code: 'nl'
    }, {
        language: 'Turkish',
        code: 'tr'
    }, {
        language: 'Spanish',
        code: 'es'
    }, {
        language: 'German',
        code: 'de'
    }, {
        language: 'Norwegian',
        code: 'no'
    }, {
        language: 'Russian',
        code: 'ru'
    }, {
        language: 'Italian',
        code: 'it'
    }
];

let getWords = function(){
    return getWordsFromFile();
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    return fetch("https://random-word-api.herokuapp.com/word?number=3&swear=0", requestOptions)
        .then(response => response.json())
};

let getWordsFromFile = function(){
    let arraySize = wordArray.data.length;
    return new Promise(function(resolve){
        let i = 0;
        let array = [];
        while(i < 3){
            array.push(wordArray.data[Math.floor(Math.random()*arraySize)].word.value);
            i++;
        }
        resolve(array);
    });
};

let translate = function(text, target){
    let requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    let key = 'AIzaSyB0DufQ30GFBVJz_kAotfStIcCkblDedNQ';
      
    return fetch("https://translation.googleapis.com/language/translate/v2?key=" + key + "&target="+ target + "&source=en&q=" + text, requestOptions)
        .then(response => response.json())
}