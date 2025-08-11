import * as React from 'react';

import { ExpoIOSCIFiltersViewProps } from './ExpoIOSCIFilters.types';

export default function ExpoIOSCIFiltersView(props: ExpoIOSCIFiltersViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
