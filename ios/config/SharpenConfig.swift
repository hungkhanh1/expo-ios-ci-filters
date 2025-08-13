//
//  SharpenConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//
struct SharpenConfig: FilterConfig {
    var sharpness: Double = 0
    
    init(dict: [String: Double]) {
        self.sharpness = dict["sharpness"] ?? 0
    }
}
