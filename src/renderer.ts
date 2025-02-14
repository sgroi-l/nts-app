const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement;
const playNTS1 = document.getElementById("playNTS1") as HTMLButtonElement;
const playNTS2 = document.getElementById("playNTS2") as HTMLButtonElement;
const stopButton = document.getElementById("stop") as HTMLButtonElement;

const STREAMS = {
  nts1: "https://stream-relay-geo.ntslive.net/stream",
  nts2: "https://stream-relay-geo.ntslive.net/stream2",
};

playNTS1.addEventListener("click", () => {
  audioPlayer.src = STREAMS.nts1;
  audioPlayer.play();
});

playNTS2.addEventListener("click", () => {
  audioPlayer.src = STREAMS.nts2;
  audioPlayer.play();
});

stopButton.addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.src = "";
});
