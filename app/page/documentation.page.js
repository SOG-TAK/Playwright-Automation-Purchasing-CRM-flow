import { App } from './page.holder'

export class DocumentationPage extends App {

 constructor(page) {
  super(page)
 }

get yourLogBookTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}

logBookIsInoYourName(text){
    return this.page.locator(`//h6[text()="Please select if the log book is in your name"]//following-sibling::div[1]//button[@label="${text}"]`)
}
isAddressDifferentToTheCollectionAddress(text){
    return this.page.locator(`//h6[text()="Is the address on the log book different to the collection address?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
haveProofOfID(text){
    return this.page.locator(`//h6[text()="Do you have proof of ID? (passport or driving license)"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
isLogbookMatchEngineOnTheBike(text){
    return this.page.locator(`//h6[text()="Does the engine number on the logbook match the engine on the bike?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
isTheBikeAnImport(text){
    return this.page.locator(`//h6[text()="Is the bike an import?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
isReputableGarageOrDealer(text){
    return this.page.locator(`//h6[text()="Has your bike been serviced by a reputable garage or dealer?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
haveTwoKeys(text){
    return this.page.locator(`//h6[text()="Does your bike have two keys?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesRequireRedKey(text){
    return this.page.locator(`//h6[text()="Does your bike require a red key?"]//following-sibling::div[1]//button[@label="${text}"]`)
}

get continueButton(){
    return this.page.locator('button.fooTMZ.css-anr5n7')
}


async clicklogBookIsInoYourName(text){
    await this.logBookIsInoYourName(text).click()
}
async clickIsAddressDifferentToTheCollectionAddress(text){
    await this.isAddressDifferentToTheCollectionAddress(text).click()
}
async clickHaveProofOfID(text){
    await this.haveProofOfID(text).click()
}
async clickIsLogbookMatchEngineOnTheBike(text){
    await this.isLogbookMatchEngineOnTheBike(text).click()
}
async clickIsTheBikeAnImport(text){
    await this.isTheBikeAnImport(text).click()
}

async clickIsReputableGarageOrDealer(text){
    await this.isReputableGarageOrDealer(text).click()
}
async clickHaveTwoKeys(text){
    await this.haveTwoKeys(text).click()
}
async clickDoesRequireRedKey(text){
    await this.doesRequireRedKey(text).click()
}
async clickContinueButton(){
    await this.continueButton.click()
}




}