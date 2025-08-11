import { registerWebModule, NativeModule } from 'expo';

import { ExpoIOSCIFiltersModuleEvents } from './ExpoIOSCIFilters.types';

class ExpoIOSCIFiltersModule extends NativeModule<ExpoIOSCIFiltersModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIOSCIFiltersModule, 'ExpoIOSCIFiltersModule');
