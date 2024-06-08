const readline = require('readline');
const fs = require('fs');
const sharp = require('sharp');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const supportedFormats = ['jpeg', 'png', 'webp', 'tiff']; // List of supported formats

function compressAndConvertImage(imagePath, outputFormat, quality) {
  const actualQuality = Math.min(Math.max(parseInt(quality), 0), 100);
  return sharp(imagePath)
    .toFormat(outputFormat, { quality: actualQuality })
    .toFile(`output/converted_${outputFormat}_${Date.now()}.${outputFormat}`);
}

function convertFolderImages(folderPath, inputFormat, outputFormat) {
  fs.readdirSync(folderPath).forEach(fileName => {
    const filePath = `${folderPath}/${fileName}`;
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      rl.question('Enter desired compression quality (0-100): ', (userQuality) => {
        const actualQuality = Math.min(max(parseInt(userQuality), 0), 100);
        compressAndConvertImage(filePath, outputFormat, actualQuality)
          .then(() => console.log(`Converted image: ${fileName}`))
          .catch(err => console.error(`Error converting ${fileName}:`, err));
      });
    }
  });
  console.log('Folder conversion complete.');
  rl.close();
}

rl.question('Enter path to image or folder (type "folder" for folder conversion): ', (path) => {
  if (path.toLowerCase() === 'folder') {
    rl.question('Enter the folder path containing images: ', (folderPath) => {
      rl.question('Enter the input image format (e.g., jpeg, png): ', (inputFormat) => {
        if (!supportedFormats.includes(inputFormat.toLowerCase())) {
          console.error(`Error: Unsupported input format. Supported formats: ${supportedFormats.join(', ')}`);
          rl.close();
          return; // Exit if format is not supported
        }
        rl.question('Enter the output image format (e.g., jpeg, png): ', (outputFormat) => {
          if (!supportedFormats.includes(outputFormat.toLowerCase())) {
            console.error(`Error: Unsupported output format. Supported formats: ${supportedFormats.join(', ')}`);
            rl.close();
            return; // Exit if format is not supported
          }
          if (fs.existsSync(folderPath)) {
            convertFolderImages(folderPath, inputFormat, outputFormat);
          } else {
            console.error('Folder path not found.');
            rl.close();
          }
        });
      });
    });
  } else {
    rl.question('Enter the output image format (e.g., jpeg, png): ', (outputFormat) => {
      if (!supportedFormats.includes(outputFormat.toLowerCase())) {
        console.error(`Error: Unsupported output format. Supported formats: ${supportedFormats.join(', ')}`);
        rl.close();
        return; // Exit if format is not supported
      }
      if (fs.existsSync(path)) {
        rl.question('Enter desired compression quality (0-100): ', (userQuality) => {
          const actualQuality = Math.min(Math.max(parseInt(userQuality), 0), 100); // Use Math.max
          compressAndConvertImage(path, outputFormat, actualQuality)
            .then(() => console.log('Image conversion complete.'))
            .catch(err => console.error('Error converting image:', err))
            .finally(() => rl.close());
        });
      } else {
        console.error('Image path not found.');
        rl.close();
      }
    });
  }
});


