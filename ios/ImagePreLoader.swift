//
//  ImagePreloader.swift
//  Pods
//
//  Created by rit3zh CX on 8/10/25.
//
import SwiftUI

// MARK: - Image Preloader with Memory + Disk Cache
final class ImagePreloader {
    static let shared = ImagePreloader()
    private let cache = NSCache<NSURL, UIImage>()

    private var diskCacheURL: URL {
        FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("ImagePreloaderCache")
    }

    private init() {
        try? FileManager.default.createDirectory(
            at: diskCacheURL,
            withIntermediateDirectories: true
        )
    }

    func preload(url: URL, completion: @escaping (UIImage?) -> Void) {
        if let cached = cache.object(forKey: url as NSURL) {
            completion(cached)
            return
        }

        let diskPath = diskCacheURL.appendingPathComponent(url.lastPathComponent)
        if let data = try? Data(contentsOf: diskPath),
           let image = UIImage(data: data) {
            cache.setObject(image, forKey: url as NSURL)
            completion(image)
            return
        }

        URLSession.shared.dataTask(with: url) { data, _, _ in
            guard let data = data, let image = UIImage(data: data) else {
                completion(nil)
                return
            }
            self.cache.setObject(image, forKey: url as NSURL)
            try? data.write(to: diskPath)
            DispatchQueue.main.async { completion(image) }
        }.resume()
    }
}
