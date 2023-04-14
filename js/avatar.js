class Name{
    name;

    constructor(name){
        this.name = name;


    }

}



class Save{
    htmlElement;

  constructor(newHTMLElement,name) {
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onSavebuttonclicked;
    this.name = name;
  }

  onSavebuttonclicked = () => {
    window.localStorage.setItem("name", this.name.name);
  };
}

const name = new Name("henk")
const save = new Save(document.getElementById("js--save"),name);
