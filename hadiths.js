// ========== SYSTÈME DE HADITHS AVEC API ==========

// API Hadith: https://hadithapi.com/
const HADITH_API_BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';

// Collections disponibles
const hadithCollections = {
    'bukhari': {
        name: 'Sahih Bukhari',
        nameAr: 'صحيح البخاري',
        total: 7563,
        sections: 97
    },
    'muslim': {
        name: 'Sahih Muslim',
        nameAr: 'صحيح مسلم',
        total: 7190,
        sections: 56
    }
};

// Cache des hadiths
let hadithCache = {};
let favoriteHadiths = JSON.parse(localStorage.getItem('favorite-hadiths') || '[]');
let hadithOfTheDay = null;

// Charger la structure d'une collection
async function loadHadithCollection(collection) {
    try {
        const response = await fetch(`${HADITH_API_BASE}/editions/${collection}.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`❌ Erreur chargement ${collection}:`, error);
        return null;
    }
}

// Charger un hadith spécifique
async function loadHadith(collection, section, number) {
    const cacheKey = `${collection}-${section}-${number}`;
    
    // Vérifier le cache
    if (hadithCache[cacheKey]) {
        return hadithCache[cacheKey];
    }
    
    try {
        const response = await fetch(`${HADITH_API_BASE}/editions/${collection}/sections/${section}.json`);
        const data = await response.json();
        
        // Mettre en cache
        hadithCache[cacheKey] = data;
        
        return data;
    } catch (error) {
        console.error(`❌ Erreur chargement hadith:`, error);
        return null;
    }
}

// Rechercher dans les hadiths
async function searchHadiths(query, collection = 'bukhari') {
    try {
        console.log(`🔍 Recherche: "${query}" dans ${collection}...`);
        
        const collectionData = await loadHadithCollection(collection);
        if (!collectionData) return [];
        
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        // Rechercher dans les métadonnées
        if (collectionData.metadata) {
            collectionData.metadata.sections.forEach((section, index) => {
                if (section.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        collection: collection,
                        sectionNumber: index + 1,
                        sectionName: section,
                        type: 'section'
                    });
                }
            });
        }
        
        console.log(`✅ Trouvé ${results.length} résultats`);
        return results;
    } catch (error) {
        console.error('❌ Erreur recherche:', error);
        return [];
    }
}

// Afficher la page Hadiths
function showHadithsPage() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'hadiths-modal';
    
    modal.innerHTML = `
        <div class="modal-content hadiths-modal-content">
            <span class="close-modal" onclick="closeHadithsModal()">&times;</span>
            
            <div class="hadiths-header">
                <h2 class="hadiths-title">
                    📖 <span data-fr="Hadiths du Prophète ﷺ" data-ar="أحاديث النبي ﷺ">Hadiths du Prophète ﷺ</span>
                </h2>
                
                <!-- Barre de recherche -->
                <div class="hadith-search-bar">
                    <input type="text" id="hadith-search-input" placeholder="Rechercher un hadith..." />
                    <button onclick="searchHadithsNow()" class="search-btn">🔍</button>
                </div>
                
                <!-- Onglets Collections -->
                <div class="hadith-tabs">
                    <button class="hadith-tab active" onclick="switchHadithCollection('bukhari')">
                        <strong>Sahih Bukhari</strong>
                        <small>صحيح البخاري</small>
                    </button>
                    <button class="hadith-tab" onclick="switchHadithCollection('muslim')">
                        <strong>Sahih Muslim</strong>
                        <small>صحيح مسلم</small>
                    </button>
                    <button class="hadith-tab" onclick="showFavoriteHadiths()">
                        <strong>⭐ <span data-fr="Favoris" data-ar="المفضلة">Favoris</span></strong>
                        <small>${favoriteHadiths.length}</small>
                    </button>
                </div>
            </div>
            
            <!-- Hadith du jour -->
            <div class="hadith-of-day" id="hadith-of-day">
                <h3>🌟 <span data-fr="Hadith du jour" data-ar="حديث اليوم">Hadith du jour</span></h3>
                <div class="loading">Chargement...</div>
            </div>
            
            <!-- Contenu -->
            <div class="hadiths-content" id="hadiths-content">
                <div class="loading">Chargement des hadiths...</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    updateTranslations();
    
    // Charger le hadith du jour
    loadHadithOfTheDay();
    
    // Charger la collection par défaut
    loadHadithSections('bukhari');
}

// Fermer le modal Hadiths
window.closeHadithsModal = function() {
    const modal = document.getElementById('hadiths-modal');
    if (modal) modal.remove();
};

// Changer de collection
window.switchHadithCollection = function(collection) {
    // Mettre à jour les onglets
    document.querySelectorAll('.hadith-tab').forEach(tab => tab.classList.remove('active'));
    event.target.closest('.hadith-tab').classList.add('active');
    
    // Charger la collection
    loadHadithSections(collection);
};

// Charger les sections d'une collection
async function loadHadithSections(collection) {
    const content = document.getElementById('hadiths-content');
    content.innerHTML = '<div class="loading">📚 Chargement des sections...</div>';
    
    const collectionData = await loadHadithCollection(collection);
    
    if (!collectionData || !collectionData.metadata) {
        content.innerHTML = '<div class="error">❌ Erreur de chargement</div>';
        return;
    }
    
    const collectionInfo = hadithCollections[collection];
    
    let html = `
        <div class="collection-info">
            <h3>${collectionInfo.name}</h3>
            <p class="collection-name-ar">${collectionInfo.nameAr}</p>
            <p class="collection-stats">
                📚 ${collectionInfo.sections} sections • ${collectionInfo.total} hadiths
            </p>
        </div>
        
        <div class="sections-grid">
    `;
    
    collectionData.metadata.sections.forEach((section, index) => {
        html += `
            <div class="section-card" onclick="loadSectionHadiths('${collection}', ${index + 1})">
                <div class="section-number">${index + 1}</div>
                <div class="section-name">${section}</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    content.innerHTML = html;
}

// Charger les hadiths d'une section
window.loadSectionHadiths = async function(collection, sectionNumber) {
    const content = document.getElementById('hadiths-content');
    content.innerHTML = '<div class="loading">📖 Chargement des hadiths...</div>';
    
    const sectionData = await loadHadith(collection, sectionNumber, 1);
    
    if (!sectionData || !sectionData.hadiths) {
        content.innerHTML = '<div class="error">❌ Erreur de chargement</div>';
        return;
    }
    
    let html = `
        <button onclick="switchHadithCollection('${collection}')" class="back-btn">
            ← <span data-fr="Retour aux sections" data-ar="العودة إلى الأقسام">Retour aux sections</span>
        </button>
        
        <div class="section-header">
            <h3>${sectionData.metadata.section_detail}</h3>
            <p>${sectionData.hadiths.length} hadiths</p>
        </div>
        
        <div class="hadiths-list">
    `;
    
    sectionData.hadiths.forEach((hadith, index) => {
        const hadithId = `${collection}-${sectionNumber}-${index + 1}`;
        const isFavorite = favoriteHadiths.includes(hadithId);
        
        html += `
            <div class="hadith-card" id="hadith-${hadithId}">
                <div class="hadith-header">
                    <span class="hadith-number">#${hadith.hadithnumber || (index + 1)}</span>
                    <button onclick="toggleFavoriteHadith('${hadithId}')" class="favorite-btn ${isFavorite ? 'active' : ''}">
                        ${isFavorite ? '⭐' : '☆'}
                    </button>
                </div>
                
                <div class="hadith-text-ar">${hadith.arab || ''}</div>
                <div class="hadith-text-fr">${hadith.text || ''}</div>
                
                <div class="hadith-footer">
                    <button onclick="shareHadith('${hadithId}')" class="share-btn">
                        🔗 <span data-fr="Partager" data-ar="مشاركة">Partager</span>
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    content.innerHTML = html;
    updateTranslations();
};

// Chercher maintenant
window.searchHadithsNow = async function() {
    const query = document.getElementById('hadith-search-input').value.trim();
    
    if (!query) {
        alert('⚠️ Entrez un mot-clé pour rechercher');
        return;
    }
    
    const content = document.getElementById('hadiths-content');
    content.innerHTML = `<div class="loading">🔍 Recherche de "${query}"...</div>`;
    
    // Rechercher dans Bukhari
    const bukhariResults = await searchHadiths(query, 'bukhari');
    
    // Rechercher dans Muslim
    const muslimResults = await searchHadiths(query, 'muslim');
    
    const allResults = [...bukhariResults, ...muslimResults];
    
    if (allResults.length === 0) {
        content.innerHTML = `
            <div class="no-results">
                <p>❌ Aucun résultat pour "${query}"</p>
                <small>Essayez avec d'autres mots-clés</small>
            </div>
        `;
        return;
    }
    
    let html = `
        <h3>🔍 Résultats pour "${query}" (${allResults.length})</h3>
        <div class="search-results">
    `;
    
    allResults.forEach(result => {
        const collectionInfo = hadithCollections[result.collection];
        html += `
            <div class="result-card" onclick="loadSectionHadiths('${result.collection}', ${result.sectionNumber})">
                <div class="result-collection">${collectionInfo.name}</div>
                <div class="result-section">Section ${result.sectionNumber}: ${result.sectionName}</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    content.innerHTML = html;
};

// Toggle favori
window.toggleFavoriteHadith = function(hadithId) {
    const index = favoriteHadiths.indexOf(hadithId);
    
    if (index > -1) {
        favoriteHadiths.splice(index, 1);
    } else {
        favoriteHadiths.push(hadithId);
    }
    
    localStorage.setItem('favorite-hadiths', JSON.stringify(favoriteHadiths));
    
    // Mettre à jour le bouton
    const btn = document.querySelector(`#hadith-${hadithId} .favorite-btn`);
    if (btn) {
        const isFavorite = favoriteHadiths.includes(hadithId);
        btn.textContent = isFavorite ? '⭐' : '☆';
        btn.classList.toggle('active', isFavorite);
    }
    
    // Mettre à jour le compteur
    const favTab = document.querySelector('.hadith-tab:last-child small');
    if (favTab) favTab.textContent = favoriteHadiths.length;
};

// Afficher les favoris
window.showFavoriteHadiths = function() {
    document.querySelectorAll('.hadith-tab').forEach(tab => tab.classList.remove('active'));
    event.target.closest('.hadith-tab').classList.add('active');
    
    const content = document.getElementById('hadiths-content');
    
    if (favoriteHadiths.length === 0) {
        content.innerHTML = `
            <div class="no-favorites">
                <p>⭐ Aucun hadith favori</p>
                <small>Ajoutez des hadiths à vos favoris en cliquant sur l'étoile</small>
            </div>
        `;
        return;
    }
    
    content.innerHTML = `
        <h3>⭐ Mes Hadiths Favoris (${favoriteHadiths.length})</h3>
        <div class="favorites-list">
            ${favoriteHadiths.map(id => `
                <div class="favorite-item" onclick="loadFavoriteHadith('${id}')">
                    <span>${id}</span>
                    <button onclick="event.stopPropagation(); toggleFavoriteHadith('${id}')">🗑️</button>
                </div>
            `).join('')}
        </div>
    `;
};

// Partager un hadith
window.shareHadith = function(hadithId) {
    const hadithCard = document.getElementById(`hadith-${hadithId}`);
    const textAr = hadithCard.querySelector('.hadith-text-ar').textContent;
    const textFr = hadithCard.querySelector('.hadith-text-fr').textContent;
    
    const shareText = `📖 Hadith #${hadithId}\n\n${textAr}\n\n${textFr}\n\n🕌 Source: Application Horaires de Prière`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Hadith du Prophète ﷺ',
            text: shareText
        }).catch(err => console.log('Partage annulé'));
    } else {
        // Copier dans le presse-papiers
        navigator.clipboard.writeText(shareText).then(() => {
            alert('✅ Hadith copié dans le presse-papiers!');
        });
    }
};

// Hadith du jour
async function loadHadithOfTheDay() {
    const container = document.getElementById('hadith-of-day');
    
    // Vérifier si on a déjà le hadith du jour
    const today = new Date().toDateString();
    const savedHadith = localStorage.getItem('hadith-of-day-date');
    
    if (savedHadith === today && hadithOfTheDay) {
        displayHadithOfTheDay(hadithOfTheDay);
        return;
    }
    
    // Générer un hadith aléatoire
    const collection = Math.random() > 0.5 ? 'bukhari' : 'muslim';
    const collectionData = await loadHadithCollection(collection);
    
    if (!collectionData) {
        container.innerHTML = '<div class="error">❌ Erreur chargement</div>';
        return;
    }
    
    const randomSection = Math.floor(Math.random() * collectionData.metadata.sections.length) + 1;
    const sectionData = await loadHadith(collection, randomSection, 1);
    
    if (sectionData && sectionData.hadiths && sectionData.hadiths.length > 0) {
        const randomHadith = sectionData.hadiths[Math.floor(Math.random() * sectionData.hadiths.length)];
        hadithOfTheDay = randomHadith;
        localStorage.setItem('hadith-of-day-date', today);
        displayHadithOfTheDay(randomHadith);
    }
}

function displayHadithOfTheDay(hadith) {
    const container = document.getElementById('hadith-of-day');
    container.innerHTML = `
        <div class="hadith-text-ar">${hadith.arab || ''}</div>
        <div class="hadith-text-fr">${hadith.text || ''}</div>
    `;
}

console.log('✅ Système Hadiths chargé!');
