import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Portfolio Blog/);
});

test('has welcome heading', async ({ page }) => {
  await page.goto('/');

  // Expect a heading with the name of the app.
  await expect(
    page.getByRole('heading', { name: 'Welcome to My Portfolio Blog' })
  ).toBeVisible();
});

test('has technology buttons', async ({ page }) => {
  await page.goto('/');

  // Check for technology buttons
  await expect(page.getByRole('button', { name: 'React 19' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Chakra UI' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'TypeScript' })).toBeVisible();
});
