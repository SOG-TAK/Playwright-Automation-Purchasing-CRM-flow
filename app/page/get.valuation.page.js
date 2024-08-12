import { App } from './page.holder'

export class GetValuationPage extends App {

 constructor(page) {
  super(page)
 }

get pageTitle(){
    return this.page.locator('h2[class="MuiTypography-root MuiTypography-h2 css-1ppp2w3"]')
}



}