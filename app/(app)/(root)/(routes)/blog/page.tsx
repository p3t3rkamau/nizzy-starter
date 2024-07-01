import { auth } from '@/auth';
import { BentoGridLayout } from '@/components/BentoGrid';
import { HeroParallaxDemo } from '@/components/Theme/Parallax';
import { HeroParallax } from '@/components/Theme/Ui/Parallax';
import { TracingBeamDemo } from '@/components/TracingBeam';
import { Footer } from '@/components/footer';
import { redirect } from 'next/navigation';
import React from 'react';

const BlogPage = async () => {
 
  return (
    <section className='flex min-vh-100 w-full  items-center justify-center flex-col gap-2'>


      <BentoGridLayout />
      <TracingBeamDemo/>
      <Footer />
    </section>

  );
}

export default BlogPage;
