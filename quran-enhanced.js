// ========== SYSTÈME CORAN AMÉLIORÉ ==========

// État du Coran
let quranBookmarks = JSON.parse(localStorage.getItem('quran-bookmarks') || '[]');
let quranFavorites = JSON.parse(localStorage.getItem('quran-favorites') || '[]');
let quranSettings = JSON.parse(localStorage.getItem('quran-settings') || JSON.stringify({
    fontSize: 18,
    nightMode: false,
    showTranslation: true,
    autoScroll: false
}));

// Améliorer le modal du Coran existant
function enhanceQuranModal() {
    const quranModal = document.getElementById('quran-modal');
    if (!quranModal) return;
    
    // Ajouter les contrôles améliorés
    const modalContent = quranModal.querySelector('.modal-content');
    
    // Créer la barre d'outils
    const toolbar = document.createElement('div');
    toolbar.className = 'quran-toolbar';
    toolbar.innerHTML = `
        <div class="quran-toolbar-left">
            <button onclick="toggleQuranSearch()" class="toolbar-btn" title="Rechercher">
                🔍 <span data-fr="Rechercher" data-ar="بحث">Rechercher</span>
            </button>
            <button onclick="showQuranBookmarks()" class="toolbar-btn" title="Marque-pages">
                🔖 <span data-fr="Marque-pages" data-ar="العلامات المرجعية">Marque-pages</span>
                <span class="badge">${quranBookmarks.length}</span>
            </button>
            <button onclick="showQuranFavorites()" class="toolbar-btn" title="Favoris">
                ⭐ <span data-fr="Favoris" data-ar="المفضلة">Favoris</span>
                <span class="badge">${quranFavorites.length}</span>
            </button>
        </div>
        
        <div class="quran-toolbar-right">
            <button onclick="decreaseQuranFontSize()" class="toolbar-btn" title="Diminuer">A-</button>
            <button onclick="increaseQuranFontSize()" class="toolbar-btn" title="Augmenter">A+</button>
            <button onclick="toggleQuranNightMode()" class="toolbar-btn" title="Mode nuit">
                ${quranSettings.nightMode ? '☀️' : '🌙'}
            </button>
            <button onclick="toggleQuranFullscreen()" class="toolbar-btn" title="Plein écran">
                ⛶ <span data-fr="Plein écran" data-ar="ملء الشاشة">Plein écran</span>
            </button>
        </div>
    `;
    
    // Insérer la barre d'outils après le bouton fermer
    const closeBtn = modalContent.querySelector('.close-modal');
    closeBtn.after(toolbar);
    
    // Zone de recherche (cachée par défaut)
    const searchZone = document.createElement('div');
    searchZone.className = 'quran-search-zone';
    searchZone.id = 'quran-search-zone';
    searchZone.style.display = 'none';
    searchZone.innerHTML = `
        <div class="search-container">
            <input type="text" id="quran-search-input" placeholder="Rechercher dans le Coran..." />
            <button onclick="searchInQuran()" class="search-btn">🔍 <span data-fr="Rechercher" data-ar="بحث">Rechercher</span></button>
            <button onclick="toggleQuranSearch()" class="close-search-btn">✕</button>
        </div>
        <div id="quran-search-results"></div>
    `;
    
    toolbar.after(searchZone);
    
    // Appliquer les paramètres sauvegardés
    applyQuranSettings();
    
    console.log('✅ Coran amélioré activé!');
}

// Appliquer les paramètres du Coran
function applyQuranSettings() {
    const quranContent = document.getElementById('quran-content');
    if (!quranContent) return;
    
    // Taille de police
    quranContent.style.fontSize = quranSettings.fontSize + 'px';
    
    // Mode nuit
    const modal = document.getElementById('quran-modal');
    if (quranSettings.nightMode) {
        modal.classList.add('night-mode');
    } else {
        modal.classList.remove('night-mode');
    }
}

// Sauvegarder les paramètres
function saveQuranSettings() {
    localStorage.setItem('quran-settings', JSON.stringify(quranSettings));
}

// Toggle recherche
window.toggleQuranSearch = function() {
    const searchZone = document.getElementById('quran-search-zone');
    if (searchZone.style.display === 'none') {
        searchZone.style.display = 'block';
        document.getElementById('quran-search-input').focus();
    } else {
        searchZone.style.display = 'none';
        document.getElementById('quran-search-results').innerHTML = '';
    }
};

// Rechercher dans le Coran
window.searchInQuran = function() {
    const query = document.getElementById('quran-search-input').value.trim();
    const resultsDiv = document.getElementById('quran-search-results');
    
    if (!query) {
        resultsDiv.innerHTML = '<p class="search-info">⚠️ Entrez un mot-clé pour rechercher</p>';
        return;
    }
    
    resultsDiv.innerHTML = '<div class="loading">🔍 Recherche en cours...</div>';
    
    // Rechercher dans les sourates chargées
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    // Cette recherche est simplifiée - dans la vraie app, on rechercherait dans toutes les sourates
    const quranContent = document.getElementById('quran-content');
    const verses = quranContent.querySelectorAll('.verse-ar, .verse-translation');
    
    verses.forEach((verse, index) => {
        if (verse.textContent.toLowerCase().includes(lowerQuery)) {
            results.push({
                text: verse.textContent,
                type: verse.className.includes('verse-ar') ? 'arabe' : 'traduction'
            });
        }
    });
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <p>❌ Aucun résultat pour "${query}"</p>
                <small>Essayez avec d'autres mots ou chargez d'autres sourates</small>
            </div>
        `;
        return;
    }
    
    let html = `<h3>🔍 ${results.length} résultat(s) trouvé(s)</h3><div class="search-results-list">`;
    
    results.slice(0, 50).forEach((result, i) => {
        html += `
            <div class="search-result-item">
                <span class="result-number">${i + 1}.</span>
                <span class="result-text">${highlightSearchTerm(result.text, query)}</span>
                <span class="result-type">(${result.type})</span>
            </div>
        `;
    });
    
    html += '</div>';
    if (results.length > 50) {
        html += `<p class="search-info">... et ${results.length - 50} autres résultats</p>`;
    }
    
    resultsDiv.innerHTML = html;
};

// Surligner le terme recherché
function highlightSearchTerm(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Augmenter la taille de police
window.increaseQuranFontSize = function() {
    if (quranSettings.fontSize < 32) {
        quranSettings.fontSize += 2;
        applyQuranSettings();
        saveQuranSettings();
    }
};

// Diminuer la taille de police
window.decreaseQuranFontSize = function() {
    if (quranSettings.fontSize > 12) {
        quranSettings.fontSize -= 2;
        applyQuranSettings();
        saveQuranSettings();
    }
};

// Toggle mode nuit
window.toggleQuranNightMode = function() {
    quranSettings.nightMode = !quranSettings.nightMode;
    applyQuranSettings();
    saveQuranSettings();
    
    // Mettre à jour l'icône
    const btn = event.target.closest('.toolbar-btn');
    btn.textContent = quranSettings.nightMode ? '☀️' : '🌙';
};

// Toggle plein écran
window.toggleQuranFullscreen = function() {
    const modal = document.getElementById('quran-modal');
    
    if (!document.fullscreenElement) {
        modal.requestFullscreen().catch(err => {
            console.error('❌ Erreur plein écran:', err);
        });
    } else {
        document.exitFullscreen();
    }
};

// Ajouter un marque-page
window.addQuranBookmark = function(surah, verse) {
    const bookmark = {
        surah: surah,
        verse: verse,
        date: new Date().toISOString()
    };
    
    // Vérifier si déjà existant
    const exists = quranBookmarks.find(b => b.surah === surah && b.verse === verse);
    if (exists) {
        alert('⚠️ Ce marque-page existe déjà!');
        return;
    }
    
    quranBookmarks.push(bookmark);
    localStorage.setItem('quran-bookmarks', JSON.stringify(quranBookmarks));
    
    // Mettre à jour le badge
    updateQuranBadges();
    
    alert('✅ Marque-page ajouté!');
};

// Afficher les marque-pages
window.showQuranBookmarks = function() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'bookmarks-modal';
    
    let html = `
        <div class="modal-content">
            <span class="close-modal" onclick="document.getElementById('bookmarks-modal').remove()">&times;</span>
            <h2>🔖 <span data-fr="Mes Marque-pages" data-ar="العلامات المرجعية">Mes Marque-pages</span></h2>
    `;
    
    if (quranBookmarks.length === 0) {
        html += `
            <div class="no-bookmarks">
                <p>📖 Aucun marque-page</p>
                <small>Ajoutez des marque-pages pour reprendre votre lecture</small>
            </div>
        `;
    } else {
        html += '<div class="bookmarks-list">';
        quranBookmarks.forEach((bookmark, index) => {
            html += `
                <div class="bookmark-item">
                    <span class="bookmark-info">Sourate ${bookmark.surah} - Verset ${bookmark.verse}</span>
                    <div class="bookmark-actions">
                        <button onclick="goToBookmark(${bookmark.surah}, ${bookmark.verse})">📖 Lire</button>
                        <button onclick="removeQuranBookmark(${index})">🗑️</button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    modal.innerHTML = html;
    
    document.body.appendChild(modal);
    updateTranslations();
};

// Aller à un marque-page
window.goToBookmark = function(surah, verse) {
    // Fermer le modal des marque-pages
    document.getElementById('bookmarks-modal').remove();
    
    // Charger la sourate (réutiliser la fonction existante)
    if (window.loadSurah) {
        window.loadSurah(surah);
    }
};

// Supprimer un marque-page
window.removeQuranBookmark = function(index) {
    if (confirm('Supprimer ce marque-page?')) {
        quranBookmarks.splice(index, 1);
        localStorage.setItem('quran-bookmarks', JSON.stringify(quranBookmarks));
        showQuranBookmarks();
        updateQuranBadges();
    }
};

// Ajouter aux favoris
window.addQuranFavorite = function(surah, verse, text) {
    const favorite = {
        surah: surah,
        verse: verse,
        text: text,
        date: new Date().toISOString()
    };
    
    quranFavorites.push(favorite);
    localStorage.setItem('quran-favorites', JSON.stringify(quranFavorites));
    updateQuranBadges();
    
    alert('✅ Ajouté aux favoris!');
};

// Afficher les favoris
window.showQuranFavorites = function() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'favorites-modal';
    
    let html = `
        <div class="modal-content">
            <span class="close-modal" onclick="document.getElementById('favorites-modal').remove()">&times;</span>
            <h2>⭐ <span data-fr="Mes Versets Favoris" data-ar="آياتي المفضلة">Mes Versets Favoris</span></h2>
    `;
    
    if (quranFavorites.length === 0) {
        html += `
            <div class="no-favorites">
                <p>⭐ Aucun verset favori</p>
                <small>Ajoutez vos versets préférés</small>
            </div>
        `;
    } else {
        html += '<div class="favorites-list">';
        quranFavorites.forEach((fav, index) => {
            html += `
                <div class="favorite-item">
                    <div class="favorite-ref">Sourate ${fav.surah}:${fav.verse}</div>
                    <div class="favorite-text">${fav.text.substring(0, 100)}...</div>
                    <div class="favorite-actions">
                        <button onclick="goToBookmark(${fav.surah}, ${fav.verse})">📖 Lire</button>
                        <button onclick="shareQuranVerse(${fav.surah}, ${fav.verse}, '${fav.text}')">🔗 Partager</button>
                        <button onclick="removeQuranFavorite(${index})">🗑️</button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    modal.innerHTML = html;
    
    document.body.appendChild(modal);
    updateTranslations();
};

// Supprimer un favori
window.removeQuranFavorite = function(index) {
    if (confirm('Supprimer des favoris?')) {
        quranFavorites.splice(index, 1);
        localStorage.setItem('quran-favorites', JSON.stringify(quranFavorites));
        showQuranFavorites();
        updateQuranBadges();
    }
};

// Partager un verset
window.shareQuranVerse = function(surah, verse, text) {
    const shareText = `📖 Coran - Sourate ${surah}:${verse}\n\n${text}\n\n🕌 Via Application Horaires de Prière`;
    
    if (navigator.share) {
        navigator.share({
            title: `Coran ${surah}:${verse}`,
            text: shareText
        }).catch(err => console.log('Partage annulé'));
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('✅ Verset copié dans le presse-papiers!');
        });
    }
};

// Mettre à jour les badges
function updateQuranBadges() {
    const bookmarkBadge = document.querySelector('.quran-toolbar-left .toolbar-btn:nth-child(2) .badge');
    const favoriteBadge = document.querySelector('.quran-toolbar-left .toolbar-btn:nth-child(3) .badge');
    
    if (bookmarkBadge) bookmarkBadge.textContent = quranBookmarks.length;
    if (favoriteBadge) favoriteBadge.textContent = quranFavorites.length;
}

// Initialiser quand le modal Coran s'ouvre
const originalQuranBtn = document.getElementById('quran-btn');
if (originalQuranBtn) {
    originalQuranBtn.addEventListener('click', () => {
        setTimeout(enhanceQuranModal, 100);
    });
}

console.log('✅ Système Coran amélioré chargé!');
