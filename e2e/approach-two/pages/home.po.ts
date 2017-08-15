import { browser, by, element } from 'protractor'; 

module.exports = {  
  toDo: {  
    pageTitle: element(by.css('app-root h1')),
    clickMeButton: element(by.css('button:first-of-type')),
    unclickMeButton: element(by.css('button:nth-of-type(2)')),
    counter: element(by.css('h3'))
  },
    
  go: function(url: string) {  
      browser.get(url); //overrides baseURL  
      browser.waitForAngular();  
  },  

  increaseCounter: function() {
      var todo = this.toDo;
      todo.clickMeButton.click();
      return todo.counter.getText()
  },

  addItem: function(item) {  
      var todo = this.toDo;  

      todo.addField.isDisplayed();  
      todo.addField.sendKeys(item);  
      todo.addButton.click();  
  }  
};