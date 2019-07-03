import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';
import Layout from '../components/Layout';

const urlFor = source => imageUrlBuilder(client).image(source);

const styles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    width: '100%',
    position: 'relative'
  },
  hello: {
    display: 'block',
    width: '100%'
  }
}));

const serializers = (classname, defaultAlt) => ({
  types: {
    image: ({ node }) => (
      <figure className={classname}>
        <img src={urlFor(node).url()} alt={defaultAlt} />
      </figure>
    ),
    captionedImage: ({ node }) => (
      <figure className={classname}>
        <img src={urlFor(node).url()} alt={node.alt} />
      </figure>
    )
  }
});

const Post = ({
  title = 'Missing title',
  name = 'Missing name',
  categories,
  authorImage,
  body = []
}) => {
  const classes = styles();

  return (
    <Layout>
      <Paper component="article" classes={{ root: classes.root }} elevation={0}>
        <Typography variant="h1">{title}</Typography>
        <span>By {name}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div>
            <img
              src={urlFor(authorImage)
                .width(50)
                .url()}
            />
          </div>
        )}
        <BlockContent
          blocks={body}
          serializers={serializers(classes.hello, title)}
          imageOptions={{ fit: 'fill' }}
          {...client.config()}
        />
      </Paper>
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async context => {
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
