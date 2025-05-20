async function searchLyrics() {
  const artist = document.getElementById("artistInput").value.trim();
  const song = document.getElementById("songInput").value.trim();
  const lyricsBox = document.getElementById("lyricsBox");

  if (!artist || !song) {
    lyricsBox.innerText = "Please enter both artist and song name.";
    return;
  }

  lyricsBox.innerText = "Searching for lyrics...";

  try {
    const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
    const data = await response.json();

    if (data.lyrics) {
      lyricsBox.innerHTML = data.lyrics.replace(/\n/g, "<br>");
    } else {
      lyricsBox.innerText = "Lyrics not found.";
    }
  } catch (error) {
    lyricsBox.innerText = "Error fetching lyrics.";
    console.error(error);
  }
}
