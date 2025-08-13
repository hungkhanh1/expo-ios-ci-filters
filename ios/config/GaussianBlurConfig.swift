//
//  GaussianBlurConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct GaussianBlurConfig: FilterConfig {
    var radius: Double = 10
    
    init(dict: [String: Double]) {
        self.radius = dict["radius"] ?? 10
    }
}
