'use client'

import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const NavBar = () => {
  const {status, data: session} = useSession()
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
      <Link href='/' className="mr-5">Next.js</Link>
      <Link href={'/users'} className="mr-5">Users</Link>
      {status === 'authenticated' &&
          <span>
            { session?.user?.name }
              <Link href={'/api/auth/signout'} className="ml-5">Logout</Link>
          </span>
      }
      {status === 'unauthenticated' && <Link href={'/api/auth/signin'} className="mr-5">Login</Link>}

    </div>
  );
};

export default NavBar;