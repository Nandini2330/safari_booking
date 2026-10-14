import shutil
import os

src_dir = r"C:\Users\sizzlers\.gemini\antigravity-ide\brain\dd8a04be-1936-4f51-bc21-06cb737e1c1d\.user_uploaded"
dest_dir = r"public\assets"

mapping = {
    "media_1791961227890.jpg": "safari_tourists_jeep.jpg",
    "media_1791961227998.jpg": "safari_udagiri_gate.jpg",
    "media_1791961228077.jpg": "birdwing_safari_poster.jpg",
    "media_1791961228183.jpg": "safari_homestay_group.jpg",
    "media_1791961228322.jpg": "safari_field_expedition.jpg",
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} -> {dest_name} ({os.path.getsize(dest_path)} bytes)")
    else:
        print(f"NOT FOUND: {src_path}")
