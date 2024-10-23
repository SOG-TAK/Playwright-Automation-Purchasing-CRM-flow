import { App } from './page.holder'


export class SalesHomePage extends App {
  constructor(page) {
    super(page)
  }
  get searchFormTitle() {
    return this.page.locator('div.bike-search strong')
  }

  get makeSelectField() {
    return this.page.locator('select[name="make"]')
  }
  get modelSelectField() {
    return this.page.locator('select[name="model"]')
  }
  get showroomSelectField() {
    return this.page.locator('select[name="location"]')
  }
  get searchBikesButton(){
    return this.page.locator('input[name="Search Bikes"]')
  }
  get vrmField(){
    return this.page.locator('input[name="Vrm"]')
  }
  get dunaBikeInTheList(){
    return this.page.locator('div[data-product-vrm="OY14LYS"] div.details  a.view-bike')
  }
  get chatButton(){
    return this.page.locator('div[data-testid="launcher-minimize-icon"].intercom-b2qi6i')
  }


  
  async open() {
    await this.page.goto('/');
  }
  async chooseMakeValue(text) {
   await this.makeSelectField.selectOption(text)
  }
  async  chooseModelValue(text) {
    await this.modelSelectField.selectOption(text)
  }
  async  chooseShowroomValue(text) {
    await this.showroomSelectField.selectOption(text)
  }
  async  setVrmField(text) {
    await this.vrmField.type(text)
  }
  
  async clickSearchBikesButton(){
    await this.searchBikesButton.click()
  }
  async clickDunaBikeInTheList(){
    await this.dunaBikeInTheList.click()
  }
  async clickChatButton(){
    const iframeLocator = this.page.frameLocator('iframe[name="intercom-launcher-frame"]'); 
    await iframeLocator.locator('div[data-testid="launcher-minimize-icon"].intercom-b2qi6i').click();
  }
  async clickSearchFormTitle(){
    await this.searchFormTitle.click()
  }

  
}