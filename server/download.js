import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("dale" + videoId)

  ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})
  .on("info", 
  (info) => {
    const seconds = info.formats[0].approxDurationsMs / 1000
    console.log(seconds)
  })
}