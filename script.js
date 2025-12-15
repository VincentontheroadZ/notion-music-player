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
			"url": "https://dl-pc-sz-cf.pds.quark.cn/U52nkU6e/7751381921/b136aa886d5e445b836646da0633c645693f6983/693f6983a8fa6183fb9c42ad81587624a0b40f17?Expires=1765785511&OSSAccessKeyId=LTAI5tJJpWQEfrcKHnd1LqsZ&Signature=YTg6FaGhtgwNjf1jVSZVsbXXsf0%3D&x-oss-traffic-limit=503316480&response-content-disposition=attachment%3B%20filename%3DJustin%2520Lo%2520-%2520%25E5%25A5%25BD%25E4%25BA%25BA.mp3%3Bfilename%2A%3Dutf-8%27%27Justin%2520Lo%2520-%2520%25E5%25A5%25BD%25E4%25BA%25BA.mp3&callback-var=eyJ4OmF1IjoiMTc2NTc4NTUxMS04ODcwLTIxNjAwLWE3MjIiLCJ4Om9yayI6IlY3MTE1bWVhMDExOXZ5N2M5MzF1Z0dteFdJeGZBQVNmSmVWdnJVMlV0IiwieDpoc3AiOiJxdWFya19wZXJzb25hbF9zbWFsbF9maWxlX2R0IiwieDp1ZCI6IjE2LTAtMi0wLTItTi00LU4tMS0xNi0wLU4tTi1OLU4iLCJ4OmR0X3NwIjoiMSIsIng6c3AiOiIxMDAiLCJ4OnRva2VuIjoiNC0zN2QyZGI0OGU3ZDJiMWM3Y2MyYmFiNDZlZjg0MzYwMC04LTEtMjA0OC05MTA1NmI5NDVkYTE0MmY3ODIzYWNkZjhjNTdjZWIyZC0yMDQ4LTAtMC0wLTQyYTcxZDg1NjhjOGExM2UyM2MxMjVjMzY5YzNjMzA4IiwieDp0dGwiOiIyMTYwMCJ9&abt=8_0_&dfi=169&callback=eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsImNhbGxiYWNrU3RhZ2UiOiJiZWZvcmUtZXhlY3V0ZSIsImNhbGxiYWNrRmFpbHVyZUFjdGlvbiI6Imlnbm9yZSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9jbG91ZC1hdXRoLmRyaXZlLnF1YXJrLmNuL291dGVyL29zcy9jaGVja3BsYXkiLCJjYWxsYmFja0JvZHkiOiJ7XCJob3N0XCI6JHtodHRwSGVhZGVyLmhvc3R9LFwic2l6ZVwiOiR7c2l6ZX0sXCJyYW5nZVwiOiR7aHR0cEhlYWRlci5yYW5nZX0sXCJyZWZlcmVyXCI6JHtodHRwSGVhZGVyLnJlZmVyZXJ9LFwiY29va2llXCI6JHtodHRwSGVhZGVyLmNvb2tpZX0sXCJtZXRob2RcIjoke2h0dHBIZWFkZXIubWV0aG9kfSxcInVscnBcIjoke2h0dHBIZWFkZXIueC11bHJwfSxcImlwXCI6JHtjbGllbnRJcH0sXCJwb3J0XCI6JHtjbGllbnRQb3J0fSxcIm9ya1wiOiR7eDpvcmt9LFwib2JqZWN0XCI6JHtvYmplY3R9LFwic3BcIjoke3g6c3B9LFwidWRcIjoke3g6dWR9LFwidG9rZW5cIjoke3g6dG9rZW59LFwiYXVcIjoke3g6YXV9LFwidHRsXCI6JHt4OnR0bH0sXCJkdF9zcFwiOiR7eDpkdF9zcH0sXCJoc3BcIjoke3g6aHNwfSxcImNsaWVudF90b2tlblwiOiR7cXVlcnlTdHJpbmcuY2xpZW50X3Rva2VufX0ifQ%3D%3D&ud=16-0-2-0-2-N-4-N-1-16-0-N-N-N-N",
			"cover_art_url": "https://dl-pc-zb.pds.quark.cn/Ly4h4LgU/568691642/6581d917b63c03edf70449bab0d7df06721ac14c/6581d917d8d5f8203fd048ec840250e63810d924?Expires=1765785224&OSSAccessKeyId=LTAI5tJJpWQEfrcKHnd1LqsZ&Signature=d6oknOAnGXDvgfFomruEb3TEsJE%3D&x-oss-traffic-limit=503316480&response-content-disposition=attachment%3B%20filename%3DCover%2520of%2520%25E5%25A5%25BD%25E4%25BA%25BA%2520by%2520Justin%2520Lo.jpg%3Bfilename%2A%3Dutf-8%27%27Cover%2520of%2520%25E5%25A5%25BD%25E4%25BA%25BA%2520by%2520Justin%2520Lo.jpg&callback-var=eyJ4OmF1IjoiMTc2NTc4NTIyNC03NC0yMTYwMC0zZDEwIiwieDpvcmsiOiJWMjI0MFkxZWoxNTJ5OUlkMTUycHk4TmZmekJvWXBJaVpHbENRdGt4eiIsIng6aHNwIjoicXVhcmtfcGVyc29uYWxfc21hbGxfZmlsZV9kdCIsIng6dWQiOiIxNi0wLTMtMC0zLU4tNC1OLTEtMTYtMC1OLU4tTi1OIiwieDpkdF9zcCI6IjEiLCJ4OnNwIjoiMTAwIiwieDp0b2tlbiI6IjQtMzdkMmRiNDhlN2QyYjFjN2NjMmJhYjQ2ZWY4NDM2MDAtOC0xLTIwNDgtZDZjYmU5MDM0N2Q2NDU5M2IxZTQxYTg3MDU2YzcwYjctMjA0OC0wLTAtMC03MTc5ZDQ4NTE5ZTExMmQ3ODFjNWE2NTNjNGQ5MjllZiIsIng6dHRsIjoiMjE2MDAifQ%3D%3D&abt=8_0_&dfi=193&callback=eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsImNhbGxiYWNrU3RhZ2UiOiJiZWZvcmUtZXhlY3V0ZSIsImNhbGxiYWNrRmFpbHVyZUFjdGlvbiI6Imlnbm9yZSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9hdXRoLWNkbi51Yy5jbi9vdXRlci9vc3MvY2hlY2twbGF5IiwiY2FsbGJhY2tCb2R5Ijoie1wiaG9zdFwiOiR7aHR0cEhlYWRlci5ob3N0fSxcInNpemVcIjoke3NpemV9LFwicmFuZ2VcIjoke2h0dHBIZWFkZXIucmFuZ2V9LFwicmVmZXJlclwiOiR7aHR0cEhlYWRlci5yZWZlcmVyfSxcImNvb2tpZVwiOiR7aHR0cEhlYWRlci5jb29raWV9LFwibWV0aG9kXCI6JHtodHRwSGVhZGVyLm1ldGhvZH0sXCJ1bHJwXCI6JHtodHRwSGVhZGVyLngtdWxycH0sXCJpcFwiOiR7Y2xpZW50SXB9LFwicG9ydFwiOiR7Y2xpZW50UG9ydH0sXCJvcmtcIjoke3g6b3JrfSxcIm9iamVjdFwiOiR7b2JqZWN0fSxcInNwXCI6JHt4OnNwfSxcInVkXCI6JHt4OnVkfSxcInRva2VuXCI6JHt4OnRva2VufSxcImF1XCI6JHt4OmF1fSxcInR0bFwiOiR7eDp0dGx9LFwiZHRfc3BcIjoke3g6ZHRfc3B9LFwiaHNwXCI6JHt4OmhzcH0sXCJjbGllbnRfdG9rZW5cIjoke3F1ZXJ5U3RyaW5nLmNsaWVudF90b2tlbn19In0%3D&ud=16-0-3-0-3-N-4-N-1-16-0-N-N-N-N"
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