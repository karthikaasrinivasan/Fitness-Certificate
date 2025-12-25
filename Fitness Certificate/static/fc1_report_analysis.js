document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");

    // Function to show overlay content
    function showOverlay(contentId) {
        var overlayContent = document.getElementById(contentId);
        if (overlayContent) {
            overlay.style.display = "block";
            overlayContent.style.display = "block";
        } else {
            console.error("Overlay content with ID '" + contentId + "' not found.");
        }
    }

    // Function to hide all overlay content
    function hideAllOverlayContent() {
        var overlayContents = document.querySelectorAll(".overlay-content");
        overlayContents.forEach(function(content) {
            content.style.display = "none";
        });
        overlay.style.display = "none";
    }

    // Add click event listener to each overlay trigger
    var triggers = document.querySelectorAll(".overlay-trigger");
    triggers.forEach(function(trigger) {
        trigger.addEventListener("click", function() {
            hideAllOverlayContent();
            var contentId = trigger.dataset.content;
            showOverlay(contentId);
        });
    });

    // Add click event listener to overlay to close it
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            hideAllOverlayContent();
        }
    });
});
