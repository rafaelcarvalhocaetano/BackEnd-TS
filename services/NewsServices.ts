import NewsRepository from '../repository/NewRepository';

class NewsServices {

    async get() {
        const result = await NewsRepository.find({});
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