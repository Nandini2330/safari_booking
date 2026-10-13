import os
from PIL import Image

hp2_path = 'public/home page 2.png'
fw_path = 'public/full website.png'
lower_path = r'C:\Users\sizzlers\.gemini\antigravity-ide\brain\368729dc-8c67-4c20-89e0-406c8a9428f5\media_1791795714694.jpg'
if not os.path.exists(lower_path):
    lower_path = r'C:\Users\sizzlers\.gemini\antigravity-ide\brain\368729dc-8c67-4c20-89e0-406c8a9428f5\.user_uploaded\media_1791795714694.jpg'

im_hp2 = Image.open(hp2_path)
im_fw = Image.open(fw_path)
im_lower = Image.open(lower_path)

print(f"im_hp2 size: {im_hp2.size}")
print(f"im_fw size: {im_fw.size}")
print(f"im_lower size: {im_lower.size}")

out_dir = 'public/assets'
os.makedirs(out_dir, exist_ok=True)

# Also save a copy of im_lower into public/ for safe keeping
im_lower.save('public/home page lower.png', quality=100)

# ==========================================
# 1. CROPS FROM im_hp2 (1024 x 1536)
# ==========================================
# Hero Background (y: ~65 to 550, full width 1024)
hero_home = im_hp2.crop((0, 65, 1024, 550))
hero_home.save(os.path.join(out_dir, "hero_home.jpg"), quality=95)
hero_home.save(os.path.join(out_dir, "hero_slide_1.jpg"), quality=95)

# Discover Chandoli landscape (organic shaped lake on right: y ~ 575 to 885, x ~ 450 to 1024)
discover_landscape = im_hp2.crop((450, 575, 1024, 885))
discover_landscape.save(os.path.join(out_dir, "discover_landscape.jpg"), quality=95)

# Four Nature Cards (y ~ 890 to 1095)
# Card 1: Wildflowers (x ~ 45 to 282)
card_wildflowers = im_hp2.crop((45, 890, 282, 1095))
card_wildflowers.save(os.path.join(out_dir, "card_wildflowers.jpg"), quality=95)

# Card 2: Birdwatching (x ~ 288 to 500)
card_birdwatching = im_hp2.crop((288, 890, 500, 1095))
card_birdwatching.save(os.path.join(out_dir, "card_birdwatching.jpg"), quality=95)

# Card 3: Wildlife (x ~ 508 to 742)
card_wildlife = im_hp2.crop((508, 890, 742, 1095))
card_wildlife.save(os.path.join(out_dir, "card_wildlife.jpg"), quality=95)

# Card 4: Jungle Safari (x ~ 743 to 980)
card_safari = im_hp2.crop((743, 890, 980, 1095))
card_safari.save(os.path.join(out_dir, "card_safari.jpg"), quality=95)

# Nature & History Section (Left mountain landscape: y ~ 1150 to 1536, x ~ 0 to 620)
history_prachitgad = im_hp2.crop((0, 1150, 620, 1536))
history_prachitgad.save(os.path.join(out_dir, "history_prachitgad.jpg"), quality=95)


# ==========================================
# 2. CROPS FROM im_lower (682 x 1024)
# ==========================================
# Section 5: Into the forest jeep (y ~ 0 to 215, x ~ 0 to 365)
forest_jeep = im_lower.crop((0, 0, 365, 215))
forest_jeep.save(os.path.join(out_dir, "forest_jeep.jpg"), quality=95)

# Section 5: Forest road tall (y ~ 12 to 200, x ~ 535 to 682)
forest_road_tall = im_lower.crop((535, 12, 682, 200))
forest_road_tall.save(os.path.join(out_dir, "forest_road_tall.jpg"), quality=95)

# Section 6: Nature in every moment (4 circular thumbnails: y ~ 327 to 404)
circle_wildflowers = im_lower.crop((44, 327, 120, 403))
circle_wildflowers.save(os.path.join(out_dir, "circle_wildflowers.jpg"), quality=95)

circle_bird = im_lower.crop((134, 327, 212, 403))
circle_bird.save(os.path.join(out_dir, "circle_bird.jpg"), quality=95)

circle_wildlife = im_lower.crop((225, 327, 303, 403))
circle_wildlife.save(os.path.join(out_dir, "circle_wildlife.jpg"), quality=95)

circle_landscape = im_lower.crop((315, 327, 393, 403))
circle_landscape.save(os.path.join(out_dir, "circle_landscape.jpg"), quality=95)

# Section 6: Large landscape on right (y ~ 215 to 455, x ~ 410 to 682)
nature_large_landscape = im_lower.crop((410, 215, 682, 455))
nature_large_landscape.save(os.path.join(out_dir, "nature_large_landscape.jpg"), quality=95)

# Section 7: Gallery collage from lower (y: 472 to 652)
gallery_lake = im_lower.crop((278, 474, 492, 563))
gallery_lake.save(os.path.join(out_dir, "gallery_lake.jpg"), quality=95)

gallery_flower = im_lower.crop((496, 474, 574, 563))
gallery_flower.save(os.path.join(out_dir, "gallery_flower.jpg"), quality=95)

gallery_bird = im_lower.crop((578, 474, 656, 563))
gallery_bird.save(os.path.join(out_dir, "gallery_bird.jpg"), quality=95)

gallery_snake = im_lower.crop((278, 564, 410, 650))
gallery_snake.save(os.path.join(out_dir, "gallery_snake.jpg"), quality=95)

gallery_mist = im_lower.crop((412, 564, 656, 650))
gallery_mist.save(os.path.join(out_dir, "gallery_mist.jpg"), quality=95)

# Section 8: Plan your visit gazebo (y ~ 670 to 888, x ~ 474 to 682)
visit_gazebo = im_lower.crop((474, 670, 682, 888))
visit_gazebo.save(os.path.join(out_dir, "visit_gazebo.jpg"), quality=95)

# Footer background silhouette
footer_bg = im_lower.crop((0, 888, 682, 1024))
footer_bg.save(os.path.join(out_dir, "footer_bg.jpg"), quality=95)


# ==========================================
# 3. CROPS FROM im_fw (1536 x 1024)
# ==========================================
# Row 1 Col 2 (History page): x from 512 to 1024, y from 0 to 512
history_hero = im_fw.crop((520, 28, 1020, 195))
history_hero.save(os.path.join(out_dir, "history_hero.jpg"), quality=95)

history_heritage_fort = im_fw.crop((715, 198, 1015, 340))
history_heritage_fort.save(os.path.join(out_dir, "history_heritage_fort.jpg"), quality=95)

history_bottom_banner = im_fw.crop((524, 435, 1020, 512))
history_bottom_banner.save(os.path.join(out_dir, "history_bottom_banner.jpg"), quality=95)

# Row 1 Col 3 (Safari page): x from 1024 to 1536, y from 0 to 512
safari_hero = im_fw.crop((1032, 28, 1530, 210))
safari_hero.save(os.path.join(out_dir, "safari_hero.jpg"), quality=95)
safari_hero.save(os.path.join(out_dir, "hero_slide_2.jpg"), quality=95)

safari_arch = im_fw.crop((1240, 218, 1525, 365))
safari_arch.save(os.path.join(out_dir, "safari_arch.jpg"), quality=95)

safari_bottom_banner = im_fw.crop((1028, 442, 1530, 512))
safari_bottom_banner.save(os.path.join(out_dir, "safari_bottom_banner.jpg"), quality=95)

# Row 2 Col 1 (Experiences page): x from 0 to 512, y from 512 to 1024
experiences_hero = im_fw.crop((6, 570, 508, 730))
experiences_hero.save(os.path.join(out_dir, "experiences_hero.jpg"), quality=95)
experiences_hero.save(os.path.join(out_dir, "hero_slide_4.jpg"), quality=95)

# 6 Experience Cards (y1 ~ 740 to 835, y2 ~ 840 to 935)
exp_card1 = im_fw.crop((18, 740, 172, 835))
exp_card1.save(os.path.join(out_dir, "exp_birdwatching.jpg"), quality=95)

exp_card2 = im_fw.crop((177, 740, 330, 835))
exp_card2.save(os.path.join(out_dir, "exp_wildflowers.jpg"), quality=95)

exp_card3 = im_fw.crop((337, 740, 490, 835))
exp_card3.save(os.path.join(out_dir, "exp_wildlife.jpg"), quality=95)

exp_card4 = im_fw.crop((18, 840, 172, 935))
exp_card4.save(os.path.join(out_dir, "exp_walks.jpg"), quality=95)

exp_card5 = im_fw.crop((177, 840, 330, 935))
exp_card5.save(os.path.join(out_dir, "exp_landscapes.jpg"), quality=95)

exp_card6 = im_fw.crop((337, 840, 490, 935))
exp_card6.save(os.path.join(out_dir, "exp_ecotourism.jpg"), quality=95)

# Row 2 Col 2 (Gallery page): x from 512 to 1024, y from 512 to 1024
gallery_hero = im_fw.crop((522, 570, 1020, 715))
gallery_hero.save(os.path.join(out_dir, "gallery_hero.jpg"), quality=95)
gallery_hero.save(os.path.join(out_dir, "hero_slide_3.jpg"), quality=95)

# Gallery Masonry Grid items:
grid_lake = im_fw.crop((530, 755, 690, 835))
grid_lake.save(os.path.join(out_dir, "grid_lake.jpg"), quality=95)

grid_flower = im_fw.crop((695, 755, 800, 835))
grid_flower.save(os.path.join(out_dir, "grid_flower.jpg"), quality=95)

grid_bird = im_fw.crop((805, 755, 880, 835))
grid_bird.save(os.path.join(out_dir, "grid_bird.jpg"), quality=95)

grid_leopard = im_fw.crop((885, 755, 1005, 835))
grid_leopard.save(os.path.join(out_dir, "grid_leopard.jpg"), quality=95)

grid_snake = im_fw.crop((530, 840, 648, 935))
grid_snake.save(os.path.join(out_dir, "grid_snake.jpg"), quality=95)

grid_jeep = im_fw.crop((653, 840, 797, 935))
grid_jeep.save(os.path.join(out_dir, "grid_jeep.jpg"), quality=95)

grid_waterfall = im_fw.crop((805, 840, 880, 935))
grid_waterfall.save(os.path.join(out_dir, "grid_waterfall.jpg"), quality=95)

grid_mist = im_fw.crop((885, 840, 1005, 935))
grid_mist.save(os.path.join(out_dir, "grid_mist.jpg"), quality=95)

# Row 2 Col 3 (Contact page): x from 1024 to 1536, y from 512 to 1024
contact_hero = im_fw.crop((1035, 570, 1530, 735))
contact_hero.save(os.path.join(out_dir, "contact_hero.jpg"), quality=95)

contact_map_preview = im_fw.crop((1280, 750, 1485, 875))
contact_map_preview.save(os.path.join(out_dir, "contact_map_preview.jpg"), quality=95)

print("All high-resolution assets cropped and saved successfully!")
