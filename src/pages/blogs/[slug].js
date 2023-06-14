import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogDetail from '../../components/blogs/blog-detail';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getBlogCategories } from '../../lib/blog-categories';
import { getBlogTags } from '../../lib/blog-tags';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function BlogDetailPage({
    blog,
    richTexts,
    blogsSidebar,
    categories,
    tags,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{blog.title} - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Our Blog"
                title={blog?.title}
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <BlogDetail
                blog={blog}
                richTexts={richTexts}
                blogsSidebar={blogsSidebar}
                categories={categories}
                tags={tags}
            />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const blog = getItemData(slug, 'blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const richTexts = getAllItems('rich-text');
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blog,
            blogsSidebar,
            richTexts,
            categories,
            tags,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const blogFilenames = getItemsFiles('blogs');

    const slugs = blogFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

BlogDetailPage.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetailPage;
