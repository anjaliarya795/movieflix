import Link from 'next/link';
import React from 'react';

const Button = ({Button_text,url}) => {
    return (
        <Link href={url}><button type="" className='text-white bg-black md:bg-transparent rounded-lg sm:hover:bg-black duration-200 border px-8 text-l py-3 hover:text-white cursor-pointer animate-bounce mt-5'>{Button_text}</button></Link>
    );
}

export default Button;
