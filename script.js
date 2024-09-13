document.addEventListener("DOMContentLoaded", function () {
    // Fetch the classes data from classes.json
    fetch('classes.json')
        .then(response => response.json())
        .then(data => {
            const classesContainer = document.getElementById('classes-container');

            data.forEach(classItem => {
                // Create card element for each class
                const classCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="${classItem.ImageUrl}" class="card-img-top" alt="${classItem.Name}">
                            <div class="card-body">
                                <h5 class="card-title">${classItem.Name}</h5>
                                <p class="card-text">${classItem.ShortDesc}</p>
                                <a href="#" class="btn">View</a>
                            </div>
                        </div>
                    </div>
                `;

                // Append the card to the container
                classesContainer.innerHTML += classCard;
            });
        })
        .catch(error => console.error('Error fetching classes:', error));
});
