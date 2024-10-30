class Timer {
	constructor(durationInput, startBtn, pauseBtn) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		this.startBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
	}

	/*
  because we are adding an event listener to the start button to invoke the start method whenever it's been clicked, the value of 'this' will be the button not the new instance of the timer object. Which is not good. to fix this we can use arrow function.
	behind the scenes it will be lifted up to the constructor. so if we apply console.log() above the constructor which is the first valid line, the value of 'this' in the start method and the console.log() above the constructor will be the new instance of the Timer object(since it's been lifted up to the constructor)
	//*** another way is to use 'bind' inside the constructor like this:
	this.startBtn.addEventListener('click', this.start.bind(this)); and then use regular function method. bind will return a new function which will not be executed immediately and force the value of this to be the Time object
  */
	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		console.log('tick');
	};
}

const durationInput = document.getElementById('duration');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');

const timer = new Timer(durationInput, startBtn, pauseBtn);
