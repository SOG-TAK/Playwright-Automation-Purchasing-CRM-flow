import { Component } from '../../../geoffsrm.page.holder'

export class DriverPack extends Component {

 constructor(page) {
  super(page)
 }
 get cardTitle(){
  return this.page.locator('#driverPack h5')
 }
 get bikeKaysSelect(){
   return this.page.locator('select[data-area="bike_key_count"]')
 }
 get numberOfPanniersSelect(){
  return this.page.locator('select[data-area="pannier_count"]')
 }
 get previousOwnersSelect(){
  return this.page.locator('select[data-area="previous_owner_count"]')
 }
 get serviceHistorySelect(){
  return this.page.locator('select[data-area="service_history"]')
 }
 get bodyTypeSelect(){
  return this.page.locator('select[data-area="body_type"]')
 }
 get actualBikeMileageInput(){
  return this.page.locator('input[data-area="actual_mileage"]')
 }
 get purchasePriceInput(){
  return this.page.locator('input[data-area="purchase_price"]')
 }
 get checkIcon(){
  return this.page.locator('i[class="fa fa-check-circle"][style="color: rgb(40, 167, 69);"]')
 }
 fullV5DocumentAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'Full V5 Document')]/..//a[text()='${answer}']`)
 }
 masterKeyAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'Master key')]/..//a[text()='${answer}']`)
 }
 serviceBookAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'Service Book')]/..//a[text()='${answer}']`)
 }
 serviceInvoicesAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'Service Invoices')]/..//a[text()='${answer}']`)
 }
 gdprClearAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'GDPR Clear')]/..//a[text()='${answer}']`)
 }
 isTradeBikeAnswerLink(answer){
  return this.page.locator(`//div[contains(text(),'Is Trade Bike')]/..//a[text()='${answer}']`)
 }
 get updateDriverPackButton(){
  return this.page.locator('button[text="Update Driver Pack"]')
 }

 async chooseBikeKays(text){
  await this.bikeKaysSelect.selectOption(text)
 }
 async chooseNumberOfPanniers(text){
  await this.numberOfPanniersSelect.selectOption(text)
 }
 async choosePreviousOwners(text){
  await this.previousOwnersSelect.selectOption(text)
 }
 async chooseServiceHistory(text){
  await this.serviceHistorySelect.selectOption(text)
 }
 async chooseBodyType(text){
  await this.bodyTypeSelect.selectOption(text)
 }
 async setActualBikeMileageInput(text){
  await this.actualBikeMileageInput.type(text)
 }
 async setPurchasePriceInput(text){
  await this.purchasePriceInput.type(text)
 }

 async chooseFullV5DocumentAnswerLink(answer){
  await this.fullV5DocumentAnswerLink(answer).click()
 }
 async chooseMasterKeyAnswerLink(answer){
  await this.masterKeyAnswerLink(answer).click()
 }
 async chooseServiceBookAnswerLink(answer){
  await this.serviceBookAnswerLink(answer).click()
 }
 async chooseServiceInvoicesAnswerLink(answer){
  await this.serviceInvoicesAnswerLink(answer).click()
 }
 async chooseGdprClearAnswerLink(answer){
  await this.gdprClearAnswerLink(answer).click()
 }
 async chooseIsTradeBikeAnswerLink(answer){
  await this.isTradeBikeAnswerLink(answer).click()
 }
 async clickupdateDriverPackButton(){
  await this.updateDriverPackButton.click()
 }

 


}