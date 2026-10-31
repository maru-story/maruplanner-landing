import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const SCREENSHOT_DIR = path.join(process.cwd(), "tests/screenshots");

test.beforeAll(async () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
});

test.describe("Desktop Viewport — Maru Landing Page", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop only");

  test("should render header with official brand logo, navigation, and CTA", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Title verification
    await expect(page).toHaveTitle(/Maru/i);

    // Official logo artwork
    const logoImg = page.locator("header a[href='/'] img");
    await expect(logoImg).toBeVisible();
    const src = await logoImg.getAttribute("src");
    expect(decodeURIComponent(src || "")).toContain("maru-logo-horizontal.png");

    // Nav items
    await expect(page.locator("nav a[href='#solusi']")).toBeVisible();
    await expect(page.locator("nav a[href='#fitur']")).toBeVisible();
    await expect(page.locator("nav a[href='#untuk-wo']")).toBeVisible();
    await expect(page.locator("nav a[href='#faq']")).toBeVisible();

    // CTA in header
    const headerCta = page.locator("header a[href*='wa.me']");
    await expect(headerCta).toBeVisible();
    await expect(headerCta).toContainText("0878-2551-5689");

    // Capture desktop hero screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-hero.png"),
    });
  });

  test("should render scrollytelling canvas and hero overlay phase 1", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const canvas = page.locator("canvas[role='img']");
    await expect(canvas).toBeVisible();

    const h1 = page.locator("#phase-1 h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Elegan di Layar");
    await expect(h1).toContainText("Sempurna di Hari-H.");

    const ctaWa = page.locator("#phase-1 a[href*='wa.me']");
    await expect(ctaWa).toBeVisible();
  });

  test("should render technical metrics proving system capability", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const metricsSection = page.locator(
      "section[aria-label='Spesifikasi & Keandalan Sistem']"
    );
    await metricsSection.scrollIntoViewIfNeeded();
    await expect(metricsSection).toBeVisible();

    // 4 metrics verification
    await expect(metricsSection).toContainText("20 FPS");
    await expect(metricsSection).toContainText("100%");
    await expect(metricsSection).toContainText("2.000+");
    await expect(metricsSection).toContainText("AES-256");
  });

  test("should switch feature tabs and display official Maru & Mari mascot", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const featuresSection = page.locator("#fitur");
    await featuresSection.scrollIntoViewIfNeeded();

    const coupleTab = page.locator("#tab-couple");
    const woTab = page.locator("#tab-organizer");

    // Default tab: couple
    await expect(coupleTab).toHaveAttribute("aria-selected", "true");
    await expect(featuresSection).toContainText("15 Section Modular Lengkap");
    await expect(featuresSection).toContainText("Link Khusus Atas Nama Tamu");

    // Check mascot in callout
    const mascotImg = featuresSection.locator("img[alt*='Mascot']");
    await expect(mascotImg).toBeVisible();
    const mascotSrc = await mascotImg.getAttribute("src");
    expect(decodeURIComponent(mascotSrc || "")).toContain(
      "maru-mascot-couple-calm.png"
    );

    // Switch to WO tab
    await woTab.click();
    await expect(woTab).toHaveAttribute("aria-selected", "true");
    await expect(featuresSection).toContainText(
      "QR Scanner PWA 20fps Offline-First"
    );
    await expect(featuresSection).toContainText("Live Attendance Control Room");

    // Check mascot switched to groom calm
    const groomMascot = featuresSection.locator("img[alt*='Mascot']");
    await expect(groomMascot).toBeVisible();
    const groomSrc = await groomMascot.getAttribute("src");
    expect(decodeURIComponent(groomSrc || "")).toContain(
      "maru-mascot-groom-calm.png"
    );

    // Capture features screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-features.png"),
    });
  });

  test("should showcase live sample invitation card with couple mascot", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const ctaSection = page.locator(
      "text=Rasakan Pengalaman Tamu Saat Membuka Undangan"
    );
    await ctaSection.scrollIntoViewIfNeeded();

    await expect(
      page.locator("text=The Wedding of Rahma & Zidane")
    ).toBeVisible();
    await expect(
      page.locator("text=maruplanner.my.id/ama-jidengg?to=tria")
    ).toBeVisible();

    const sampleLinks = page.locator(
      "a[href*='maruplanner.my.id/ama-jidengg']"
    );
    await expect(sampleLinks.first()).toBeVisible();
  });

  test("should toggle FAQ items smoothly", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const faqSection = page.locator("#faq");
    await faqSection.scrollIntoViewIfNeeded();

    // First question is open by default
    const firstQuestion = page.locator("#faq-btn-0");
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#faq-panel-0")).toBeVisible();

    // Toggle second question with explicit scroll
    const secondQuestion = page.locator("#faq-btn-1");
    await secondQuestion.scrollIntoViewIfNeeded();
    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#faq-panel-1")).toBeVisible();
  });

  test("should render footer with brand logo in ivory card container", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();

    const footerLogo = footer.locator("img[alt='Maru']");
    await expect(footerLogo).toBeVisible();
    const footerSrc = await footerLogo.getAttribute("src");
    expect(decodeURIComponent(footerSrc || "")).toContain(
      "maru-logo-horizontal.png"
    );

    // Capture full desktop page screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop-fullpage.png"),
      fullPage: true,
    });
  });
});

test.describe("Mobile Viewport — Maru Landing Page", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile only");

  test("should display mobile navigation bar with accessible menu button", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Header logo
    const logoImg = page.locator("header a[href='/'] img");
    await expect(logoImg).toBeVisible();

    // Hamburger button
    const menuBtn = page.locator(
      "header button[aria-controls='mobile-nav-menu']"
    );
    await expect(menuBtn).toBeVisible();

    // Check touch target bounding box >= 44x44
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

    // Close mobile menu
    await menuBtn.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test("should render responsive mobile sections without horizontal overflow", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Verify no horizontal overflow on mobile body
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Verify technical metrics in mobile grid
    const metricsSection = page.locator(
      "section[aria-label='Spesifikasi & Keandalan Sistem']"
    );
    await metricsSection.scrollIntoViewIfNeeded();
    await expect(metricsSection).toContainText("20 FPS");
    await expect(metricsSection).toContainText("100%");

    // Verify feature tabs on mobile
    const woTab = page.locator("#tab-organizer");
    await woTab.scrollIntoViewIfNeeded();
    await woTab.click();
    await expect(
      page.locator("text=QR Scanner PWA 20fps Offline-First")
    ).toBeVisible();

    // Capture full mobile page screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "mobile-fullpage.png"),
      fullPage: true,
    });
  });
});
