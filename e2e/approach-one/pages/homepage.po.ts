import { browser, by, element } from 'protractor';

export class HomePage{
    pageTitle = element(by.css('app-root h1'));
    clickMeButton = element(by.css('button:first-of-type'));
    unclickMeButton = element(by.css('button:nth-of-type(2)'));
    counter = element(by.css('h3'));

    openHomepage(url: string){
        browser.get(url)
    }

    getPageTitle() {
        return this.pageTitle.getText();
      }

    clickFirstButton(){
        this.clickMeButton.click();
    }

    clickSecondButton(){
        this.unclickMeButton.click();
    }

    getCounterValue(){
        return this.counter.getText();
    }
}