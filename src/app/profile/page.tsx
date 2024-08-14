'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { CodeSnippet } from '@/components/code-snippet';

const Profile: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (user && !user.email_verified) {
      // Redirect to the email verification page if the user's email is not verified
      router.push('/emailVerify');
    }
  }, [router, user]);

  if (!user) {
    return null;
  }

  // if (!user.email_verified){
  //   // Redirect to the homepage if the user is not authenticated
  //   React.useEffect(() => {
  //     router.push('/emailVerify');
  //   }, [router]);
  //   return null;
  // }

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Profile Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            You can use the <strong>ID Token</strong> to get the profile information of an authenticated user.
          </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            {user.picture && (
              <Image src={user.picture} alt="Profile" className="profile__avatar" width={80} height={80} />
            )}
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <CodeSnippet title="Decoded ID Token" code={JSON.stringify(user, null, 2)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
