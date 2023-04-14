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

class Bankymain {
    placeToRenderBankyMain;
    bottomSection;
    topSection;
    constructor(placeToRenderBankyMain) {

        this.placeToRenderBankyMain = document.getElementsByTagName(placeToRenderBankyMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "quiz";

        this.bottomSection = new BankybottomSection(this.mainElement);
        this.topSection = new BankytopSection(this.mainElement, this);

    }

    makeButtonsFromData(data) {
        this.topSection.makeButtonsFromData(data);
    }

    makeQuizFromData(data) {
        this.bottomSection.makeQuizFromData(Object.entries(data)[0][0], data);
    }

    callFromtopSection(account, data) {
        this.bottomSection.makeQuizFromData(account, data)
    }

    render() {
        this.placeToRenderBankyMain.appendChild(this.mainElement);
        //left
        this.bottomSection.render();
        //right
        this.topSection.render();


    }
}

class BankybottomSection {
    mainElement;
    constructor(mainElement) {
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


    }



    makeQuizFromData(accountToShow, data) {

        let totalpoints = 0;
        for (let i = 0; i < data[accountToShow].length; i++) {
            totalpoints += data[accountToShow][i]["punten"];
        }
        console.log(totalpoints);


        //empty ul before makeing li
        this.Transactions.innerHTML = "";
        this.figureElement.innerHTML = "";

        for (let i = 0; i < data[accountToShow].length; i++) {

            this.Transaction = document.createElement("li");
            this.Transaction.classList = ("quiz__transaction");

            this.transactionName = document.createElement("h2");
            this.transactionName.classList = "quiz__vraag";
            this.transactionName.innerText = data[accountToShow][i]["vraag"];

            this.antwoordButton = document.createElement("button")
            this.antwoordButton.classList = data[accountToShow][i]["extra_class"];
            this.antwoordButton.onclick = this.antwoordOnclick;


            this.transactionAmount = document.createElement("h3");
            this.transactionAmount.classList = "quiz__amount";
            this.transactionAmount.innerText = data[accountToShow][i]["antwoord"];




            this.bankyLogoElement = document.createElement("i");
            this.bankyLogoElement.classList = data[accountToShow][i]["logo"];



            this.Transactions.appendChild(this.Transaction);
            this.Transaction.appendChild(this.transactionName);
            this.Transaction.appendChild(this.antwoordButton);
            this.antwoordButton.appendChild(this.transactionAmount);
            
            this.figureElement.appendChild(this.bankyLogoElement);

        }
    }


    render() {
        this.mainElement.appendChild(this.sectionBottom);
        this.sectionBottom.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.sectionBottom.appendChild(this.Transactions);


    }

}

class BankytopSection {
    mainElement;
    bankymain;

    constructor(mainElement, bankymain) {
        this.mainElement = mainElement;
        this.bankymain = bankymain;

        this.sectionTop = document.createElement("section");
        this.sectionTop.classList = "quiz__section quiz__section--right";

        this.accounts = document.createElement("ul");
        this.accounts.classList = "quiz__accounts";


    }

    makeButtonsFromData(data) {
        Object.entries(data).forEach((entry) => {


            this.account = document.createElement("li");
            this.account.classList = "quiz__account";
            this.account.onclick = () => {
                this.bankymain.callFromtopSection(entry[0],data);
            }

            this.bankySwitchButton = document.createElement("button");
            this.bankySwitchButton.classList = "quiz__switchAccount";

            this.accountFigure = document.createElement("figure");
            this.accountFigure.classList = "quiz__logo";

            this.accountLogo = document.createElement("i");
            this.accountLogo.classList = "fa-solid fa-piggy-bank";


            this.accountName = document.createElement("h4");
            this.accountName.classList = "quiz__nameOfAccount";
            this.accountName.innerText = entry[0];

            this.accounts.appendChild(this.account);
            this.account.appendChild(this.bankySwitchButton);
            this.bankySwitchButton.appendChild(this.accountFigure)
            this.accountFigure.appendChild(this.accountLogo);
            this.account.appendChild(this.accountName);
        })

    }

    render() {
        this.mainElement.appendChild(this.sectionTop);
        this.sectionTop.appendChild(this.accounts);

    }

}

class App {
    Header;
    Bankymain;
    GetDataFromApi;

    constructor() {
        this.header = new Header("body")
        this.Bankymain = new Bankymain("body");

        this.GetDataFromApi = new GetDataFromApi("../json/quiz.json");

        this.GetDataFromApi
            .getData().then((data) => {
                this.Bankymain.makeQuizFromData(data);
                this.Bankymain.makeButtonsFromData(data);

            });



        this.header.render();
        this.Bankymain.render();
    }
}

const app = new App();