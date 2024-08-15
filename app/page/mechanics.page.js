import { App } from './page.holder'

export class MechanicsPage extends App {

 constructor(page) {
  super(page)
 }

get mechanicsTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}

bikeMightFailItsNextMot(text){
    return this.page.locator(`//h6[text()="Are there any reasons you believe that your bike might fail its next MOT?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doAllLightsWorkOnYourBike(text){
    return this.page.locator(`//h6[text()="Do all the lights work on your bike?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesTheBikeHaveOriginalClocks(text){
    return this.page.locator(`//h6[text()="Does the bike have it's original clocks?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
areTheClocksWorking(text){
    return this.page.locator(`//h6[text()="Are the clocks working?"]//following-sibling::div[1]//button[@label="${text}"]`)
} 
isTheSteeringLockFaulty(text){
    return this.page.locator(`//h6[text()="Is the steering lock faulty?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
areForkStanchionsPittedOrCorroded(text){
    return this.page.locator(`//h6[text()="Are the fork stanchions pitted or corroded?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
areEitherOfTheWheelsDamaged(text){
    return this.page.locator(`//h6[text()="Are either of the wheels damaged? i.e. any kinks, dents or flaking paint?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doTheWheelVearingsHaveAnyProblems(text){
    return this.page.locator(`//h6[text()="As far as you are aware do the wheel bearings have any problems?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
tyresUnder2mm(text){
    return this.page.locator(`//h6[text()="Are any of the tyres under 2mm of tread with any cracks, punctures or in need of repairs?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doTheBrakeDiscsHaveAnyPitting(text){
    return this.page.locator(`//h6[text()="Do the brake discs have any pitting, large ridges or lips round the edges?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doBrakePadsHaveLessThan2mm (text){
    return this.page.locator(`//h6[text()="Do the brake pads have less than 2mm on them?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
isExhaustBlowingOrDamagedInAnyWay(text){
    return this.page.locator(`//h6[text()="Is the exhaust blowing or damaged in any way?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesTheChainOrSprocketsNeedReplacing(text){
    return this.page.locator(`//h6[text()="Does the chain or sprockets need replacing?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
isTheBikeBeltDriven(text){
    return this.page.locator(`//h6[text()="Is the bike belt driven?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesTheBikeHaveItsOriginalEngine(text){
    return this.page.locator(`//h6[text()="Does the bike have its original Engine?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
whenBikeWasRiddenUpToFullTemperature(text){
    return this.page.locator(`//h6[text()="When was the last time the bike was ridden up to full temperature?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doWarningLightsGoOutAfterFewSeconds(text){
    return this.page.locator(`//h6[text()="Do the warning lights go out after a few seconds? Including ABS, service and FI (certain models)?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesBikeStartAndRunWithoutAnyProblems(text){
    return this.page.locator(`//h6[text()="Does the bike start and run without any problems?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
isTheEngineInWorkingOrder(text){
    return this.page.locator(`//h6[text()="Is the engine in working order? i.e. No rattles"]//following-sibling::div[1]//button[@label="${text}"]`)
}
doesClutchRattleDragOrSlip(text){
    return this.page.locator(`//h6[text()="Does the clutch rattle, drag or slip?"]//following-sibling::div[1]//button[@label="${text}"]`)
}
anyOtherMechanicalOrElectricalIssues (text){
    return this.page.locator(`//h6[text()="Are there any other mechanical or electrical issues we should be made aware of?"]//following-sibling::div[1]//button[@label="${text}"]`)
}


get continueButton(){
    return this.page.locator('button.fooTMZ.css-anr5n7')
}

async clickBikeMightFailItsNextMot(text){
   await this.bikeMightFailItsNextMot(text).click() 
}
async clickDoAllLightsWorkOnYourBike(text){
  await this.doAllLightsWorkOnYourBike(text).click()
}
async clickDoesTheBikeHaveOriginalClocks(text){
  await this.doesTheBikeHaveOriginalClocks(text).click()
} 
async clickAreTheClocksWorking(text){
   await this. areTheClocksWorking(text).click()
} 
async clickIsTheSteeringLockFaulty(text){
   await this.isTheSteeringLockFaulty(text).click()
}
async clickAreForkStanchionsPittedOrCorroded(text){
   await this.areForkStanchionsPittedOrCorroded(text).click()
}
async clickAreEitherOfTheWheelsDamaged(text){
  await this.areEitherOfTheWheelsDamaged(text).click()
}
async clickDoTheWheelVearingsHaveAnyProblems(text){
  await this.doTheWheelVearingsHaveAnyProblems(text).click()
}
async clickTyresUnder2mm(text){
  await this.tyresUnder2mm(text).click()  
}
async clickDoTheBrakeDiscsHaveAnyPitting(text){
   await this.doTheBrakeDiscsHaveAnyPitting(text).click()
}
async clickDoBrakePadsHaveLessThan2mm(text){
   await this.doBrakePadsHaveLessThan2mm(text).click()
}
async clickIsExhaustBlowingOrDamagedInAnyWay(text){
   await this.isExhaustBlowingOrDamagedInAnyWay(text).click()
}
async clickDoesTheChainOrSprocketsNeedReplacing(text){
  await this.doesTheChainOrSprocketsNeedReplacing(text).click()  
}
async clickIsTheBikeBeltDriven(text){
  await this.isTheBikeBeltDriven(text).click() 
}
async clickDoesTheBikeHaveItsOriginalEngine(text){
   await this.doesTheBikeHaveItsOriginalEngine(text).click()
}
async clickWhenBikeWasRiddenUpToFullTemperature(text){
   await this.whenBikeWasRiddenUpToFullTemperature(text).click()
}
async clickDoWarningLightsGoOutAfterFewSeconds(text){
    await this.doWarningLightsGoOutAfterFewSeconds(text).click()
}
async clickDoesBikeStartAndRunWithoutAnyProblems(text){
   await this.doesBikeStartAndRunWithoutAnyProblems(text).click()
}
async clickIsTheEngineInWorkingOrder(text){
   await this.isTheEngineInWorkingOrder(text).click()
}
async clickDoesClutchRattleDragOrSlip(text){
   await this.doesClutchRattleDragOrSlip(text).click()
}
async clickAnyOtherMechanicalOrElectricalIssues(text){
   await this.anyOtherMechanicalOrElectricalIssues(text).click()
}



async clickContinueButton(){
    await this.continueButton.click()
}

}