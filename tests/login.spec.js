import {test, expect,} from '@playwright/test';

//const loginPage = await page.goto('https://www.saucedemo.com/')


//visual inspection
test('basic screenshot', async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveScreensot("saucelogin.png");
})

// test('Successful_login', async ({page}) => {
//     //go to required page
//     await page.goto('https://www.saucedemo.com/')
//     //valid username
//     await page.getByPlaceholder('Username').fill('standard_user');
//     //valid password
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     //click sumbit
//     await page.click('#login-button');
//     //expected result
//     await expect(page.getByText('Products')).toBeVisible();
// })