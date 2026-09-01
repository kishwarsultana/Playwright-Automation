import { test, expect } from '@playwright/test'
 import { POManager } from '../pageobject/POManager'
 import testdata from '../utils/bank.json' assert {type:'json'}

  for(const data of testdata) {
  
test(`register test case ${data.username}`, async ({ page }) => {
    
     const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()
    await page.waitForTimeout(2000)


    const registerpage = pomanger.getRegistrationPage()
    await registerpage.registerUser(
         data.firstname,
         data.lastname,
         data.address,
         data.city,
         data.state,
          data.zipcode,
          data.phonenumber,
         data.ssn,
         data.username,
         data.password,
         data.confirmpassword
    )

    await registerpage.registerButtonclick()
    await page.waitForTimeout(2000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})

  }