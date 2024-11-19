import { IKeychainService } from "@secudesk/core/interfaces/i-keychain-service";
import { RemoteProceduresClient } from "@secudesk/core/services/remote-procedures-client";

export class CliRpcKeychainService implements IKeychainService {
  constructor(private remoteProceduresClient: RemoteProceduresClient) {}

  async saveSecret(service: string, account: string, password: string): Promise<void> {
    await this.remoteProceduresClient.keychainSaveSecret(service, account, password);
  }

  async getSecret(service: string, account: string): Promise<string | null> {
    return await this.remoteProceduresClient.keychainGetSecret(service, account);
  }

  async deleteSecret(service: string, account: string): Promise<boolean> {
    return await this.remoteProceduresClient.keychainDeleteSecret(service, account);
  }
}
