import { App } from '../../geoffsrm.page.holder'
import { expect } from '@playwright/test';
import { LeadsNameInfo } from './component/leads.name.info.component.';
export class LeadsPage extends App {

 constructor(page) {
  super(page)
  this.leadsNameInfo= new LeadsNameInfo(this.page)
 }

 get pageTitle() {
    return this.page.locator('h1');
 }
 get h4Title() {
   return this.page.locator('h4');
 }
 leadsTableFirstRowCellNumber(number) {
      return this.page.locator(`(//table//tr)[4]//td[${number}]`)
 }
 leadsTableFirstRowCellLinkNumber(number) {
   return this.page.locator(`(//table//tr)[4]//td[${number}]//a`)
}
 doningtonSectionLink(text) {
   return this.page.locator(`//a[@data-location="donington"][text()="${text}"]`)
}

 async clickDoningtonSectionLink(text){
    await this.doningtonSectionLink(text).click()
 }
 async clickLeadsTableFirstRowCellLinkNumber(text){
   await this.leadsTableFirstRowCellLinkNumber(text).click()
}

 
}