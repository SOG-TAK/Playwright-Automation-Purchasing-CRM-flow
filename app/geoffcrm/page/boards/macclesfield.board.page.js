import { App } from '../geoffsrm.page.holder'

export class MacclesfieldBoardPage extends App {

 constructor(page) {
  super(page)
 }

 get searchField(){
    return this.page.locator('input[name="search"]')
 }
 get confirmSearchButton(){
   return this.page.locator('//button[text()="Search"]')
 }
 bikeCardByVRM(vrm){
   return this.page.locator(`//article//header//*[text()="${vrm}"]`)
 }
 async setSearchField(text){
   await this.searchField.type(text)
 }
 async clickConfirmSearchButton(){
   await this.confirmSearchButton.click()
 }
 async open() {
    await this.page.goto('/secure/boards/sites/macclesfield');
 }
 async clickBikeCardByVRM(vrm){
   await this.bikeCardByVRM(vrm).click()
 }


 
}