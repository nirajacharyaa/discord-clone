/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dis-blue": "#404eed",
        "dis-green": "#3ba55d",
        "dis-icon-grey": "#36393f",
        "dis-sidebar-grey": "#2f3136",
        "dis-sidebar-text": "#96989d",
      },
      boxShadow: {
        "btn-shadow": "0px 5px 15px 6px rgba(0,0,0,0.2)",
      },
      fontFamily: {
        anton: "Anton",
      },
      backgroundImage: {
        headerbg:
          "url(https://discord.com/assets/c40c84ca18d84633a9d86b4046a91437.svg), url(https://discord.com/assets/8a8375ab7908384e1fd6efe408284203.svg) ",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
