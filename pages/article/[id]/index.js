import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const article = ({ article }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<h1> {article.title}</h1>
			<p> {article.body}</p>
			<br />
			<Link href={'/'}>Go Back</Link>
		</>
	);
};

export default article;

export const getStaticProps = async context => {
	const { id } = context.params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const article = await res.json();
	return {
		props: {
			article,
		},
	};
};
export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const articles = await res.json();
	const paths = articles.map(article => ({
		params: { id: article.id.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
};
