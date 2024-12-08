const provinces = [
    "Adana", "Adıyaman", "Afyon", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya",
    "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik",
    "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
    "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
    "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul",
    "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale",
    "Kırklareli", "Kırşehir", "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
    "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize",
    "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak", "Tekirdağ",
    "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];


const provinceQuotes = {
    "Adana": ["Maybe you were thinking of Adana Kebab!"],
    "Adıyaman": ["Maybe you have imprisoned to Mount Nemrut!"],
    "Afyon": ["All roads intersects there, enjoy your thermal spa!"],
    "Ağrı": ["Perhaps you were thinking about Mount Ararat in Ağrı!"],
    "Amasya": ["Nice sanjak for Ottoman Princes back in the day, but not a correct choice right now!"],
    "Ankara": ["The capital, nothing interesting..."],
    "Ankara": ["The capital, nothing interesting..."],
    "Antalya": ["No wonder city is the most beautiful in the World, but not the correct choice!"],
    "Artvin": ["Looking for something cheap? Try the border with Georgia there!"],
    "Aydın": ["No intellectuals there, the name mocks..."],
    "Balıkesir": ["Bet you haven't chosen it for its center, where is the least Balıkesir between all districts!"],
    "Bilecik": ["Is this place existing?"],
    "Bingöl": ["Just a few lakes, not that much..."],
    "Bitlis": ["Good destination for cheap tobacco, but not suggested!"],
    "Bolu": ["Land of great chefs! At least you wouldn't be feeling hungry for a time!"],
    "Burdur": ["Enjoy Salda, and avoid contact with Isparta natives!"],
    "Bursa": ["You know that it was called Hüdavendigar back in the day! Thanks language reform!"],
    "Çanakkale": ["Full of history... Magnificent!"],
    "Çankırı": ["Gateway to Ankara, nothing surprising!"],
    "Çorum": ["Land of Hittites and Leblebis!"],
    "Denizli": ["Name mocks... No sea to see, unfortunately"],
    "Diyarbakır": ["Land of people with wonderful hospitality, enjoy!"],
    "Edirne": ["Gateway to Europe, choice is yours!"],
    "Elazığ": ["Want to play Çayda Çıra? Stage is yours!"],
    "Erzincan": ["From there and from Kemah, Tello Tello Tello Can!"],
    "Erzurum": ["Oltu Kebab might have challenged your mind!"],
    "Eskişehir": ["Studentpolis, great acronym to define it!"],
    "Gaziantep": ["Hope diabete is not a problem for you, it has lots of it!"],
    "Giresun": ["Do you like nuts? peanuts? Welcome to heaven!"],
    "Gümüşhane": ["City with most of its natives lives in Trabzon, have you seen any silver?"],
    "Hakkari": ["Great nature, hard conditions, sadly..."],
    "Hatay": ["Do you like to be in a kitchen? Sit there and enjoy the taste"],
    "Isparta": ["Rose, rose, rose and maybe carpets..."],
    "Mersin": ["İçel? Mersin? Still confusing..."],
    "İstanbul": ["Was Constantinople now its Istanbul, so if you have a date in Constantinople; she'll be waiting you there!"],
    "İzmir": ["Astonishing by all sides, of course not the gulf..."],
    "Kars": ["Paris of the East, enjoy your time!"],
    "Kastamonu": ["Dep dep dep!"],
    "Kayseri": ["Stinginess is a tradition there, watch out for your money!"],
    "Kırklareli": ["Least known province in the Thrace. Discover it!"],
    "Kırşehir": ["Land of Ahis! Small town with sincere people!"],
    "Kocaeli": ["Land of smokes, watch your breath!"],
    "Konya": ["Come, whatever and whoever you are; even though chosen the incorrect answer..."],
    "Kütahya": ["Ceramics? Lots of them are there."],
    "Malatya": ["Apricots and President-producer city. 2 of 12 Presidents of Turkiye have their origins there!"],
    "Manisa": ["Try mesir paste, you'll like it the most!"],
    "Kahramanmaraş": ["Definetely not a Mediterranean city."],
    "Mardin": ["Reflectivity of ancient architecture..."],
    "Muğla": ["Looking for expensive beaches to waste money? Try it!"],
    "Muş": ["Not 'Huş' and confused in the game too!"],
    "Nevşehir": ["Nothing new about it, name mocks you!"],
    "Niğde": ["Intersection of the roads in the South. Enjoy your bus break!"],
    "Ordu": ["Bigger Giresun, no army there."],
    "Rize": ["Full of teas and agressive people!"],
    "Sakarya": ["Less industrialized Kocaeli or something like that..."],
    "Samsun": ["Pearl of Black Sea, destination of independence torch!"],
    "Siirt": ["Nice stop for Eastern Express!"],
    "Sinop": ["Silent, natural and clear..."],
    "Sivas": ["Watch out for Kangals!"],
    "Tekirdağ": ["No! Its not a district of Çorlu!"],
    "Tokat": ["People won't slap you, no worries!"],
    "Trabzon": ["Do not choice the yellow-navy blue combinations there, just saying..."],
    "Tunceli": ["Different type of settlemet, different way of living..."],
    "Şanlıurfa": ["City of Messengers and taste!"],
    "Uşak": ["Interesting that it is not located in Black Sea!"],
    "Van": ["Do you like breakfasts? You'll meet a new variation of it there!"],
    "Yozgat": ["Really hard to find something interesting there, take your time!"],
    "Zonguldak": ["Zongudlu, Zonduglu, Zongal... wait what was that?"],
    "Aksaray": ["Watch out for Malaklıs!"],
    "Bayburt": ["Yes there really is a place like that exists."],
    "Karaman": ["Isn't it a district of Konya?"],
    "Kırıkkale": ["There is nothing broken about it."],
    "Batman": ["Yes! Turkish counterpart of Gotham City..."],
    "Şırnak": ["Province full of borders, watch out where your food is onto!"],
    "Bartın": ["Province of peace in Black Sea!"],
    "Ardahan": ["Smaller Artvin, to say."],
    "Iğdır": ["Three countries are waiting for you to pass! Fortune favors the bolt!"],
    "Karabük": ["Old Houses and Industry awaits!"],
    "Kilis": ["Smaller Gaziantep, with less taste."],
    "Osmaniye": ["A deadlock between Adana, Kahramanmaraş, Hatay and Gaziantep"],
    "Düzce": ["Bolu with a shore, with great breakfast culture!"],

};

let startTime;

const SCORES_KEY = "turkey_province_game_scores";

const provinceGeoJSONUrl = 'https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/refs/heads/master/tr-cities.json';

const map = new ol.Map({
    target: 'map',
    layers: [],
    view: new ol.View({
        center: ol.proj.fromLonLat([35.0, 39.0]), 
        zoom: 5.0 
    })
});

const provinceLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: provinceGeoJSONUrl,
        format: new ol.format.GeoJSON()
    }),
    style: getProvinceStyle('blue') 
});
map.addLayer(provinceLayer);

map.on('click', function (event) {
    map.forEachFeatureAtPixel(event.pixel, function (feature) {
        const clickedProvince = feature.get('name'); 
        if (clickedProvince) {
            checkAnswer(clickedProvince); 
        }
    });
});


let shuffledProvinces, currentQuestionIndex, score, timer;


function getPreviousScores() {
    const scores = sessionStorage.getItem(SCORES_KEY);
    return scores ? JSON.parse(scores) : [];
}


function saveScore(newScore) {
    const previousScores = getPreviousScores();
    const elapsedTime = Math.round((Date.now() - startTime) / 1000); 
    previousScores.push({ score: newScore, time: elapsedTime });
    sessionStorage.setItem(SCORES_KEY, JSON.stringify(previousScores));
}


function displayPreviousScores() {
    const previousScores = getPreviousScores();
    const scoresContainer = document.getElementById("previousScores");

   
    scoresContainer.innerHTML = "";

    if (previousScores.length > 0) {
        const sortedScores = previousScores.sort((a, b) => b.score - a.score);
        const scoreList = document.createElement("ul");
        sortedScores.forEach((entry, index) => {
            const scoreItem = document.createElement("li");
            scoreItem.textContent = `Rank ${index + 1}: ${entry.score} points in ${entry.time}s`;
            scoreList.appendChild(scoreItem);
        });
        scoresContainer.appendChild(scoreList);
    } else {
        scoresContainer.textContent = "No attempts have been made yet.";
    }
}

function startGame() {
    shuffledProvinces = [...provinces].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now(); 
    updateQuestion();
    clearProvinceHighlights();
    document.getElementById("resultMessage").innerText = "";
    document.getElementById("score").innerText = `Score: ${score}`;
    displayPreviousScores();
    startTimer(); 
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    let timeLeft = 60;

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        } else {
            timerElement.textContent = `Time Left: ${timeLeft}s`;
            timeLeft--;
        }
    }, 1000);
}

function endGame() {
    saveScore(score); 
    displayPreviousScores(); 
    alert(`Time's up! Final score: ${score}`);
    startGame(); 
}

function updateQuestion() {
    const provinceName = shuffledProvinces[currentQuestionIndex];
    document.getElementById("provinceName").innerText = `Province: ${provinceName}`;
}

function getProvinceStyle(color) {
    return new ol.style.Style({
        fill: new ol.style.Fill({
            color: color 
        }),
        stroke: new ol.style.Stroke({
            color: '#ffffff', 
            width: 2 
        })
    });
}


function highlightProvince(provinceName, color) {
    provinceLayer.getSource().getFeatures().forEach(feature => {
        if (feature.get('name') === provinceName) {
            feature.setStyle(getProvinceStyle(color));
        }
    });
}


function clearProvinceHighlights() {
    provinceLayer.getSource().getFeatures().forEach(feature => {
        feature.setStyle(getProvinceStyle('blue')); 
    });
}

function getRandomQuote(province) {
    if (provinceQuotes[province]) {
        const quotes = provinceQuotes[province];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
}


function checkAnswer(selectedProvince) {
    const currentProvince = shuffledProvinces[currentQuestionIndex];
    const resultMessage = document.getElementById("resultMessage");

    if (selectedProvince === currentProvince) {
        score++;
        resultMessage.innerText = "Correct!";
        resultMessage.style.color = "green";
        highlightProvince(selectedProvince, "green");
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledProvinces.length) {
            updateQuestion();
        } else {
            resultMessage.innerText = `Quiz complete! Final score: ${score}`;
            saveScore(score); 
            displayPreviousScores(); 
            clearInterval(timer); 
            showCongratulations();
        }
    } else {
        const quote = getRandomQuote(selectedProvince);
        resultMessage.innerText = `Incorrect! You selected ${selectedProvince}. ${quote} Restarting...`;
        resultMessage.style.color = "red";
        highlightProvince(selectedProvince, "red");
        highlightProvince(currentProvince, "green");
        saveScore(score); 
        displayPreviousScores(); 

        setTimeout(() => {
            startGame();
        }, 3000);
    }
    document.getElementById("score").innerText = `Score: ${score}`;
}


document.getElementById("restartButton").addEventListener("click", () => {
    clearInterval(timer); 
    startGame();
});

startGame();
