import express, { Express } from 'express';
import mongoose from 'mongoose';
import filmRoutes from './routes/filmRoutes';
import directorRoutes from './routes/directorRoutes';
import seanceRoutes from './routes/seanceRoutes';

const app: Express = express();

const PORT = 3002;


app.use(express.json());

// Routes pour les livres et les auteurs
app.use('/api/films', filmRoutes);
app.use('/api/realisateurs', directorRoutes);
app.use('/api/seances', seanceRoutes);

// URL de connexion à MongoDB
const uri = "mongodb+srv://aboubakar:1234@cluster0.fzi1ml0.mongodb.net/?retryWrites=true&w=majority";

// Connexion à MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });




