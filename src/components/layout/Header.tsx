/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/' passHref>
          <img
            className='cursor-pointer w-32 object-contain'
            src='/svg/medium-logo.svg'
            alt='logo'
            draggable='false'
          />
        </Link>

        <div className='hidden md:inline-flex items-center item space-x-5'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-green-600 rounded-full px-4 py-1 cursor-pointer'>
            Follow
          </h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3 className='cursor-pointer'>Sign In</h3>
        <h3 className='border cursor-pointer hover:bg-green-600  hover:text-white px-4 py-1 rounded-full border-green-600'>
          Get Started
        </h3>
      </div>
    </header>
  );
};
export default Header;
