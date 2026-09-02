import { POManager } from '../pageobject/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'


test('login new test case', async ({ page, testdataForregistration }) => {

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

