
let select1;
let select2;
let mainWord;
let translationContainer;

let highestScore;
let currentScore;
let currentScoreValue;

let srcLanguage;
let targetLanguage;

window.onload = function(){

    select1 = document.getElementById('firstlanguage');
    select2 = document.getElementById('secondlanguage');

    mainWord = document.getElementById('main-word');
    translationContainer = document.getElementById('options');


    highestScore = document.getElementById('highest');
    highestScore.innerHTML =  getHighestScore();

    currentScore = document.getElementById('current');
    currentScoreValue = getCurrentScore();
    currentScore.innerHTML = currentScoreValue;

    setLangaugeSelection();
    setSelectonEvents();
};

let setLangaugeSelection = function(){
    languages.forEach( language => {
        let option1 = document.createElement('option');
        option1.setAttribute('value', language.code);
        option1.innerHTML = (language.language);
        select1.appendChild(option1);
        let option2 = document.createElement('option');
        option2.setAttribute('value', language.code);
        option2.innerHTML= (language.language);
        select2.appendChild(option2);
    });
};

let setSelectonEvents = function(){

    select1.onchange = function(e){
        srcLanguage = e.target.value;
        for (let option of select2.options){
            if (option.value === srcLanguage){
                option.hidden = true;
            } else {
                option.hidden = false;
            }
        }
        if(srcLanguage && targetLanguage){
            newQuiz();
        }
    };

    select2.onchange = function(e){
        targetLanguage = e.target.value;
        for (let option of select1.options) {
            if (option.value === targetLanguage){
                option.hidden = true;
            } else {
                option.hidden = false;
            }
        }
        if(srcLanguage && targetLanguage){
            newQuiz();
        }
    };

}

let newQuiz = function(){
    getWords().then(result => {
        Promise.all(
            result.map(word => { 
                if( srcLanguage === 'en'){
                    return translate(word, targetLanguage).then(result => {
                        return { word: word, translated: result.data.translations[0].translatedText };
                    })
                    .catch(error => console.log('error', error));
                } else if (targetLanguage === 'en'){
                    return translate(word, srcLanguage).then(result => {
                        return { word: result.data.translations[0].translatedText, translated: word }; 
                    })
                    .catch(error => console.log('error', error));
                } else {
                    return translate(word, targetLanguage).then(result => {
                        return translate(word, srcLanguage).then(src => {
                            return { word: src.data.translations[0].translatedText, translated: result.data.translations[0].translatedText }; 
                        })
                        .catch(error => console.log('error', error));
                    })
                }
            })
        ).then(result => {
            let mainWordValue = setMainWord(result);
            setQuizOptions(mainWordValue, result);
        })
    })
    .catch(error => console.log('error', error));
}

let setMainWord = function(words){
    let targetPair = words[0];
    while(mainWord.firstChild){
        mainWord.firstChild.remove();
    }
    mainWord.innerHTML = targetPair.word;
    mainWord.hidden = false;
    return JSON.stringify(targetPair);
};

let setQuizOptions = function(mainWordValue, words){
    words = shuffleArray(words);
    while(translationContainer.firstChild){
        translationContainer.firstChild.remove();
    }
    words.forEach(pair => {
        let translation = document.createElement('button');
        translation.innerHTML = (pair.translated);
        translation.setAttribute('value', JSON.stringify(pair));
        translation.onclick = function(e ){
            if(e.target.value === mainWordValue) {
                e.target.classList.add("true");
                e.target.classList.remove("false");
                currentScoreValue++;
                currentScore.innerHTML = currentScoreValue;
                setScore();
                setTimeout(() => {
                    newQuiz();
                }, 100);
            } else {
                e.target.classList.add('false');
                e.target.classList.remove("true");
                currentScoreValue = 0;
                currentScore.innerHTML = currentScoreValue;
                setTimeout(() => {
                    setQuizOptions(mainWordValue, words);
                }, 500);
            }
        };
        translationContainer.appendChild(translation);
    });
};

let shuffleArray = function(array) {
    let newArray = [];
    while(array.length>0){
        const randIndex = Math.floor(Math.random()*array.length);
        newArray.push(array[randIndex]);
        array.splice(randIndex,1);
    }
    return newArray;
}

let getHighestScore = function(){
    return parseInt(localStorage.getItem('highest score')) || 0;
}

let getCurrentScore = function(){
    return parseInt(localStorage.getItem('current score')) || 0;
}

let setScore = function(){
    localStorage.setItem('current score', currentScoreValue);
    if (currentScoreValue > getHighestScore()){
        highestScore.innerHTML = currentScoreValue;
        localStorage.setItem('highest score', currentScoreValue);
    }
}