import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIOSCIFiltersViewProps } from './ExpoIOSCIFilters.types';

const NativeView: React.ComponentType<ExpoIOSCIFiltersViewProps> =
  requireNativeView('ExpoIOSCIFilters');

export default function ExpoIOSCIFiltersView(props: ExpoIOSCIFiltersViewProps) {
  return <NativeView {...props} />;
}
