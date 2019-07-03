import Head from '../components/head';
import Layout from '../components/layout';

const Blog = () => {
  return (
    <>
      <Head title="Blog items - StanFaas.com" />
      <Layout>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          {posts}
        </Grid>
      </Layout>
    </>
  );
};

export default Blog;
