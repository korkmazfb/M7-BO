// class Name{
//     name;

//     constructor(name){
//         this.name = name;


//     }

// }



// class Save{
//     htmlElement;

//   constructor(newHTMLElement,name) {
//     this.htmlElement = newHTMLElement;
//     this.htmlElement.onclick = this.onSavebuttonclicked;
//     this.name = name;
//   }

//   onSavebuttonclicked = () => {
//     window.localStorage.setItem("name", this.name.name);
//   };
// }

// const name = new Name("henk")
// const save = new Save(document.getElementById("js--save"),name);

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
        this.data = data.episodes;
      });
    return this.data;
  }
}


class AvatarMain{
  placeToRenderAvatarMain;
  LeftSection;
  RightSection;

  constructor(placeToRenderAvatarMain){
    this.placeToRenderAvatarMain = document.getElementsByTagName(placeToRenderAvatarMain)[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "avatar";

    this.LeftSection = new AvatarLeftSection(this.mainElement);
    this.RightSection = new AvatarRightSection(this.mainElement);

    

  }

  render(){
    this.placeToRenderAvatarMain.appendChild(this.mainElement);
    this.LeftSection.render();
    this.RightSection.render();
    
      
  }

}


class AvatarLeftSection {
  mainElement;

  constructor(mainElement){
    this.mainElement = mainElement;
    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "avatar__section avatar__section--left"

    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList = "avatar__wrappersave";

    this.inputElement = document.createElement("input");
    this.inputElement.classList = "avatar__name";

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

  render(){
    this.mainElement.appendChild(this.leftSectionElement);
    this.leftSectionElement.appendChild(this.wrapperElement);
    this.wrapperElement.appendChild(this.inputElement);

    this.wrapperElement.appendChild(this.buttonElement);
    this.wrapperElement.appendChild(this.hatElement);
    this.wrapperElement.appendChild(this.headElement);
    this.headElement.appendChild(this.eyeleftElement);
    this.headElement.appendChild(this.eyeRightElement);
    

  }
}

class AvatarRightSection{
  mainElement;

  constructor(mainElement){
    this.mainElement = mainElement;

    this.rightSectionElement = document.createElement("section")
    this.rightSectionElement.classList = "avatar__section avatar__section--right";

    this.h2Element = document.createElement("h2");
    this.h2Element.classList = "avatar__h2";
    this.h2Element.innerText = "Wich color do you want your hat ";
    
    this.iElement = document.createElement("i")
    this.iElement.classList = "fa-solid fa-hat-wizard"

    this.ulElement = document.createElement("ul");
    this.ulElement.classList = "avatar__colors";

    this.liElement = document.createElement("li");
    this.liElement.classList = "avatar__color";


  }

  render(){
    this.mainElement.appendChild(this.rightSectionElement);
    this.rightSectionElement.appendChild(this.h2Element);
    this.h2Element.appendChild(this.iElement);
    this.rightSectionElement.appendChild(this.ulElement)
    this.ulElement.appendChild(this.liElement);
  

    

    
  }

}


{/* <main class="avatar">
<section class="avatar__right--side">
    <h2 class="avatar__h2">
        Wich color do you want your hat <i class="fa-solid fa-hat-wizard"></i>
    </h2>
    <ul class="avatar__colors">
        <li class="avatar__color"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
    </ul>
    <h2 class="avatar__h2">
        Wich color do you want your eyes <i class="fa-solid fa-eye"></i>
    </h2>
    <ul class="avatar__colorhats">
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
    </ul>
    <h2 class="avatar__h2">
        Wich color do you want your body <i class="fa-solid fa-person"></i>
    </h2>
    <ul class="avatar__colorhats">
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
        <li class="avatar__colorhat"></li>
    </ul>
</section>





</main> */}


class App{
  avatarmain;
  GetDataFromApi;

  constructor(){
    this.avatarmain = new AvatarMain("body");


    // this.GetDataFromApi.getData().then((data) => {
    //   console.log(data)
    // });


    this.avatarmain.render();
  }

}
const app = new App();