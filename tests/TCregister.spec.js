/*import { test, expect } from '@playwright/test'
import { HomePage } from '../pageobject/HomePage'
import { RegistrationPage } from '../pageobject/RegistrationPage'

test('register test case', async ({ page }) => {
    const homepage = new HomePage(page)
    await homepage.goTo()
    await homepage.clickOnRegisterLink()
    await page.waitForTimeout(2000)
    const registerpage = new RegistrationPage(page)
    await registerpage.registerUser(
        'riya',
        'sam',
        'delhi',
        'saket',
        'newDelhi',
        '110011',
        '1232435465768',
        '1111111111',
        'asdf4',
        'asdf4'
    )

    await registerpage.registerButtonclick()
    await page.waitForTimeout(2000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})
*/


import { test, expect } from '@playwright/test'
 import { POManager } from '../pageobject/POManager'

test('register test case', async ({ page }) => {
    
     const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()
    await page.waitForTimeout(2000)


    const registerpage = pomanger.getRegistrationPage()
    await registerpage.registerUser(
        'riya',
        'sam',
        'delhi',
        'saket',
        'newDelhi',
        '110011',
        '1232435465768',
        '1111111111',
        'asdf5',
        'asdf5'
    )

    await registerpage.registerButtonclick()
    await page.waitForTimeout(2000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})