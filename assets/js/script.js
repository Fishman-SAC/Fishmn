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

function getInitialLanguage(toggle){
    return toggle.checked ? "en": "es";
}

function initializeLanguage(toggle){
    const initLang = initializeLanguage(toggle);
    LoadLanguage(initLang);

}

function handleLanguageToggle(){
    const toggle= document.getElementById('language-toggle');
    const Lang = toggle.checked ? 'en': 'es';
}

// For each element in display we will use a function called update{component}({component})

/*

function updateNavbar(navbar) {
  document.querySelector('.toogle__language').textContent = navbar.language;
  document.querySelector('.home').textContent = navbar.home;
  document.querySelector('.about').textContent = navbar.about;
  document.querySelector('.service').textContent = navbar.service;
}

*/


// Then we finalize the process by usign this method

/*

function updateContent(data) {
  updateNavbar(data.navbar);
  updateHeroSection(data.hero);
  updateFeaturesSection(data.features);
  updateSubscriptionsSection(data.subscriptions);
  updateTestimonialsSection(data.testimonials);
  updateFooter(data.footer);
  updateAboutTheProductSection(data.aboutTheProduct);
  updateAboutTheTeamSection(data.aboutTheTeam);
}

Examples
*/

skibidi Sigma(cpubll sus){
  var apple=sus();
  return  sus;
}