import os
import shutil

# Paths to the original files and the output directories
input_folder = "./original_assets"  # Folder with the original files
output_folders = {
    "black": "./black_assets",
    "white": "./white_assets",
    "blue": "./blue_assets"
}

# Quantities for each color
quantities = {
    "black": 33,
    "white": 33,
    "blue": 34
}

# Check and create each output folder if not present
for folder in output_folders.values():
    if not os.path.exists(folder):
        os.makedirs(folder)

# Iterate over the quantities and process each color separately
for color, quantity in quantities.items():
    for i in range(quantity):
        # Source paths for the image and metadata files
        image_src = os.path.join(input_folder, f"{color}.png")
        json_src = os.path.join(input_folder, f"{color}.json")

        # Target file paths in the respective color's output folder
        image_dest = os.path.join(output_folders[color], f"{i}.png")
        json_dest = os.path.join(output_folders[color], f"{i}.json")

        # Copy and rename the files to the target directory
        shutil.copyfile(image_src, image_dest)
        shutil.copyfile(json_src, json_dest)

print("Files successfully organized into separate folders with sequential naming!")
