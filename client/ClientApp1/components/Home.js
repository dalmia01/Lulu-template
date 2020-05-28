import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import design from '../assets/images/icons_design.png';
import application from '../assets/images/icons_mobile.png';
import ecommerce from '../assets/images/icons_shopping.png';
import project_section from '../assets/images/project_section.jpeg';
import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';
import brand4 from '../assets/images/brand4.png';
import brand5 from '../assets/images/brand5.png';
import project1 from '../assets/images/projects1.jpg';
import project2 from '../assets/images/projects2.jpg';
import project3 from '../assets/images/projects3.jpg';
import project4 from '../assets/images/projects4.jpg';
import project5 from '../assets/images/projects5.jpg';
import project6 from '../assets/images/projects6.jpg';
import ironman from '../assets/images/icons_ironman.png';
import clock from '../assets/images/icons_clock.png';
import thumbsup from '../assets/images/icons_thumbsup.png';
import coffee from '../assets/images/icons_coffee.png';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import fb from '../assets/images/icons_fb.png';
import twit from '../assets/images/icons_twitter.png';
import insta from '../assets/images/icons_insta.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: false,
  slidesToScroll: 3
}



const Home = props =>{

  const sliderRefElem = React.useRef(null);

  const prevArrow = () => {
    sliderRefElem.current.slickPrev();
  }

  const nextArrow = () => {
    sliderRefElem.current.slickNext();
  }

  return (
    <section className='home'>
        <div className='side_banner_overlay'></div>
        <div className='right_side_banner_overlay'></div>
        <div className='banner'>
          <div className='banner_content'>
            <div className='banner_big_title'>
              <h2>Digital agency, <br/>creative people</h2>
              <p className='m30'>We create amazing Webflow templates for creative people all around the world</p>
              <a className='showreel m30'>
                <div className='showreel_elements'>
                  <div className='play'><ion-icon name="play"></ion-icon></div>
                  <span className='showreel_content'>
                    <h5 className='showreel_text'>Play Video</h5>
                    <p className='showreel_detail'>10 : 00 MIN</p>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className='vertical_separator'></div>

        <div className='heading_section'>
          <div className='title_text'>
            <h1>We build experience</h1>
          </div>
          <div className='sub_title_text'>
            <h4>A minimalist approach is the only way to design a website</h4>
          </div>
        </div>

        <div className='services_wrapper'>
          <div className='service'>
            <div className='service_icon'>
              <img src={design} />
            </div>
            <div className='service_content'>
              <h4>Design</h4>
              <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
          <div className='service'>
            <div className='service_icon'>
              <img src={application} />
            </div>
            <div className='service_content'>
              <h4>Application</h4>
              <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
          <div className='service'>
            <div className='service_icon'>
              <img src={ecommerce} />
            </div>
            <div className='service_content'>
              <h4>Ecommerce</h4>
              <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>

        <div className='heading_section underlined'>
          <div className='title_text'>
            <h1>Other features</h1>
          </div>
          <div className='sub_title_text'>
            <h4>10 years of experience on creating amazing stuff</h4>
          </div>
        </div>

        <div className='services_wrapper'>
          <div className='service pd0'>
            <div className='service_content'>
              <h4>CMS Content</h4>
              <p>Use the power of Webflow CMS to add new case studies, blog posts, categories and tags. The whole structure is ready.</p>
              <a>Enquire us</a>
            </div>
          </div>
          <div className='service pd0'>
            <div className='service_content'>
              <h4>Responsive Design</h4>
              <p>We've made the template fully responsive, so it looks great on all devices: desktop, tablets and mobile phones.</p>
              <a>Enquire us</a>
            </div>
          </div>
          <div className='service pd0'>
            <div className='service_content'>
              <h4>Premium Support</h4>
              <p>We're always glad to help, so don’t hesitate to contact us if you have any questions or suggestions about Floria template.</p>
              <a>Enquire us</a>
            </div>
          </div>
        </div>

        <div className='skills_wrapper'>
          <div className='skills_content'>

            <h3>Our skills for super projects</h3>
            <h6>Build your amazing website with Lulu</h6>

            <div className='skills_grid'>
              <div className='skill'>
                <div className='skill_text_block sk1'>
                  <div className='skill_text'>Graphic Design</div>
                  <span>80%</span>
                </div>
              </div>
              <div className='skill'>
                <div className='skill_text_block sk2'>
                  <div className='skill_text'>Lead Generation</div>
                  <span>41%</span>
                </div>
              </div>
              <div className='skill'>
                <div className='skill_text_block sk3'>
                  <div className='skill_text'>Photoshop</div>
                  <span>70%</span>
                </div>
              </div>
              <div className='skill'>
                <div className='skill_text_block sk4'>
                  <div className='skill_text'>Illustration</div>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <a>View on Webflow</a>

          </div>
          <div className='skills_imagebox'>
            <div className='skill_image'>
              <img src={project_section} />
              <div className='skill_image_text'>Add a caption text here *</div>
            </div>

          </div>
        </div>

        <div className='heading_section midcontent'>
          <div className='title_text'>
            <h1>Trusted by the world's best brands</h1>
          </div>
        </div>

        <div className='brand_wrapper'>

          <div className='brand_logo'>
            <img src={brand1} />
          </div>

          <div className='brand_logo'>
            <img src={brand2} />
          </div>

          <div className='brand_logo'>
            <img src={brand3} />
          </div>

          <div className='brand_logo'>
            <img src={brand4} />
          </div>

          <div className='brand_logo'>
            <img src={brand5} />
          </div>

        </div>

        <div className='vertical_separator midvertcal'></div>

        <div className='heading_section midcontent text_center'>
          <div className='title_text'>
            <h1>Amazing projects</h1>
            <h6>The best design team in NYC</h6>
          </div>
        </div>

        <div className='project_collections'>
          <Slider {...settings} ref={sliderRefElem}>
            <div className='project_items'>
              <img src={project1} />
              <span className='hover_project_item'>
                  <h5>Branding</h5>
                  <h2>Praesent Porttitor</h2>
              </span>
            </div>
            <div className='project_items'>
              <img src={project2} />
              <span className='hover_project_item'>
                  <h5>Illustration</h5>
                  <h2>Cras Varius</h2>
              </span>
            </div>
            <div className='project_items'>
              <img src={project3} />
              <span className='hover_project_item'>
                  <h5>Application</h5>
                  <h2>Fusce Pharetra</h2>
              </span>
            </div>
            <div className='project_items'>
              <img src={project4} />
              <span className='hover_project_item'>
                  <h5>Illustration</h5>
                  <h2>Donec Posuere</h2>
              </span>
            </div>
            <div className='project_items'>
              <img src={project5} />
              <span className='hover_project_item'>
                  <h5>Branding</h5>
                  <h2>Occaecati Qui</h2>
              </span>
            </div>
            <div className='project_items'>
              <img src={project6} />
              <span className='hover_project_item'>
                  <h5>Website</h5>
                  <h2>Nam Ispum</h2>
              </span>
            </div>
          </Slider>

          <button className='slick_btn slick_left_arrow' onClick={prevArrow}><ion-icon name="play"></ion-icon></button>
          <button className='slick_btn slick_right_arrow' onClick={nextArrow}><ion-icon name="play"></ion-icon></button>

        </div>

        <div className='fun_wrapper'>
          <div className='fun_facts_wrapper'>
          <div className='fun_items'>
            <div className='image_box'>
              <img src={ironman} />
            </div>
            <div className='fun_fact'>
              <h3>4</h3>
              <h4>Hero's Member</h4>
            </div>
          </div>
          <div className='fun_items'>
            <div className='image_box'>
              <img src={clock} />
            </div>
            <div className='fun_fact'>
              <h3>1000</h3>
              <h4>Sleepless Hours</h4>
            </div>
          </div>
          <div className='fun_items'>
            <div className='image_box'>
              <img src={thumbsup} />
            </div>
            <div className='fun_fact'>
              <h3>97%</h3>
              <h4>Positive Feedback</h4>
            </div>
          </div>
          <div className='fun_items'>
            <div className='image_box'>
              <img src={coffee} />
            </div>
            <div className='fun_fact'>
              <h3>100+</h3>
              <h4>Cups of Coffee</h4>
            </div>
          </div>
          </div>
        </div>

        <div className='vertical_separator'></div>

        <div className='heading_section'>
          <div className='title_text'>
            <h1>The team</h1>
          </div>
          <div className='sub_title_text'>
            <a className='sub_btn'>Join Us</a>
          </div>
        </div>

        <div className='services_wrapper team_grid'>
          <div className='service'>
            <div className='image_wrapper'>
              <div className='service_icon'>
                <img src={team1} />
              </div>
              <div className='signature_wrapper'>
                <h1 className='signature'>john</h1>
              </div>
            </div>
            <div className='team_content'>
              <div className='team_title'><h2 className='team_name'>John Doe</h2></div>
              <div className='team_sub_title'><h2 className='team_position'>Graphic Designer</h2></div>
              <div className='social_icons'>
                <Link className='social_icon' to='/'>
                  <img src={fb} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={twit} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={insta} />
                </Link>
              </div>
            </div>
          </div>
          <div className='service'>
            <div className='image_wrapper'>
              <div className='service_icon'>
                <img src={team2} />
              </div>
              <div className='signature_wrapper'>
                <h1 className='signature'>Victoria</h1>
              </div>
            </div>
            <div className='team_content'>
              <div className='team_title'><h2 className='team_name'>Victoria Gomez</h2></div>
              <div className='team_sub_title'><h2 className='team_position'>Animator</h2></div>
              <div className='social_icons'>
                <Link className='social_icon' to='/'>
                  <img src={fb} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={twit} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={insta} />
                </Link>
              </div>
            </div>
          </div>
          <div className='service'>
            <div className='image_wrapper'>
              <div className='service_icon'>
                <img src={team3} />
              </div>
              <div className='signature_wrapper'>
                <h1 className='signature'>Henry</h1>
              </div>
            </div>
            <div className='team_content'>
              <div className='team_title'><h2 className='team_name'>Henry Dege</h2></div>
              <div className='team_sub_title'><h2 className='team_position'>Developer</h2></div>
              <div className='social_icons'>
                <Link className='social_icon' to='/'>
                  <img src={fb} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={twit} />
                </Link>
                <Link className='social_icon' to='/'>
                  <img src={insta} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='vertical_separator midvertcal'></div>

        <div className='heading_section midcontent text_center'>
          <div className='title_text'>
            <h1>Testimonials</h1>
            <h6>Our clients feedback is important for us</h6>
          </div>
        </div>

        <div className='testimonials_wrapper'>
          <div className='testimonials_firstrow_wrapper testimonial_all_wrapper'>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox img1'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox img2'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox img3'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
          </div>
          <div className='testimonials_secondrow_wrapper testimonial_all_wrapper'>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox img4'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox  img5'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
            <div className='testimonial_content_wrapper'>
              <div className='imageBox img6'></div>
              <div className='quote_block'>
                <h3 className='quote'>"Awesome, will buy again from you!"</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='all_blog_wrapper'>
          <div className='vertical_separator all_blog'></div>
          <div className='heading_section'>
            <div className='title_text'>
              <h1>From the blog</h1>
            </div>
            <div className='sub_title_text'>
              <a className='sub_btn'>All Posts</a>
            </div>
          </div>
          <div className='services_wrapper blog_wrapper'>
            <div className='service'>

              <div className='service_content'>
                <a className='btn'>Marketing</a>
                <p>Curating a workplace that inspires all of us</p>
                <a className='readmore_link'>Read more</a>
              </div>
            </div>
            <div className='service'>

              <div className='service_content'>
                <a className='btn'>Design</a>
                <p>Designers who changed the web with Webflow</p>
                <a className='readmore_link'>Read more</a>
              </div>
            </div>
            <div className='service'>

              <div className='service_content'>
                <a className='btn'>Code</a>
                <p> Communication between departments</p>
                <a className='readmore_link'>Read more</a>
              </div>
            </div>
          </div>

          <div className='gallery_wrapper'>
            <div className='imagebox'>
              <div className='instalink'>
                <img src={insta} />
              </div>
            </div>
            <div className='imagebox'>
            <div className='instalink'>
              <img src={insta} />
            </div>
            </div>
            <div className='contentbox'>
              <div><h3>Follow us on Instagram</h3>
              <a>Follow @luluagency</a></div>
            </div>
            <div className='imagebox'>
            <div className='instalink'>
              <img src={insta} />
            </div>
            </div>
            <div className='imagebox'>
            <div className='instalink'>
              <img src={insta} />
            </div>
            </div>
          </div>
        </div>



    </section>
  );
}

export default Home;
