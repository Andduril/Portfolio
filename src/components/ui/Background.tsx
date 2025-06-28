const Background = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#070216] to-[#072f49] -z-10">
      <div className="absolute inset-0 bg-[url(/batthern.png)] bg-repeat opacity-15" />
      <div className="absolute inset-0 bg-[url(/grain.png)] opacity-5 mix-blend-overlay pointer-events-none backdrop-blur-[0.5px]" />
    </div>
  );
};
export default Background;
