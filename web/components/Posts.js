import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import PostCard from './PostCard';

const urlFor = source => imageUrlBuilder(client).image(source);

const Posts = props =>
  Object.entries(props).map(x => {
    if (x[0] === 'url') return;
    const { name, title, slug, authorImage, mainImage, body } = x[1];
    return (
      <PostCard
        name={name}
        title={title}
        slug={slug.current}
        authorImage={urlFor(authorImage)
          .width(50)
          .url()}
        mainImage={urlFor(mainImage)
          .width(150)
          .url()}
        body={body}
        client={client}
        key={title}
      />
    );
  });

export default Posts;
