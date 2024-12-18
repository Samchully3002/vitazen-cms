document.getElementById('thumbnail').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    const imagePreview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Set the image source
            imagePreview.style.display = 'block'; // Show the preview
        };
        reader.readAsDataURL(file); // Read the file as Data URL
    } else {
        imagePreview.style.display = 'none'; // Hide the preview
    }
});

document.getElementById('images').addEventListener('change', function (event) {
    const files = event.target.files; // Get the selected files
    const previewContainer = document.getElementById('imagePreviewContainer');
    previewContainer.innerHTML = ''; // Clear previous previews

    if (files.length > 0) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) { // Only process image files
                const reader = new FileReader();
                reader.onload = function (e) {
                    // Create preview item
                    const previewItem = document.createElement('div');
                    previewItem.className = 'image-preview-item';
                    previewItem.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
                    previewContainer.appendChild(previewItem);
                };
                reader.readAsDataURL(file); // Read the file as Data URL
            }
        });
    }
});