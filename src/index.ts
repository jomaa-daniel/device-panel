import express, { Request, Response } from 'express';
import { LivingRoom } from './groups/LivingRoom';
import { Brightness } from './models/Light';

const app = express();
const PORT = 80;
const living_room = new LivingRoom();

// Basic route
app.get('/turnOnLivingRoom', async (req: Request, res: Response) => {
    try {
        await living_room.on();
        res.send('Turned Living Room On');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/turnOffLivingRoom', async (req: Request, res: Response) => {
    try {
        await living_room.off();
        res.send('Turned Living Room Off');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/setLivingRoomBrightness25', async (req: Request, res: Response) => {
    try {
        await living_room.setBrightness(Brightness.B25);
        res.send('Set Brightness 25');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/setLivingRoomBrightness50', async (req: Request, res: Response) => {
    try {
        await living_room.setBrightness(Brightness.B50);
        res.send('Set Brightness 50');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/setLivingRoomBrightness75', async (req: Request, res: Response) => {
    try {
        await living_room.setBrightness(Brightness.B75);
        res.send('Set Brightness 75');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/setLivingRoomBrightness100', async (req: Request, res: Response) => {
    try {
        await living_room.setBrightness(Brightness.B100);
        res.send('Set Brightness 100');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

app.get('/', async (req: Request, res: Response) => {
    try {
        res.send('Actions: /turnOnLivingRoom /turnOffLivingRoom /setLivingRoomBrightness25 /setLivingRoomBrightness50 /setLivingRoomBrightness75 /setLivingRoomBrightness100');
    } catch (e) {
        res.status(500).send(JSON.stringify(e));
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});