import * as mongoose from 'mongoose';
import NewSchema from '../models/newsSchema';

export default mongoose.model('news', NewSchema);