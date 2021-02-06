class Question{
    constructor(){
    this.title = createElement("h2")
    this.question = createElement("h3")
    this.option1 = createButton("h4")
    this.option2 = createButton("h4")

  }
  
    hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
   }

    display(){
      
      this.title.html("Quiz")
      this.title.position(350,0)
      
      this.question.html("Question : What starts and ends with the letter E, but only has one letter?");
      this.question.position(150,80)
      this.option1.html("1 : Everyone")
      this.option1.position(150,100)
      this.option2.html("1 : Envelope")
      this.option2.position(150,120)
      

      }
  }
