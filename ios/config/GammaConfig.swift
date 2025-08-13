//
//  GammaConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct GammaConfig: FilterConfig {
    var power: Double = 1
    
    init(dict: [String: Double]) {
        self.power = dict["power"] ?? 1
    }
}
