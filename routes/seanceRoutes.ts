import { Router, Request, Response } from 'express';
import SessionModel, { ISession } from '../models/Seance';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const sessions = await SessionModel.find();
        res.status(200).json(sessions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const session = await SessionModel.findById(req.params.id);
        if (!session) return res.status(404).json({ message: 'Session non trouvée' });
        res.status(200).json(session);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const nouvelleSession = new SessionModel(req.body);
        const sessionCree = await nouvelleSession.save();
        res.status(201).json(sessionCree);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        await SessionModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Session mise à jour' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await SessionModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Session supprimée' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
