import { App } from './page.holder'

export class ThankYouPage extends App {

 constructor(page) {
  super(page)
 }

get pageTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-1wl17jo"]')
}

}
