import React from 'react';

const Footer = props =>{
  return (
    <footer className='footer'>
      <div className='footer_grid underlined'>
        <div className='footer_item'>
          <h2>Lulu</h2>
          <p>We're a brand strategy and digital design agency, building brands that matter in culture.</p>
        </div>
        <div className='footer_item'>
          <h4>Address</h4>
          <p>Bouvet Island <br/>Jeanetteside<br />53 Brannon Falls Suite 406</p>
        </div>
        <div className='footer_item'>
          <h4>Work inquiries</h4>
          <p>860-278-8915<br />contact@lulu.com</p>
        </div>
        <div className='footer_item'>
          <h4>Stay in touch</h4>

          <div className='subscribe-form'>
            <input type='text' placeholder='Your email' />
            <span>Subscribe</span>
          </div>

        </div>
      </div>

      <div className='copyright_wrapper'>
        <a>Lulu by Deni Bozo</a>
        <a><span>W</span>Powered by Webflow</a>
        <a>Image Licensing</a>
        <a>Syle Guide</a>
        <a>Changelog</a>
      </div>
    </footer>
  );
}

export default Footer;
