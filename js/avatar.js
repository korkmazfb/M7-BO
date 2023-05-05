

class GetDataFromApi {
  url = "";
  data = null;
  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.data = data.choosing;
      });
    return this.data;

  }

}



class AvatarMain {
  placeToRenderAvatarMain;
  LeftSection;
  RightSection;
  data;

  constructor(placeToRenderAvatarMain, data) {
    this.placeToRenderAvatarMain = document.getElementsByTagName(placeToRenderAvatarMain)[0];
    this.data = data;

    this.placeToRenderAvatarMain.classList = "avatar__body";

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "avatar";

    this.LeftSection = new AvatarLeftSection(this.mainElement);
    this.RightSection = new AvatarRightSection(this.mainElement, this);



  }

  // renderTextrightpanel(data){
  //   this.RightSection.h2(data);


  // }

  render() {
    this.placeToRenderAvatarMain.appendChild(this.mainElement);
    this.LeftSection.render();
    this.RightSection.render();


  }

}


class AvatarLeftSection {
  mainElement;

  constructor(mainElement) {
    this.mainElement = mainElement;
    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "avatar__section avatar__section--left"

    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList = "avatar__wrappersave";

    this.inputElement = document.createElement("input");
    this.inputElement.classList = "avatar__name";
    this.inputElement.id = "save";

    this.buttonElement = document.createElement("button");
    this.buttonElement.classList = "avatar__save";
    this.buttonElement.innerText = "Save"




    this.hatElement = document.createElement("figure");
    this.hatElement.classList = "avatar__hat";

    this.headElement = document.createElement("figure");
    this.headElement.classList = "avatar__head"

    this.eyeleftElement = document.createElement("figure");
    this.eyeleftElement.classList = "avatar__eye avatar__eye--left"

    this.eyeRightElement = document.createElement("figure");
    this.eyeRightElement.classList = "avatar__eye avatar__eye--right"
  }

  saveData() {
    this.inputValue = this.inputElement.value;

    localStorage.setItem('avatarName', this.inputValue);

    this.buttonElement.addEventListener('click', () => {
      this.saveData();
    });
  }



  render() {
    this.mainElement.appendChild(this.leftSectionElement);
    this.leftSectionElement.appendChild(this.wrapperElement);
    this.wrapperElement.appendChild(this.inputElement);

    this.wrapperElement.appendChild(this.buttonElement);
    this.wrapperElement.appendChild(this.hatElement);
    this.wrapperElement.appendChild(this.headElement);
    this.headElement.appendChild(this.eyeleftElement);
    this.headElement.appendChild(this.eyeRightElement);
    this.buttonElement.addEventListener('click', () => this.saveData())
  }
}

class UL {
  li = [];
  ulElement;
  randomColors;
  leftSectionElement;
  colorlist;
  rightSectionElement;
  constructor(rightSectionElement, leftSectionElement, colorlist) {
    this.rightSectionElement = rightSectionElement;
    this.leftSectionElement = leftSectionElement;
    this.ulElement = document.createElement("ul");
    this.colorlist = colorlist;


  }

  renderLi() {
    for (let i = 0; i < 4; i++) {
      this.li.push(document.createElement("li"));
      this.li[i].classList = "avatar__color";
      this.randomColors = new RandomColors();
      this.li[i].style.backgroundColor = this.randomColors.hsl;
      this.ulElement.appendChild(this.li[i]);

      this.ulElement.classList = "avatar__colors";
      this.colorlist.forEach((element, index) => {
        element.ulElement.classList.add('ul' + index);
      });

      this.li[i].onclick = () => {
        if (this.ulElement.classList.contains('ul0')) {
          this.leftSectionElement.hatElement.style.borderBottomColor = this.li[i].style.backgroundColor;
        } else if (this.ulElement.classList.contains('ul1')) {
          this.leftSectionElement.eyeRightElement.style.backgroundColor = this.li[i].style.backgroundColor;
          this.leftSectionElement.eyeleftElement.style.backgroundColor = this.li[i].style.backgroundColor;
        } else if (this.ulElement.classList.contains('ul2')) {
          this.leftSectionElement.headElement.style.backgroundColor = this.li[i].style.backgroundColor;
        }
      };
    }
  }

  render() {
    this.rightSectionElement.appendChild(this.ulElement);

  }


}

class qeustion {
  h2Element;
  icon;
  data;
  iElement = [];

  constructor(rightSectionElement, data) {
    this.rightSectionElement = rightSectionElement;
    this.h2Element = document.createElement("h2");
    this.icon = document.createElement("i");
    this.data = data;
  }

  renderH2(title) {
    for (let i = 0; i < 3; i++) {
      this.iElement.push(document.createElement("i"));
      this.icon.classList = "fa-solid fa-hat-wizard";
      this.h2Element.classList = "avatar__h2";
      this.h2Element.innerText = title;
    }
  }

  colorPicker() {
    // hier komt de color functie
  }

  render() {
    this.rightSectionElement.appendChild(this.h2Element);
    this.h2Element.appendChild(this.icon);
  }
}


class RandomColors {
  randomHue;
  randomSaturation;
  randomLightness;
  hsl = "";
  li;

  constructor(li) {
    this.li = li;
    this.generateHSL();

  }

  generateHue = function () {
    this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);


  }
  // in deze functie wordt de  hue gemaakt door de math functie 

  generateSaturation = function () {
    this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";


  }
  // in deze functie wordt de  saturation gemaakt door de math functie 



  generateLightness = function () {
    this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

  }
  // in deze functie wordt de  lightness gemaakt door de math functie 

  generateHSL = function () {
    this.generateHue();
    this.generateSaturation();
    this.generateLightness();
    this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`


  }


}

class AvatarRightSection {
  mainElement;
  ul = [];
  h2 = [];
  avatarmain;


  constructor(mainElement, avatarmain) {
    this.avatarmain = avatarmain;

    this.mainElement = mainElement;

    this.rightSectionElement = document.createElement("section")
    this.rightSectionElement.classList = "avatar__section avatar__section--right";
    for (let i = 0; i < 3; i++) {
      this.h2.push(new qeustion(this.rightSectionElement, this.avatarmain.data))
      this.h2[i].renderH2(this.avatarmain.data[i].title);
      this.h2[i].render();



      this.ul.push(new UL(this.rightSectionElement, this.avatarmain.LeftSection, this.ul));
      this.ul[i].renderLi();
      this.ul[i].render();

      //volgende Button
      this.quizLink = document.createElement("a");
      this.quizLink.classList = "avatar__quizLink";
      this.quizLink.href = "/quiz.html";

      this.quizButton = document.createElement("button");
      this.quizButton.classList = "avatar__quizButton";
      this.quizButton.innerText = "To The test";



    }



  }

  render() {
    this.mainElement.appendChild(this.rightSectionElement);
    this.rightSectionElement.appendChild(this.quizLink);
    this.quizLink.appendChild(this.quizButton);
  }

}



class App {
  avatarmain;
  data;
  qeustion;

  constructor() {
    this.data = new GetDataFromApi("../data/data.json");

    this.data.getData().then((data) => {
      this.avatarmain = new AvatarMain("body", data);
      this.avatarmain.render();
    });
  }

}
const app = new App();