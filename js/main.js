

class HogwartsEscapeMain{
    PlaceToBeRenderHogwartsEscapeMain;
    mainElement;
    headerElement;
    socialsElement;
    socialElement;
    socialIElement;
    socialElement2;
    socialIElement2;
    titleElement;
    linkElement;
    buttonElement;


    constructor(PlaceToBeRenderHogwartsEscapeMain){
        this.PlaceToBeRenderHogwartsEscapeMain = document.getElementsByTagName(PlaceToBeRenderHogwartsEscapeMain);

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "hogwartsEscape";

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "hogwartsEscape__header";

        this.socialsElement = document.createElement("ul");
        this.socialsElement.classList = "hogwartsEscape__socials";

        this.socialElement = document.createElement("a");
        this.socialElement.classList = "hogwartsEscape__social";
        this.socialElement.href = "https://www.instagram.com/thehogwartsescape/";
        this.socialElement.target = "_blank";

        this.socialIElement = document.createElement("i");
        this.socialIElement.classList = "fa-brands fa-instagram";

        this.socialElement2 = document.createElement("a");
        this.socialElement2.classList = "hogwartsEscape__social";
        this.socialElement2.href = "https://www.facebook.com/thehogwartsescape";
        this.socialElement2.target = "_blank";


        this.socialIElement2 = document.createElement("i");
        this.socialIElement2.classList = "fa-brands fa-facebook";

        this.titleElement = document.createElement("h1");
        this.titleElement.classList = "hogwartsEscape__title";
        this.titleElement.innerText = "Hogwarts Escape";

        this.linkElement = document.createElement("a");
        this.linkElement.classList = "hogwartsEscape__link";
        this.linkElement.href = "/avatar.html";


        this.buttonElement = document.createElement("button");
        this.buttonElement.classList = "hogwartsEscape__button";
        this.buttonElement.innerText = "Start";
       

    }

    render(){
        this.PlaceToBeRenderHogwartsEscapeMain[0].appendChild(this.mainElement);
        this.mainElement.appendChild(this.headerElement);
        this.headerElement.appendChild(this.socialsElement);
        this.socialsElement.appendChild(this.socialElement);
        this.socialElement.appendChild(this.socialIElement);
        this.socialsElement.appendChild(this.socialElement2);
        this.socialElement2.appendChild(this.socialIElement2);
        this.mainElement.appendChild(this.titleElement);
        this.mainElement.appendChild(this.linkElement);
        this.linkElement.appendChild(this.buttonElement);
    }

}

const hogwartsEscape = new HogwartsEscapeMain("body");
hogwartsEscape.render();

// const banky = new BankyMain("body");