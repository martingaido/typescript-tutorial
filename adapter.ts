/* TypeScript Design Patterns - Adapter */

interface iPhone {

	useLighting() : any;
}

interface Android {

	useMicroUSB() : any;
}

class iPhone12 implements iPhone {

	useLighting() {
		console.log('Using lighting port...');
	}
}

class GooglePixel implements Android {

	useMicroUSB() {
		console.log('Using micro USB...');
	}
}

class LightningToMicroUSBAdaper implements Android {

	iphoneDevice: iPhone;

	constructor(iphone: iPhone) {
		this.iphoneDevice = iphone;
	}

	public useMicroUSB() {
		console.log('Want to use micro USB, converting to ligthning...');
		this.iphoneDevice.useLighting();
	}
}

let iphone = new iPhone12();
let chargeAdapter = new LightningToMicroUSBAdaper(iphone);
chargeAdapter.useMicroUSB();
