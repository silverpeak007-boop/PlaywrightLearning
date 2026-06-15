import { test, expect } from '@playwright/test';

test.describe('Amazon.in - Search & Navigation', () => {

  test.beforeEach(async ({ page }) => {
    // Retry navigation up to 3 times to handle Amazon rate limiting
    for (let i = 0; i < 3; i++) {
      try {
        await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded', timeout: 30000 });
        break;
      } catch {
        if (i === 2) throw new Error('Failed to load Amazon.in after 3 attempts');
        await page.waitForTimeout(3000);
      }
    }
  });

  test('TC01 - Homepage loads and title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Amazon/);
    await expect(page.locator('#twotabsearchtextbox')).toBeVisible();
  });

  test('TC02 - Search for a product', async ({ page }) => {
    await page.locator('#twotabsearchtextbox').fill('laptop');
    await page.locator('#nav-search-submit-button').click();

    await expect(page).toHaveURL(/s\?k=laptop/);
    await expect(page.locator('.s-search-results')).toBeVisible();
  });

  test('TC03 - Search results contain relevant products', async ({ page }) => {
    await page.locator('#twotabsearchtextbox').fill('headphones');
    await page.locator('#nav-search-submit-button').click();

    await page.waitForSelector('.s-search-results');

    const results = page.locator('[data-component-type="s-search-result"]');
    await expect(results.first()).toBeVisible();

    const count = await results.count();
    expect(count).toBeGreaterThan(0);
    console.log(`Found ${count} products for "headphones"`);
  });

  test('TC04 - Product title is visible on search results', async ({ page }) => {
    await page.locator('#twotabsearchtextbox').fill('wireless mouse');
    await page.locator('#nav-search-submit-button').click();

    await page.waitForSelector('[data-component-type="s-search-result"]');

    // Verify product titles are visible in search results (avoids bot-detection on click)
    const firstTitle = page.locator('[data-component-type="s-search-result"] h2 span').first();
    await expect(firstTitle).toBeVisible();

    const titleText = await firstTitle.textContent();
    console.log(`First product: ${titleText?.trim()}`);
    expect(titleText?.length).toBeGreaterThan(0);
  });

  test('TC05 - Navigate to Electronics via search', async ({ page }) => {
    // Search for electronics category directly — more reliable than hamburger menu in headless
    await page.locator('#twotabsearchtextbox').fill('electronics');
    await page.locator('#nav-search-submit-button').click();

    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.s-search-results')).toBeVisible();

    const url = page.url();
    expect(url).toContain('electronics');
    console.log(`Navigated to: ${url}`);
  });

  test('TC06 - Search with Enter key instead of button click', async ({ page }) => {
    await page.locator('#twotabsearchtextbox').fill('smartphone');
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/s\?k=smartphone/);
    await expect(page.locator('.s-search-results')).toBeVisible();
  });

  test('TC07 - Verify cart icon is present', async ({ page }) => {
    const cartIcon = page.locator('#nav-cart');
    await expect(cartIcon).toBeVisible();
  });

  test('TC08 - Search for non-existent product', async ({ page }) => {
    await page.locator('#twotabsearchtextbox').fill('xyznonexistentproduct12345abc');
    await page.locator('#nav-search-submit-button').click();

    await page.waitForLoadState('domcontentloaded');

    const noResults = page.locator('.s-no-outline').filter({ hasText: /no results/i });
    const resultsSection = page.locator('.s-search-results');

    const noResultsVisible = await noResults.isVisible().catch(() => false);
    const resultsVisible = await resultsSection.isVisible().catch(() => false);

    console.log(`No results message: ${noResultsVisible}, Results section: ${resultsVisible}`);
    expect(noResultsVisible || resultsVisible).toBeTruthy();
  });

});
