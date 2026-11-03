import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const SCREENSHOT_DIR = path.join(process.cwd(), "tests/screenshots");

test.beforeAll(async () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
});

test.describe("Desktop Viewport — Maru Minimal Landing Page", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop only");

  test("should render header with official logo, navigation, and CTA", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Title
    await expect(page).toHaveTitle(/Maru/i);

    // Official logo artwork
    const logoImg = page.locator("header a[href='/'] img");
    await expect(logoImg).toBeVisible();
    const src = await logoImg.getAttribute("src");
    expect(decodeURIComponent(src || "")).toContain("maru-logo-horizontal.png");

    // Nav links
    await expect(page.locator("header nav a[href='#fitur-undangan']")).toBeVisible();
    await expect(page.locator("header nav a[href='#fitur-resepsi']")).toBeVisible();
    await expect(page.locator("header nav a[href='#spesifikasi']")).toBeVisible();

    // CTA
    const headerCta = page.locator("header a[href*='wa.me']");
    await expect(headerCta).toBeVisible();

    // Screenshot desktop hero
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-hero.png"),
    });
  });

  test("should render ultra-minimalist hero with headline and action buttons", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Fitur Lengkap");
    await expect(h1).toContainText("Maru");

    // Live demo button
    const demoBtn = page.locator("a[href*='maruplanner.my.id/ama-jidengg']").first();
    await expect(demoBtn).toBeVisible();
  });

  test("should display feature showcase and switch between Couple and Organizer tabs", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const featuresSection = page.locator("#fitur-undangan");
    await featuresSection.scrollIntoViewIfNeeded();

    const coupleTab = page.locator("#tab-couple");
    const woTab = page.locator("#tab-organizer");

    // Default tab: Couple
    await expect(coupleTab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("text=15 Section Modular")).toBeVisible();
    await expect(page.locator("text=Tautan Nama Personal")).toBeVisible();
    await expect(page.locator("text=Amplop Digital & QRIS")).toBeVisible();

    // Switch to WO tab
    await woTab.click();
    await expect(woTab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("text=Scanner QR 20 FPS")).toBeVisible();
    await expect(page.locator("text=100% Offline-First")).toBeVisible();
    await expect(page.locator("text=Registrasi Go-Show (3 Detik)")).toBeVisible();

    // Screenshot desktop features
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-features.png"),
    });
  });

  test("should render technical metrics grid", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const metricsSection = page.locator(
      "section[aria-label='Spesifikasi & Keandalan Sistem']"
    );
    await metricsSection.scrollIntoViewIfNeeded();
    await expect(metricsSection).toBeVisible();

    await expect(metricsSection).toContainText("20 FPS");
    await expect(metricsSection).toContainText("100%");
    await expect(metricsSection).toContainText("2.000+");
    await expect(metricsSection).toContainText("AES-256");
  });

  test("should render live sample invitation preview card with mascot", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const ctaSection = page.locator("text=Contoh Live Undangan");
    await ctaSection.scrollIntoViewIfNeeded();

    await expect(ctaSection).toBeVisible();
    await expect(
      page.locator("text=maruplanner.my.id/ama-jidengg?to=tria")
    ).toBeVisible();
  });

  test("should render minimalist footer with brand logo in ivory card", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();

    const footerLogo = footer.locator("img[alt='Maru']");
    await expect(footerLogo).toBeVisible();

    // Full page desktop screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-fullpage.png"),
      fullPage: true,
    });
  });
});

test.describe("Mobile Viewport — Maru Minimal Landing Page", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile only");

  test("should render mobile navbar with accessible hamburger drawer", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const menuBtn = page.locator(
      "header button[aria-controls='mobile-nav-menu']"
    );
    await expect(menuBtn).toBeVisible();

    // Verify touch target >= 44x44
    const box = await menuBtn.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }

    // Capture mobile hero screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "mobile-hero.png"),
    });

    // Open mobile menu
    await menuBtn.click();
    const mobileMenu = page.locator("#mobile-nav-menu");
    await expect(mobileMenu).toBeVisible();

    // Capture mobile menu open screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "mobile-menu.png"),
    });

    // Close menu
    await menuBtn.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test("should display responsive feature cards without horizontal overflow", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Check no horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Feature tabs interact smoothly on mobile
    const woTab = page.locator("#tab-organizer");
    await woTab.scrollIntoViewIfNeeded();
    await woTab.click();
    await expect(page.locator("text=Scanner QR 20 FPS")).toBeVisible();

    // Capture full mobile screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "mobile-fullpage.png"),
      fullPage: true,
    });
  });
});
