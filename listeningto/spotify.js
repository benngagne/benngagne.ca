// fetch data from api to page
// powered by: bennSpotify
// Copyright 2022 benn

let audio // global audio var
fetch('https://benngagne.ca/bennspotify-api')
.then(response => response.json())
.then(data => {
  // only populate elements if api does not return empty
  if (Object.keys(data).length != 0) {
    // declare elements
    const trackfield = document.getElementById("track")
    const albumfield = document.getElementById("album")
    const artistsfield = document.getElementById("artists")
    const artimage = document.getElementById("art")
    const artlink = document.getElementById("artlink")
    const previewhint = document.getElementById("previewhint")
    const datetime = document.getElementById("datetime")
    
    // show preview song hint
    if (data.preview_url != null) {
      previewhint.style.visibility = 'visible'
    }
    
    // set track and album names
    // make link on track to spotify open url
    trackfield.innerHTML = `track: <a href="${data.spotifyopen_url}" target="_blank">${data.track}</a>`
    albumfield.innerHTML = `album: ${data.album}`
    
    // list artists if more then 1
    if (data.artists.length > 1) {
      let artistsList = ''
      data.artists.forEach((artist, idx) => {
        if (idx+1 < data.artists.length) {
          artistsList += `${artist.name}, `
        } else {
          artistsList += artist.name
        }
      })
      artistsfield.innerHTML = `artists: ${artistsList}`
    } else {
      artistsfield.innerHTML = `artist: ${data.artists[0].name}`
    }
    
    // set album art src
    artimage.src = data.art[0].url
    
    // new audio with preview url for album click
    audio = new Audio(data.preview_url)
  }
});

// play/stop audio when album art is clicked
function playAudio() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
    audio.currentTime = 0
  }
}

// finally, time stamp page load
datetime.innerHTML = `as of: ${new Date().toLocaleString()}`