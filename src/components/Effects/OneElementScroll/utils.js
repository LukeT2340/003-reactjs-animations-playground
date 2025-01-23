/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
import "./imagesloaded.pkgd.min.js"

const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    )
  })
}

// Exporting utility functions for use in other modules.
export { preloadImages }
