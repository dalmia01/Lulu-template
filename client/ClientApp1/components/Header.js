import React from 'react';
import {Link} from 'react-router-dom';

const Header = props =>{

  const [headerclasses,setHeaderClass] = React.useState('header');

  const headerActiveClass = () => {
    if(window.scrollY > 30 && window.scrollY <= 100){
      setHeaderClass('header active');
    }else if(window.scrollY > 100){
      setHeaderClass('header moreactive');
    }else if(window.scrollY < 30){
      setHeaderClass('header');
    }
  }

  React.useEffect(()=>{
    window.addEventListener('scroll',headerActiveClass);
  });


  return (
    <header className={headerclasses}>
      <div className='logo'>
        <Link to='/' className='logo_text'>Lulu</Link>
      </div>
      <nav className='navblock'>
          <Link to='/' className='navlink'>Home</Link>
          <Link to='/' className='navlink'>About</Link>
          <Link to='/' className='navlink'>Projects</Link>
          <Link to='/' className='navlink'>Blog</Link>
          <Link to='/' className='navlink'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
