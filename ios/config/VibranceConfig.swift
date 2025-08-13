//
//  VibranceConfig.swift
//  Pods
//
//  Created by rit3zh CX on 8/13/25.
//

struct VibranceConfig: FilterConfig {
    var amount: Double = 0
    
    init(dict: [String: Double]) {
        self.amount = dict["amount"] ?? 0
    }
}
