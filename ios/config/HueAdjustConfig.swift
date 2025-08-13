//
//  HueAdjustConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct HueAdjustConfig: FilterConfig {
    var angle: Double = 0
    
    init(dict: [String: Double]) {
        self.angle = dict["angle"] ?? 0
    }
}
