const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 text-white mt-14 md:mt-32 md:text-center flex flex-col md:items-center">
      <div></div>
      <h1 className="uppercase font-bold text-4xl font-anton tracking-wider md:tracking-[.75rem]">
        imagine a place...
      </h1>
      <p className="mt-6 md:mx-auto md:w-8/12">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div className=" flex flex-col md:flex-row md:items-center gap-4 mt-6">
        <a
          href="#"
          className="flex bg-white w-72 text-[#36393f] py-2 items-center justify-center rounded-3xl hover:shadow-btn-shadow hover:text-dis-blue"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor">
              <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
              <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
            </g>
          </svg>
          <span className=" text-xl">Download for your device</span>
        </a>
        <a
          href="#"
          className="flex bg-[#36393f] w-72 text-white  py-2 justify-center rounded-3xl hover:shadow-btn-shadow"
        >
          <span className="text-xl">Open Discord in Browser</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
