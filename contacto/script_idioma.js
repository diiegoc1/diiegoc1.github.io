const IdiomaElemento = document.getElementById("idioma");

const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async language => {
    const requestJson = await fetch(`../languages/${language}.json`)
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        
        if (textToChange.tagName === "INPUT") {
            textToChange.placeholder = texts[section][value];
        } 

        textToChange.innerHTML = texts[section][value];
    }
};

IdiomaElemento.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});