/* TypeScript Design Patterns - Facade */

class BluerayPlayer {

	on() {
		console.log('Blueray player turning on...');
	}

	turnOff() {
		console.log('Blueray turning off...');
	}

	play() {
		console.log('Playing blueray disc...');
	}
}

class Amplifier {

	on() {
		console.log('Amp is turning on...');
	}

	turnOff() {
		console.log('Amplifier turning off...');
	}

	setSource(source: string) {
		console.log('Setting source to ' + source);
	}

	setVolume(volumeLevel: number) {
		console.log('Setting volume to ' + volumeLevel);
	}
}

class Lights {

	dim() {
		console.log('Lights are dimming...');
	}
}

class TV {

	turnOn() {
		console.log('TV turning on...');
	}

	turnOff() {
		console.log('TV turning off...');
	}
}

class PopcornMaker {

	turnOn() {
		console.log('Popcorn maker turning on...');
	}

	turnOff() {
		console.log('Popcorn maker turning off...');
	}

	pop() {
		console.log('Poppin corn!');
	}
}

class HomeTheaterFacade {

	private blueray!: BluerayPlayer;
	private amp!: Amplifier;
	private lights!: Lights;
	private tv!: TV;
	private popcornMaker!: PopcornMaker;

	constructor(amp: Amplifier, blueray: BluerayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
		this.amp = amp;
		this.blueray = blueray;
		this.lights = lights;
		this.tv = tv;
		this.popcornMaker = popcornMaker;
	}

	public watchMovies() {

		/* Turn On PopCorn Maker */
		this.popcornMaker.turnOn();
		this.popcornMaker.pop();

		/* Dim Lights */
		this.lights.dim();

		/* Turn On TV */
		this.tv.turnOn();

		/* Turn On Amplifier */
		this.amp.on();
		this.amp.setSource('blueray');
		this.amp.setVolume(11);

		/* Turn On BlueRay */
		this.blueray.on();
		this.blueray.play();
	}

	public endMovie() {

		/* Turn Off all Devices */
		this.popcornMaker.turnOff();
		this.amp.turnOff();
		this.tv.turnOff();
		this.blueray.turnOff();
	}
}

let blueray = new BluerayPlayer;
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp, blueray, lights, tv, popcornMaker);
hometheater.watchMovies();
