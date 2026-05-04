import { expect, test } from '@playwright/test';

test('タスク詳細へ遷移できる', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '詳細を見る' }).first().click();
  await expect(page.getByRole('heading', { name: '請求書アップロード画面の改善' })).toBeVisible();
});
