// ============================================================
// COMPRESIÓN DE IMÁGENES (antes de subir a Supabase Storage)
// ============================================================
// Reduce el tamaño de cualquier imagen (JPG, PNG, WEBP) redimensionándola
// y re-comprimiéndola como JPEG de buena calidad. Si el archivo no es
// imagen (ej. PDF) o ya es más chico después de comprimir, se deja igual.
function compressImage(file, maxWidth = 1280, quality = 0.75) {
    return new Promise((resolve) => {
        if (!file || !file.type || !file.type.startsWith('image/') || file.type === 'image/svg+xml') {
            resolve(file);
            return;
        }

        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            img.onload = () => {
                let { width, height } = img;
                if (width > maxWidth) {
                    height = Math.round(height * (maxWidth / width));
                    width = maxWidth;
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (!blob || blob.size >= file.size) {
                        resolve(file); // el original ya era más chico, no forzar
                        return;
                    }
                    const newName = file.name.replace(/\.(png|webp|jpeg)$/i, '.jpg');
                    const compressed = new File([blob], newName.endsWith('.jpg') ? newName : newName + '.jpg', { type: 'image/jpeg' });
                    resolve(compressed);
                }, 'image/jpeg', quality);
            };
            img.onerror = () => resolve(file);
            img.src = e.target.result;
        };
        reader.onerror = () => resolve(file);
        reader.readAsDataURL(file);
    });
}