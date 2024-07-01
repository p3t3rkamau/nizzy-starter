import { auth } from '@/auth';
import { HeroParallaxDemo } from '@/components/Theme/Parallax';
import { HeroParallax } from '@/components/Theme/Ui/Parallax';
import { Footer } from '@/components/footer';
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
    <><section className='w-full h-screen flex flex-col justify-center items-center'>
      {/* TODO:one wont access gallery if not logged in */}
      {/* create a fuvtion to redired not loged in user to login while accessing page */}

      Go Pro Page
      <Footer />
    </section>
    </>
  );
}

export default ProfilePage;
