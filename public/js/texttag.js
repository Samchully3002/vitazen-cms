const tagContainer = document.getElementById('tagContainer');
    const input = document.getElementById('tagInput');

    // Function to create a tag element
    function createTag(value) {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `
            ${value}
            <span class="delete-btn">&times;</span>
        `;

        // Add event listener to delete button
        tag.querySelector('.delete-btn').addEventListener('click', () => {
            tagContainer.removeChild(tag);
        });

        tagContainer.insertBefore(tag, input); // Insert tag before input field
    }

    // Listen for input keydown events
    input.addEventListener('keydown', function (event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault(); // Prevent space or enter from typing
            const value = input.value.trim();
            if (value) {
                createTag(value);
                input.value = ''; // Clear input
            }
        }
    });