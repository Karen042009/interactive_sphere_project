#!/usr/bin/env python3
"""Download Three.js libraries"""

import urllib.request
import os

output_dir = os.path.join(os.path.dirname(__file__), "static", "js")
os.makedirs(output_dir, exist_ok=True)

urls = {
    "three.min.js": "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
    "OrbitControls.js": "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js",
}

print("Սկսվում է Three.js գրադարանների ներբեռնումը...")
for filename, url in urls.items():
    filepath = os.path.join(output_dir, filename)
    try:
        print(f"Ներբեռնվում է {filename}...")
        urllib.request.urlretrieve(url, filepath)
        print(f"✓ {filename}-ը հաջողությամբ ներբեռնվեց։")
    except Exception as e:
        print(f"✗ Սխալ {filename}-ը ներբեռնելիս։ {e}")

print("\nՆերբեռնումն ավարտված է։")