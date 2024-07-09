document
  .getElementById("videoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const url = document.getElementById("videoURL").value;
    const videoContainer = document.getElementById("videoContainer");

    // Clear previous content
    videoContainer.innerHTML = "";

    // Create and insert the video link
    const link = document.createElement("a");
    link.href = url;
    link.textContent = "Click here to view the TeraBox video";
    link.target = "_blank";

    videoContainer.appendChild(link);
  });
