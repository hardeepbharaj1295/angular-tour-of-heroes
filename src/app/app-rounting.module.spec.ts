import { AppRoutingModule } from './app-rounting.module';

describe('AppRountingModule', () => {
  let appRountingModule: AppRoutingModule;

  beforeEach(() => {
    appRountingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRountingModule).toBeTruthy();
  });
});
