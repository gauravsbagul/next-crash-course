import { articles } from '../../../data';

export default function handler(req, res) {
	console.log('Log: ~> file: index.js ~> line 4 ~> handler ~> req', req);
	res.status(200).json(articles);
}
