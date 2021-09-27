import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    testMatch: "*.spec.ts",
    projects:[
        {
            name:'Chrome_Stable',
            use:{
                browserName: 'chromium',
                channel: 'chrome',
            }
        },
        {
            name:'Mobile_Safari',
            use: devices['iPhone 12'],
            }
        ],
    use: {
        baseURL: "https://playwright.dev",
        screenshot: "only-on-failure",
        video:"retry-with-video"
    }
};
export default config;