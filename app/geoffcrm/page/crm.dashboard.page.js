import { App } from './geoffsrm.page.holder'

export class CrmDashboardPage extends App {

   constructor(page) {
      super(page)
   }

   get boardButton() {
      return this.page.locator('a#BoardsDropdown');
   }
   boardsDropdownItem(text) {
      return this.page.locator(`//div[@aria-labelledby="BoardsDropdown"]//a[@class="dropdown-item"][text()="${text}"]`)
   }
   get salesButton() {
      return this.page.locator('a#SalesDropdown');
   }
   salesDropdownItem(text) {
      return this.page.locator(`//div[@aria-labelledby="SalesDropdown"]//a[@class="dropdown-item"][text()="${text}"]`)
   }
   async clickBoardButton() {
      await this.boardButton.click()
   }
   async clickBoardsDropdownItem(name) {
      await this.boardsDropdownItem(name).click()
   }
   async setSearchField(text) {
      await this.searchField.type(text)
   }
   async open() {
      await this.page.goto('/secure/sales/crm-dashboard');
   }
   async clickSalesButton() {
      await this.salesButton.click()
   }
   async clickSalesDropdownItem(name) {
      await this.salesDropdownItem(name).click()
   }
 



}