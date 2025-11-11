// ========== PAGE PARAMÈTRES COMPLÈTE ==========

function showSettingsPage() {
    const settings = loadSettings();
    
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'settings-modal';
    
    modal.innerHTML = `
        <div class="modal-content settings-modal-content">
            <span class="close-modal" onclick="closeSettingsModal()">&times;</span>
            
            <h2 class="settings-title">
                ⚙️ <span data-fr="Paramètres" data-ar="الإعدادات">Paramètres</span>
            </h2>
            
            <div class="settings-container">
                <!-- Notifications -->
                <div class="settings-section">
                    <h3>🔔 <span data-fr="Notifications" data-ar="التنبيهات">Notifications</span></h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Activer les notifications" data-ar="تفعيل التنبيهات">Activer les notifications</strong>
                            <small data-fr="Recevoir une alerte à l'heure de chaque prière" data-ar="تلقي تنبيه في وقت كل صلاة">Recevoir une alerte à l'heure de chaque prière</small>
                        </div>
                        <label class="switch">
                            <input type="checkbox" id="notifications-toggle" ${settings.notificationsEnabled ? 'checked' : ''} onchange="toggleNotifications()">
                            <span class="slider"></span>
                        </label>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Notification avant la prière" data-ar="تنبيه قبل الصلاة">Notification avant la prière</strong>
                            <small data-fr="Recevoir un rappel avant l'heure" data-ar="تلقي تذكير قبل الوقت">Recevoir un rappel avant l'heure</small>
                        </div>
                        <select id="notification-before" onchange="updateNotificationBefore()">
                            <option value="0" ${settings.notificationBefore === 0 ? 'selected' : ''}>Désactivé</option>
                            <option value="5" ${settings.notificationBefore === 5 ? 'selected' : ''}>5 minutes</option>
                            <option value="10" ${settings.notificationBefore === 10 ? 'selected' : ''}>10 minutes</option>
                            <option value="15" ${settings.notificationBefore === 15 ? 'selected' : ''}>15 minutes</option>
                        </select>
                    </div>
                </div>
                
                <!-- Adhan -->
                <div class="settings-section">
                    <h3>📢 <span data-fr="Adhan" data-ar="الأذان">Adhan</span></h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Activer l'Adhan" data-ar="تفعيل الأذان">Activer l'Adhan</strong>
                            <small data-fr="Écouter l'appel à la prière" data-ar="الاستماع إلى الأذان">Écouter l'appel à la prière</small>
                        </div>
                        <label class="switch">
                            <input type="checkbox" id="adhan-toggle" ${settings.adhanEnabled ? 'checked' : ''} onchange="toggleAdhan()">
                            <span class="slider"></span>
                        </label>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Choix du muezzin" data-ar="اختيار المؤذن">Choix du muezzin</strong>
                        </div>
                        <select id="muezzin-select" onchange="updateMuezzin()">
                            <option value="afasy" ${settings.adhanMuezzin === 'afasy' ? 'selected' : ''}>Sheikh Mishary Al-Afasy</option>
                            <option value="mishary" ${settings.adhanMuezzin === 'mishary' ? 'selected' : ''}>Sheikh Mishary bin Rashid</option>
                            <option value="basit" ${settings.adhanMuezzin === 'basit' ? 'selected' : ''}>Sheikh Abdul Basit</option>
                        </select>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Volume de l'Adhan" data-ar="مستوى صوت الأذان">Volume de l'Adhan</strong>
                        </div>
                        <input type="range" min="0" max="100" value="${settings.adhanVolume * 100}" id="adhan-volume" onchange="updateAdhanVolume()">
                        <span id="volume-value">${Math.round(settings.adhanVolume * 100)}%</span>
                    </div>
                    
                    <button onclick="testAdhan()" class="test-btn">
                        🔊 <span data-fr="Tester l'Adhan" data-ar="اختبار الأذان">Tester l'Adhan</span>
                    </button>
                </div>
                
                <!-- Calcul des prières -->
                <div class="settings-section">
                    <h3>📐 <span data-fr="Calcul des prières" data-ar="حساب أوقات الصلاة">Calcul des prières</span></h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Méthode de calcul" data-ar="طريقة الحساب">Méthode de calcul</strong>
                        </div>
                        <select id="calculation-method" onchange="updateCalculationMethod()">
                            <option value="2" ${settings.calculationMethod === 2 ? 'selected' : ''}>ISNA (Islamic Society of North America)</option>
                            <option value="3" ${settings.calculationMethod === 3 ? 'selected' : ''}>Muslim World League</option>
                            <option value="5" ${settings.calculationMethod === 5 ? 'selected' : ''}>Egyptian General Authority</option>
                            <option value="4" ${settings.calculationMethod === 4 ? 'selected' : ''}>Umm Al-Qura University</option>
                        </select>
                    </div>
                </div>
                
                <!-- Apparence -->
                <div class="settings-section">
                    <h3>🎨 <span data-fr="Apparence" data-ar="المظهر">Apparence</span></h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <strong data-fr="Langue" data-ar="اللغة">Langue</strong>
                        </div>
                        <select id="language-select" onchange="updateLanguage()">
                            <option value="fr">Français</option>
                            <option value="ar">العربية</option>
                        </select>
                    </div>
                </div>
                
                <!-- Boutons d'action -->
                <div class="settings-actions">
                    <button onclick="resetSettings()" class="btn-danger">
                        🔄 <span data-fr="Réinitialiser" data-ar="إعادة تعيين">Réinitialiser</span>
                    </button>
                    <button onclick="closeSettingsModal()" class="btn-primary">
                        ✅ <span data-fr="Enregistrer" data-ar="حفظ">Enregistrer</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    updateTranslations();
}

window.closeSettingsModal = function() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.remove();
};

window.toggleNotifications = async function() {
    const toggle = document.getElementById('notifications-toggle');
    const settings = loadSettings();
    
    if (toggle.checked) {
        const granted = await requestNotificationPermission();
        if (granted) {
            settings.notificationsEnabled = true;
            saveSettings(settings);
            schedulePrayerNotifications();
        } else {
            toggle.checked = false;
        }
    } else {
        settings.notificationsEnabled = false;
        saveSettings(settings);
    }
};

window.toggleAdhan = function() {
    const toggle = document.getElementById('adhan-toggle');
    const settings = loadSettings();
    settings.adhanEnabled = toggle.checked;
    saveSettings(settings);
};

window.updateNotificationBefore = function() {
    const select = document.getElementById('notification-before');
    const settings = loadSettings();
    settings.notificationBefore = parseInt(select.value);
    saveSettings(settings);
};

window.updateMuezzin = function() {
    const select = document.getElementById('muezzin-select');
    const settings = loadSettings();
    settings.adhanMuezzin = select.value;
    saveSettings(settings);
};

window.updateAdhanVolume = function() {
    const slider = document.getElementById('adhan-volume');
    const valueSpan = document.getElementById('volume-value');
    const settings = loadSettings();
    settings.adhanVolume = slider.value / 100;
    valueSpan.textContent = slider.value + '%';
    saveSettings(settings);
};

window.testAdhan = function() {
    const settings = loadSettings();
    playAdhan(settings.adhanMuezzin);
};

window.updateCalculationMethod = function() {
    const select = document.getElementById('calculation-method');
    const settings = loadSettings();
    settings.calculationMethod = parseInt(select.value);
    saveSettings(settings);
    
    // Recharger les horaires
    location.reload();
};

window.updateLanguage = function() {
    const select = document.getElementById('language-select');
    currentLang = select.value;
    localStorage.setItem('language', currentLang);
    switchLanguage(currentLang);
};

window.resetSettings = function() {
    if (confirm('Réinitialiser tous les paramètres?')) {
        localStorage.removeItem('prayer-settings');
        localStorage.removeItem('quran-settings');
        localStorage.removeItem('quran-bookmarks');
        localStorage.removeItem('quran-favorites');
        localStorage.removeItem('favorite-hadiths');
        
        alert('✅ Paramètres réinitialisés!');
        location.reload();
    }
};

console.log('✅ Page Paramètres chargée!');
