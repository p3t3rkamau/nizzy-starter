import { auth } from '@/auth';
import { HeroParallaxDemo } from '@/components/Theme/Parallax';
import { HeroParallax } from '@/components/Theme/Ui/Parallax';
import { StickyScrollReveal } from '@/components/Theme/sticky-scroll-reveal';
import { Footer } from '@/components/footer';
import { ParallaxScrollGallery } from '@/components/galleryParrallaxScroll';
import { TabsDemo } from '@/components/tabs';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {
  // {
  //   const role = await auth();

  //   if (role?.user.role === 'USER' || !role) {
  //       return redirect('/login')
  //   }
  // }
  return (
    <>
    <section className='flex min-vh-100 w-full  items-center justify-center flex-col gap-2 '>
      {/* TODO:one wont access profile if not logged in */}
      {/* create a fuvtion to redired not loged in user to login while accessing page */}
      <HeroParallaxDemo />
      <ParallaxScrollGallery />
      <StickyScrollReveal/>
      <TabsDemo/>
      <Footer />
    </section>
    
    </>
  );
}

export default ProfilePage;
