//
//  SharedCIContext.swift
//  Pods
//
//  Created by rit3zh CX on 8/10/25.
//

import CoreImage

 struct SharedCIContext {
    static let context: CIContext = {
        if #available(iOS 13.0, *) {
            return CIContext(options: nil)
        } else {
            return CIContext(options: nil)
        }
    }()
}
