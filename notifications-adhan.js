// ========== SYSTÈME DE NOTIFICATIONS AMÉLIORÉ + ADHAN ==========

// Charger les paramètres depuis localStorage
function loadSettings() {
    const defaultSettings = {
        notificationsEnabled: false,
        adhanEnabled: false,
        adhanMuezzin: 'afasy', // afasy, mishary, basit
        adhanVolume: 0.7,
        notificationBefore: 0, // Minutes avant (0, 5, 10, 15)
        calculationMethod: 2 // Méthode de calcul (1-7)
    };
    
    const saved = localStorage.getItem('prayer-settings');
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
}

// Sauvegarder les paramètres
function saveSettings(settings) {
    localStorage.setItem('prayer-settings', JSON.stringify(settings));
}

// Demander la permission pour les notifications
async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('❌ Votre navigateur ne supporte pas les notifications');
        return false;
    }
    
    const permission = await Notification.requestPermission();
    console.log('🔔 Permission notifications:', permission);
    
    return permission === 'granted';
}

// Afficher le popup de demande de notifications
function showNotificationPrompt() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'notification-prompt-modal';
    
    modal.innerHTML = `
        <div class="modal-content notification-prompt-content">
            <h2 style="color: #ffd700; text-align: center; margin-bottom: 20px;">
                🔔 <span data-fr="Activer les notifications de prière?" data-ar="تفعيل تنبيهات الصلاة؟">Activer les notifications de prière?</span>
            </h2>
            
            <div class="notification-features">
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <span class="feature-text">
                        <strong data-fr="Notifications à l'heure de chaque prière" data-ar="تنبيهات في وقت كل صلاة">Notifications à l'heure de chaque prière</strong>
                        <small data-fr="Recevez une alerte pour ne jamais manquer une prière" data-ar="احصل على تنبيه لكي لا تفوت أي صلاة">Recevez une alerte pour ne jamais manquer une prière</small>
                    </span>
                </div>
                
                <div class="feature-item">
                    <span class="feature-icon">📢</span>
                    <span class="feature-text">
                        <strong data-fr="Adhan automatique (optionnel)" data-ar="الأذان التلقائي (اختياري)">Adhan automatique (optionnel)</strong>
                        <small data-fr="Écoutez l'appel à la prière" data-ar="استمع إلى الأذان">Écoutez l'appel à la prière</small>
                    </span>
                </div>
                
                <div class="feature-item">
                    <span class="feature-icon">⏰</span>
                    <span class="feature-text">
                        <strong data-fr="Rappels avant la prière" data-ar="تذكير قبل الصلاة">Rappels avant la prière</strong>
                        <small data-fr="Notification 5-10 min avant (configurable)" data-ar="تنبيه قبل ٥-١٠ دقائق">Notification 5-10 min avant (configurable)</small>
                    </span>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 30px;">
                <button onclick="enableNotifications()" class="btn-primary" style="flex: 1; padding: 15px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    ✅ <span data-fr="Activer" data-ar="تفعيل">Activer</span>
                </button>
                <button onclick="closeNotificationPrompt()" style="flex: 1; padding: 15px; background: linear-gradient(135deg, #757575, #616161); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    ⏭️ <span data-fr="Plus tard" data-ar="لاحقاً">Plus tard</span>
                </button>
            </div>
            
            <p style="text-align: center; margin-top: 15px; font-size: 0.9em; opacity: 0.8; color: #a8dadc;">
                <span data-fr="Vous pouvez changer cela dans les paramètres à tout moment" data-ar="يمكنك تغيير ذلك في الإعدادات في أي وقت">Vous pouvez changer cela dans les paramètres à tout moment</span>
            </p>
        </div>
    `;
    
    document.body.appendChild(modal);
    updateTranslations();
}

// Fonction globale pour activer les notifications
window.enableNotifications = async function() {
    const granted = await requestNotificationPermission();
    
    if (granted) {
        const settings = loadSettings();
        settings.notificationsEnabled = true;
        saveSettings(settings);
        
        schedulePrayerNotifications();
        
        alert('✅ Notifications activées! Vous recevrez une alerte à chaque prière.');
        
        // Proposer d'activer l'Adhan
        setTimeout(showAdhanPrompt, 1000);
    } else {
        alert('❌ Permissions refusées. Vous pouvez les activer dans les paramètres de votre navigateur.');
    }
    
    closeNotificationPrompt();
};

// Fermer le prompt de notifications
window.closeNotificationPrompt = function() {
    const modal = document.getElementById('notification-prompt-modal');
    if (modal) modal.remove();
};

// Afficher le prompt pour l'Adhan
function showAdhanPrompt() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'adhan-prompt-modal';
    
    modal.innerHTML = `
        <div class="modal-content notification-prompt-content">
            <h2 style="color: #ffd700; text-align: center; margin-bottom: 20px;">
                📢 <span data-fr="Activer l'Adhan?" data-ar="تفعيل الأذان؟">Activer l'Adhan?</span>
            </h2>
            
            <p style="text-align: center; margin-bottom: 20px; font-size: 1.1em; color: #a8dadc;">
                <span data-fr="Écoutez l'appel à la prière à l'heure de chaque Salat" data-ar="استمع إلى الأذان في وقت كل صلاة">Écoutez l'appel à la prière à l'heure de chaque Salat</span>
            </p>
            
            <div class="adhan-selection">
                <label style="color: #ffd700; font-weight: 600; display: block; margin-bottom: 10px;">
                    <span data-fr="Choisir le muezzin:" data-ar="اختيار المؤذن:">Choisir le muezzin:</span>
                </label>
                <select id="muezzin-select" style="width: 100%; padding: 12px; font-size: 1.1em; border-radius: 8px; border: 2px solid #ffd700; background: rgba(255,255,255,0.9); color: #1e3c72;">
                    <option value="afasy">Sheikh Mishary Rashid Al-Afasy</option>
                    <option value="mishary">Sheikh Mishary bin Rashid</option>
                    <option value="basit">Sheikh Abdul Basit</option>
                </select>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 30px;">
                <button onclick="enableAdhan()" class="btn-primary" style="flex: 1; padding: 15px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    ✅ <span data-fr="Activer l'Adhan" data-ar="تفعيل الأذان">Activer l'Adhan</span>
                </button>
                <button onclick="closeAdhanPrompt()" style="flex: 1; padding: 15px; background: linear-gradient(135deg, #757575, #616161); color: white; border: none; border-radius: 10px; font-size: 1.1em; font-weight: 600; cursor: pointer;">
                    ⏭️ <span data-fr="Non merci" data-ar="لا شكراً">Non merci</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    updateTranslations();
}

// Fonction globale pour activer l'Adhan
window.enableAdhan = function() {
    const muezzin = document.getElementById('muezzin-select').value;
    const settings = loadSettings();
    settings.adhanEnabled = true;
    settings.adhanMuezzin = muezzin;
    saveSettings(settings);
    
    alert('✅ Adhan activé! Vous entendrez l\'appel à la prière à chaque Salat.');
    closeAdhanPrompt();
};

// Fermer le prompt Adhan
window.closeAdhanPrompt = function() {
    const modal = document.getElementById('adhan-prompt-modal');
    if (modal) modal.remove();
};

// Planifier les notifications de prières
function schedulePrayerNotifications() {
    const settings = loadSettings();
    
    if (!settings.notificationsEnabled) {
        console.log('⏭️ Notifications désactivées');
        return;
    }
    
    if (Notification.permission !== 'granted') {
        console.log('❌ Permission non accordée');
        return;
    }
    
    console.log('📅 Planification des notifications...');
    
    // Récupérer les horaires de la ville 1
    getPrayerTimes('city1').then(timings => {
        if (!timings) return;
        
        const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        const now = new Date();
        
        prayers.forEach(prayer => {
            const time = timings[prayer];
            if (!time) return;
            
            const [hours, minutes] = time.split(':');
            const prayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
            
            // Notification à l'heure exacte
            if (prayerDate > now) {
                const delay = prayerDate.getTime() - now.getTime();
                setTimeout(() => {
                    showPrayerNotification(prayer);
                    if (settings.adhanEnabled) {
                        playAdhan(settings.adhanMuezzin);
                    }
                }, delay);
                
                console.log(`✅ Notification planifiée: ${prayer} à ${time}`);
            }
            
            // Notification avant (si configuré)
            if (settings.notificationBefore > 0 && prayerDate > now) {
                const beforeDate = new Date(prayerDate.getTime() - settings.notificationBefore * 60 * 1000);
                if (beforeDate > now) {
                    const delay = beforeDate.getTime() - now.getTime();
                    setTimeout(() => {
                        showBeforePrayerNotification(prayer, settings.notificationBefore);
                    }, delay);
                }
            }
        });
    });
    
    // Replanifier à minuit
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const delayToMidnight = midnight.getTime() - Date.now();
    setTimeout(schedulePrayerNotifications, delayToMidnight);
}

// Afficher notification de prière
function showPrayerNotification(prayer) {
    const prayers = {
        'Fajr': { fr: 'Fajr', ar: 'الفجر', emoji: '🌅' },
        'Dhuhr': { fr: 'Dhuhr', ar: 'الظهر', emoji: '☀️' },
        'Asr': { fr: 'Asr', ar: 'العصر', emoji: '🌤️' },
        'Maghrib': { fr: 'Maghrib', ar: 'المغرب', emoji: '🌇' },
        'Isha': { fr: 'Isha', ar: 'العشاء', emoji: '🌙' }
    };
    
    const p = prayers[prayer] || prayers['Fajr'];
    
    new Notification(`${p.emoji} C'est l'heure de ${p.fr}!`, {
        body: `Il est temps de prier ${p.fr} (${p.ar})`,
        icon: './icon-192.png',
        badge: './icon-96.png',
        vibrate: [200, 100, 200, 100, 200],
        tag: `prayer-${prayer}`,
        requireInteraction: true
    });
}

// Notification avant la prière
function showBeforePrayerNotification(prayer, minutes) {
    const prayers = {
        'Fajr': { fr: 'Fajr', ar: 'الفجر', emoji: '🌅' },
        'Dhuhr': { fr: 'Dhuhr', ar: 'الظهر', emoji: '☀️' },
        'Asr': { fr: 'Asr', ar: 'العصر', emoji: '🌤️' },
        'Maghrib': { fr: 'Maghrib', ar: 'المغرب', emoji: '🌇' },
        'Isha': { fr: 'Isha', ar: 'العشاء', emoji: '🌙' }
    };
    
    const p = prayers[prayer] || prayers['Fajr'];
    
    new Notification(`⏰ ${p.fr} dans ${minutes} minutes`, {
        body: `Préparez-vous pour ${p.fr} (${p.ar})`,
        icon: './icon-192.png',
        badge: './icon-96.png',
        vibrate: [100, 50, 100],
        tag: `before-prayer-${prayer}`
    });
}

// Jouer l'Adhan
function playAdhan(muezzin) {
    const adhanUrls = {
        'afasy': 'https://www.islamcan.com/audio/adhan/adhan-makkah-afasy.mp3',
        'mishary': 'https://www.islamcan.com/audio/adhan/adhan-mishary.mp3',
        'basit': 'https://www.islamcan.com/audio/adhan/adhan-abdul-basit.mp3'
    };
    
    const audio = new Audio(adhanUrls[muezzin] || adhanUrls['afasy']);
    const settings = loadSettings();
    audio.volume = settings.adhanVolume;
    
    audio.play().then(() => {
        console.log('🔊 Adhan en cours...');
    }).catch(err => {
        console.error('❌ Erreur lecture Adhan:', err);
    });
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    const settings = loadSettings();
    
    // Si les notifications ne sont pas encore activées, proposer après 5 secondes
    if (!settings.notificationsEnabled && Notification.permission !== 'denied') {
        setTimeout(() => {
            showNotificationPrompt();
        }, 5000);
    } else if (settings.notificationsEnabled && Notification.permission === 'granted') {
        // Planifier les notifications
        schedulePrayerNotifications();
    }
});

console.log('✅ Système notifications + Adhan chargé!');
