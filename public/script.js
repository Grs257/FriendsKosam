document
  .getElementById("videoForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const url = document.getElementById("videoURL").value.trim();
    const videoContainer = document.getElementById("videoContainer");

    // Clear previous content
    videoContainer.innerHTML = "";

    try {
      const response = await fetch("/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const result = await response.json();

      if (response.ok) {
        const link = document.createElement("a");
        link.href = result.directLink;
        link.textContent = "Click here to view the TeraBox video";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        videoContainer.appendChild(link);
      } else {
        videoContainer.textContent = "Error: " + result.error;
      }
    } catch (error) {
      videoContainer.textContent = "An error occurred: " + error.message;
    }
  });
