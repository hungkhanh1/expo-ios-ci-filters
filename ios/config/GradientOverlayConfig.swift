//
//  GradientOverlayConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct GradientOverlayConfig: FilterConfig {
    var point0X: Double = 0
    var point0Y: Double = 0
    var point1X: Double = 0
    var point1Y: Double = 1
    var color0Red: Double = 0
    var color0Green: Double = 0
    var color0Blue: Double = 0
    var color0Alpha: Double = 0.5
    var color1Red: Double = 1
    var color1Green: Double = 1
    var color1Blue: Double = 1
    var color1Alpha: Double = 0.5
    var blendMode: String = "sourceAtop"
    
    init(dict: [String: Double]) {
        self.point0X = dict["point0X"] ?? 0
        self.point0Y = dict["point0Y"] ?? 0
        self.point1X = dict["point1X"] ?? 0
        self.point1Y = dict["point1Y"] ?? 1
        self.color0Red = dict["color0Red"] ?? 0
        self.color0Green = dict["color0Green"] ?? 0
        self.color0Blue = dict["color0Blue"] ?? 0
        self.color0Alpha = dict["color0Alpha"] ?? 0.5
        self.color1Red = dict["color1Red"] ?? 1
        self.color1Green = dict["color1Green"] ?? 1
        self.color1Blue = dict["color1Blue"] ?? 1
        self.color1Alpha = dict["color1Alpha"] ?? 0.5
        
        let blendModeNumber = dict["blendMode"] ?? 0
        switch Int(blendModeNumber) {
        case 1: self.blendMode = "multiply"
        case 2: self.blendMode = "overlay"
        case 3: self.blendMode = "softLight"
        case 4: self.blendMode = "hardLight"
        case 5: self.blendMode = "screen"
        default: self.blendMode = "sourceAtop"
        }
    }
}
