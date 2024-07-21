import React from 'react';

function Footer(props) {
  return (
    <div className="footer-container">
      <footer className="bg-body-tertiary text-center">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'black' }}>
          © 2024 Copyright:
          <a className="text-body" href=""> satyaprakash682002@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
