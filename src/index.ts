import { AutoRouter } from 'itty-router';
import { LivingRoom } from './groups/LivingRoom';
import { Brightness } from './models/Light';

const PORT = 80;
const router = AutoRouter();
const living_room = new LivingRoom();

router.get('/turnOnLivingRoom', async () => {
	try {
		await living_room.on();
		return { status: 200, body: 'Turned Living Room On' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/turnOffLivingRoom', async () => {
	try {
		await living_room.off();
		return { status: 200, body: 'Turned Living Room Off' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/setLivingRoomBrightness25', async () => {
	try {
		await living_room.setBrightness(Brightness.B25);
		return { status: 200, body: 'Set Brightness 25' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/setLivingRoomBrightness50', async () => {
	try {
		await living_room.setBrightness(Brightness.B50);
		return { status: 200, body: 'Set Brightness 50' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/setLivingRoomBrightness75', async () => {
	try {
		await living_room.setBrightness(Brightness.B75);
		return { status: 200, body: 'Set Brightness 75' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/setLivingRoomBrightness100', async () => {
	try {
		await living_room.setBrightness(Brightness.B100);
		return { status: 200, body: 'Set Brightness 100' };
	} catch (e) {
		return { status: 500, body: e };
	}
});

router.get('/', () => ({
	status: 200,
	body: 'Actions: /turnOnLivingRoom /turnOffLivingRoom /setLivingRoomBrightness25 /setLivingRoomBrightness50 /setLivingRoomBrightness75 /setLivingRoomBrightness100',
}));

export default { ...router };
