//
//  Filters.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

 func applyMotionBlur(to image: CIImage, config: MotionBlurConfig) -> CIImage {
        guard config.radius > 0 else { return image }
        
        let filter = CIFilter.motionBlur()
        filter.inputImage = image
        filter.radius = Float(config.radius)
        filter.angle = Float(config.angle)
        return filter.outputImage ?? image
    }

     func applyGaussianBlur(to image: CIImage, config: GaussianBlurConfig) -> CIImage {
        guard config.radius > 0 else { return image }
        
        let filter = CIFilter.gaussianBlur()
        filter.inputImage = image
        filter.radius = Float(config.radius)
        return filter.outputImage ?? image
    }

     func applyColorControls(to image: CIImage, config: ColorControlsConfig) -> CIImage {
        guard config.brightness != 0 || config.contrast != 1 || config.saturation != 1 else { return image }
        
        let filter = CIFilter.colorControls()
        filter.inputImage = image
        filter.brightness = Float(config.brightness)
        filter.contrast = Float(config.contrast)
        filter.saturation = Float(config.saturation)
        return filter.outputImage ?? image
    }

     func applyExposure(to image: CIImage, config: ExposureConfig) -> CIImage {
        guard config.ev != 0 else { return image }
        
        let filter = CIFilter.exposureAdjust()
        filter.inputImage = image
        filter.ev = Float(config.ev)
        return filter.outputImage ?? image
    }

     func applyVibrance(to image: CIImage, config: VibranceConfig) -> CIImage {
        guard config.amount != 0 else { return image }
        
        let filter = CIFilter.vibrance()
        filter.inputImage = image
        filter.amount = Float(config.amount)
        return filter.outputImage ?? image
    }

     func applyGamma(to image: CIImage, config: GammaConfig) -> CIImage {
        guard config.power != 1 else { return image }
        
        let filter = CIFilter.gammaAdjust()
        filter.inputImage = image
        filter.power = Float(config.power)
        return filter.outputImage ?? image
    }

     func applyHueAdjust(to image: CIImage, config: HueAdjustConfig) -> CIImage {
        guard config.angle != 0 else { return image }
        
        let filter = CIFilter.hueAdjust()
        filter.inputImage = image
        filter.angle = Float(config.angle)
        return filter.outputImage ?? image
    }

     func applySharpen(to image: CIImage, config: SharpenConfig) -> CIImage {
        guard config.sharpness != 0 else { return image }
        
        let filter = CIFilter.sharpenLuminance()
        filter.inputImage = image
        filter.sharpness = Float(config.sharpness)
        return filter.outputImage ?? image
    }

     func applyVignette(to image: CIImage, config: VignetteConfig) -> CIImage {
        guard config.intensity != 0 else { return image }
        
        let filter = CIFilter.vignette()
        filter.inputImage = image
        filter.intensity = Float(config.intensity)
        filter.radius = Float(config.radius)
        return filter.outputImage ?? image
    }

func applyMaskedVariableBlur(to image: CIImage, config: MaskedVariableBlurConfig) -> CIImage {
        guard config.radius > 0 else { return image }
        
        let filter = CIFilter.maskedVariableBlur()
        filter.inputImage = image
        
        
        let mask = CIFilter.smoothLinearGradient()
        
        
        mask.color0 = CIColor(red: config.color0Alpha, green: config.color0Alpha, blue: config.color0Alpha, alpha: 1)
        mask.color1 = CIColor(red: config.color1Alpha, green: config.color1Alpha, blue: config.color1Alpha, alpha: 1)
        
        
        let imageHeight = image.extent.height
        let imageWidth = image.extent.width
        
        mask.point0 = CGPoint(
            x: config.point0X * imageWidth,
            y: config.point0Y * imageHeight
        )
        mask.point1 = CGPoint(
            x: config.point1X * imageWidth,
            y: config.point1Y * imageHeight
        )
        
        filter.mask = mask.outputImage
        filter.radius = Float(config.radius)
        
        return filter.outputImage ?? image
    }

func applyGradientOverlay(to image: CIImage, config: GradientOverlayConfig) -> CIImage {
        
        
    guard config.color0Alpha > 0 || config.color1Alpha > 0 else { return image }
    
        let gradient = CIFilter.smoothLinearGradient()
        gradient.color0 = CIColor(
            red: config.color0Red,
            green: config.color0Green,
            blue: config.color0Blue,
            alpha: config.color0Alpha
        )
        gradient.color1 = CIColor(
            red: config.color1Red,
            green: config.color1Green,
            blue: config.color1Blue,
            alpha: config.color1Alpha
        )
        
        
        let imageHeight = image.extent.height
        let imageWidth = image.extent.width
        
        gradient.point0 = CGPoint(
            x: config.point0X * imageWidth,
            y: config.point0Y * imageHeight
        )
        gradient.point1 = CGPoint(
            x: config.point1X * imageWidth,
            y: config.point1Y * imageHeight
        )
        
        guard let gradientImage = gradient.outputImage else { return image }
        
        
        let blendFilter: CIFilter
        switch config.blendMode {
        case "multiply":
            blendFilter = CIFilter.multiplyBlendMode()
        case "overlay":
            blendFilter = CIFilter.overlayBlendMode()
        case "softLight":
            blendFilter = CIFilter.softLightBlendMode()
        case "hardLight":
            blendFilter = CIFilter.hardLightBlendMode()
        case "screen":
            blendFilter = CIFilter.screenBlendMode()
        default:
            blendFilter = CIFilter.sourceAtopCompositing()
        }
        
        blendFilter.setValue(image, forKey: kCIInputBackgroundImageKey)
        blendFilter.setValue(gradientImage, forKey: kCIInputImageKey)
        
        return blendFilter.outputImage ?? image
    }
