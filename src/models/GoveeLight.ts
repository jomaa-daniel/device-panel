import axios, { AxiosResponse } from 'axios';
import { randomUUID } from 'crypto';
import { Light, Brightness } from './Light';
import { Logger } from '../Logger';
import { ColonSeparatedHex, Payload, CapabilityType, api_key } from './GoveeInterface';

class GoveeLight extends Light {
	sku: string;
	device: ColonSeparatedHex;
	deviceName: string;

	constructor(sku: string, device: ColonSeparatedHex, deviceName: string) {
		super();
		this.device = device;
		this.sku = sku;
		this.deviceName = deviceName;
	}

	getLogData(): string {
		return JSON.stringify({
			sku: this.sku,
			device: this.device,
			deviceName: this.deviceName,
		});
	}

	async on(): Promise<void> {
		const payload: Payload = {
			sku: this.sku,
			device: this.device,
			capability: {
				type: CapabilityType.ON_OFF,
				instance: 'powerSwitch',
				value: 1,
			},
		};
		const requestId = randomUUID();

		try {
			await axios.post(
				'https://openapi.api.govee.com/router/api/v1/device/control',
				{ requestId, payload },
				{
					headers: {
						'Content-Type': 'application/json',
						'Govee-API-Key': api_key,
					},
				},
			);
			Logger.writeLog(
				{
					event: 'GoveeLight.on',
					message: `turned on light at ${Logger.getCurrentTime()}`,
				},
				this,
			);
		} catch (e) {
			JSON.stringify(e);
		}
	}

	async off(): Promise<void> {
		const payload: Payload = {
			sku: this.sku,
			device: this.device,
			capability: {
				type: CapabilityType.ON_OFF,
				instance: 'powerSwitch',
				value: 0,
			},
		};
		const requestId = randomUUID();
		try {
			await axios.post(
				'https://openapi.api.govee.com/router/api/v1/device/control',

				{ requestId, payload },
				{
					headers: {
						'Content-Type': 'application/json',
						'Govee-API-Key': api_key,
					},
				},
			);
			Logger.writeLog(
				{
					event: 'GoveeLight.off',
					message: `turned off light at ${Logger.getCurrentTime()}`,
				},
				this,
			);
		} catch (e) {
			JSON.stringify(e);
		}
	}
	async setBrightness(brightness: Brightness): Promise<void> {
		const payload: Payload = {
			sku: this.sku,
			device: this.device,
			capability: {
				type: CapabilityType.RANGE,
				instance: 'brightness',
				value: brightness,
			},
		};
		const requestId = randomUUID();

		try {
			await axios.post(
				'https://openapi.api.govee.com/router/api/v1/device/control',
				{ requestId, payload },
				{
					headers: {
						'Content-Type': 'application/json',
						'Govee-API-Key': api_key,
					},
				},
			);
			Logger.writeLog(
				{
					event: 'GoveeLight.setBrightness',
					message: `set brightness to ${brightness} at ${Logger.getCurrentTime()}`,
				},
				this,
			);
		} catch (e) {
			Logger.writeLog(
				{
					event: 'ERROR',
					message: `setBrightness failed ${JSON.stringify(e)}`,
				},
				this,
			);
		}
	}
	setMode(): Promise<void> {
		throw new Error('Method not implemented.');
	}
}

export { GoveeLight };
