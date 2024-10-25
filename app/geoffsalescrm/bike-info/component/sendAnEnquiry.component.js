import { Component } from '../../page.holder'

export class SendAnEnquiryForm extends Component {
    constructor(page) {
        super(page)
    }

    get title() {
        return this.page.locator('div#enquiryForm span#buyTitle')
    }
    get bikeNameField() {
        return this.page.locator('div#enquiryForm input#buyBikeName')
    }
    get bikeEmailField() {
        return this.page.locator('div#enquiryForm input#buyBikeEmail')
    }
    get bikePhoneNumberField() {
        return this.page.locator('div#enquiryForm input#buyBikePhone')
    }
    get subminYourAnEnquiryButton() {
        return this.page.locator('div#enquiryForm button#buyBikeSubmit')
    }
    get successMsg() {
        return this.page.locator('div#enquiryForm div.successMsg strong')
    }

    async setBikeNameField(text) {
        await this.bikeNameField.type(text)
    }
    async setBikeEmailField(text) {
        await this.bikeEmailField.type(text)
    }
    async setRandomBikePhoneNumberField() {
        const mobilePrefix = '07';
        const firstPart = Math.floor(1000 + Math.random() * 9000);
        const secondPart = Math.floor(100000 + Math.random() * 900000);
        await this.bikePhoneNumberField.type(`${mobilePrefix}${firstPart} ${secondPart}`)
    }

    async clickSubminYourAnEnquiryButton() {
        await this.subminYourAnEnquiryButton.click()
    }
}