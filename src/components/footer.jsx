import React from 'react';

function Footer() {
  return (
    <footer className=" bg-blue-950 text-white p-16 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} College Complain Web App</p>
        <p>Indian Institute of Information Technology Una, Saloh, Himachal Pradesh</p>
      </div>
    </footer>
  );
}

export default Footer;
