import { Device } from './Device';

enum Brightness {
	B0 = 0,
	B25 = 25,
	B50 = 50,
	B75 = 75,
	B100 = 100,
}

enum Mode {
	ALL_RED = 'all_red',
}

abstract class Light extends Device {
	abstract on(): Promise<void>;
	abstract off(): Promise<void>;
	abstract setBrightness(brightness: Brightness): Promise<void>;
	abstract setMode(): Promise<void>;
}

export { Light, Brightness };
