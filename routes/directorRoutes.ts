import { Router, Request, Response } from 'express';
import DirectorModel, { IDirector } from '../models/Director';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const directors = await DirectorModel.find();
    res.status(200).json(directors);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const director = await DirectorModel.findById(req.params.id);
    if (!director) return res.status(404).send('Directeur non trouvé');
    res.json(director);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const director: IDirector = req.body;
  try {
    const newDirector = new DirectorModel(director);
    await newDirector.save();
    res.status(201).send('Directeur ajouté');
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    await DirectorModel.findByIdAndUpdate(req.params.id, req.body);
    res.send('Directeur mis à jour');
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await DirectorModel.findByIdAndDelete(req.params.id);
    res.send('Directeur supprimé');
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
