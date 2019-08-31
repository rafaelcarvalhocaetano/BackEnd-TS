import * as mongoose from 'mongoose';
import NewSchema from '../models/NewsSchema';

export default mongoose.model('news', NewSchema);