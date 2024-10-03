import { test, expect } from '@playwright/test'
import { AddTCardPage, CrmDashboardPage, LoginPage, MacclesfieldBoardPage, BikeInfoPage } from '../../app/geoffcrm/page/index'
import { userData } from '../../app/geoffcrm/data/user.data'
import { kawasakiV30All } from '../../app/geoffcrm/data/vrm.data';
import { driverPackV30All } from '../../app/geoffcrm/data/driver.pack.data'

test('Test Case 1: Geoff crm happy pass', async ({ page, request }) => {
  /*    const response = await request.put('https://staging.geoff-api.superbikefactory.co.uk/api/v1/workshop/status', {
        data: {
          new_status_id: '5dc93dfb8f6a3be76e0340f4', // Deleted
          user_id: '66b1be4e6ff7a8d3e1b2f200', // Static
          workshop_id: '66fbe3b21bc606dccb03ed61' // your tCard ID which you want remove
        }
      });
      const status = response.status(); 
      console.log(status)  */
    const loginPage = new LoginPage(page)
    await loginPage.open()
    await loginPage.signIn(userData.login,userData.password)

    const crmDashboardPage = new CrmDashboardPage(page)
    await expect (await crmDashboardPage.boardButton).toBeVisible()
    await page.waitForLoadState('load');
    await crmDashboardPage.clickBoardButton()
    await expect (await crmDashboardPage.boardsDropdownItem('Add tCard')).toBeVisible({ timeout: 8000 })
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

    const macclesfieldBoardPage = new MacclesfieldBoardPage(page)
    await macclesfieldBoardPage.open()
    await macclesfieldBoardPage.setSearchField(kawasakiV30All.vrm)
    await macclesfieldBoardPage.clickConfirmSearchButton()
    await expect(macclesfieldBoardPage.bikeCardByVRM(kawasakiV30All.vrm)).toBeVisible({ timeout: 10000 })
    await macclesfieldBoardPage.clickBikeCardByVRM(kawasakiV30All.vrm)

    const bikeInfoPage = new BikeInfoPage(page)
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('In Transit',{ timeout: 10000 })
    await bikeInfoPage.clickListButton('Driver Pack')
    await expect(bikeInfoPage.driverPack.cardTitle).toHaveText('Driver Pack Contents')
    await expect(bikeInfoPage.driverPack.cardTitle).toBeVisible()

    await bikeInfoPage.driverPack.chooseBikeKays(driverPackV30All.bikeKays)
    await expect(bikeInfoPage.driverPack.bikeKaysSelect).toHaveValue(driverPackV30All.bikeKays)
    await bikeInfoPage.driverPack.chooseNumberOfPanniers(driverPackV30All.numberOfPanniers)
    await expect(bikeInfoPage.driverPack.numberOfPanniersSelect).toHaveValue(driverPackV30All.numberOfPanniers)
    await bikeInfoPage.driverPack.choosePreviousOwners(driverPackV30All.previousOwners)
    await expect(bikeInfoPage.driverPack.previousOwnersSelect).toHaveValue(driverPackV30All.previousOwners)
    await bikeInfoPage.driverPack.chooseServiceHistory(driverPackV30All.serviceHistory)
    await expect(bikeInfoPage.driverPack.serviceHistorySelect).toHaveValue(driverPackV30All.serviceHistory)
    await bikeInfoPage.driverPack.chooseBodyType(driverPackV30All.bodyType)
    await expect(bikeInfoPage.driverPack.bodyTypeSelect).toHaveValue(driverPackV30All.bodyType)
    await bikeInfoPage.driverPack.setActualBikeMileageInput(driverPackV30All.actualBikeMileage)
    await expect(bikeInfoPage.driverPack.actualBikeMileageInput).toHaveValue(driverPackV30All.actualBikeMileage)
    await bikeInfoPage.driverPack.setPurchasePriceInput(driverPackV30All.purchasePrice)
    await expect(bikeInfoPage.driverPack.purchasePriceInput).toHaveValue(driverPackV30All.purchasePrice)
    await expect(bikeInfoPage.driverPack.checkIcon).toHaveCount(7)
    await bikeInfoPage.driverPack.chooseFullV5DocumentAnswerLink('Yes')
    await bikeInfoPage.driverPack.chooseMasterKeyAnswerLink('Yes')
    await bikeInfoPage.driverPack.chooseServiceBookAnswerLink('Yes')
    await bikeInfoPage.driverPack.chooseServiceInvoicesAnswerLink('Yes')
    await bikeInfoPage.driverPack.chooseGdprClearAnswerLink('Yes')
    await bikeInfoPage.driverPack.chooseIsTradeBikeAnswerLink('Yes')
    await bikeInfoPage.driverPack.clickupdateDriverPackButton()
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('Checked-In',{ timeout: 10000 }) 

    await bikeInfoPage.clickPreWashAction()
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('In PreWash',{ timeout: 10000 }) 
    await bikeInfoPage.clickJob('Start')
    await page.waitForTimeout(500)
    await bikeInfoPage.clickJob('Stop')
    await bikeInfoPage.clickCompleteJob()

    await bikeInfoPage.clickPhotosAction()
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('In Photography',{ timeout: 10000 }) 
    await bikeInfoPage.clickJob('Start')
    await page.waitForTimeout(500)
    await bikeInfoPage.clickJob('Stop')
    await bikeInfoPage.clickCompleteJob()

    await bikeInfoPage.clickInternalPDIAction()
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('In Internal PDI',{ timeout: 10000 }) 
    await bikeInfoPage.chooseSectionActions('PBD')  
    await expect(bikeInfoPage.assignToField).toHaveText('Assigned To: Paul Billington-Dykes[Un-Assign]',{ timeout: 10000 }) 
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('In Internal PDI',{ timeout: 10000 }) 
    await page.waitForLoadState('networkidle')
    await bikeInfoPage.chooseAdminAction('Quality Control')
    await bikeInfoPage.clickSaveAdminActionButton()
    await page.waitForLoadState('networkidle')
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('Quality Control',{ timeout: 10000 })
    await bikeInfoPage.chooseSectionActions('PBD') 
    await expect(bikeInfoPage.assignToField).toHaveText('Assigned To: Paul Billington-Dykes[Un-Assign]',{ timeout: 10000 }) 
    await page.waitForLoadState('networkidle')
    await bikeInfoPage.chooseAdminAction('Ready to Ride')
    await bikeInfoPage.clickSaveAdminActionButton()
    await expect(bikeInfoPage.currentBikeStatus).toHaveText('Ready To Ride',{ timeout: 10000 })



});