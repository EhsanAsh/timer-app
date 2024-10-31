const durationInput = document.getElementById('duration');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const circle = document.getElementsByTagName('circle')[0];
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			'stroke-dashoffset',
			(perimeter * timeRemaining) / duration - perimeter
		);
	},
	onComplete() {},
});
