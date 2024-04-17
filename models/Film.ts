import mongoose, { Document, Schema, Types } from 'mongoose';


export interface IFilm extends Document {
    title: string;
    releaseYear: number;
    genre: string;
    directors: Types.ObjectId[];
}

const FilmSchema: Schema = new Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
    directors: [{ type: Schema.Types.ObjectId, ref: 'Director', required: true }]
});

const FilmModel = mongoose.model<IFilm>('Film', FilmSchema);

export default FilmModel;
