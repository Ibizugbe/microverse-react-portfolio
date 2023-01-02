import React from 'react';
import './Contact.css';
import contactBg from '../Assets/background-images/contact-form-shapes-mobile.svg';
import contactBgWeb from '../Assets/background-images/contact-form-background-image-web.svg';

function Contact() {
  const css = `@media (max-width: 768px) {
    .background {
        background-image: url(${contactBg})
    }
  }
  @media (min-width: 768px) {
      .background {
          background-image: url(${contactBgWeb});
      }
  }`;

  return (
    <>
      <style scoped>{css}</style>
      <section id="contact-me" className="background">
        <div className="contact-container">
          <h3 className="contact-header">Contact me</h3>
          <p className="contact-paragraph">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it
          </p>
          <form
            action="https://formspree.io/f/xeqnnvdb"
            method="post"
            id="contact-form"
          >
            <ul className="contact-ul">
              <li className="form-list">
                <input
                  type="text"
                  className="input-text"
                  placeholder="John Doe"
                  id="user-name"
                  name="user_name"
                  required
                  maxLength="30"
                />
              </li>
              <li className="form-list">
                <input
                  type="email"
                  className="input-text"
                  id="contact-email"
                  required
                  placeholder="example@gmail.com"
                  name="user_email"
                />
              </li>
              <li className="form-list">
                <textarea
                  className="contact-text-area"
                  id="msg"
                  name="user_message"
                  maxLength="500"
                  required
                  placeholder="Leave a message here"
                />
              </li>
              <li className="contact-button-li">
                <small className="error" />
                <button className="btn contact-button" type="submit">
                  Get in touch
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
