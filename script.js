//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const stopAllsounds = () => {
	sounds.forEach(sound =>{
		const audio = document.getElementById(sound);
		audio.pause();
		audio.currentTime = 0;
	});
});

const sounds.forEach(sound =>{
	const audio = document.getElementById('audio');
	audio.src = `sounds/${sound}.mp3`;
	audio.id = sound;
	document.body.appendChild(audio);
});
document.querySelectorAll(`.btn`).forEach(button=>{
	button.addEventListener(`click`,() =>{
		stopAllsounds();
		const sound = button.innerText;
		document.getElementById(sound).play();
	});
});
document.querySelector(`.stop`).addEventListener(`click`, stopAllsounds);

