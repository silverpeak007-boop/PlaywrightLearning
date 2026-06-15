 import { test, expect } from '@playwright/test';

async function searchProduct(page, productName: string) {
    console .log("Searching for product: ", productName);
}




/*
 test("title", ()=> {





 })
*/

test("verify page title", async ({ page }) => {
	await page.goto('https://flipkart.com');
	await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    await searchProduct(page, "iPhone 16 Pro Max");
});





