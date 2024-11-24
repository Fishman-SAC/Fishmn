document.addEventListener('DOMContentLoaded', ()=>{
    const toggle = document.getElementById('language-toggle');
    initializeLanguage(toggle);
    toggle.addEventListener('',handleLanguageToggle);

});

function LoadLanguage(lang){
    fetch(`assets/i18n/${lang}.json`)
    .then(response => {
        if(!response.ok){
            throw new Error(`${response.status}`);
        }
        return response.json();
    })
    .then(data=> {
        updateContent(data);
        history.pushState( { },'',`?lang=${lang}`);
    })
    .catch(err=> {
        console.error('Error loading language:',err);
    });
}