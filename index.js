window.onload = function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const categoryDiv = document.getElementById(item.category.toLowerCase());

                if (categoryDiv) {
                    // Update the category name
                    const categoryName = categoryDiv.querySelector('.icon b');
                    if (categoryName) {
                        categoryName.textContent = item.category;
                    }

                    // Update the image
                    const categoryImage = categoryDiv.querySelector('.icon img');
                    if (categoryImage) {
                        categoryImage.src = item.icon;
                        categoryImage.alt = item.category + " Icon";
                    }

                    // Update the score
                    const scorePara = categoryDiv.querySelector('p');
                    if (scorePara) {
                        scorePara.innerHTML = `<b>${item.score}</b> / 100`;
                    }
                }
            });
        })
        .catch(error => console.error('Error:', error));
};
