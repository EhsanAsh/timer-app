class Timer {
	constructor(durationInput, startBtn, pauseBtn, callbacks) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

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
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		this.tick();
		this.interval = setInterval(this.tick, 50);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05; // this.setter = this.getter - 0.05 to be set with 50
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
