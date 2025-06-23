const Background = () => {
  return (
    <div
      className="
        fixed inset-0 -z-50
        bg-[url('/background.jpg')]
        dark:bg-[url('/background-dark.jpg')]
        bg-center bg-cover bg-no-repeat
      "
    />
  );
};

export default Background;
