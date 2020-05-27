import React from 'react';
import { Link } from 'gatsby';

import './post-listing.css';

class PostListing extends React.Component {
	getPostList() {
		const postList = [];
		this.props.postEdges.forEach((postEdge) => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.fields.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead,
			});
		});
		return postList;
	}

	render() {
		const postList = this.getPostList();
		return (
			<div>
				{/* Your post list here. */
				postList.map((post) => (
					<>
						<div className="post-listing">
							<img className="post-img" src={post.cover} alt={post.title} />
							<Link to={post.path} key={post.title}>
								<h1>{post.title}</h1>
							</Link>
						</div>
					</>
				))}
			</div>
		);
	}
}

export default PostListing;
