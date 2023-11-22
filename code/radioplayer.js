// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const channelsContainer = document.getElementById("channels");

async function fetchData() {
  
  const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
  const data = await response.json();

  channelsContainer.innerHTML = "";
 data.channels.forEach((channel) => {
  const outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "outer-div");

  const channelDiv = document.createElement("div");
  channelDiv.setAttribute("class", "channel");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("class", "radio-img");
  imageElement.src = channel.image;
  channelDiv.appendChild(imageElement);

  outerDiv.appendChild(channelDiv);

  const channelContentDiv = document.createElement("div");
  channelContentDiv.setAttribute("class", "channel-content");
  const nameElement = document.createElement("h1");
  nameElement.setAttribute("class", "h1-text");
  nameElement.textContent = channel.name;
  channelContentDiv.appendChild(nameElement);

  channelContentDiv.style.backgroundColor = `#${channel.color}`;

  const audioPlayerElement = document.createElement("audio");
  audioPlayerElement.controls = true;
  const audioSourceElement = document.createElement("source");
  audioSourceElement.src = channel.liveaudio.url;
  audioSourceElement.type = "audio/mpeg";

  audioPlayerElement.appendChild(audioSourceElement);
  channelContentDiv.appendChild(audioPlayerElement);

  outerDiv.appendChild(channelContentDiv);

  channelsContainer.appendChild(outerDiv); 
});
}

fetchData();


// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.



// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
