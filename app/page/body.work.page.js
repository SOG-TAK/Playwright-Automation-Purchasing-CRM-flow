import { App } from './page.holder'

export class BodyWorkPage extends App {

 constructor(page) {
  super(page)
 }

get bodyWorkTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}

hasYourBikeBeenResprayed(text){
    return this.page.locator(`//h6[text()="Has your bike been resprayed?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
hasYourBikeBeenWrapped(text){
    return this.page.locator(`//h6[text()="Has your bike been wrapped?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
areAnyOfTheLeversBent(text){
    return this.page.locator(`//h6[text()="Are any of the levers bent?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
areThereAnyDentsOnYourBike(text){
    return this.page.locator(`//h6[text()="Are there any dents on your bike?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
anyScratchesOnYourBike(text){
    return this.page.locator(`//h6[text()="Are there any scratches on your bike?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
fairingsOrPanelsCrackedOrBroken(text){
    return this.page.locator(`//h6[text()="Are any of the fairings or panels cracked or broken?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
haveAnyCorrosionOrRust(text){
    return this.page.locator(`//h6[text()="Does your bike have any corrosion or rust?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
areThereTwoMirrorsOnYourBike(text){
    return this.page.locator(`//h6[text()="Are there two mirrors on your bike?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
areMirrorsOnYourBikeDamaged(text){
    return this.page.locator(`//h6[text()="Are any of the mirrors on your bike damaged?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
anyOtherCosmeticIssues(text){
    return this.page.locator(`//h6[text()="Are there any other cosmetic or wear and tear issues you need to make us aware of?"]//following-sibling::div[1]//button[@label="${text}"]`)
}

get continueButton(){
    return this.page.locator('button.fooTMZ.css-anr5n7')
}


async clickHasYourBikeBeenResprayed(text){
   await this.hasYourBikeBeenResprayed(text).click()
}
async clickHasYourBikeBeenWrapped(text){
    await this.hasYourBikeBeenWrapped(text).click()
}
async clickAreAnyOfTheLeversBent(text){
    await this.areAnyOfTheLeversBent(text).click()
} 
async clickAreThereAnyDentsOnYourBike(text){
   await this.areThereAnyDentsOnYourBike(text).click()
} 
async clickAnyScratchesOnYourBike(text){
    await this.anyScratchesOnYourBike(text).click()
}
async clickFairingsOrPanelsCrackedOrBroken(text){
    await this.fairingsOrPanelsCrackedOrBroken(text).click()
}
async clickHaveAnyCorrosionOrRust(text){
   await this.haveAnyCorrosionOrRust(text).click()
}
async clickAreThereTwoMirrorsOnYourBike(text){
    await this.areThereTwoMirrorsOnYourBike(text).click()
}
async clickAreMirrorsOnYourBikeDamaged(text){
   await this.areMirrorsOnYourBikeDamaged(text).click()
}
async clickAnyOtherCosmeticIssues(text){
    await this.anyOtherCosmeticIssues(text).click()
}
async clickContinueButton(){
    await this.continueButton.click()
}

}