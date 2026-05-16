DAILY BREAD PROJECT - PWA (Progressive Web App) Setup

What this does:
After installation, visitors can "Add to Home Screen" on their phone and
the app behaves like a real native app:
  - Mafutseni logo as the app icon
  - "Daily Bread" name on the home screen
  - Full screen (no browser URL bar)
  - Cream splash screen on launch
  - Faster loading (cached files)
  - Respects iPhone notch and home indicator

FILES IN THIS ZIP (8 files):

  public/manifest.json              - tells iOS/Android about the app
  public/app-icon-192.png           - Android app icon (medium)
  public/app-icon-512.png           - Android app icon (large)
  public/app-icon-maskable.png      - Android adaptive icon
  public/apple-touch-icon.png       - iOS home screen icon
  public/favicon-32.png             - browser tab icon

  app/layout.tsx                    - links manifest + adds PWA meta tags
  app/globals.css                   - handles iPhone safe-area in standalone mode

HOW USERS INSTALL ON IPHONE:
  1. Visit dailybreadproject.org in Safari
  2. Tap Share button (square with up arrow)
  3. Scroll down -> tap "Add to Home Screen"
  4. Tap "Add"
  5. Now they have a Daily Bread app icon

HOW USERS INSTALL ON ANDROID:
  1. Visit dailybreadproject.org in Chrome
  2. Tap menu (3 dots top-right)
  3. Tap "Install app" or "Add to Home Screen"
  4. Tap "Install"

Instructions in chat with Claude.
