// 1. The <iframe> (and video player) will replace this <div> tag.
// <div id="player"></div>

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
  // YT.Player('player' id 선택자, {옵션})
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    // videoId: URL id 값만 사용해야 제어 가능 (음소거, 자동재생, ... )
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}
