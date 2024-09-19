import { App } from '../geoffsrm.page.holder'
import { expect } from '@playwright/test';
export class AddTCardPage extends App {

 constructor(page) {
  super(page)
 }

 get pageTitle() {
    return this.page.locator('h5#createNewTaskLabel');
 }
 get vrmField(){
    return this.page.locator('input[name="vrm"]')
 }
 get lookupButton(){
    return this.page.locator('//button[text()="Lookup"]')
 }
 get brandField(){
    return this.page.locator('select[name="brand"]')
 }
 get modelField(){
    return this.page.locator('select[name="model"]')
 }
 get yearField(){
    return this.page.locator('select[name="year"]')
 }
 get engineSizeField(){
    return this.page.locator('input[name="engineSize"]')
 }
 get mileageField(){
    return this.page.locator('input[name="mileage"]')
 }
 get colorField(){
    return this.page.locator('input[name="colour"]')
 }
 get cardTypeField(){
    return this.page.locator('select[name="type"]')
 }
 get showroomField(){
    return this.page.locator('select[name="location"]')
 }
 get retailPriceField(){
    return this.page.locator('input[name="retailPrice"]')
 }
 get addTCardButton(){
    return this.page.locator('//div[@class="modal-footer"]//a[text()="Add tCard"]')
 }
 
 async setVrmField(text){
    await this.vrmField.type(text)
 }
 async clickLookupButton(){
    await this.lookupButton.click()
 }
 async setMileageField(text){
    await this.mileageField.type(text)
 }
 async setRetailPriceField(text){
    await this.retailPriceField.fill(text)
 }
 async chooseShowroomField(text){
    await this.showroomField.selectOption(text)
 }
 async clickAddCardButton(){
    await this.addTCardButton.click()
 }
 
}