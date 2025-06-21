const Footer = () => {
  return (
    <footer className="aboslute bottom-0 w-full font-normal bg-black/20 text-white py-8 flex justify-center items-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Anddy Labrut. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
