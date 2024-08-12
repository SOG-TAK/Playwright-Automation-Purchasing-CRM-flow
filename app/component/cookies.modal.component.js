import { Component } from '../page/page.holder';

export class CookiesWindow extends Component{
 constructor(page) {
  super(page)
 }

 get acceptCookiesButton() {
   return this.page.locator('a#CybotCookiebotDialogBodyButtonAccept');
 }

 async clickAcceptCookiesButton() {
   await this.acceptCookiesButton.click();
 }
}
