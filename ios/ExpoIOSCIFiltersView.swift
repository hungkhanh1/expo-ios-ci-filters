import ExpoModulesCore
import SwiftUI
import CoreImage
import CoreImage.CIFilterBuiltins

struct ExpoCIFilterView: ExpoSwiftUI.View, ExpoSwiftUI.WithHostingView {
    let props: ExpoCIFilterProps
    @State private var loadedImage: UIImage?
    
    private let ciContext = CIContext()

    
    var body: some View {
           Group {
               if let img = loadedImage {
                   if let filtered = applyFilters(to: img) {
                       Image(uiImage: filtered)
                           .resizable()
                           .scaledToFill()
                           .clipped()
                           .cornerRadius(props.borderRadius)
                   } else {
                       Image(uiImage: img)
                           .resizable()
                           .scaledToFill()
                           .clipped()
                           .cornerRadius(props.borderRadius)
                   }
               } else {
                   ProgressView()
                       .progressViewStyle(CircularProgressViewStyle())
                       .scaleEffect(1.2)
                       .onAppear(perform: loadImage)
               }
           }
       }
    
    
    
    private func loadImage() {
        guard let url = URL(string: props.url) else { return }
        ImagePreloader.shared.preload(url: url) { img in
            loadedImage = img
        }
    }
    

    
    func applyFilters(to image: UIImage) -> UIImage? {
           
        guard !props.motionBlur.isEmpty ||
              !props.gaussianBlur.isEmpty ||
              !props.colorControls.isEmpty ||
              !props.exposure.isEmpty ||
              !props.vibrance.isEmpty ||
              !props.gamma.isEmpty ||
              !props.hueAdjust.isEmpty ||
              !props.sharpen.isEmpty ||
              !props.vignette.isEmpty ||
              !props.maskedVariableBlur.isEmpty ||
              !props.gradientOverlay.isEmpty else {
            return nil
        }
           
           guard let ciImage = CIImage(image: image) else { return nil }
           
           
           let originalExtent = ciImage.extent
           var currentImage = ciImage
           
           
           let configs = FilterConfigurations(from: props)

        if !props.motionBlur.isEmpty {
              currentImage = applyMotionBlur(to: currentImage, config: configs.motionBlur)
          }
          if !props.gaussianBlur.isEmpty {
              currentImage = applyGaussianBlur(to: currentImage, config: configs.gaussianBlur)
          }
          if !props.colorControls.isEmpty {
              currentImage = applyColorControls(to: currentImage, config: configs.colorControls)
          }
          if !props.exposure.isEmpty {
              currentImage = applyExposure(to: currentImage, config: configs.exposure)
          }
          if !props.vibrance.isEmpty {
              currentImage = applyVibrance(to: currentImage, config: configs.vibrance)
          }
          if !props.gamma.isEmpty {
              currentImage = applyGamma(to: currentImage, config: configs.gamma)
          }
          if !props.hueAdjust.isEmpty {
              currentImage = applyHueAdjust(to: currentImage, config: configs.hueAdjust)
          }
          if !props.sharpen.isEmpty {
              currentImage = applySharpen(to: currentImage, config: configs.sharpen)
          }
          if !props.vignette.isEmpty {
              currentImage = applyVignette(to: currentImage, config: configs.vignette)
          }
          if !props.maskedVariableBlur.isEmpty {
              currentImage = applyMaskedVariableBlur(to: currentImage, config: configs.maskedVariableBlur)
          }
          if !props.gradientOverlay.isEmpty {
              currentImage = applyGradientOverlay(to: currentImage, config: configs.gradientOverlay)
          }
           
           currentImage = currentImage.cropped(to: originalExtent)

           
           guard let cgImage = SharedCIContext.context.createCGImage(currentImage, from: originalExtent) else {
               return nil
           }

           return UIImage(cgImage: cgImage, scale: image.scale, orientation: image.imageOrientation)
       }
}
