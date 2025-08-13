import { requireNativeView } from "expo";
import { memo } from "react";
import { Module, ModuleView } from "../constants/ModuleNameEnum";
import type { INativeViewProps } from "../typings/native/native.ios.props";

const NativeiOSFilterBase: React.ComponentType<INativeViewProps> =
  requireNativeView(Module.Name, ModuleView.Name);

export const NativeiOSFilterView = memo(
  NativeiOSFilterBase,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);
