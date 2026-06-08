document.addEventListener('DOMContentLoaded', () => {
    
    const translations = {
        'en': {
            'header-title': 'Story Creator',
            'child-name-label': 'Child\'s Name',
            'child-name-placeholder': 'Enter child\'s name',
            'story-category-label': 'Story Category',
            'select-category-option': 'Select a category',
            'bedtime-option': 'Bedtime Stories',
            'adventure-option': 'Adventure Stories',
            'animals-option': 'Animal Stories',
            'fairytales-option': 'Fairy Tales',
            'islamic-option': 'Islamic Stories',
            'funny-option': 'Funny Stories',
            'family-option': 'Family Stories',
            'educational-option': 'Educational Stories',
            'story-images-label': 'Story Images',
            'stories-from-our-land-alt': 'Stories from Our Land',
            'little-superheroes-alt': 'Little Superheroes',
            'magic-carnival-alt': 'The Magic Carnival',
            'dream-gardens-alt': 'Dream Gardens',
            'space-explorers-alt': 'Space Explorers',
            'epic-quests-alt': 'Epic Quests',
            'animal-friends-alt': 'Animal Friends',
            'jungle-secrets-alt': 'Jungle Secrets',
            'little-superheroes-alt-2': 'Little Superheroes',
            'knights-and-princesses-alt': 'Knights & Princesses',
            'ocean-treasures-alt': 'Ocean Treasures',
            'islamic-placeholder': 'Please provide images for Islamic Stories.',
            'funny-placeholder': 'Please provide images for Funny Stories.',
            'family-placeholder': 'Please provide images for Family Stories.',
            'educational-placeholder': 'Please provide images for Educational Stories.',
            'age-label': 'Age',
            'language-label': 'Language',
            'english-option': 'English',
            'french-option': 'French',
            'arabic-option': 'Arabic',
            'child-photo-label': 'Child Photo',
            'upload-text': 'Click to upload or drag and drop',
            'click-to-upload': 'Click to upload',
            'file-type-info': 'JPG, PNG, WEBP (MAX. 1MB)',
            'submit-button': 'Create Story'
        },
        'ar': {
            'header-title': 'صانع القصص',
            'child-name-label': 'اسم الطفل',
            'child-name-placeholder': 'أدخل اسم الطفل',
            'story-category-label': 'فئة القصة',
            'select-category-option': 'اختر فئة',
            'bedtime-option': 'قصص ما قبل النوم',
            'adventure-option': 'قصص المغامرات',
            'animals-option': 'قصص الحيوانات',
            'fairytales-option': 'قصص خيالية',
            'islamic-option': 'قصص إسلامية',
            'funny-option': 'قصص مضحكة',
            'family-option': 'قصص عائلية',
            'educational-option': 'قصص تعليمية',
            'story-images-label': 'صور القصة',
            'stories-from-our-land-alt': 'قصص من أرضنا',
            'little-superheroes-alt': 'أبطال خارقون صغار',
            'magic-carnival-alt': 'الكرنفال السحري',
            'dream-gardens-alt': 'حدائق الأحلام',
            'space-explorers-alt': 'مستكشفو الفضاء',
            'epic-quests-alt': 'مهام ملحمية',
            'animal-friends-alt': 'أصدقاء الحيوانات',
            'jungle-secrets-alt': 'أسرار الغابة',
            'little-superheroes-alt-2': 'أبطال خارقون صغار',
            'knights-and-princesses-alt': 'فرسان وأميرات',
            'ocean-treasures-alt': 'كنوز المحيط',
            'islamic-placeholder': 'يرجى توفير صور للقصص الإسلامية.',
            'funny-placeholder': 'يرجى توفير صور للقصص المضحكة.',
            'family-placeholder': 'يرجى توفير صور للقصص العائلية.',
            'educational-placeholder': 'يرجى توفير صور للقصص التعليمية.',
            'age-label': 'العمر',
            'language-label': 'اللغة',
            'english-option': 'الإنجليزية',
            'french-option': 'الفرنسية',
            'arabic-option': 'العربية',
            'child-photo-label': 'صورة الطفل',
            'upload-text': 'انقر للتحميل أو اسحب وأفلت',
            'click-to-upload': 'انقر للتحميل',
            'file-type-info': 'JPG, PNG, WEBP (الحد الأقصى 1 ميجابايت)',
            'submit-button': 'أنشئ القصة'
        },
        'fr': {
            'header-title': 'Créateur d\'histoires',
            'child-name-label': 'Nom de l\'enfant',
            'child-name-placeholder': 'Entrez le nom de l\'enfant',
            'story-category-label': 'Catégorie d\'histoire',
            'select-category-option': 'Sélectionnez une catégorie',
            'bedtime-option': 'Histoires pour le dodo',
            'adventure-option': 'Histoires d\'aventure',
            'animals-option': 'Histoires d\'animaux',
            'fairytales-option': 'Contes de fées',
            'islamic-option': 'Histoires islamiques',
            'funny-option': 'Histoires amusantes',
            'family-option': 'Histoires de famille',
            'educational-option': 'Histoires éducatives',
            'story-images-label': 'Images d\'histoire',
            'stories-from-our-land-alt': 'Histoires de notre terre',
            'little-superheroes-alt': 'Petits super-héros',
            'magic-carnival-alt': 'Le carnaval magique',
            'dream-gardens-alt': 'Jardins de rêve',
            'space-explorers-alt': 'Explorateurs de l\'espace',
            'epic-quests-alt': 'Quêtes épiques',
            'animal-friends-alt': 'Amis animaux',
            'jungle-secrets-alt': 'Secrets de la jungle',
            'little-superheroes-alt-2': 'Petits super-héros',
            'knights-and-princesses-alt': 'Chevaliers et princesses',
            'ocean-treasures-alt': 'Trésors de l\'océan',
            'islamic-placeholder': 'Veuillez fournir des images pour les histoires islamiques.',
            'funny-placeholder': 'Veuillez fournir des images pour les histoires amusantes.',
            'family-placeholder': 'Veuillez fournir des images pour les histoires de famille.',
            'educational-placeholder': 'Veuillez fournir des images pour les histoires éducatives.',
            'age-label': 'Âge',
            'language-label': 'Langue',
            'english-option': 'Anglais',
            'french-option': 'Français',
            'arabic-option': 'Arabe',
            'child-photo-label': 'Photo de l\'enfant',
            'upload-text': 'Cliquez pour télécharger ou faites glisser et déposer',
            'click-to-upload': 'Cliquez pour télécharger',
            'file-type-info': 'JPG, PNG, WEBP (MAX. 1 Mo)',
            'submit-button': 'Créer une histoire'
        }
    };

    const langMap = {
        'en': 'english',
        'fr': 'french',
        'ar': 'arabic'
    };

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-key]');
        document.body.lang = lang;
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'IMG' && el.hasAttribute('data-alt-key')) {
                    const altKey = el.getAttribute('data-alt-key');
                    el.alt = translations[lang][altKey];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update the language select to match the button selection
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.value = langMap[lang];
        }
    }

    const englishButton = document.getElementById('english-button');
    const frenchButton = document.getElementById('french-button');
    const arabicButton = document.getElementById('arabic-button');



    if (englishButton) {
        englishButton.addEventListener('click', () => {
            updateContent('en');
        });
    }
    if (frenchButton) {
        frenchButton.addEventListener('click', () => {
            updateContent('fr');
        });
    }
    if (arabicButton) {
        arabicButton.addEventListener('click', () => {
            updateContent('ar');
        });
    }

    // Functionality to automatically capitalize the child's name
    const childNameInput = document.getElementById('child-name');
    if (childNameInput) {
        childNameInput.addEventListener('input', (event) => {
            event.target.value = event.target.value.toUpperCase();
        });
    }

    const ageButtons = document.querySelectorAll('.age-option');
    const ageInput = document.getElementById('age-input');
    
    ageButtons.forEach(button => {
        button.addEventListener('click', () => {
            ageButtons.forEach(btn => btn.classList.remove('selected-age'));
            button.classList.add('selected-age');
            if (ageInput) {
                ageInput.value = button.getAttribute('data-value');
            }
        });
    });

    const storyCategorySelect = document.getElementById('story-category');
    const storyImageContainers = document.querySelectorAll('.story-image-container');
    const storyImageInput = document.getElementById('story-image-input');
    

    
    if (storyCategorySelect) {
        storyCategorySelect.addEventListener('change', (event) => {
            const selectedCategory = event.target.value;
            storyImageContainers.forEach(container => {
                if (container.getAttribute('data-category') === selectedCategory) {
                    container.style.display = 'grid';
                } else {
                    container.style.display = 'none';
                }
            });
            if (storyImageInput) {
                storyImageInput.value = ''; // Reset selected story when category changes
            }
            document.querySelectorAll('.story-image').forEach(img => img.classList.remove('selected-story-image'));
        });
    }

    document.querySelectorAll('.story-image-container').forEach(container => {
                    container.addEventListener('click', (event) => {
                const image = event.target.closest('.story-image');
                if (image) {
                    // Remove the selection from all images first
                    document.querySelectorAll('.story-image').forEach(img => img.classList.remove('selected-story-image'));
                    // Then, add the selection to the clicked image
                    image.classList.add('selected-story-image');
                    if (storyImageInput) {
                        storyImageInput.value = image.getAttribute('data-value');
                    }
                }
            });
    });
    
    // Footer Language Dropdown Functionality
    const footerLanguageSelect = document.getElementById('footer-language');
    if (footerLanguageSelect) {
        footerLanguageSelect.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            
            // Map the footer language values to the main language system
            const languageMap = {
                'english': 'en',
                'french': 'fr',
                'spanish': 'es', // Note: Spanish not currently supported in main translations
                'arabic': 'ar'
            };
            
            const mappedLang = languageMap[selectedLanguage];
            if (mappedLang && translations[mappedLang]) {
                updateContent(mappedLang);
                
                // Update the main form language select to match
                const mainLanguageSelect = document.getElementById('language');
                if (mainLanguageSelect) {
                    mainLanguageSelect.value = selectedLanguage;
                }
                
                // Update the language buttons to show the selected state
                const englishButton = document.getElementById('english-button');
                const frenchButton = document.getElementById('french-button');
                const arabicButton = document.getElementById('arabic-button');
                
                // Reset all buttons
                [englishButton, frenchButton, arabicButton].forEach(btn => {
                    if (btn) {
                        btn.classList.remove('bg-indigo-500', 'text-white');
                        btn.classList.add('text-gray-600');
                    }
                });
                
                // Highlight the selected button
                if (mappedLang === 'en' && englishButton) {
                    englishButton.classList.add('bg-indigo-500', 'text-white');
                    englishButton.classList.remove('text-gray-600');
                } else if (mappedLang === 'fr' && frenchButton) {
                    frenchButton.classList.add('bg-indigo-500', 'text-white');
                    frenchButton.classList.remove('text-gray-600');
                } else if (mappedLang === 'ar' && arabicButton) {
                    arabicButton.classList.add('bg-indigo-500', 'text-white');
                    arabicButton.classList.remove('text-gray-600');
                }
            }
        });
    }

});
