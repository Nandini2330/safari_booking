import os
from PIL import Image

base_dir = r"C:\Users\sizzlers\.gemini\antigravity-ide\brain\368729dc-8c67-4c20-89e0-406c8a9428f5\.user_uploaded"
f_showcase = os.path.join(base_dir, "media_1791795714551.jpg")
f_lower = os.path.join(base_dir, "media_1791795714694.jpg")
f_upper = os.path.join(base_dir, "media_1791795714817.jpg")

im_showcase = Image.open(f_showcase)
im_lower = Image.open(f_lower)
im_upper = Image.open(f_upper)

out_dir = r"c:\Users\sizzlers\Desktop\OM Infotech _ Web Development, Mobile App Development & AI Automation Company_files\safari_booking\public\assets"
os.makedirs(out_dir, exist_ok=True)

# 1. Hero 1 background from upper (682x1024, y: ~40 to 365)
hero_home = im_upper.crop((0, 40, 682, 365))
hero_home.save(os.path.join(out_dir, "hero_home.jpg"), quality=95)

# 2. Discover Chandoli organic image (y: ~385 to 565, x: ~300 to 670)
discover_img = im_upper.crop((305, 385, 670, 565))
discover_img.save(os.path.join(out_dir, "discover_landscape.jpg"), quality=95)

# 3. Four nature cards from upper:
# Card 1: Wildflowers (x: ~30 to 180, y: ~570 to 710)
# Card 2: Birdwatching (x: ~190 to 335, y: ~570 to 710)
# Card 3: Wildlife (x: ~340 to 495, y: ~570 to 710)
# Card 4: Jungle Safari (x: ~500 to 650, y: ~570 to 710)
card_wildflower = im_upper.crop((32, 574, 185, 712))
card_wildflower.save(os.path.join(out_dir, "card_wildflowers.jpg"), quality=95)

card_bird = im_upper.crop((192, 574, 335, 712))
card_bird.save(os.path.join(out_dir, "card_birdwatching.jpg"), quality=95)

card_wildlife = im_upper.crop((339, 574, 497, 712))
card_wildlife.save(os.path.join(out_dir, "card_wildlife.jpg"), quality=95)

card_safari = im_upper.crop((498, 574, 652, 712))
card_safari.save(os.path.join(out_dir, "card_safari.jpg"), quality=95)

# 4. Nature & History section (upper y: ~760 to 1024)
history_left_img = im_upper.crop((0, 765, 410, 1024))
history_left_img.save(os.path.join(out_dir, "history_prachitgad.jpg"), quality=95)

# 5. Into the forest section (lower y: 0 to 215)
forest_jeep = im_lower.crop((0, 0, 360, 215))
forest_jeep.save(os.path.join(out_dir, "forest_jeep.jpg"), quality=95)

forest_road_tall = im_lower.crop((535, 10, 682, 205))
forest_road_tall.save(os.path.join(out_dir, "forest_road_tall.jpg"), quality=95)

# 6. Nature in every moment (lower y: 215 to 455)
# Thumbnails: Wildflowers (x: 45 to 118, y: 326 to 399)
# Bird (x: 135 to 210, y: 326 to 399)
# Wildlife (x: 225 to 300, y: 326 to 399)
# Landscape (x: 315 to 392, y: 326 to 399)
circle_flower = im_lower.crop((44, 327, 119, 402))
circle_flower.save(os.path.join(out_dir, "circle_wildflowers.jpg"), quality=95)

circle_bird = im_lower.crop((134, 327, 212, 402))
circle_bird.save(os.path.join(out_dir, "circle_bird.jpg"), quality=95)

circle_wildlife = im_lower.crop((225, 327, 303, 402))
circle_wildlife.save(os.path.join(out_dir, "circle_wildlife.jpg"), quality=95)

circle_landscape = im_lower.crop((315, 327, 393, 402))
circle_landscape.save(os.path.join(out_dir, "circle_landscape.jpg"), quality=95)

nature_large_landscape = im_lower.crop((410, 215, 682, 455))
nature_large_landscape.save(os.path.join(out_dir, "nature_large_landscape.jpg"), quality=95)

# 7. Gallery collage from lower (y: 470 to 660)
gallery_lake = im_lower.crop((280, 474, 490, 563))
gallery_lake.save(os.path.join(out_dir, "gallery_lake.jpg"), quality=95)

gallery_flower = im_lower.crop((496, 474, 574, 563))
gallery_flower.save(os.path.join(out_dir, "gallery_flower.jpg"), quality=95)

gallery_bird = im_lower.crop((578, 474, 655, 563))
gallery_bird.save(os.path.join(out_dir, "gallery_bird.jpg"), quality=95)

gallery_snake = im_lower.crop((280, 565, 410, 650))
gallery_snake.save(os.path.join(out_dir, "gallery_snake.jpg"), quality=95)

gallery_mist = im_lower.crop((412, 565, 655, 650))
gallery_mist.save(os.path.join(out_dir, "gallery_mist.jpg"), quality=95)

# 8. Plan your visit (lower y: 665 to 885)
visit_gazebo = im_lower.crop((476, 672, 682, 885))
visit_gazebo.save(os.path.join(out_dir, "visit_gazebo.jpg"), quality=95)

# 9. Extract page heroes and specific images from showcase:
# Showcase is (1024, 682).
# Row 1 (y: 0 to 341):
#   Col 1: Home (x: 0 to 341)
#   Col 2: History (x: 341 to 682)
#   Col 3: Safari (x: 682 to 1024)
# Row 2 (y: 341 to 682):
#   Col 1: Experiences (x: 0 to 341)
#   Col 2: Gallery (x: 341 to 682)
#   Col 3: Contact (x: 682 to 1024)

# History Hero & Prachitgad
history_hero = im_showcase.crop((350, 20, 680, 128))
history_hero.save(os.path.join(out_dir, "history_hero.jpg"), quality=95)

history_heritage_fort = im_showcase.crop((475, 130, 675, 225))
history_heritage_fort.save(os.path.join(out_dir, "history_heritage_fort.jpg"), quality=95)

history_bottom_banner = im_showcase.crop((350, 290, 680, 341))
history_bottom_banner.save(os.path.join(out_dir, "history_bottom_banner.jpg"), quality=95)

# Safari Hero & Arch
safari_hero = im_showcase.crop((685, 20, 1020, 140))
safari_hero.save(os.path.join(out_dir, "safari_hero.jpg"), quality=95)

safari_arch = im_showcase.crop((825, 145, 1015, 245))
safari_arch.save(os.path.join(out_dir, "safari_arch.jpg"), quality=95)

safari_bottom_banner = im_showcase.crop((685, 295, 1020, 341))
safari_bottom_banner.save(os.path.join(out_dir, "safari_bottom_banner.jpg"), quality=95)

# Experiences Hero & 6 cards
experiences_hero = im_showcase.crop((5, 380, 340, 485))
experiences_hero.save(os.path.join(out_dir, "experiences_hero.jpg"), quality=95)

exp_card1 = im_showcase.crop((12, 492, 114, 555))
exp_card1.save(os.path.join(out_dir, "exp_birdwatching.jpg"), quality=95)

exp_card2 = im_showcase.crop((118, 492, 220, 555))
exp_card2.save(os.path.join(out_dir, "exp_wildflowers.jpg"), quality=95)

exp_card3 = im_showcase.crop((225, 492, 327, 555))
exp_card3.save(os.path.join(out_dir, "exp_wildlife.jpg"), quality=95)

exp_card4 = im_showcase.crop((12, 560, 114, 625))
exp_card4.save(os.path.join(out_dir, "exp_walks.jpg"), quality=95)

exp_card5 = im_showcase.crop((118, 560, 220, 625))
exp_card5.save(os.path.join(out_dir, "exp_landscapes.jpg"), quality=95)

exp_card6 = im_showcase.crop((225, 560, 327, 625))
exp_card6.save(os.path.join(out_dir, "exp_ecotourism.jpg"), quality=95)

# Gallery Hero
gallery_hero = im_showcase.crop((348, 380, 680, 475))
gallery_hero.save(os.path.join(out_dir, "gallery_hero.jpg"), quality=95)

# Contact Hero & Map
contact_hero = im_showcase.crop((690, 380, 1020, 490))
contact_hero.save(os.path.join(out_dir, "contact_hero.jpg"), quality=95)

contact_map_preview = im_showcase.crop((855, 500, 990, 580))
contact_map_preview.save(os.path.join(out_dir, "contact_map_preview.jpg"), quality=95)

print("All reference assets extracted successfully to", out_dir)
