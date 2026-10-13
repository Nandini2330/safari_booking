import os
from PIL import Image

base_dir = r"C:\Users\sizzlers\.gemini\antigravity-ide\brain\368729dc-8c67-4c20-89e0-406c8a9428f5\.user_uploaded"
f1 = os.path.join(base_dir, "media_1791795714551.jpg") # 6-page showcase: (1024, 682)
f2 = os.path.join(base_dir, "media_1791795714694.jpg") # Homepage lower: (682, 1024)
f3 = os.path.join(base_dir, "media_1791795714817.jpg") # Homepage upper: (682, 1024)

im1 = Image.open(f1)
im2 = Image.open(f2)
im3 = Image.open(f3)

print("Im1 (Showcase 6 pages):", im1.size)
print("Im2 (Home lower):", im2.size)
print("Im3 (Home upper):", im3.size)
