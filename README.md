# Bloc Jams 

*Bloc Jams is a fully functional music player*

![](https://bloc-global-assets.s3.amazonaws.com/images-frontend/projects/bloc-jams-jquery/bloc-jams-jquery-complete.jpg)

Users can play/pause on the song itself or on the player. Users can also go to the next or previous song. 

| File          | Purpose       | Layer        |
| ------------- | ------------- | ------------ |
| [album-data.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/album-data.js)  | Contains mp3 asset links, album info, and song info                                  | Logic        |
| [album-info.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/album-info.js)  | Takes the album data and renders it to the DOM                                       | Logic        |
| [helper.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/helper.js)          | Updates the total time of the soong when a new song begins                           | Logic        |
| [player-bar.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/player-bar.js)  | Logic for music controls                                                             | Logic        |
| [player.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/player.js)          | Declares an object for playing, pausing, skipping and setting the volume             | Logic        |
| [song-list.js](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/scripts/song-list.js)    | Lists the songs on the album and allows for play/pause on click of the song          | Logic        |
| [Assets](https://github.com/katelynmichalove/bloc-jams-jquery/tree/master/assets)                        | Contains the images and mp3 files                                                    | Visual       |
| [album.css](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/styles/album.css)           | Styling for the album section                                                        | Visual       |
| [player-bar.css](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/styles/player-bar.css) | Styling for the player bar                                                           | Visual       |
| [song-list.css](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/styles/song-list.css)   | Styling for the song list section                                                    | Visual       |
| [index.html](https://github.com/katelynmichalove/bloc-jams-jquery/blob/master/index.html)                | Content, structure and layout for the application, reference to script and css files | Visual       |
