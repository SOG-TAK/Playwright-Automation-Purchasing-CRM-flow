import { App } from './page.holder'

export class ExtrasPage extends App {

 constructor(page) {
  super(page)
 }

get extrasPageTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}

doesYourBikeHaveAnAlarm(text){
    return this.page.locator(`//h6[text()="Does your bike have an alarm?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesYourBikeHaveAnyNonStandardManufacturer(text){
    return this.page.locator(`//h6[text()="Does your bike have any non-standard manufacturer options added (Heated grips, sat nav, Radio)?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesYourBikeHaveAnyAfterMarketParts(text){
    return this.page.locator(`//h6[text()="Does your bike have any aftermarket parts? (exhaust, levers, tail tidy, crash bungs, heated grips)?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 


get continueButton(){
    return this.page.locator('button.fooTMZ.css-anr5n7')
}

async clickDoesYourBikeHaveAnAlarm(text){
  await this. doesYourBikeHaveAnAlarm(text).click() 
}
async clickDoesYourBikeHaveAnyNonStandardManufacturer(text){
  await this.doesYourBikeHaveAnyNonStandardManufacturer(text).click()
}
async clickDoesYourBikeHaveAnyAfterMarketParts(text){
  await this.doesYourBikeHaveAnyAfterMarketParts(text).click()    
}

async clickContinueButton(){
    await this.continueButton.click()
}

}