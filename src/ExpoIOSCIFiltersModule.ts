import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIOSCIFiltersModuleEvents } from './ExpoIOSCIFilters.types';

declare class ExpoIOSCIFiltersModule extends NativeModule<ExpoIOSCIFiltersModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIOSCIFiltersModule>('ExpoIOSCIFilters');
