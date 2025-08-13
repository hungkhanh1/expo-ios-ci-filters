import { MaskedVariableBlurConfig } from "../../typings/react-prop/react-prop.ios";
import { MaskedBlurPresets } from "./const";

export class MaskedBlurHelper {
  static createVertical(
    radius: number = 25,
    fromTop: boolean = true
  ): MaskedVariableBlurConfig {
    return fromTop
      ? { ...MaskedBlurPresets.verticalTopToBottom, radius }
      : { ...MaskedBlurPresets.verticalBottomToTop, radius };
  }

  static createHorizontal(
    radius: number = 25,
    fromLeft: boolean = true
  ): MaskedVariableBlurConfig {
    return fromLeft
      ? { ...MaskedBlurPresets.horizontalLeftToRight, radius }
      : { ...MaskedBlurPresets.horizontalRightToLeft, radius };
  }

  static createTiltShift(
    radius: number = 30,
    direction: "horizontal" | "vertical" = "horizontal",
    centerStart: number = 0.3,
    centerEnd: number = 0.7
  ): MaskedVariableBlurConfig {
    if (direction === "horizontal") {
      return {
        radius,
        point0X: 0,
        point0Y: centerStart,
        point1X: 1,
        point1Y: centerEnd,
        color0Alpha: 0,
        color1Alpha: 1,
      };
    } else {
      return {
        radius,
        point0X: centerStart,
        point0Y: 0,
        point1X: centerEnd,
        point1Y: 1,
        color0Alpha: 0,
        color1Alpha: 1,
      };
    }
  }

  static createCustom(
    radius: number,
    startPoint: { x: number; y: number },
    endPoint: { x: number; y: number },
    startAlpha: number = 1,
    endAlpha: number = 0
  ): MaskedVariableBlurConfig {
    return {
      radius,
      point0X: startPoint.x,
      point0Y: startPoint.y,
      point1X: endPoint.x,
      point1Y: endPoint.y,
      color0Alpha: startAlpha,
      color1Alpha: endAlpha,
    };
  }
}
