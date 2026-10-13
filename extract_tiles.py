import os
from PIL import Image

base_dir = r"C:\Users\sizzlers\.gemini\antigravity-ide\brain\368729dc-8c67-4c20-89e0-406c8a9428f5\.user_uploaded"
f_showcase = os.path.join(base_dir, "media_1791795714551.jpg")
im_showcase = Image.open(f_showcase)
out_dir = r"c:\Users\sizzlers\Desktop\OM Infotech _ Web Development, Mobile App Development & AI Automation Company_files\safari_booking\public\assets"

# Panel 5 is (x: 350 to 675, y: 495 to 645)
# Row 1 of tiles: y: ~500 to ~548
# Tile 1 (lake): x: 358 to 465
# Tile 2 (purple flower): x: 468 to 540
# Tile 3 (bird): x: 543 to 590
# Tile 4 (leopard): x: 593 to 670
tile1_lake = im_showcase.crop((358, 500, 465, 550))
tile1_lake.save(os.path.join(out_dir, "grid_lake.jpg"))

tile2_flower = im_showcase.crop((468, 500, 540, 550))
tile2_flower.save(os.path.join(out_dir, "grid_flower.jpg"))

tile3_bird = im_showcase.crop((543, 500, 590, 550))
tile3_bird.save(os.path.join(out_dir, "grid_bird.jpg"))

tile4_leopard = im_showcase.crop((593, 500, 672, 550))
tile4_leopard.save(os.path.join(out_dir, "grid_leopard.jpg"))

# Row 2 & 3 of tiles:
# Snake: (x: 358 to 440, y: 554 to 600)
tile5_snake = im_showcase.crop((358, 554, 440, 600))
tile5_snake.save(os.path.join(out_dir, "grid_snake.jpg"))

# Jeep: (x: 442 to 540, y: 554 to 615)
tile6_jeep = im_showcase.crop((442, 554, 540, 615))
tile6_jeep.save(os.path.join(out_dir, "grid_jeep.jpg"))

# Waterfall: (x: 543 to 590, y: 554 to 625)
tile7_waterfall = im_showcase.crop((543, 554, 590, 625))
tile7_waterfall.save(os.path.join(out_dir, "grid_waterfall.jpg"))

# Mist: (x: 593 to 672, y: 554 to 625)
tile8_mist = im_showcase.crop((593, 554, 672, 625))
tile8_mist.save(os.path.join(out_dir, "grid_mist.jpg"))

# Flowers meadow: (x: 358 to 440, y: 605 to 645)
tile9_meadow = im_showcase.crop((358, 605, 440, 645))
tile9_meadow.save(os.path.join(out_dir, "grid_meadow.jpg"))

print("Extracted all 9 grid tiles successfully!")
