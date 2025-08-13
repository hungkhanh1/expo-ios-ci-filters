//
//  ImageDisplayerHelper.swift
//  Pods
//
//  Created by rit3zh CX on 8/11/25.
//


import UIKit

class ImageDisplayHelper {
    static func getDisplayImage(filteredImage: UIImage?, loadedImage: UIImage?) -> UIImage? {
        if let filtered = filteredImage {
            return filtered
        }
        
        return loadedImage
    }
}
