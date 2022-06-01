class Form {
  constructor() {
    this.input = createInput("Enter Your Name");
    this.message = createInput("Enter a Message");
    this.submitButton = createImg("submit.png")
    this.greeting = createElement("h2")
  }
  display() {
    this.input.position(590,200);
    this.input.class("customInput");
    

    this.message.position(100,130);
    this.message.class("customInputBox");
    

    this.submitButton.position(280,355);
    

    this.submitButton.mousePressed(()=>{
      /*Hide input and message,
      Read friend's name and increase the playerCount
      Call  updateCount and add Friend method from Friends.js*/

      //Write your code after this line.
      
      
      ////Write your code before this line.
      page.update(1);
    })
  }

  end(){
    this.input.hide();
    this.message.hide();
    this.submitButton.hide();
    this.greeting.html("Thank you for your message");
    this.greeting.class("greeting")
    this.greeting.position(150,105);
    var closebutton = createImg("close.png")
    closebutton.size(150,80);
    closebutton.position(280,355);
    closebutton.mousePressed(()=>{
      this.greeting.hide();
      page.update(0);
      window.location.reload();
    })
  }

}
