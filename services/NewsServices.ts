import NewsRepository from '../repository/NewRepository';
import NewRepository from '../repository/NewRepository';

class NewsServices {


    async search(term, page, perPage) {
        let search = await NewRepository.find({'title': new RegExp('.*' + term + '*.', 'i')})
        .skip(page -1 * perPage).limit(2);
        return search;
    }

    async get() {
        // retorna somente dois registros
        // const result = await NewsRepository.find({'active': true}, 'title hat img').limit(2);
        const result = await NewsRepository.find({}).sort({ publishDate: -1});
        return result;
    }

    async getById(_id) {
        const result = await NewsRepository.findById(_id);
        return result;
    }

    async create(news) {
        const result = await NewsRepository.create(news);
        return result;
    }

    async update(_id, news) {
        const result = await NewsRepository.findByIdAndUpdate(_id, news);
        return result;
    }

    async delete(_id) {
        const result = await NewsRepository.findByIdAndRemove(_id);
        return result;
    }
}

export default new NewsServices();