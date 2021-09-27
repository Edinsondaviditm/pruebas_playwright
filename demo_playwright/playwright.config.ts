import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig =  {
    testMatch: "*.spec.ts",
    reporter: [["list"],["junit",{outputFile:"reports/result.xml"}],["allure-playwright"]],
    timeout: 60000,
    retries: 1,
    projects:[
    {
        name:'Chrome_Stable',
        use:{
            browserName: 'chromium',
            channel: 'chrome',
        }
    },
    {
        name:'Desktop_Safari',
        use:{
            browserName: 'webkit',
            viewport:{width: 1200, height:750},
        }
    },
    {
        name:'Desktop_Firefox',
        use:{
            browserName: 'firefox',
            viewport:{width: 800, height:600},
        }
    }

],
    use: {
        baseURL: "https://www.saucedemo.com",
        screenshot: "only-on-failure",
        video:"retry-with-video"
    }
}

export default config;