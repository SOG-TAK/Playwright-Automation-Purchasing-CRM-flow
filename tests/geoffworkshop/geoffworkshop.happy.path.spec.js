import { test, expect } from '@playwright/test';
import { AddTCardPage, CrmDashboardPage, LoginPage } from '../../app/geoffcrm/page/index'
import { userData } from '../../app/geoffcrm/data/user.data'
import { kawasakiV30All } from '../../app/geoffcrm/data/vrm.data';



test('Test Case 1: Geoff crm happy pass', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.open()
    await loginPage.signIn(userData.login,userData.password)

    const crmDashboardPage = new CrmDashboardPage(page)
    await expect (await crmDashboardPage.boardButton).toBeVisible()
    await page.waitForLoadState('load');
    await crmDashboardPage.clickBoardButton()
    await expect (await crmDashboardPage.boardsDropdownItem('Add tCard')).toBeVisible()
    await crmDashboardPage.clickBoardsDropdownItem('Add tCard')

    const addTCardPage = new AddTCardPage(page)
    await expect (await addTCardPage.pageTitle).toHaveText('Add New tCard')
    await addTCardPage.setVrmField(kawasakiV30All.vrm)
    await addTCardPage.clickLookupButton()
    await expect (await addTCardPage.brandField).toHaveValue(kawasakiV30All.brandCode)
    await expect (await addTCardPage.modelField).toHaveValue(kawasakiV30All.modelCode)
    await expect (await addTCardPage.yearField).toHaveValue(kawasakiV30All.year)
    await expect (await addTCardPage.engineSizeField).toHaveValue(kawasakiV30All.engineSize)
    await expect (await addTCardPage.colorField).toHaveValue(kawasakiV30All.colour)
    await expect (await addTCardPage.cardTypeField).toHaveValue(kawasakiV30All.cardType)
    await expect (await addTCardPage.retailPriceField).toHaveValue('0')
    await addTCardPage.setMileageField(kawasakiV30All.mileage)
    await expect (await addTCardPage.mileageField).toHaveValue(kawasakiV30All.mileage)
    await addTCardPage.chooseShowroomField(kawasakiV30All.showroom)
    await expect (await addTCardPage.showroomField).toHaveValue(kawasakiV30All.showroom)
    await addTCardPage.setRetailPriceField(kawasakiV30All.retailPrice)
    await expect (await addTCardPage.retailPriceField).toHaveValue(kawasakiV30All.retailPrice)
    await addTCardPage.clickAddCardButton()
});