// Function to show the download message
function showDownloadMessage() {
    let response = confirm("Do you want to download Bipak Resume?");
    // If the user clicks "Cancel", prevent the download
    if (!response) {
        event.preventDefault(); // Stops the default action (downloading the file)
        alert("Download canceled. Please try again");
    } else {
        alert("Download completed. Bipak will be happy to hear from you.");
    }
/*  if (response) {
    alert("Download completed. Bipak will be happy to hear from you.");
} else {
    alert("Error downloading");
}
*/
   // alert("Download completed");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadBtn").addEventListener("click", showDownloadMessage);
});