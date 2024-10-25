import { App } from './geoffsrm.page.holder'

export class LoginPage extends App {
 constructor(page) {
  super(page)
 }
 fullPath = 'https://staging.geoff.superbikefactory.co.uk'
 get emailField() {
    return this.page.locator('input[name="emailAddress"]');
 }
 get passwordField(){
    return this.page.locator('input[name="password"]');
 }
 get signInButton(){
   return this.page.locator("//button//span[text()='Sign In']")
 }
 async signIn(email,password){
   await this.emailField.fill(email);
   await this.passwordField.fill(password);
   await this.signInButton.click()
 }
 
 async open() {
  await this.page.goto('/');
 }
 async openFullPath(){
    await this.page.goto(this.fullPath)
 }
}