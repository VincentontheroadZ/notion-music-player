/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "好人",
			"artist": "Justin Lo",
			"album": "側田",
			"url": "https://drive.google.com/uc?id=1527Cz1YywZUNuDR1-SKbuIq-2fCuMnFN&export=download",
			"cover_art_url": "https://drive.google.com/uc?export=download&id=1_r6r7hd-5GumJ8mFypXyh62Q1rE6yOOf"
		},
		{
			"name": "The Gun",
			"artist": "Lorn",
			"album": "Ask The Dust",
			"url": "https://amplitude-cdn.serversideup.net/songs/08 The Gun.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/ask-the-dust.jpg"
		},
		{
			"name": "Anvil",
			"artist": "Lorn",
			"album": "Anvil",
			"url": "https://amplitude-cdn.serversideup.net/songs/LORN - ANVIL.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/anvil.jpg"
		},
		{
			"name": "I Came Running",
			"artist": "Ancient Astronauts",
			"album": "We Are to Answer",
			"url": "https://amplitude-cdn.serversideup.net/songs/ICameRunning-AncientAstronauts.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/we-are-to-answer.jpg"
		},
		{
			"name": "First Snow",
			"artist": "Emancipator",
			"album": "Soon It Will Be Cold Enough",
			"url": "https://amplitude-cdn.serversideup.net/songs/FirstSnow-Emancipator.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
		},
		{
			"name": "Terrain",
			"artist": "pg.lost",
			"album": "Key",
			"url": "https://amplitude-cdn.serversideup.net/songs/Terrain-pglost.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/key.jpg"
		},
		{
			"name": "Vorel",
			"artist": "Russian Circles",
			"album": "Guidance",
			"url": "https://amplitude-cdn.serversideup.net/songs/Vorel-RussianCircles.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/guidance.jpg"
		},
		{
			"name": "Intro / Sweet Glory",
			"artist": "Jimkata",
			"album": "Die Digital",
			"url": "https://amplitude-cdn.serversideup.net/songs/IntroSweetGlory-Jimkata.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/die-digital.jpg"
		},
		{
			"name": "Offcut #6",
			"artist": "Little People",
			"album": "We Are But Hunks of Wood Remixes",
			"url": "https://amplitude-cdn.serversideup.net/songs/Offcut6-LittlePeople.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/we-are-but-hunks-of-wood.jpg"
		},
		{
			"name": "Dusk To Dawn",
			"artist": "Emancipator",
			"album": "Dusk To Dawn",
			"url": "https://amplitude-cdn.serversideup.net/songs/DuskToDawn-Emancipator.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/from-dusk-to-dawn.jpg"
		},
		{
			"name": "Anthem",
			"artist": "Emancipator",
			"album": "Soon It Will Be Cold Enough",
			"url": "https://amplitude-cdn.serversideup.net/songs/Anthem-Emancipator.mp3",
			"cover_art_url": "https://amplitude-cdn.serversideup.net/img/album-art/soon-it-will-be-cold-enough.jpg"
		}
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 50
  }
});
document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';