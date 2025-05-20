async function searchLyrics() {
  const songName = document.getElementById("songInput").value.trim();
  const lyricsBox = document.getElementById("lyricsBox");

  if (!songName) {
    lyricsBox.innerText = "Please enter a song name.";
    return;
  }

  lyricsBox.innerText = "Searching for lyrics...";

  try {
    const response = await fetch(`https://api.lyrics.ovh/v1/${songName}`);
    const data = await response.json();

    if (data.lyrics) {
      lyricsBox.innerText = data.lyrics;
    } else {
      lyricsBox.innerText = "Lyrics not found.";
    }
  } catch (error) {
    lyricsBox.innerText = "Error fetching lyrics.";
    console.error(error);
  }
}
