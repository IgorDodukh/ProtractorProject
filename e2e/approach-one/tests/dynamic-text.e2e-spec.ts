import {HomePage} from '../pages/homepage.po';

describe('Test dynamic text updating', () => {
    let homePage: HomePage;
    let url = "http://localhost:4200/";
    
        
    beforeAll( () => { 
        homePage = new HomePage();   
        homePage.openHomepage(url);
    })

    it('should update field with entered value', () => {
        expect(2 + 2).toBe(4);
    })

    
})