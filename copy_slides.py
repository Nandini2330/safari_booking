import os
import shutil

asset_dir = r"c:\Users\sizzlers\Desktop\OM Infotech _ Web Development, Mobile App Development & AI Automation Company_files\safari_booking\public\assets"

shutil.copyfile(os.path.join(asset_dir, "hero_home.jpg"), os.path.join(asset_dir, "hero_slide_1.jpg"))
shutil.copyfile(os.path.join(asset_dir, "safari_hero.jpg"), os.path.join(asset_dir, "hero_slide_2.jpg"))
shutil.copyfile(os.path.join(asset_dir, "gallery_hero.jpg"), os.path.join(asset_dir, "hero_slide_3.jpg"))
shutil.copyfile(os.path.join(asset_dir, "experiences_hero.jpg"), os.path.join(asset_dir, "hero_slide_4.jpg"))

print("Hero slides copied successfully!")
