import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import React, { useState, useEffect } from 'react';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://y0rshb3.com/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.params) {
          const message = responseData.message
          responseData.message = responseData.params.map(param => {
            return `${param}`
          }).join(', ')
          responseData.message = `${message}: ${responseData.message}`
        } 
        throw new Error(`${responseData.message}`);
      }

      setSuccess(responseData.message);

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: '',
      });

    } catch (error) {
      setError(error.message);
      console.error(error);
    }

    // clear error after 5 seconds
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 5000);
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit} className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input value={formData.nombre} onChange={handleChange} type="text" id="name" name="name" placeholder="Your Name" required/>
              </div>
              <div className="st-form-field">
                <input value={formData.email} onChange={handleChange} type="text" id="email" name="email" placeholder="Your Email" required/>
              </div>
              <div className="st-form-field">
                <input value={formData.subject} onChange={handleChange} type="text" id="subject" name="subject" placeholder="Your Subject" required/>
              </div>
              <div className="st-form-field">
                <textarea value={formData.message} onChange={handleChange} cols="30" rows="10" id="message" name="message" placeholder="Your Message" required></textarea>
              </div>
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Send Message</button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">jebp91@hotmail.com</Link>
                  <Link to="#">info@y0rshb3.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+57 302 754 2031</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
