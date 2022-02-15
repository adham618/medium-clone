import * as React from 'react';
import { Post } from 'typing';

import { sanityClient } from '@/lib/sanitycms/sanity.server';

import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
interface HomePageProps {
  posts: [Post]
}

export default function HomePage({ posts }: HomePageProps) {
  // eslint-disable-next-line no-console
  console.log(posts)
  return (
    <div className='max-w-7xl mx-auto'>
      <Seo templateTitle='Home' />
      <Seo />
      <section
        className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0"
      >
        <div className="px-10 space-y-5">
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>
              Medium
            </span>{" "}
            is a place to write, read and connect
          </h1>
          <h2>
            It&apos;s easy and free to post your thinking on any topic and connect with milions of readers.
          </h2>
        </div>
        <NextImage layout='intrinsic' className='hidden pr-11 md:inline-flex h-32 lg:h-full' src="/svg/medium-1.svg" width={300} height={400} alt="logo" draggable="false" />
      </section>
      <main>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author=>{
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query)
  if (!posts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { posts }
  }
}