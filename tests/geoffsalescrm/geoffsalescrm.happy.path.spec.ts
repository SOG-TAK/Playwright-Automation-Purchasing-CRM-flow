import { test, expect } from '@playwright/test'
import { SalesHomePage, SalesBikeInfoPage } from '../../app/geoffsalescrm/index'
import { CrmDashboardPage, LoginPage,LeadsPage} from '../../app/geoffcrm/page/index'
import { userData } from '../../app/geoffcrm/data/user.data'
import { bikeData } from '../../app/geoffsalescrm/data/bike.data';
import {fakerEN_US,faker } from '@faker-js/faker'

test('Test Case 1: Happy Path Journey - Geoff - Sales CRM', async ({ page }) => {
    const salesHomePage = new SalesHomePage(page)
    await salesHomePage.open()
    await salesHomePage.clickSearchFormTitle()
    await salesHomePage.chooseMakeValue(bikeData.harleyCode)
    await expect(salesHomePage.makeSelectField).toHaveValue(bikeData.harleyCode)
    await salesHomePage.chooseModelValue(bikeData.dunaModelCode)
    await expect(salesHomePage.modelSelectField).toHaveValue(bikeData.dunaModelCode)
    await salesHomePage.chooseShowroomValue(bikeData.doningtonParkCode)
    await salesHomePage.setVrmField(bikeData.vrm)
    await salesHomePage.clickSearchBikesButton()
    await page.waitForURL('https://mcstaging.abtesting.superbikefactory.co.uk/used-motorcycles/?Vrm=OY14LYS&location=7560&make=383&model=7842')
    await salesHomePage.clickDunaBikeInTheList()
    await page.waitForURL('https://mcstaging.abtesting.superbikefactory.co.uk/2014-harley-davidson-dyna-black-with-6173-miles/')
    const salesBikeInfoPage = new SalesBikeInfoPage(page)
    await expect(salesBikeInfoPage.bikeTitle).toHaveText(`${bikeData.brendName} ${bikeData.model}`)
    await expect(salesBikeInfoPage.bikeInfo).toHaveText(bikeData.bikeInfo)
    await salesBikeInfoPage.clickSendAnEnquiryButton()
    await expect(salesBikeInfoPage.sendAnEnquiryForm.title).toHaveText('Send An Enquiry')
    await salesBikeInfoPage.sendAnEnquiryForm.setBikeNameField(`${faker.person.firstName()} ${faker.person.lastName()}`)
    const nameValue = await salesBikeInfoPage.sendAnEnquiryForm.bikeNameField.inputValue();
    await expect(salesBikeInfoPage.sendAnEnquiryForm.bikeNameField).toHaveValue(nameValue)
    await salesBikeInfoPage.sendAnEnquiryForm.setBikeEmailField(salesBikeInfoPage.generateRandomEmail())
    const emailValue = await salesBikeInfoPage.sendAnEnquiryForm.bikeEmailField.inputValue();
    await expect(salesBikeInfoPage.sendAnEnquiryForm.bikeEmailField).toHaveValue(emailValue)
    await salesBikeInfoPage.sendAnEnquiryForm.setRandomBikePhoneNumberField()
    const phoneNumberValue = await salesBikeInfoPage.sendAnEnquiryForm.bikePhoneNumberField.inputValue();
    await salesBikeInfoPage.sendAnEnquiryForm.clickSubminYourAnEnquiryButton()
    await expect(salesBikeInfoPage.sendAnEnquiryForm.successMsg).toHaveText('Thank you')

    const loginPage = new LoginPage(page)
    await loginPage.openFullPath()
    await loginPage.signIn(userData.login,userData.password)

    const crmDashboardPage = new CrmDashboardPage(page)
    await expect (await crmDashboardPage.salesButton).toBeVisible()
    await page.waitForLoadState('load');
    await crmDashboardPage.clickSalesButton()
    await crmDashboardPage.clickSalesDropdownItem('Leads')
    const leadsPage = new LeadsPage(page)
    await expect(leadsPage.h4Title).toHaveText('Lead Filters')
    await expect(leadsPage.h4Title).toBeVisible()
    await leadsPage.clickDoningtonSectionLink('Pending Leads')
    await expect(leadsPage.pageTitle).toHaveText('Pending Leads')
    await expect(leadsPage.leadsTableFirstRowCellNumber(6)).toHaveText(nameValue)
    await expect(leadsPage.leadsTableFirstRowCellNumber(7)).toHaveText(phoneNumberValue)
    await expect(leadsPage.leadsTableFirstRowCellNumber(8)).toHaveText('Pending')
    await leadsPage.clickLeadsTableFirstRowCellLinkNumber(6)
    await expect(leadsPage.leadsNameInfo.leadsNameInfoTableFirstRowCellNumber(2)).toHaveText('Pending')
    await expect(leadsPage.leadsNameInfo.leadsNameInfoTableFirstRowCellNumber(3)).toHaveText(bikeData.vrm)

});