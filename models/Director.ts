import mongoose, { Schema, Document } from 'mongoose';

export interface IDirector extends Document {
    name: string;
    birthDate: Date;
    biography: string;
}

const DirectorSchema: Schema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    biography: { type: String, required: true }
});

const DirectorModel = mongoose.model<IDirector>('Director', DirectorSchema);

export default DirectorModel;
