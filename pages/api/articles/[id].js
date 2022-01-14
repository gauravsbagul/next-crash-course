import { articles } from '../../../data';

export default function handler(req, res) {
	const {
		query: { id },
	} = req;
	const article = articles.find(article => article.id === id);
	if (article) {
		res.status(200).json(article);
	} else {
		res.status(404).json(article);
	}
}
