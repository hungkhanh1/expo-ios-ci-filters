//
//  ColorControlsConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct ColorControlsConfig: FilterConfig {
    var brightness: Double = 0
    var contrast: Double = 1
    var saturation: Double = 1
    
    init(dict: [String: Double]) {
        self.brightness = dict["brightness"] ?? 0
        self.contrast = dict["contrast"] ?? 1
        self.saturation = dict["saturation"] ?? 1
    }
}
