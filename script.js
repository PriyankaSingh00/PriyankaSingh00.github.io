// JavaScript for adding a new bucket list item

document.getElementById("bucketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("image-url").value;

    // Create a new bucket list item
    const newBucketItem = document.createElement("div");
    newBucketItem.classList.add("bucket-item");

    // Add image
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;
    newBucketItem.appendChild(img);

    // Add title
    const h2 = document.createElement("h2");
    h2.textContent = title;
    newBucketItem.appendChild(h2);

    // Add description
    const p = document.createElement("p");
    p.textContent = description;
    newBucketItem.appendChild(p);

    // Append new bucket list item to the list
    document.getElementById("bucketList").appendChild(newBucketItem);

    // Clear the form
    document.getElementById("bucketForm").reset();
});
