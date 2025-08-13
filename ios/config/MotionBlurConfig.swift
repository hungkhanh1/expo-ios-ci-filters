//
//  MotionBlurConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//


struct MotionBlurConfig: FilterConfig {
    var radius: Double = 20
    var angle: Double = 0
    
    init(dict: [String: Double]) {
        self.radius = dict["radius"] ?? 20
        self.angle = dict["angle"] ?? 0
    }
}
