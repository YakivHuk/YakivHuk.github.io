let imagesArray = [ 
    {
        path: 'assets/images/image_1.JPG',
        title: 'Стоунхендж',
        description : 'Стародавня архітектура в Англії, побудована приблизно в 3000 років до н. е.'
    },
    {
        path: 'assets/images/image_2.jpg',
        title: 'Піраміди Гізі',
        description: 'Стародавні пам\'ятки розташовані в місті Гіза.'
    },
    {
        path: 'assets/images/image_3.jpg',
        title: 'Великий китайський мур',
        description: 'Кам\'яне укріплення в північній частині Китаю, збудоване з метою захисту.'
    },
    {
        path: 'assets/images/image_4.jpg',
        title: 'Парфенон',
        description: 'Головний храм Афінського акрополя, присвячений богині Афіні Парфенос, покровительці міста та всієї Аттики; визначна пам\'ятка давньогрецького мистецтва.'
    }
];

function initPhotoRotator(rotatorId, imagesArray) {
    const rotator = document.getElementById(rotatorId);
    document.body.style.cssText = "margin: 0; padding: 0; box-sizing: border-box;";

    rotator.style.cssText = `
        display: flex; 
        border: 2px solid silver; 
        height: 100dvh;`;

    const back = document.createElement("a");
    back.textContent = "Назад";
    back.setAttribute('href', '#');
    back.style.cssText = `
        display: flex; 
        justify-content: center;
        align-items: center;
        height: 100%;  
        width: 60px;`;
    rotator.appendChild(back);

    const container = document.createElement("div");
    container.style = `
        display: flex; 
        flex-direction: column;
        height: 100%; 
        width: calc(100vw - 120px); 
        border-left: 2px solid silver;;
        border-right: 2px solid silver;`;
    rotator.appendChild(container);

    const navigation = document.createElement("div");
    navigation.style.cssText = `
        display: inline-block; 
        height: 40px; 
        line-height: 40px; 
        border-bottom: 2px solid silver; 
        width: 100%; 
        text-align: center;`;
    container.appendChild(navigation);

    const image = document.createElement("div");
    image.style.cssText = `
        display: inline-block; 
        height: calc(100dvh - 80px); 
        flex-grow: 1;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center`;
    container.appendChild(image);

    const description = document.createElement("div");
    description.innerHTML = "<p style=\"font-weight: bold;\" id=\"title\"></p><p id=\"description\"></p>";
    description.style.cssText = `
        display: inline-block; 
        min-height: 40px; 
        border-top: 2px solid silver; 
        width: 100%; 
        text-align: center;`;
    container.appendChild(description);
    const titleImage = document.getElementById("title");
    const descriptionImage = document.getElementById("description");

    const forward = document.createElement("a");
    forward.textContent = "Вперед";
    forward.setAttribute('href', '#');
    forward.style.cssText = `
        display: flex; 
        justify-content: center;
        align-items: center;
        height: 100%;  
        width: 60px;`;
    rotator.appendChild(forward);

    const all = document.body.querySelectorAll("*");
    all.forEach(element => {
        element.style.margin = "0";
        element.style.padding = "0";
        element.style.boxSizing = "border-box";
    });

    let number = 1;
    let numberOfPhotos = imagesArray.length;

    function insertImage(number) {
        navigation.textContent = `Фотографія ${number} з ${numberOfPhotos}`;
        image.style.backgroundImage = `url(${imagesArray[number - 1].path})`
        titleImage.textContent = imagesArray[number - 1].title;
        descriptionImage.textContent = imagesArray[number - 1].description;
    }

    function scrollForward() {
        insertImage(++number);
        audit();
    }

    function scrollBack() {
        insertImage(--number);
        audit();
    }

    function removeBackLink() {
        back.removeEventListener("click", scrollBack);
        back.style.opacity = "0";
        back.removeAttribute("href");
    }

    function addBackLink() {
        back.addEventListener("click", scrollBack);
        back.style.opacity = "1";
        back.setAttribute("href", "#");
    }

    function removeForwardLink() {
        forward.removeEventListener("click", scrollForward);
        forward.style.opacity = "0";
        forward.removeAttribute("href");
    }

    function addForwardLink() {
        forward.addEventListener("click", scrollForward);
        forward.style.opacity = "1";
        forward.setAttribute("href", "#");
    }

    function audit() {
        if (number == imagesArray.length && number == 1) {
            removeBackLink();
            removeForwardLink();
        }
        else if (number == imagesArray.length && number == 2) {
            addBackLink();
            removeForwardLink();
        } else if (number == imagesArray.length) {
            removeForwardLink();
        } else if (number == imagesArray.length - 1 && number == 1) {
            removeBackLink();
            addForwardLink();
        }
        else if (number == imagesArray.length - 1 && number == 2) {
            addForwardLink();
            addBackLink();
        } else if (number == imagesArray.length - 1) {
            addForwardLink();
        } else if (number == 2) {
            addBackLink();
        } else if (number == 1) {
            removeBackLink();
        };
    }
    document.addEventListener("DOMContentLoaded", () => {
        insertImage(number);
        audit();
    })
    back.addEventListener("click", scrollBack);
    forward.addEventListener("click", scrollForward);
}
initPhotoRotator("rotator", imagesArray);