//
//  ExposureConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct ExposureConfig: FilterConfig {
    var ev: Double = 0
    
    init(dict: [String: Double]) {
        self.ev = dict["ev"] ?? 0
    }
}
