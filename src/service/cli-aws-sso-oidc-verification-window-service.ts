import { IAwsSsoOidcVerificationWindowService } from "@secudesk/core/interfaces/i-aws-sso-oidc-verification-window-service";
import {
  RegisterClientResponse,
  StartDeviceAuthorizationResponse,
  VerificationResponse,
} from "@secudesk/core/services/session/aws/aws-sso-role-service";
import puppeteer from "puppeteer";

export class CliAwsSsoOidcVerificationWindowService implements IAwsSsoOidcVerificationWindowService {
  private browser: puppeteer.Browser;

  async openVerificationWindow(
    registerClientResponse: RegisterClientResponse,
    startDeviceAuthorizationResponse: StartDeviceAuthorizationResponse
  ): Promise<VerificationResponse> {
    const uriComplete = startDeviceAuthorizationResponse.verificationUriComplete;
    const page = await this.getNavigationPage();
    await page.goto(uriComplete as string);

    return {
      clientId: registerClientResponse.clientId,
      clientSecret: registerClientResponse.clientSecret,
      deviceCode: startDeviceAuthorizationResponse.deviceCode,
    } as VerificationResponse;
  }

  async closeBrowser(): Promise<void> {
    if (!this.browser) {
      return;
    }

    for (const page of await this.browser.pages()) {
      page.removeAllListeners();
      await page.close();
    }

    await this.browser.close();
  }

  private async getNavigationPage(): Promise<puppeteer.Page> {
    this.browser = await puppeteer.launch({ headless: false, devtools: false });
    const pages = await this.browser.pages();
    const page = pages.length > 0 ? pages[0] : await this.browser.newPage();
    await page.setDefaultNavigationTimeout(180000);
    return page;
  }
}
