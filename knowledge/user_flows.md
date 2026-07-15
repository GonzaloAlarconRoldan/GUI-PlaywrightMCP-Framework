# User Flows — [App Name]

## Flow 1: Login

1. Open `[login_url]` (see project_config/application.yaml)
2. [Describe authentication steps]
3. App shows loading screen
4. Redirect to home/dashboard upon success

**⚠️ After authentication the app may show a loading screen. Duration varies depending on connection speed and can take anywhere from a few seconds to several minutes. This is normal behavior. Do NOT close the browser, do NOT retry, do NOT assume failure.**

**⚠️ Wait until the post-login URL is confirmed (see project_config/application.yaml for base_url). Use a high timeout (180000ms or more). Only proceed once the expected URL is reached.**

---

## Flow 2: [Flow Name]

[Document flows here as they are discovered]

---

## Navigation Notes

[Add app-specific navigation notes here]
