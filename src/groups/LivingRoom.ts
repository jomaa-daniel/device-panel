import { GoveeLight } from '../models/GoveeLight';
import { Brightness, Light } from '../models/Light';

// Create the Govee lights
const getGoveeLights = (): Light[] => {
	return [
		new GoveeLight('H607C', '3F:3C:F4:8E:EA:B6:72:0B', 'Floor Lamp 2'),
		new GoveeLight('H607C', '69:BA:C1:EB:AC:2B:02:57', 'right Floor Lamp'),
		new GoveeLight('H6006', 'C9:3B:60:74:F4:D8:18:68', 'Leather shade Bulb 1'),
		new GoveeLight('H6006', 'D7:2F:60:74:F4:DF:49:18', 'Leather lamp bulb 2'),
		new GoveeLight('H61A0', 'F1:B3:60:74:F4:E4:7B:29', 'Kitchen'),
		new GoveeLight('H600B', 'F3:F7:A8:46:74:06:CC:84', 'CredenzaLamp'),
		new GoveeLight('H6006', '4D:9A:60:74:F4:F2:75:DE', 'LivingRoomOrb'),
	];
};

export class LivingRoom extends Light {
	async on(): Promise<void> {
		await Promise.all(this.lights.map(async (light) => await light.on()));
	}
	async off(): Promise<void> {
		await Promise.all(this.lights.map(async (light) => await light.off()));
	}
	async setBrightness(brightness: Brightness): Promise<void> {
		await Promise.all(this.lights.map(async (light) => await light.setBrightness(brightness)));
	}
	async setMode(): Promise<void> {
		throw new Error('Method not implemented.');
	}

	getLogData(): string {
		return JSON.stringify(this.lights.map((light) => light.getLogData()));
	}
	lights: Light[];
	constructor() {
		super();
		this.lights = [...getGoveeLights()];
	}
}
