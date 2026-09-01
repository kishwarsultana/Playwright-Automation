
import { POManager } from '../pageobject/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'


 test.describe.parallel('combine test',()=>{

 
test('@sanityregister test case', async ({ page, testdataForregistration }) => {

    const pomanger = new POManager(page)
    const homepage = pomanger.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()
    await page.waitForTimeout(2000)


    const registerpage = pomanger.getRegistrationPage()
    await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )

    await registerpage.registerButtonclick()
    await page.waitForTimeout(2000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})


test('@sanity@regressionlogin test case', async ({ page, testdataForregistration }) => {

    const pomanger = new POManager(page)
    const homepage = pomanger.getHomePage()
    await homepage.goTo()
    await page.waitForTimeout(2000)
      
    const loginpage=pomanger.getLoginPage()
    await loginpage.loginToapplication(
        testdataForregistration.username,
        testdataForregistration.password
    )

    await loginpage.clickloginbutton()

 await page.waitForTimeout(2000)
  
})

})