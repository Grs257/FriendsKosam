document
  .getElementById("videoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const url = document.getElementById("videoURL").value.trim();
    const videoContainer = document.getElementById("videoContainer");

    // Clear previous content
    videoContainer.innerHTML = "";

    // Validate TeraBox URL
    if (isValidTeraBoxURL(url)) {
      // Create and insert the video link
      const link = document.createElement("a");
      link.href = url;
      link.textContent = "Click here to view the TeraBox video";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      videoContainer.appendChild(link);
    } else {
      videoContainer.textContent = "Please enter a valid TeraBox video URL.";
    }
  });

function isValidTeraBoxURL(url) {
  // Simple regex to check if the URL contains "terabox.com" and has a path
  const teraBoxRegex =
    /https:\/\/(?:1024|www|www\.1024)terabox\.com\/s\/[\w-]+/;
  return teraBoxRegex.test(url);
}
