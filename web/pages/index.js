import Layout from '../components/Layout';
import groq from 'groq';
import client from '../client';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { DiJavascript, DiReact } from 'react-icons/di';
import Posts from '../components/Posts';
import Head from '../components/Head';

const styles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  }
}));

const Home = ({ ...props }) => {
  const classes = styles();

  return (
    <Layout>
      <Head title="ReactJS and developer tips - StanFaas.com" />
      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <Posts {...props} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About Stan
            </Typography>
            <Typography>
              A <DiJavascript color="#f0db4f" />
              <strong>JavaScript</strong> developer who loves to build things
              with
              <br />
              <DiReact color="#61dbfb" />
              <strong>ReactJS</strong>.
              <br />
              <br />
              This blog is all about teaching you the things that I struggled
              with.
            </Typography>
          </Paper>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Archives
          </Typography>
          <Link display="block" variant="body1" href="#">
            Test link
          </Link>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          <Link display="block" variant="body1" href="#">
            Social test link
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

const query = groq`*[_type == "post"]{
  title,
  _createdAt,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  slug,
  mainImage,
  description,
  body
}`;

Home.getInitialProps = async () => {
  return await client.fetch(query);
};

export default Home;
