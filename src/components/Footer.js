import React from 'react';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4">
    <p className="text-white">
      Disclaimer: This site is fan made and not affiliated with{' '}
      <a
        href="https://hacktoberfest.digitalocean.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hacktoberfest
      </a>
      .
    </p>
    <div className="p-2 mt-4" id="faqs">
      <a
        rel="noopener noreferrer"
        className="bg-mid-blue hover:bg-light-pink text-white hover:text-white px-2 py-1 pointer no-underline text-sm"
        href="/Faq"
      >
      <i class="fas fa-question"/> FAQs
      </a>
    </div>
  </footer>
);

export default Footer;
