const videos = ['Digital', 'Digits', 'Matrix','Technology','Network'];
const ranVideo = Math.floor(Math.random() * videos.length);
const backgroundVideo = document.createElement('source');
const bg = document.createElement("video");
// const backgroundVideo=`video/${videos[ranVideo]}`;

backgroundVideo.type = "video/mp4";
backgroundVideo.src = `video/${videos[ranVideo]}.mp4`;
// backgroundVideo = `video/${videos[ranVideo]}`;
bg.appendChild(backgroundVideo);
