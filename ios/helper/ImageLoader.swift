//
//  ImageLoader.swift
//  Pods
//
//  Created by rit3zh CX on 8/11/25.
//

import UIKit

class ImageLoader {
    static func loadImage(from url: String, completion: @escaping (UIImage?) -> Void) {
        guard let url = URL(string: url) else {
            completion(nil)
            return
        }
        
        ImagePreloader.shared.preload(url: url) { img in
            DispatchQueue.main.async {
                completion(img)
            }
        }
    }
}



