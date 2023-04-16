class GetDataFromApi {
    url = "";
    data = null;
    constructor(newURL) {
        this.url = newURL
    }

    async getData() {

        await fetch(this.url)
            .then(function (response) {
                return response.json();
            }).then((data) => {
                this.data = data;
            });
        return this.data;
    }
}



class Header {


    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";


        this.logoHeading = document.createElement("h1");
        this.logoHeading.classList = "header__text";
        this.logoHeading.innerText = "Sorting Test";


    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoHeading);
    }
}

class Quizmain {
    placeToRenderQuiz;
    bottomSection;
    topSection;
    punten;
    constructor(placeToRenderQuiz, punten) {
        this.punten = punten;
        this.placeToRenderQuiz = document.getElementsByTagName(placeToRenderQuiz)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "quiz";

        this.bottomSection = new QuizbottomSection(this.mainElement, this.punten);
        this.topSection = new QuiztopSection(this.mainElement, this);

    }

    makeButtonsFromData(data) {
        this.topSection.makeButtonsFromData(data);
    }

    makeQuizFromData(data) {
        this.bottomSection.makeQuizFromData(Object.entries(data)[0][0], data);
        console.log(Object.entries(data)[5][0]);
    }


    callFromtopSection(account, data) {
        this.bottomSection.makeQuizFromData(account, data)
    }

    render() {
        this.placeToRenderQuiz.appendChild(this.mainElement);
        //left
        this.bottomSection.render();
        //right
        this.topSection.render();


    }


}

class QuizbottomSection {
    mainElement;
    punten;
    constructor(mainElement, punten) {
        this.punten = punten;
        this.mainElement = mainElement;

        this.sectionBottom = document.createElement("section");
        this.sectionBottom.classList = "quiz__section quiz__section--left";

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "quiz__header";

        this.divElement = document.createElement("div");

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "quiz__logo quiz__number";




        this.Transactions = document.createElement("ul")
        this.Transactions.classList = "quiz__transactions";

        this.volgendePaginaLink = document.createElement("a");
        this.volgendePaginaLink.classList = "quiz__volgendeLink";
        this.volgendePaginaLink.href = "./index.html";


    }



    makeQuizFromData(accountToShow, data) {



        //empty ul before makeing li
        this.Transactions.innerHTML = "";
        this.figureElement.innerHTML = "";
        this.volgendePaginaLink.innerHTML = "";

        for (let i = 0; i < data[accountToShow].length; i++) {

            this.Transaction = document.createElement("li");
            this.Transaction.classList = ("quiz__transaction");

            this.transactionName = document.createElement("h2");
            this.transactionName.classList = "quiz__vraag";
            this.transactionName.innerText = data[accountToShow][i]["vraag"];

            this.antwoordButton = document.createElement("button")
            this.antwoordButton.classList = data[accountToShow][i]["extra_class"];
            this.antwoordButton.onclick = () => this.antwoordOnclick(data[accountToShow][i]);

            this.transactionAmount = document.createElement("h3");
            this.transactionAmount.classList = "quiz__amount";
            this.transactionAmount.innerText = data[accountToShow][i]["antwoord"];


            this.quizLogoElement = document.createElement("i");
            this.quizLogoElement.classList = data[accountToShow][i]["logo"];

            this.volgendePaginaButton = document.createElement("button");
            this.volgendePaginaButton.classList = data[accountToShow][i]["volgdendepagina"];
            this.volgendePaginaButton.innerText = ">";
            





            


            this.Transactions.appendChild(this.Transaction);
            this.Transaction.appendChild(this.transactionName);
            this.Transaction.appendChild(this.antwoordButton);
            this.antwoordButton.appendChild(this.transactionAmount);

            this.figureElement.appendChild(this.quizLogoElement);

            this.volgendePaginaLink.appendChild(this.volgendePaginaButton);


        }
    }

    antwoordOnclick = (data) => {
        this.punten.addPoints(data.punten);
    }




    render() {
        this.mainElement.appendChild(this.sectionBottom);
        this.sectionBottom.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.sectionBottom.appendChild(this.Transactions);
        this.sectionBottom.appendChild(this.volgendePaginaLink);

    }

}

class QuiztopSection {
    mainElement;
    quizmain;

    constructor(mainElement, quizmain) {
        this.mainElement = mainElement;
        this.quizmain = quizmain;

        this.sectionTop = document.createElement("section");
        this.sectionTop.classList = "quiz__section quiz__section--right";

        this.vragen = document.createElement("ul");
        this.vragen.classList = "quiz__vragen";


    }

    makeButtonsFromData(data) {
        Object.entries(data).forEach((entry) => {


            this.vraag = document.createElement("li");
            this.vraag.classList = "quiz__account";
            this.vraag.onclick = () => {
                this.quizmain.callFromtopSection(entry[0], data);
                console.log(entry[1]);
            }

            this.quizSwitchButton = document.createElement("button");
            this.quizSwitchButton.classList = "quiz__switchAccount";

            this.vraagFigure = document.createElement("figure");
            this.vraagFigure.classList = "quiz__logo";

            this.vraagLogo = document.createElement("i");
            this.vraagLogo.classList = entry[1][0]["logo"];


            this.vraagName = document.createElement("h4");

            this.vragen.appendChild(this.vraag);
            this.vraag.appendChild(this.quizSwitchButton);
            this.quizSwitchButton.appendChild(this.vraagFigure)
            this.vraagFigure.appendChild(this.vraagLogo);
            this.vraag.appendChild(this.vraagName);
        })

    }

    render() {
        this.mainElement.appendChild(this.sectionTop);
        this.sectionTop.appendChild(this.vragen);

    }

}

class Punten {
    punten = 0;

    addPoints(optellen) {
        this.punten = this.punten + optellen;
        console.log(this.punten);
    }
}

class App {
    Header;
    Quizmain;
    GetDataFromApi;
    punten;

    constructor() {
        this.header = new Header("body")

        this.punten = new Punten();
        this.Quizmain = new Quizmain("body", this.punten);

        this.GetDataFromApi = new GetDataFromApi("../json/quiz.json");

        this.GetDataFromApi
            .getData().then((data) => {
                this.Quizmain.makeQuizFromData(data);
                this.Quizmain.makeButtonsFromData(data);

            });



        this.header.render();
        this.Quizmain.render();
    }


}

const app = new App();