import { CookiesWindow } from "../component/index";
import { App } from './page.holder'


export class HomePage extends App {
 constructor(page) {
  super(page)
  this.cookiesWindow = new CookiesWindow(this.page);
 }
 get enterYourRegField() {
    return this.page.locator('input#vrm');
 }
 get enterMileageField(){
    return this.page.locator('input#mileage');
 }
 get valueMyBikeButton(){
   return this.page.locator("//button//span[text()='Value My Bike']")
 }


 async setEnterYourRegField(text){
   await this.enterYourRegField.fill(text);
 }
 async setEnterMileageField(text){
   await this.enterMileageField.fill(text);
 }
 async clickValueMyBikeButton(){
   await this.valueMyBikeButton.click()
 }

 async open() {
  await this.page.goto('/');
 }
}