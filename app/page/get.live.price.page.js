import { App } from './page.holder'

export class GetLivePricePage extends App {

 constructor(page) {
  super(page)
 }

get yourValuationIsTitle(){
    return this.page.locator('h3[class="styles__StyledH3-sc-40vi4c-3 fddqSl"]')
}
get firstDateButton(){
    return this.page.locator('(//button[contains(@class,"MuiButton-sizeMedium MuiButton-containedSizeMedium styles__MuiButton-sc-1bzz92t-0")])[1]')
}
get continueButton(){
    return this.page.locator('button.fooTMZ ')
}
get thankYouTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}
get conFirmBikeConditionButton(){
    return this.page.locator('button.kSlPag.css-cxxm3u')
}
async clickFirstDateButton(){
    await this.firstDateButton.click()
}
async clickContinueButton(){
    await this.continueButton.click()
}
async clickConFirmBikeConditionButton(){
    await this.conFirmBikeConditionButton.click()
}





}