import {HomePage} from '../pages/homepage.po';

describe('Test homepage buttons', () => {
    
    let homePage: HomePage;
    let url = "http://localhost:4200/";

    beforeAll( () => {
        homePage = new HomePage();
        homePage.openHomepage(url);
    })
    
    it('should check the page title is correct', () => {
        expect(homePage.getPageTitle()).toEqual("Welcome to app!");
    });

    it('should increase counter on "Click Me" button click', () => {
        let i = homePage.getCounterValue();
        expect(i).toContain("1");

        homePage.clickFirstButton();
        expect(homePage.getCounterValue()).toContain("2");
    });

    it('should decrease counter on "Unclick Me" button click', () => {
        let i = homePage.getCounterValue();
        expect(i).toContain("2");

        homePage.clickSecondButton();
        expect(homePage.getCounterValue()).toContain("1");
    });
});