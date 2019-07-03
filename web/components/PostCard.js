import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import BlockContent from '@sanity/block-content-to-react';

const styles = makeStyles(() => ({
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    backgroundColor: 'white'
  }
}));

const PostCard = ({
  name,
  title,
  slug,
  authorImage,
  mainImage,
  body,
  client
}) => {
  const classes = styles();

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea onClick={() => Router.push(`/${slug}`)}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={authorImage} />
            </Avatar>
          }
          title={title}
          subheader={name}
          titleTypographyProps={{ variant: 'h5' }}
        />
        {mainImage && (
          <CardMedia
            className={classes.media}
            image={mainImage}
            title={title}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
