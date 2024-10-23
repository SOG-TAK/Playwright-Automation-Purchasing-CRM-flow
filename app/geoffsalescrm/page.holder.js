/**
   * @param {import('@playwright/test').Page} page
*/

export class PageHolder {
    constructor(page) {
     this.page = page;
    }
   }
   
   export class App extends PageHolder {
    constructor(page) {
     super(page)
    }
   
    async open(url) {
     await this.page.goto('/' + url);
    }
   
   }
   
   export class Component extends PageHolder {
    constructor(page) {
     super(page)
    }
   }
   