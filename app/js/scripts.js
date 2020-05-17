import Common from "./modules/common";
import About from "./modules/about";
import VideoLazyLoad from "./modules/lazy-load-video";

let lazyLoadVideo = new VideoLazyLoad();

$(document).ready(function () {
  // Behavior Use For All Page
  let common = new Common();

  // Behavior for About Page
  if ($("#hr-about-page").length > 0) {
    let about = new About();
  }
});
