import {BsHeartFill} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-36 text-center bg-primary p-2">
      <p className="font-gilroy-medium inline-flex items-center text-white">
                Made with  <BsHeartFill className="mx-2 text-red-500" /> <a className="transition duration-200 border-b border-opacity-50 text-gray-200 border-white hover:text-white hover:border-opacity-100" href="https://github.com/Ti7oyan" target="_blank" rel="noreferrer">Ticiano Morvan</a>
      </p>
    </footer>
  );
};

export default Footer;
