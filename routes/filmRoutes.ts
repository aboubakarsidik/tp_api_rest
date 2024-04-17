import { Router, Request, Response } from 'express';
import FilmModel, { IFilm } from '../models/Film';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const films = await FilmModel.find();
        res.status(200).json(films);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const film = await FilmModel.findById(req.params.id);
        if (!film) return res.status(404).json({ message: 'Film non trouvé' });
        res.status(200).json(film);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const nouveauFilm = new FilmModel(req.body);
        const filmCree = await nouveauFilm.save();
        res.status(201).json(filmCree);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        await FilmModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Film mis à jour' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await FilmModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Film supprimé' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

export default router;
