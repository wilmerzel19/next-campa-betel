
'use client';

import { UserButton } from '@clerk/nextjs';
import { Navbar } from 'flowbite-react';

function Component() {
  return (
    <Navbar fluid rounded  className=' bg-lime-600 text-white'>
      <Navbar.Brand>
        <img src="assets/img/logo.png" alt="logo" className="h-8" />

        <span className="self-center whitespace-nowrap text-xl font-semibol text-white">Campamento Bet-el</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      
            <UserButton afterSignOutUrl="/sign-in" />   
        </div>

      <Navbar.Collapse >
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link >
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );

}

export default Component;
