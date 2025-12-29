import { env } from 'node:process';

// Define the request data structure
interface Capability {
	type: string;
	instance: string;
	value: number;
}

interface Payload {
	sku: string;
	device: string;
	capability: Capability;
}

interface RequestData {
	requestId: string;
	payload: Payload;
}

enum CapabilityType {
	ON_OFF = 'devices.capabilities.on_off',
	RANGE = 'devices.capabilities.range',
}
type OtherHex = `${string}:${string}:${string}:${string}:${string}:${string}`;

type ColonSeparatedHex =
	| `${string}:${string}:${string}:${string}:${string}:${string}:${string}:${string}`
	| OtherHex;

const api_key = env.GOVEE_API_KEY as string;

export { CapabilityType, api_key };
export type { Capability, Payload, RequestData, ColonSeparatedHex };
