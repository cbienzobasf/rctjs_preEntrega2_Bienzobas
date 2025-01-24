import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';

const sizes = {
  thumbnail: { width: 400, height: 300 },
  detail: { width: 800, height: 600 }
};

// Asegurarse de que los directorios existan
async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

// Procesar una imagen
async function processImage(imagePath) {
  try {
    const parsedPath = path.parse(imagePath);
    const category = path.dirname(imagePath).split(path.sep).pop();
    
    // Crear directorio de salida
    const outputDir = path.resolve('processed_images', category);
    await ensureDirectoryExists(outputDir);
    
    // Nombre del archivo de salida
    const outputPath = path.join(outputDir, `${parsedPath.name}.webp`);
    
    // Procesar la imagen
    await sharp(imagePath)
      .resize(sizes.thumbnail.width, sizes.thumbnail.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✅ Imagen procesada: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error procesando ${imagePath}:`, error);
  }
}

// Función principal
async function main() {
  try {
    const images = await glob('src/assets/images/**/*.{jpg,jpeg,png,webp}');
    console.log(`🔍 Encontradas ${images.length} imágenes para procesar...`);
    
    for (const image of images) {
      await processImage(image);
    }
    
    console.log('✨ Proceso completado!');
  } catch (error) {
    console.error('❌ Error en el proceso:', error);
  }
}

main(); 