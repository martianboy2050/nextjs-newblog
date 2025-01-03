import Layout from '../../componets/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    );
  }

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }