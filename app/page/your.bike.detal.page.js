import { App } from './page.holder'

export class BikeDitailPage extends App {

 constructor(page) {
  super(page)
 }

get yourBikeDetailTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}



}