import mongoose, { Schema, Document, Types } from 'mongoose';
import { IFilm } from './Film';

export interface ISession extends Document {
    film: Types.ObjectId;
    date: Date;
    time: string;
    availableSeats: number;
}

// Définir le schéma de la session
const SessionSchema: Schema = new Schema({
    film: { type: Schema.Types.ObjectId, ref: 'Film', required: true }, // Référence au film
    date: { type: Date, required: true },
    time: { type: String, required: true },
    availableSeats: { type: Number, required: true }
});

// Créer le modèle de session
const SessionModel = mongoose.model<ISession>('Session', SessionSchema);

export default SessionModel;
