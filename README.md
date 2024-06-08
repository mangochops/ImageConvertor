Image Converter with Compression 

This script allows you to convert images between formats (e.g., JPEG, PNG) and compress them to reduce file size. It provides options for converting single images or entire folders of images.

Requirements:

    Node.js and npm installed on your system.

Installation:

    Clone this repository or download the script files.
    Open a terminal in the script directory.
    Run npm install sharp to install the required sharp library.

Usage:

    Run the script using node image_converter.js (replace image_converter.js with the actual script filename).
    The script will prompt you to enter the path to an image or folder.
        If you enter "folder", it will guide you through folder conversion.
        Otherwise, it will assume you want to convert a single image.
    For folder conversion, provide the folder path containing images.
    Specify the input image format (e.g., jpeg, png).
    Specify the desired output image format (e.g., jpeg, png).
    The script will prompt you to enter the desired compression quality (0-100, lower means smaller size but potentially lower quality).
    The script will process the image(s) and notify you upon completion.

Example (Single Image):

Enter path to image or folder (type "folder" for folder conversion): image.jpg
Enter the input image format (e.g., jpeg, png): jpeg
Enter the output image format (e.g., jpeg, png): png
Enter desired compression quality (0-100): 75
Image conversion complete.

Example (Folder):

Enter path to image or folder (type "folder" for folder conversion): folder
Enter the folder path containing images: /path/to/images
Enter the input image format (e.g., jpeg, png): jpeg
Enter the output image format (e.g., jpeg, png): png
Enter desired compression quality (0-100): 80
Converted image: image1.jpg
Converted image: image2.png
...
Folder conversion complete.

Notes:

    The script creates a new folder named output in the script directory to store the converted images.
    Ensure you have permission to access the specified image or folder path.
    Experiment with different compression quality values to find the best balance between file size and image quality for your needs.

Further Customization:

This script provides a basic foundation for image conversion with compression. You can explore further customization options:

    Modify the script to handle additional image formats supported by Sharp.
    Implement error handling for unsupported input formats or invalid user input.
    Explore Sharp's advanced features for resizing or extracting specific image regions before compression.

For more information on the Sharp library, refer to the official documentation: https://www.npmjs.com/package/sharp.