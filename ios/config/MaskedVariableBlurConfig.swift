//
//  MaskedVariableBlurConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct MaskedVariableBlurConfig: FilterConfig {
    var radius: Double = 25
    var point0X: Double = 0
    var point0Y: Double = 0
    var point1X: Double = 0
    var point1Y: Double = 1
    var color0Alpha: Double = 1
    var color1Alpha: Double = 0
    
    init(dict: [String: Double]) {
        self.radius = dict["radius"] ?? 25
        self.point0X = dict["point0X"] ?? 0
        self.point0Y = dict["point0Y"] ?? 0
        self.point1X = dict["point1X"] ?? 0
        self.point1Y = dict["point1Y"] ?? 1
        self.color0Alpha = dict["color0Alpha"] ?? 1
        self.color1Alpha = dict["color1Alpha"] ?? 0
    }
}
