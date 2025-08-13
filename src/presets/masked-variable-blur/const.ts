import type { MaskedVariableBlurConfig } from "../../typings/react-prop/react-prop.ios";

export const MaskedBlurPresets = {
  verticalTopToBottom: {
    radius: 25,
    point0X: 0,
    point0Y: 0,
    point1X: 0,
    point1Y: 1,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  verticalBottomToTop: {
    radius: 25,
    point0X: 0,
    point0Y: 1,
    point1X: 0,
    point1Y: 0,
    color0Alpha: 1,
    color1Alpha: 0,
  },
  horizontalLeftToRight: {
    radius: 25,
    point0X: 0,
    point0Y: 0,
    point1X: 1,
    point1Y: 0,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  horizontalRightToLeft: {
    radius: 25,
    point0X: 1,
    point0Y: 0,
    point1X: 0,
    point1Y: 0,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  tiltShiftHorizontal: {
    radius: 30,
    point0X: 0,
    point0Y: 0.3,
    point1X: 1,
    point1Y: 0.7,
    color0Alpha: 0,
    color1Alpha: 1,
  },

  tiltShiftVertical: {
    radius: 30,
    point0X: 0.3,
    point0Y: 0,
    point1X: 0.7,
    point1Y: 1,
    color0Alpha: 0,
    color1Alpha: 1,
  },

  // Diagonal blur (top-left to bottom-right)
  diagonalTLBR: {
    radius: 25,
    point0X: 0,
    point0Y: 0,
    point1X: 1,
    point1Y: 1,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  diagonalBLTR: {
    radius: 25,
    point0X: 0,
    point0Y: 1,
    point1X: 1,
    point1Y: 0,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  centerFocus: {
    radius: 20,
    point0X: 0.5,
    point0Y: 0.4,
    point1X: 0.5,
    point1Y: 0.8,
    color0Alpha: 1,
    color1Alpha: 0,
  },

  portraitMode: {
    radius: 15,
    point0X: 0,
    point0Y: 0.2,
    point1X: 0,
    point1Y: 0.8,
    color0Alpha: 0,
    color1Alpha: 1,
  },
} as const satisfies Record<string, MaskedVariableBlurConfig>;
