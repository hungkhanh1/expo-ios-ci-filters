import { BlendMode } from "../../enums/";

export type NormalizedCoord = number;
export type Radian = number;
export type BlurRadius = number;

export interface MotionBlurConfig {
  radius?: BlurRadius;
  angle?: Radian;
}

export interface MaskedVariableBlurConfig {
  radius?: BlurRadius;
  point0X?: NormalizedCoord;
  point0Y?: NormalizedCoord;
  point1X?: NormalizedCoord;
  point1Y?: NormalizedCoord;
  color0Alpha?: number;
  color1Alpha?: number;
}

export interface ColorControlsConfig {
  brightness?: number;
  contrast?: number;
  saturation?: number;
}

export interface GaussianBlurConfig {
  radius?: BlurRadius;
}

export interface ExposureConfig {
  ev?: number;
}

export interface VibranceConfig {
  amount?: number;
}

export interface GammaConfig {
  power?: number;
}

export interface HueAdjustConfig {
  angle?: Radian;
}

export interface SharpenConfig {
  sharpness?: number;
}

export interface VignetteConfig {
  intensity?: number;
  radius?: number;
}

export interface GradientOverlayConfig {
  point0X?: NormalizedCoord;
  point0Y?: NormalizedCoord;
  point1X?: NormalizedCoord;
  point1Y?: NormalizedCoord;
  color0Red?: number;
  color0Green?: number;
  color0Blue?: number;
  color0Alpha?: number;
  color1Red?: number;
  color1Green?: number;
  color1Blue?: number;
  color1Alpha?: number;
  blendMode?: BlendMode;
}

export interface IReactPropIOS {
  url: string;
  borderRadius?: number;
  motionBlur?: MotionBlurConfig;
  colorControls?: ColorControlsConfig;
  gaussianBlur?: GaussianBlurConfig;
  exposure?: ExposureConfig;
  vibrance?: VibranceConfig;
  gamma?: GammaConfig;
  hueAdjust?: HueAdjustConfig;
  sharpen?: SharpenConfig;
  vignette?: VignetteConfig;
  maskedVariableBlur?: MaskedVariableBlurConfig;
  gradientOverlay?: GradientOverlayConfig;
}
