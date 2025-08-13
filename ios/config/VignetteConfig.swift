//
//  VignetteConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct VignetteConfig: FilterConfig {
    var intensity: Double = 0
    var radius: Double = 1
    
    init(dict: [String: Double]) {
        self.intensity = dict["intensity"] ?? 0
        self.radius = dict["radius"] ?? 1
    }
}
