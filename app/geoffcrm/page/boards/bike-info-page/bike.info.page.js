import { App } from '../../geoffsrm.page.holder'
import { DriverPack } from './component/driver.pack.component';
export class BikeInfoPage extends App {

 constructor(page) {
  super(page)
  this.driverPack = new DriverPack(this.page);
 }
get preWashAction(){
  return this.page.locator('//button[text()="Send for Pre Wash"]')
}
get photosAction(){
  return this.page.locator('//button[text()="Send for Photos"]')
}
get internalPDIAction(){
  return this.page.locator('//button[text()="Send to Internal PDI"]')
}
 job(name){
  return this.page.locator(`//span[text()='${name} ']`)
}
get completeJob(){
  return this.page.locator('span[text="Complete Job"]')
}
 //button[text()='Send for Pre Wash']
 listButton(name){
   return this.page.locator(`//h5//button[text()="${name}"]`)
 }
 get adminAction(){
  return this.page.locator('//h5[text()="ADMIN ACTIONS"]//..//select')
 }
 get saveAdminActionButton(){
  return this.page.locator('button[text="Save Action"]')
 }
 get currentBikeStatus(){
   return this.page.locator('//h5[@class="sideBarHeader"]/..//div[@class="status"]')
 }
 get sectionActions(){
  return this.page.locator('select[class="status_list"]')
 }
 get assignToField(){
    return this.page.locator('(//div[@class="activeOptions"]//div[@class="mb-4"]//span)[1]')
 }
 async clickListButton(name){
    await this.listButton(name).click()
 }
 async chooseAdminAction(name){
  await this.adminAction.selectOption(name)
}
async clickSaveAdminActionButton(){
  await this.saveAdminActionButton.click()
}

async chooseSectionActions(name){
  await this.sectionActions.selectOption(name)
}

async clickPreWashAction(){
  await this.preWashAction.click()
}
async clickPhotosAction(){
  await this.photosAction.click()
}
async clickInternalPDIAction(){
  await this.internalPDIAction.click()
}
async clickJob(name){
  await this.job(name).click()
}
async clickCompleteJob(){
  await this.completeJob.click()
}


}