import rehypeShiki from '@leafac/rehype-shiki';
import type { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import * as shiki from 'shiki';

export const getStaticProps = async () => {
  const mdx = `
  This is MDX
  \`\`\`tsx
  <div style={{ backgroundColor: 'pink', width: 10, height: 10 }} />
  \`\`\`
  `;
  const source = await serialize(mdx, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeShiki,
          { highlighter: await shiki.getHighlighter({ theme: 'nord' }) },
        ],
      ],
    },
  })

  return {
    props: {
      source,
    },
  };
};

const PagePage = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MDXRemote {...source} />
  );
};

export default PagePage;
