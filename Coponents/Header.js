// @flow strict

import * as React from 'react';
import Link from 'next/link'


function Header() {
    return (
        <header  >
            <div className='header-right'>
           <Link href='/' ><h2 id='brand-name'>Shedenbright</h2></Link>
            </div>

            <div className='header-left'>
                <nav>
                    <a href='#' className='nav-menu' >About</a>
                    <a href='#' className='nav-menu'>Contact</a>
                </nav>
            </div>
              
            
        </header>
    );
};

export default Header;