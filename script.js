// Base de données des villes avec leurs informations
const citiesDatabase = {
    'montreal-ca': {
        name: 'Montréal',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.5017,
        longitude: -73.5673,
        displayName: { fr: '🇨🇦 Montréal, Canada', ar: '🇨🇦 مونتريال، كندا' }
    },
    'tunis-tn': {
        name: 'Tunis',
        country: 'TN',
        method: 5,
        timezone: 'Africa/Tunis',
        latitude: 36.8065,
        longitude: 10.1815,
        displayName: { fr: '🇹🇳 Tunis, Tunisie', ar: '🇹🇳 تونس، تونس' }
    },
    'algiers-dz': {
        name: 'Algiers',
        country: 'DZ',
        method: 5,
        timezone: 'Africa/Algiers',
        latitude: 36.7538,
        longitude: 3.0588,
        displayName: { fr: '🇩🇿 Alger, Algérie', ar: '🇩🇿 الجزائر، الجزائر' }
    },
    'mecca-sa': {
        name: 'Mecca',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.4225,
        longitude: 39.8262,
        displayName: { fr: '🇸🇦 La Mecque, Arabie Saoudite', ar: '🇸🇦 مكة المكرمة، السعودية' }
    },
    'medina-sa': {
        name: 'Medina',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.5247,
        longitude: 39.5692,
        displayName: { fr: '🇸🇦 Médine, Arabie Saoudite', ar: '🇸🇦 المدينة المنورة، السعودية' }
    },
    'riyadh-sa': {
        name: 'Riyadh',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.7136,
        longitude: 46.6753,
        displayName: { fr: '🇸🇦 Riyad, Arabie Saoudite', ar: '🇸🇦 الرياض، السعودية' }
    },
    'jeddah-sa': {
        name: 'Jeddah',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.5433,
        longitude: 39.1728,
        displayName: { fr: '🇸🇦 Jeddah, Arabie Saoudite', ar: '🇸🇦 جدة، السعودية' }
    },
    'cairo-eg': {
        name: 'Cairo',
        country: 'EG',
        method: 5,
        timezone: 'Africa/Cairo',
        latitude: 30.0444,
        longitude: 31.2357,
        displayName: { fr: '🇪🇬 Le Caire, Égypte', ar: '🇪🇬 القاهرة، مصر' }
    },
    'dubai-ae': {
        name: 'Dubai',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 25.2048,
        longitude: 55.2708,
        displayName: { fr: '🇦🇪 Dubaï, Émirats Arabes Unis', ar: '🇦🇪 دبي، الإمارات' }
    },
    'abudhabi-ae': {
        name: 'Abu Dhabi',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 24.4539,
        longitude: 54.3773,
        displayName: { fr: '🇦🇪 Abu Dhabi, Émirats Arabes Unis', ar: '🇦🇪 أبو ظبي، الإمارات' }
    },
    'doha-qa': {
        name: 'Doha',
        country: 'QA',
        method: 4,
        timezone: 'Asia/Qatar',
        latitude: 25.2854,
        longitude: 51.531,
        displayName: { fr: '🇶🇦 Doha, Qatar', ar: '🇶🇦 الدوحة، قطر' }
    },
    'kuwait-kw': {
        name: 'Kuwait City',
        country: 'KW',
        method: 4,
        timezone: 'Asia/Kuwait',
        latitude: 29.3759,
        longitude: 47.9774,
        displayName: { fr: '🇰🇼 Koweït, Koweït', ar: '🇰🇼 الكويت، الكويت' }
    },
    'casablanca-ma': {
        name: 'Casablanca',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 33.5731,
        longitude: -7.5898,
        displayName: { fr: '🇲🇦 Casablanca, Maroc', ar: '🇲🇦 الدار البيضاء، المغرب' }
    },
    'rabat-ma': {
        name: 'Rabat',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 34.0209,
        longitude: -6.8416,
        displayName: { fr: '🇲🇦 Rabat, Maroc', ar: '🇲🇦 الرباط، المغرب' }
    },
    'istanbul-tr': {
        name: 'Istanbul',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 41.0082,
        longitude: 28.9784,
        displayName: { fr: '🇹🇷 Istanbul, Turquie', ar: '🇹🇷 إسطنبول، تركيا' }
    },
    'ankara-tr': {
        name: 'Ankara',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 39.9334,
        longitude: 32.8597,
        displayName: { fr: '🇹🇷 Ankara, Turquie', ar: '🇹🇷 أنقرة، تركيا' }
    },
    'paris-fr': {
        name: 'Paris',
        country: 'FR',
        method: 2,
        timezone: 'Europe/Paris',
        latitude: 48.8566,
        longitude: 2.3522,
        displayName: { fr: '🇫🇷 Paris, France', ar: '🇫🇷 باريس، فرنسا' }
    },
    'london-gb': {
        name: 'London',
        country: 'GB',
        method: 2,
        timezone: 'Europe/London',
        latitude: 51.5074,
        longitude: -0.1278,
        displayName: { fr: '🇬🇧 Londres, Royaume-Uni', ar: '🇬🇧 لندن، بريطانيا' }
    },
    'newyork-us': {
        name: 'New York',
        country: 'US',
        method: 2,
        timezone: 'America/New_York',
        latitude: 40.7128,
        longitude: -74.006,
        displayName: { fr: '🇺🇸 New York, États-Unis', ar: '🇺🇸 نيويورك، أمريكا' }
    },
    'toronto-ca': {
        name: 'Toronto',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 43.6532,
        longitude: -79.3832,
        displayName: { fr: '🇨🇦 Toronto, Canada', ar: '🇨🇦 تورونتو، كندا' }
    },
    'ottawa-ca': {
        name: 'Ottawa',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.4215,
        longitude: -75.6972,
        displayName: { fr: '🇨🇦 Ottawa, Canada', ar: '🇨🇦 أوتاوا، كندا' }
    },
    'jakarta-id': {
        name: 'Jakarta',
        country: 'ID',
        method: 1,
        timezone: 'Asia/Jakarta',
        latitude: -6.2088,
        longitude: 106.8456,
        displayName: { fr: '🇮🇩 Jakarta, Indonésie', ar: '🇮🇩 جاكرتا، إندونيسيا' }
    },
    'kualalumpur-my': {
        name: 'Kuala Lumpur',
        country: 'MY',
        method: 1,
        timezone: 'Asia/Kuala_Lumpur',
        latitude: 3.139,
        longitude: 101.6869,
        displayName: { fr: '🇲🇾 Kuala Lumpur, Malaisie', ar: '🇲🇾 كوالالمبور، ماليزيا' }
    },
    'karachi-pk': {
        name: 'Karachi',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 24.8607,
        longitude: 67.0011,
        displayName: { fr: '🇵🇰 Karachi, Pakistan', ar: '🇵🇰 كراتشي، باكستان' }
    },
    'lahore-pk': {
        name: 'Lahore',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 31.5497,
        longitude: 74.3436,
        displayName: { fr: '🇵🇰 Lahore, Pakistan', ar: '🇵🇰 لاهور، باكستان' }
    },
    'dhaka-bd': {
        name: 'Dhaka',
        country: 'BD',
        method: 1,
        timezone: 'Asia/Dhaka',
        latitude: 23.8103,
        longitude: 90.4125,
        displayName: { fr: '🇧🇩 Dhaka, Bangladesh', ar: '🇧🇩 دكا، بنغلاديش' }
    }
};

// Villes actuellement sélectionnées
let selectedCities = {
    city1: 'montreal-ca',
    city2: 'tunis-tn'
};

// Traductions
const translations = {
    fr: {
        nextPrayer: 'Prochaine prière',
        at: 'à',
        in: 'dans',
        hours: 'h',
        minutes: 'min',
        ramadanBefore: 'Ramadan commence dans',
        ramadanDuring: 'Nous sommes en Ramadan!',
        ramadanAfter: 'Ramadan est terminé',
        days: 'jours',
        day: 'jour',
        localTime: 'Heure locale:'
    },
    ar: {
        nextPrayer: 'الصلاة القادمة',
        at: 'في',
        in: 'بعد',
        hours: 'س',
        minutes: 'د',
        ramadanBefore: 'رمضان يبدأ بعد',
        ramadanDuring: 'رمضان كريم! 🌙',
        ramadanAfter: 'انتهى رمضان',
        days: 'أيام',
        day: 'يوم',
        localTime: 'الوقت المحلي:'
    }
};

// Noms des mois islamiques
const islamicMonths = {
    fr: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 
         'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 
         'Dhul-Qi\'dah', 'Dhul-Hijjah'],
    ar: ['مُحَرَّم', 'صَفَر', 'رَبِيع ٱلْأَوَّل', 'رَبِيع ٱلثَّانِي', 'جُمَادَىٰ ٱلْأُولَىٰ',
         'جُمَادَىٰ ٱلثَّانِيَة', 'رَجَب', 'شَعْبَان', 'رَمَضَان', 'شَوَّال',
         'ذُو ٱلْقَعْدَة', 'ذُو ٱلْحِجَّة']
};

// Langue actuelle
let currentLang = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.classList.remove('arabic');
        document.documentElement.setAttribute('lang', 'fr');
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    displayIslamicDate();
    displayRamadanCountdown();
    loadAllPrayerTimes();
}

// Écouteurs d'événements pour les boutons de langue
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));

// Écouteurs d'événements pour les sélecteurs de villes
document.getElementById('city1-select').addEventListener('change', (e) => {
    selectedCities.city1 = e.target.value;
    updateCityDisplay('city1');
});

document.getElementById('city2-select').addEventListener('change', (e) => {
    selectedCities.city2 = e.target.value;
    updateCityDisplay('city2');
});

// Fonction pour mettre à jour l'affichage d'une ville
async function updateCityDisplay(cityKey) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    
    document.getElementById(`${cityKey}-name`).textContent = cityData.displayName[currentLang];
    
    const timings = await getPrayerTimesForCity(cityId);
    if (timings) {
        displayPrayerTimes(cityKey, timings);
    }
}

// Fonction pour formater la date
function formatDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const date = new Date();
    const locale = currentLang === 'ar' ? 'ar-TN' : 'fr-FR';
    return date.toLocaleDateString(locale, options);
}

// Fonction pour obtenir la date islamique
async function getIslamicDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la date islamique');
        }

        const data = await response.json();
        return data.data.hijri;
    } catch (error) {
        console.error('Erreur date islamique:', error);
        return null;
    }
}

// Fonction pour afficher la date islamique
async function displayIslamicDate() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const monthName = islamicMonths[currentLang][hijriDate.month.number - 1];
    const day = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.day) : hijriDate.day;
    const year = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.year) : hijriDate.year;
    
    const islamicDateElement = document.getElementById('islamic-date');
    if (currentLang === 'ar') {
        islamicDateElement.textContent = `${day} ${monthName} ${year} هـ`;
    } else {
        islamicDateElement.textContent = `${day} ${monthName} ${year} H`;
    }
}

// Fonction pour convertir les chiffres en numéraux arabes
function convertToArabicNumerals(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// Fonction pour calculer le compte à rebours du Ramadan
async function displayRamadanCountdown() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const currentMonth = hijriDate.month.number;
    const currentDay = parseInt(hijriDate.day);
    const currentYear = parseInt(hijriDate.year);

    const ramadanCountdownElement = document.getElementById('ramadan-countdown');
    const ramadanTextElement = document.getElementById('ramadan-text');
    const t = translations[currentLang];

    if (currentMonth === 9) {
        ramadanCountdownElement.classList.add('during-ramadan');
        const daysRemaining = 30 - currentDay;
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysRemaining);
            ramadanTextElement.textContent = `${t.ramadanDuring} - متبقي ${daysArabic} ${daysRemaining > 1 ? t.days : t.day}`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanDuring} - ${daysRemaining} ${daysRemaining > 1 ? t.days : t.day} restants`;
        }
    } else if (currentMonth < 9) {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const daysInMonths = [30, 29, 30, 29, 30, 29, 30, 29];
        let daysUntilRamadan = 0;
        
        for (let i = currentMonth - 1; i < 8; i++) {
            if (i === currentMonth - 1) {
                daysUntilRamadan += daysInMonths[i] - currentDay;
            } else {
                daysUntilRamadan += daysInMonths[i];
            }
        }

        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilRamadan);
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysArabic} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysUntilRamadan} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        }
    } else {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const nextRamadanYear = currentYear + 1;
        const daysUntilNextRamadan = 365 - ((currentMonth - 9) * 30 + currentDay);
        
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilNextRamadan);
            ramadanTextElement.textContent = `رمضان القادم بعد ${daysArabic} ${t.days} تقريباً`;
        } else {
            ramadanTextElement.textContent = `Prochain Ramadan dans environ ${daysUntilNextRamadan} ${t.days}`;
        }
    }
}

// Fonction pour afficher l'heure locale
function displayLocalTime() {
    const city1Id = selectedCities.city1;
    const city1Data = citiesDatabase[city1Id];
    if (city1Data) {
        const city1Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city1Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city1-time').textContent = city1Time;
    }
    
    const city2Id = selectedCities.city2;
    const city2Data = citiesDatabase[city2Id];
    if (city2Data) {
        const city2Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city2Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city2-time').textContent = city2Time;
    }
}

// Fonction pour obtenir les heures de prière
async function getPrayerTimes(cityKey) {
    const cityId = selectedCities[cityKey];
    return await getPrayerTimesForCity(cityId);
}

async function getPrayerTimesForCity(cityId) {
    const city = citiesDatabase[cityId];
    if (!city) return null;
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city.name}&country=${city.country}&method=${city.method}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        return data.data.timings;
    } catch (error) {
        console.error(`Erreur pour ${city.name}:`, error);
        return null;
    }
}

// Fonction pour afficher les heures de prière
function displayPrayerTimes(cityKey, timings) {
    if (!timings) return;

    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayer => {
        const elementId = `${cityKey}-${prayer.toLowerCase()}`;
        const element = document.getElementById(elementId);
        if (element && timings[prayer]) {
            element.textContent = timings[prayer];
        }
    });

    highlightCurrentPrayer(cityKey, timings);
}

// Fonction pour mettre en évidence la prière actuelle
function highlightCurrentPrayer(cityKey, timings) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    if (!cityData) return;
    
    const timezone = cityData.timezone;
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const currentTime = cityTime.getHours() * 60 + cityTime.getMinutes();
    
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let currentPrayer = null;
    let nextPrayer = null;

    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = timings[prayer].split(':').map(Number);
        return {
            name: prayer,
            time: hours * 60 + minutes,
            display: timings[prayer]
        };
    });

    // Retirer les classes des prières
    for (let i = 0; i < prayerTimes.length; i++) {
        const prayerItem = document.querySelector(`#${cityKey}-${prayerTimes[i].name.toLowerCase()}`).parentElement;
        prayerItem.classList.remove('current');

        if (currentTime >= prayerTimes[i].time) {
            currentPrayer = prayerTimes[i];
            if (i < prayerTimes.length - 1) {
                nextPrayer = prayerTimes[i + 1];
            } else {
                nextPrayer = prayerTimes[0];
            }
        }
    }

    // Gérer les images de fond de la carte
    const cityCard = document.getElementById(`${cityKey}-card`);
    cityCard.classList.remove('current-prayer-fajr', 'current-prayer-dhuhr', 'current-prayer-asr', 'current-prayer-maghrib', 'current-prayer-isha');

    if (!currentPrayer) {
        nextPrayer = prayerTimes[0];
        // Si on est avant Fajr (début de journée), afficher l'image de nuit (Isha)
        cityCard.classList.add('current-prayer-isha');
    } else {
        // Ajouter la classe de la prière actuelle pour l'image de fond
        cityCard.classList.add(`current-prayer-${currentPrayer.name.toLowerCase()}`);
    }

    if (currentPrayer) {
        const currentElement = document.querySelector(`#${cityKey}-${currentPrayer.name.toLowerCase()}`).parentElement;
        currentElement.classList.add('current');
    }

    if (nextPrayer) {
        const nextElement = document.getElementById(`${cityKey}-next`);
        
        if (!nextElement) {
            console.error(`❌ Element ${cityKey}-next NOT FOUND!`);
            return;
        }
        
        console.log(`📋 Mise à jour prochaine prière pour ${cityKey}: ${nextPrayer.name}`);
        
        const timeUntil = calculateTimeUntil(nextPrayer.time, currentTime);
        const t = translations[currentLang];
        
        let prayerName = nextPrayer.name;
        if (currentLang === 'ar') {
            const arabicNames = {
                'Fajr': 'الفجر',
                'Dhuhr': 'الظهر',
                'Asr': 'العصر',
                'Maghrib': 'المغرب',
                'Isha': 'العشاء'
            };
            prayerName = arabicNames[nextPrayer.name];
        }
        
        const nextText = `${t.nextPrayer}: ${prayerName} ${t.at} ${nextPrayer.display} (${t.in} ${timeUntil})`;
        nextElement.textContent = nextText;
        
        console.log(`✅ Texte prochaine prière: "${nextText}"`);
    } else {
        console.warn(`⚠️ Pas de prochaine prière trouvée pour ${cityKey}`);
    }
}

// Fonction pour calculer le temps restant
function calculateTimeUntil(prayerTime, currentTime) {
    let diff = prayerTime - currentTime;
    
    if (diff < 0) {
        diff += 24 * 60;
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    
    const t = translations[currentLang];

    if (hours > 0) {
        return `${hours}${t.hours} ${minutes}${t.minutes}`;
    } else {
        return `${minutes}${t.minutes}`;
    }
}

// Fonction pour mettre à jour l'heure de dernière mise à jour
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update-time').textContent = timeString;
}

// Fonction principale pour charger toutes les données
async function loadAllPrayerTimes() {
    document.getElementById('current-date').textContent = formatDate();
    
    const city1Timings = await getPrayerTimes('city1');
    displayPrayerTimes('city1', city1Timings);
    
    const city2Timings = await getPrayerTimes('city2');
    displayPrayerTimes('city2', city2Timings);
    
    await displayIslamicDate();
    await displayRamadanCountdown();
    
    displayLocalTime();
    
    updateLastUpdateTime();
}

// Charger les données au démarrage
loadAllPrayerTimes();

// Mettre à jour l'heure locale toutes les secondes
setInterval(() => {
    displayLocalTime();
}, 1000);

// Mettre à jour toutes les minutes
setInterval(() => {
    loadAllPrayerTimes();
}, 60000);

// Mettre à jour l'affichage de la prière actuelle toutes les 10 secondes
setInterval(async () => {
    const city1Timings = await getPrayerTimes('city1');
    if (city1Timings) {
        highlightCurrentPrayer('city1', city1Timings);
    }
    
    const city2Timings = await getPrayerTimes('city2');
    if (city2Timings) {
        highlightCurrentPrayer('city2', city2Timings);
    }
}, 10000);

// ========== GESTION DU CORAN ==========

document.getElementById('quran-btn').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.add('active');
});

document.getElementById('close-quran').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.remove('active');
});

document.getElementById('quran-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quran-modal') {
        document.getElementById('quran-modal').classList.remove('active');
    }
});

document.getElementById('load-surah-btn').addEventListener('click', async () => {
    const surahNumber = document.getElementById('surah-select').value;
    const quranTextDiv = document.getElementById('quran-text');
    
    quranTextDiv.innerHTML = '<p class="quran-info">⏳ Chargement du Coran...</p>';
    
    try {
        // Charger les informations de la sourate
        const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const infoData = await infoResponse.json();
        
        // Charger le texte avec Tajweed depuis Tanzil (texte propre Uthmani)
        const textResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
        const textData = await textResponse.json();
        
        if (infoData.status === 'OK' && textData.status === 'OK') {
            const surahInfo = infoData.data;
            const surahText = textData.data;
            
            let html = `<h3 style="text-align: center; color: #1e3c72; margin-bottom: 20px;">
                سورة ${surahInfo.name} - ${surahInfo.englishName}
                <br><span style="font-size: 0.7em; color: #6c757d;">${surahInfo.numberOfAyahs} آيات - ${surahInfo.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
            </h3>`;
            
            // Ajouter Bismillah sauf pour sourate 9 et 1
            if (surahNumber !== '9' && surahNumber !== '1') {
                html += `<p style="text-align: center; font-size: 1.3em; color: #2a5298; margin-bottom: 25px; padding: 15px; background: rgba(42, 82, 152, 0.1); border-radius: 10px;">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>`;
            }
            
            // Afficher les versets avec style Uthmani propre
            surahText.ayahs.forEach(ayah => {
                // Appliquer des couleurs basiques pour les signes importants
                let ayahText = ayah.text;
                
                // Mettre en évidence certaines lettres importantes (simulation Tajweed basique)
                // Tanwin (double voyelles) en vert clair
                ayahText = ayahText.replace(/([ًٌٍ])/g, '<span style="color: #2ecc71;">$1</span>');
                
                // Sukun en bleu
                ayahText = ayahText.replace(/([ْ])/g, '<span style="color: #3498db;">$1</span>');
                
                // Shaddah en rouge
                ayahText = ayahText.replace(/([ّ])/g, '<span style="color: #e74c3c; font-weight: bold;">$1</span>');
                
                // Madd (alif avec hamza) en orange
                ayahText = ayahText.replace(/(آ)/g, '<span style="color: #f39c12; font-weight: bold;">$1</span>');
                
                html += `<div class="ayah">
                    <span class="ayah-number">﴿${convertToArabicNumber(ayah.numberInSurah)}﴾</span>
                    <span style="font-size: 1.1em; line-height: 2.2;">${ayahText}</span>
                </div>`;
            });
            
            quranTextDiv.innerHTML = html;
            quranTextDiv.scrollTop = 0;
        } else {
            throw new Error('Erreur API');
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        quranTextDiv.innerHTML = '<p class="quran-info" style="color: #dc3545;">❌ Erreur de chargement. Veuillez réessayer.</p>';
    }
});

// Fonction pour convertir les nombres en chiffres arabes
function convertToArabicNumber(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// ========== GESTION DU TASBIH ==========

let tasbihCount = 0;
let tasbihTarget = 0;
let currentTasbihPhrase = 'سُبْحَانَ ٱللَّٰهِ';

document.getElementById('tasbih-btn').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.add('active');
});

document.getElementById('close-tasbih').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.remove('active');
});

document.getElementById('tasbih-modal').addEventListener('click', (e) => {
    if (e.target.id === 'tasbih-modal') {
        document.getElementById('tasbih-modal').classList.remove('active');
    }
});

document.getElementById('tasbih-increment').addEventListener('click', () => {
    tasbihCount++;
    updateTasbihDisplay();
    
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    const btn = document.getElementById('tasbih-increment');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
    
    if (tasbihTarget > 0 && tasbihCount === tasbihTarget) {
        showTasbihGoalReached();
    }
});

document.getElementById('tasbih-reset').addEventListener('click', () => {
    if (confirm(currentLang === 'ar' ? 'هل تريد إعادة تعيين العداد؟' : 'Réinitialiser le compteur?')) {
        tasbihCount = 0;
        tasbihTarget = 0;
        updateTasbihDisplay();
        document.getElementById('tasbih-goal').classList.remove('active');
    }
});

document.getElementById('tasbih-target-33').addEventListener('click', () => {
    tasbihTarget = 33;
    updateTasbihGoal();
});

document.getElementById('tasbih-target-99').addEventListener('click', () => {
    tasbihTarget = 99;
    updateTasbihGoal();
});

document.querySelectorAll('.phrase-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.phrase-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTasbihPhrase = btn.dataset.phrase;
        document.getElementById('current-phrase').textContent = currentTasbihPhrase;
    });
});

function updateTasbihDisplay() {
    document.getElementById('tasbih-count').textContent = tasbihCount;
}

function updateTasbihGoal() {
    const goalDiv = document.getElementById('tasbih-goal');
    const remaining = tasbihTarget - tasbihCount;
    
    if (remaining > 0) {
        if (currentLang === 'ar') {
            goalDiv.textContent = `الهدف: ${tasbihTarget} - متبقي: ${remaining}`;
        } else {
            goalDiv.textContent = `Objectif: ${tasbihTarget} - Reste: ${remaining}`;
        }
        goalDiv.classList.add('active');
    } else {
        goalDiv.classList.remove('active');
    }
}

function showTasbihGoalReached() {
    const goalDiv = document.getElementById('tasbih-goal');
    if (currentLang === 'ar') {
        goalDiv.textContent = '🎉 ما شاء الله! تم إكمال الهدف! 🎉';
    } else {
        goalDiv.textContent = '🎉 MashAllah! Objectif atteint! 🎉';
    }
    goalDiv.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
    goalDiv.style.color = 'white';
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
    
    setTimeout(() => {
        goalDiv.style.background = '#fff3cd';
        goalDiv.style.color = '#856404';
    }, 3000);
}

// ========== GESTION DE LA QIBLA (Kaaba fixe, boussole qui tourne) ==========

// Coordonnées de La Mecque (Kaaba)
const MECCA = {
    lat: 21.4225,
    lng: 39.8262
};

let userPosition = null;
let qiblaDirection = 0;
let deviceHeading = 0;
let orientationListener = null;

// Ouvrir modal Qibla
document.getElementById('qibla-btn').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.add('active');
    initQiblaCompass();
});

// Fermer modal Qibla
document.getElementById('close-qibla').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.remove('active');
    stopOrientationTracking();
});

// Fermer en cliquant en dehors
document.getElementById('qibla-modal').addEventListener('click', (e) => {
    if (e.target.id === 'qibla-modal') {
        document.getElementById('qibla-modal').classList.remove('active');
        stopOrientationTracking();
    }
});

// Initialiser la boussole Qibla
function initQiblaCompass() {
    const statusText = document.getElementById('status-text');
    
    // Réinitialiser
    qiblaDirection = 0;
    deviceHeading = 0;
    userPosition = null;
    
    // Message de chargement
    if (currentLang === 'ar') {
        statusText.textContent = '🔍 جاري تحديد موقعك...';
    } else {
        statusText.textContent = '🔍 Détection de votre position...';
    }
    statusText.classList.remove('success', 'error');
    
    // Demander la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            onQiblaLocationSuccess,
            onQiblaLocationError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        statusText.classList.add('error');
        if (currentLang === 'ar') {
            statusText.textContent = '❌ الجهاز لا يدعم تحديد الموقع';
        } else {
            statusText.textContent = '❌ Géolocalisation non supportée';
        }
    }
}

// Succès de la géolocalisation
function onQiblaLocationSuccess(position) {
    userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    
    // Calculer la direction Qibla
    qiblaDirection = calculateBearing(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Calculer la distance
    const distance = calculateDistance(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Afficher le succès
    const statusText = document.getElementById('status-text');
    statusText.classList.add('success');
    if (currentLang === 'ar') {
        statusText.textContent = '✅ تم تحديد اتجاه القبلة بنجاح!';
    } else {
        statusText.textContent = '✅ Direction de la Qibla détectée avec succès!';
    }
    
    // Afficher les informations
    document.getElementById('qibla-angle-value').textContent = Math.round(qiblaDirection) + '°';
    document.getElementById('qibla-distance-value').textContent = Math.round(distance).toLocaleString() + ' km';
    document.getElementById('qibla-position-value').textContent = 
        `${userPosition.lat.toFixed(4)}°, ${userPosition.lng.toFixed(4)}°`;
    
    // Démarrer le suivi de l'orientation
    startOrientationTracking();
    
    // Sur PC (pas d'orientation), tourner la boussole immédiatement
    updateCompassRotation();
}

// Erreur de géolocalisation
function onQiblaLocationError(error) {
    const statusText = document.getElementById('status-text');
    statusText.classList.add('error');
    
    if (currentLang === 'ar') {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ يرجى السماح بتحديد الموقع';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ الموقع غير متاح';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ انتهت مهلة الانتظار';
                break;
            default:
                statusText.textContent = '❌ خطأ في التحديد';
        }
    } else {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ Veuillez autoriser la géolocalisation';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ Position non disponible';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ Délai d\'attente dépassé';
                break;
            default:
                statusText.textContent = '❌ Erreur lors de la détection';
        }
    }
}

// Démarrer le suivi de l'orientation
function startOrientationTracking() {
    if (window.DeviceOrientationEvent) {
        // Pour iOS 13+, demander la permission
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        attachOrientationListener();
                    }
                })
                .catch(console.error);
        } else {
            // Pour Android et anciens iOS
            attachOrientationListener();
        }
    }
}

// Attacher le listener d'orientation
function attachOrientationListener() {
    orientationListener = (event) => {
        if (event.alpha !== null) {
            // Alpha = rotation autour de l'axe Z (boussole)
            deviceHeading = event.alpha;
            
            // Pour iOS, event.webkitCompassHeading est plus précis
            if (event.webkitCompassHeading) {
                deviceHeading = event.webkitCompassHeading;
            }
            
            updateCompassRotation();
        }
    };
    
    window.addEventListener('deviceorientation', orientationListener);
}

// Arrêter le suivi de l'orientation
function stopOrientationTracking() {
    if (orientationListener) {
        window.removeEventListener('deviceorientation', orientationListener);
        orientationListener = null;
    }
}

// Mettre à jour la rotation de la boussole
function updateCompassRotation() {
    if (!userPosition) return;
    
    const compassCircle = document.getElementById('compass-rotating');
    
    // La Kaaba est FIXE en haut (0°)
    // Le cercle doit tourner pour montrer où est le Nord
    // Rotation = direction Qibla - orientation device
    let rotation = qiblaDirection - deviceHeading;
    
    // Normaliser l'angle
    rotation = ((rotation % 360) + 360) % 360;
    
    // Appliquer la rotation au cercle
    compassCircle.style.transform = `rotate(${rotation}deg)`;
}

// Calculer l'angle entre deux points (bearing)
function calculateBearing(lat1, lng1, lat2, lng2) {
    const dLng = toRadians(lng2 - lng1);
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    
    const y = Math.sin(dLng) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
              Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);
    
    let bearing = toDegrees(Math.atan2(y, x));
    bearing = (bearing + 360) % 360;
    
    return bearing;
}

// Calculer la distance entre deux points (Haversine)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
}

// ========== MÉTÉO TEMPS RÉEL - OPEN-METEO API ==========
// API 100% GRATUITE, SANS CLÉ, SANS LIMITE!
// https://open-meteo.com/

const weatherCache = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Récupérer la VRAIE météo avec Open-Meteo (SANS CLÉ!)
async function fetchRealWeather(cityName, lat, lon, cityIndex) {
    console.log(`🌍 fetchRealWeather appelée: ${cityName} (${lat}, ${lon}) - Index: ${cityIndex}`);
    
    const cacheKey = `${cityName}-${lat}-${lon}`;
    
    // Vérifier le cache
    const cached = weatherCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
        console.log(`📦 Météo en cache pour ${cityName}: ${cached.temp}°C`);
        updateAllPrayersWeather(cityIndex, cached.temp, cached.weatherCode);
        return;
    }
    
    try {
        // API Open-Meteo - GRATUITE, SANS CLÉ!
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        
        console.log(`📡 Appel API: ${url}`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`📦 Données reçues:`, data);
        
        // Extraire température et code météo
        const temp = Math.round(data.current_weather.temperature);
        const weatherCode = data.current_weather.weathercode;
        
        console.log(`✅ Météo RÉELLE pour ${cityName}: ${temp}°C (code: ${weatherCode})`);
        
        // Mettre en cache
        weatherCache.set(cacheKey, {
            temp: temp,
            weatherCode: weatherCode,
            timestamp: Date.now()
        });
        
        // Afficher
        console.log(`🎨 Appel updateAllPrayersWeather(${cityIndex}, ${temp}, ${weatherCode})`);
        updateAllPrayersWeather(cityIndex, temp, weatherCode);
        
    } catch (error) {
        console.error(`❌ Erreur météo pour ${cityName}:`, error);
        // Météo par défaut selon saison
        const defaultTemp = getDefaultTempBySeason();
        console.log(`⚠️ Utilisation température par défaut: ${defaultTemp}°C`);
        updateAllPrayersWeather(cityIndex, defaultTemp, 0);
    }
}

// Température par défaut selon saison
function getDefaultTempBySeason() {
    const month = new Date().getMonth() + 1;
    if (month === 12 || month === 1 || month === 2) return -5; // Hiver
    if (month >= 3 && month <= 5) return 10; // Printemps
    if (month >= 6 && month <= 8) return 25; // Été
    return 12; // Automne
}

// Convertir les codes Open-Meteo vers nos icônes
// https://open-meteo.com/en/docs
function getWeatherIconFromCode(prayer, weatherCode) {
    const isNight = (prayer === 'isha' || prayer === 'fajr');
    
    // Codes Open-Meteo WMO:
    // 0 = Clair
    // 1,2,3 = Nuageux
    // 45,48 = Brouillard
    // 51,53,55 = Bruine
    // 61,63,65 = Pluie
    // 71,73,75 = Neige
    // 77 = Grésil
    // 80,81,82 = Averses
    // 85,86 = Averses de neige
    // 95,96,99 = Orage
    
    // Clair (0)
    if (weatherCode === 0) {
        return isNight ? 
            { icon: '🌙', anim: 'clear-night' } : 
            { icon: '☀️', anim: 'sunny' };
    }
    
    // Partiellement nuageux (1,2)
    if (weatherCode === 1 || weatherCode === 2) {
        return isNight ?
            { icon: '🌙', anim: 'cloudy' } :
            { icon: '🌤️', anim: 'cloudy' };
    }
    
    // Nuageux (3)
    if (weatherCode === 3) {
        return { icon: '☁️', anim: 'clouds' };
    }
    
    // Brouillard (45,48)
    if (weatherCode === 45 || weatherCode === 48) {
        return { icon: '🌫️', anim: 'fog' };
    }
    
    // Bruine (51,53,55)
    if (weatherCode >= 51 && weatherCode <= 55) {
        return { icon: '🌦️', anim: 'drizzle' };
    }
    
    // Pluie (61,63,65)
    if (weatherCode >= 61 && weatherCode <= 65) {
        return weatherCode === 65 ?
            { icon: '🌧️', anim: 'heavy-rain' } :
            { icon: '🌧️', anim: 'rain' };
    }
    
    // Neige (71,73,75)
    if (weatherCode >= 71 && weatherCode <= 75) {
        return weatherCode === 75 ?
            { icon: '❄️', anim: 'heavy-snow' } :
            { icon: '🌨️', anim: 'snow' };
    }
    
    // Grésil (77)
    if (weatherCode === 77) {
        return { icon: '🌨️', anim: 'snow' };
    }
    
    // Averses (80,81,82)
    if (weatherCode >= 80 && weatherCode <= 82) {
        return { icon: '🌧️', anim: 'heavy-rain' };
    }
    
    // Averses de neige (85,86)
    if (weatherCode === 85 || weatherCode === 86) {
        return { icon: '❄️', anim: 'heavy-snow' };
    }
    
    // Orage (95,96,99)
    if (weatherCode >= 95 && weatherCode <= 99) {
        return { icon: '⛈️', anim: 'thunderstorm' };
    }
    
    // Par défaut
    return isNight ?
        { icon: '🌙', anim: 'clear-night' } :
        { icon: '☀️', anim: 'sunny' };
}

// Mettre à jour la météo d'une prière
function updatePrayerWeather(cityIndex, prayer, temp, weatherCode) {
    console.log(`🔧 updatePrayerWeather: city${cityIndex}-${prayer}, temp=${temp}, code=${weatherCode}`);
    
    const weatherDiv = document.getElementById(`city${cityIndex}-${prayer}-weather`);
    if (!weatherDiv) {
        console.error(`❌ Element NOT FOUND: city${cityIndex}-${prayer}-weather`);
        return;
    }
    console.log(`✅ Element FOUND: city${cityIndex}-${prayer}-weather`);
    
    const iconDiv = weatherDiv.querySelector('.weather-icon');
    const tempSpan = weatherDiv.querySelector('.weather-temp');
    
    if (!iconDiv) {
        console.error(`❌ .weather-icon NOT FOUND in city${cityIndex}-${prayer}-weather`);
    }
    if (!tempSpan) {
        console.error(`❌ .weather-temp NOT FOUND in city${cityIndex}-${prayer}-weather`);
    }
    
    if (tempSpan) {
        const oldText = tempSpan.textContent;
        tempSpan.textContent = temp + '°';
        console.log(`✅ Température MISE À JOUR: "${oldText}" → "${temp}°"`);
    }
    
    if (iconDiv) {
        const weatherInfo = getWeatherIconFromCode(prayer, weatherCode);
        const oldIcon = iconDiv.textContent;
        iconDiv.textContent = weatherInfo.icon;
        iconDiv.setAttribute('data-weather', weatherInfo.anim);
        console.log(`✅ Icône MISE À JOUR: "${oldIcon}" → "${weatherInfo.icon}" (${weatherInfo.anim})`);
    }
}

// Mettre à jour toutes les prières d'une ville
function updateAllPrayersWeather(cityIndex, temp, weatherCode) {
    console.log(`🎨 updateAllPrayersWeather: cityIndex=${cityIndex}, temp=${temp}, code=${weatherCode}`);
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        updatePrayerWeather(cityIndex, prayer, temp, weatherCode);
    });
    console.log(`✅ Mise à jour terminée pour ville ${cityIndex}`);
}

// Initialiser la météo RÉELLE pour toutes les villes
function initRealWeather() {
    console.log('🌤️ ===== INIT MÉTÉO TEMPS RÉEL =====');
    
    // Ville 1
    const city1Id = selectedCities.city1;
    if (city1Id && citiesDatabase[city1Id]) {
        const city = citiesDatabase[city1Id];
        if (city.latitude && city.longitude) {
            console.log(`📍 Ville 1: ${city.name} (${city.latitude}, ${city.longitude})`);
            fetchRealWeather(city.name, city.latitude, city.longitude, 1);
        } else {
            console.error(`❌ Pas de coordonnées pour ${city.name}`);
        }
    }
    
    // Ville 2 si visible
    const city2Card = document.getElementById('city2-card');
    if (city2Card && city2Card.style.display !== 'none') {
        const city2Id = selectedCities.city2;
        if (city2Id && citiesDatabase[city2Id]) {
            const city = citiesDatabase[city2Id];
            if (city.latitude && city.longitude) {
                console.log(`📍 Ville 2: ${city.name} (${city.latitude}, ${city.longitude})`);
                fetchRealWeather(city.name, city.latitude, city.longitude, 2);
            } else {
                console.error(`❌ Pas de coordonnées pour ${city.name}`);
            }
        }
    }
    
    console.log('🏁 ===== FIN INIT MÉTÉO =====');
}

// Rafraîchir la météo toutes les 10 minutes
setInterval(initRealWeather, 10 * 60 * 1000);

// ========== FIN MÉTÉO TEMPS RÉEL ==========

// Convertir degrés en radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Convertir radians en degrés
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// ========== CALENDRIER RAMADAN ==========

// Dates de Ramadan 1446 (approximatives)
const ramadanStart = new Date('2025-02-28'); // 1er Ramadan 1446
const ramadanDays = 30; // Ramadan peut avoir 29 ou 30 jours

// Générer le calendrier Ramadan
function generateRamadanCalendar() {
    const calendarGrid = document.getElementById('ramadan-calendar-grid');
    if (!calendarGrid) return;
    
    calendarGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const monthNamesFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const monthNamesAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const dayNamesAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    console.log('📅 Génération calendrier Ramadan...');
    
    for (let i = 1; i <= ramadanDays; i++) {
        const gregorianDate = new Date(ramadanStart);
        gregorianDate.setDate(gregorianDate.getDate() + (i - 1));
        
        const dayOfWeek = gregorianDate.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6); // Dimanche ou Samedi
        const isToday = gregorianDate.getTime() === today.getTime();
        const isSpecialNight = i >= 21; // Derniers 10 jours
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        if (isWeekend) {
            dayElement.classList.add('weekend');
        }
        if (isSpecialNight) {
            dayElement.classList.add('special-night');
        }
        
        const ramadanDayNum = document.createElement('span');
        ramadanDayNum.className = 'ramadan-day-num';
        ramadanDayNum.textContent = i;
        
        const gregorianDateSpan = document.createElement('span');
        gregorianDateSpan.className = 'gregorian-date';
        const day = gregorianDate.getDate();
        const month = gregorianDate.getMonth();
        
        if (currentLang === 'ar') {
            gregorianDateSpan.textContent = `${day} ${monthNamesAr[month]}`;
        } else {
            gregorianDateSpan.textContent = `${day} ${monthNamesFr[month]}`;
        }
        
        const dayOfWeekSpan = document.createElement('span');
        dayOfWeekSpan.className = 'day-of-week';
        dayOfWeekSpan.textContent = currentLang === 'ar' ? dayNamesAr[dayOfWeek] : dayNamesFr[dayOfWeek];
        
        dayElement.appendChild(ramadanDayNum);
        dayElement.appendChild(gregorianDateSpan);
        dayElement.appendChild(dayOfWeekSpan);
        
        // Vérifier si une note existe pour ce jour
        const hasNote = getRamadanNote(i);
        if (hasNote) {
            const noteIcon = document.createElement('span');
            noteIcon.className = 'note-indicator';
            noteIcon.textContent = '📝';
            noteIcon.title = 'Ce jour a une note';
            dayElement.appendChild(noteIcon);
        }
        
        // Rendre le jour cliquable pour ajouter/modifier une note
        dayElement.style.cursor = 'pointer';
        dayElement.addEventListener('click', () => {
            showNoteModal(i);
        });
        
        calendarGrid.appendChild(dayElement);
    }
    
    console.log(`✅ Calendrier généré: ${ramadanDays} jours`);
}

// Ouvrir le modal du calendrier Ramadan
function openRamadanCalendar() {
    console.log('📅 Ouverture calendrier Ramadan...');
    
    const modal = document.getElementById('ramadan-calendar-modal');
    if (!modal) {
        console.error('❌ Modal calendrier introuvable!');
        return;
    }
    
    generateRamadanCalendar();
    modal.classList.add('active');
    
    console.log('✅ Calendrier Ramadan ouvert!');
}

// Fermer le modal du calendrier Ramadan
function closeRamadanCalendar() {
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Initialiser les événements du calendrier Ramadan
function initRamadanCalendarEvents() {
    console.log('🌙 Initialisation événements calendrier Ramadan...');
    
    // Clic sur le countdown pour ouvrir le calendrier
    const ramadanCountdown = document.getElementById('ramadan-countdown');
    if (ramadanCountdown) {
        ramadanCountdown.addEventListener('click', openRamadanCalendar);
        console.log('✅ Événement clic sur countdown ajouté');
    } else {
        console.error('❌ ramadan-countdown introuvable');
    }
    
    // Bouton fermer
    const closeBtn = document.getElementById('close-ramadan-calendar');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeRamadanCalendar);
        console.log('✅ Événement fermeture ajouté');
    }
    
    // Clic en dehors du modal
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeRamadanCalendar();
            }
        });
    }
    
    console.log('✅ Événements calendrier Ramadan initialisés');
}

// ========== FIN CALENDRIER RAMADAN ==========
// ========== INITIALISATION AU CHARGEMENT ==========

// S'assurer que la page est complètement chargée
window.addEventListener('load', () => {
    console.log('🚀 Page chargée, initialisation météo...');
    
    // Attendre 2 secondes pour être sûr que tout est prêt
    setTimeout(() => {
        console.log('📡 Appel initRealWeather...');
        initRealWeather();
        console.log('✅ Météo TEMPS RÉEL activée!');
    }, 2000);
});

// Aussi essayer avec DOMContentLoaded (backup)
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM chargé');
    
    const city1Select = document.getElementById('city1-select');
    const city2Select = document.getElementById('city2-select');
    
    if (city1Select) {
        city1Select.addEventListener('change', () => {
            console.log('🔄 Changement ville 1');
            setTimeout(initRealWeather, 500);
        });
    }
    
    if (city2Select) {
        city2Select.addEventListener('change', () => {
            console.log('🔄 Changement ville 2');
            setTimeout(initRealWeather, 500);
        });
    }
    
    // Aussi initialiser ici (backup)
    setTimeout(() => {
        console.log('📡 Backup: Appel initRealWeather...');
        initRealWeather();
    }, 3000);
    
    // Initialiser le calendrier Ramadan
    initRamadanCalendarEvents();
});

// ========== PWA & NOTIFICATIONS ==========

// Enregistrer le Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker enregistré:', registration.scope);
                
                // Demander la permission pour les notifications
                requestNotificationPermission();
            })
            .catch(error => {
                console.error('❌ Erreur Service Worker:', error);
            });
    });
}

// Demander la permission pour les notifications
async function requestNotificationPermission() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        console.log('🔔 Permission notifications:', permission);
        
        if (permission === 'granted') {
            console.log('✅ Notifications autorisées!');
            schedulePrayerNotifications();
        }
    }
}

// Planifier les notifications pour toutes les prières d'aujourd'hui
function schedulePrayerNotifications() {
    if (!('serviceWorker' in navigator) || Notification.permission !== 'granted') {
        return;
    }
    
    console.log('📅 Planification des notifications de prières...');
    
    // Récupérer les horaires de la ville 1
    const city1Data = citiesData[document.getElementById('city1-select').value];
    if (!city1Data) return;
    
    getPrayerTimes('city1').then(timings => {
        if (!timings) return;
        
        const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        
        prayers.forEach(prayer => {
            const time = timings[prayer];
            if (!time) return;
            
            // Créer un objet Date pour aujourd'hui avec l'heure de la prière
            const now = new Date();
            const [hours, minutes] = time.split(':');
            const prayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
            
            // Si la prière n'est pas encore passée aujourd'hui
            if (prayerDate > now) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.active.postMessage({
                        type: 'SCHEDULE_PRAYER',
                        prayer: prayer,
                        time: prayerDate.toISOString(),
                        cityName: city1Data.city
                    });
                });
                
                console.log(`✅ Notification planifiée: ${prayer} à ${time}`);
            }
        });
    });
    
    // Replanifier toutes les 24h
    setTimeout(schedulePrayerNotifications, 24 * 60 * 60 * 1000);
}

// Afficher le bouton d'installation PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Créer le bouton d'installation
    showInstallButton();
});

function showInstallButton() {
    const installDiv = document.createElement('div');
    installDiv.id = 'pwa-install-banner';
    installDiv.innerHTML = `
        <div class="pwa-install-content">
            <span class="pwa-icon">📱</span>
            <span class="pwa-text">
                <strong data-fr="Installer l'application" data-ar="تثبيت التطبيق">Installer l'application</strong>
                <small data-fr="Accès rapide depuis votre écran d'accueil" data-ar="وصول سريع من الشاشة الرئيسية">Accès rapide depuis votre écran d'accueil</small>
            </span>
            <button id="pwa-install-btn" class="pwa-install-button">
                <span data-fr="Installer" data-ar="تثبيت">Installer</span>
            </button>
            <button id="pwa-close-btn" class="pwa-close-button">✕</button>
        </div>
    `;
    
    document.body.appendChild(installDiv);
    
    // Appliquer les traductions
    updateTranslations();
    
    // Événement clic sur installer
    document.getElementById('pwa-install-btn').addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        console.log('🎯 Installation PWA:', outcome);
        
        if (outcome === 'accepted') {
            console.log('✅ PWA installée!');
        }
        
        deferredPrompt = null;
        installDiv.remove();
    });
    
    // Événement clic sur fermer
    document.getElementById('pwa-close-btn').addEventListener('click', () => {
        installDiv.remove();
    });
}

// Détecter quand l'app est installée
window.addEventListener('appinstalled', () => {
    console.log('🎉 Application installée avec succès!');
    deferredPrompt = null;
});

// ========== NOTES CALENDRIER RAMADAN ==========

// Charger les notes depuis localStorage
function loadRamadanNotes() {
    const notes = localStorage.getItem('ramadan-notes');
    return notes ? JSON.parse(notes) : {};
}

// Sauvegarder les notes
function saveRamadanNotes(notes) {
    localStorage.setItem('ramadan-notes', JSON.stringify(notes));
}

// Ajouter/Modifier une note pour un jour de Ramadan
function setRamadanNote(day, note) {
    const notes = loadRamadanNotes();
    notes[day] = note;
    saveRamadanNotes(notes);
    console.log(`✅ Note sauvegardée pour le jour ${day}`);
}

// Récupérer une note
function getRamadanNote(day) {
    const notes = loadRamadanNotes();
    return notes[day] || '';
}

// Supprimer une note
function deleteRamadanNote(day) {
    const notes = loadRamadanNotes();
    delete notes[day];
    saveRamadanNotes(notes);
}

// Afficher le modal de note
function showNoteModal(day) {
    const existingNote = getRamadanNote(day);
    
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'note-modal';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal" onclick="document.getElementById('note-modal').remove()">&times;</span>
            <h2 style="color: #ffd700; text-align: center;">
                📝 <span data-fr="Note pour le jour ${day} de Ramadan" data-ar="ملاحظة لليوم ${day} من رمضان">Note pour le jour ${day} de Ramadan</span>
            </h2>
            <textarea id="note-textarea" style="width: 100%; min-height: 150px; padding: 15px; font-size: 1.1em; border-radius: 10px; border: 2px solid #ffd700; background: rgba(255,255,255,0.9); color: #1e3c72; font-family: inherit;" placeholder="Écrivez votre note ici...">${existingNote}</textarea>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="saveNote(${day})" style="flex: 1; padding: 15px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    💾 <span data-fr="Sauvegarder" data-ar="حفظ">Sauvegarder</span>
                </button>
                ${existingNote ? `<button onclick="deleteNote(${day})" style="padding: 15px; background: linear-gradient(135deg, #f44336, #da190b); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    🗑️ <span data-fr="Supprimer" data-ar="حذف">Supprimer</span>
                </button>` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    updateTranslations();
    document.getElementById('note-textarea').focus();
}

// Fonction globale pour sauvegarder
window.saveNote = function(day) {
    const note = document.getElementById('note-textarea').value.trim();
    if (note) {
        setRamadanNote(day, note);
        alert('✅ Note sauvegardée!');
    }
    document.getElementById('note-modal').remove();
    generateRamadanCalendar(); // Régénérer pour afficher l'indicateur
};

// Fonction globale pour supprimer
window.deleteNote = function(day) {
    if (confirm('Supprimer cette note?')) {
        deleteRamadanNote(day);
        alert('🗑️ Note supprimée!');
        document.getElementById('note-modal').remove();
        generateRamadanCalendar();
    }
};

console.log('✅ PWA & Notifications initialisés!');
  max-width: 90%;
            animation: slideUp 0.5s ease;
        ">
            📱 Installer l'application sur votre appareil!
            <div style="margin-top: 10px;">
                <button id="install-btn" style="
                    background: #1e3c72;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 700;
                    cursor: pointer;
                    margin-right: 10px;
                ">Installer</button>
                <button id="dismiss-btn" style="
                    background: transparent;
                    color: #1e3c72;
                    border: 2px solid #1e3c72;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 700;
                    cursor: pointer;
                ">Plus tard</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    document.getElementById('install-btn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`Installation: ${outcome}`);
            deferredPrompt = null;
        }
        banner.remove();
    });
    
    document.getElementById('dismiss-btn').addEventListener('click', () => {
        banner.remove();
    });
}

// ========== FIN PWA ==========

console.log('📱 PWA initialisée!');
