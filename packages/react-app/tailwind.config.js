const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["bg-bot1", "bg-bot2", "bg-bot3", "bg-bot4", "bg-bot5", "bg-bot6", "bg-bot7"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bot1: "url('/src/assets/EthbotLearn/bot1.png')",
        bot2: "url('/src/assets/EthbotLearn/bot2.png')",
        bot3: "url('/src/assets/EthbotLearn/bot3.png')",
        bot4: "url('/src/assets/EthbotLearn/bot4.png')",
        bot5: "url('/src/assets/EthbotLearn/bot5.png')",
        bot6: "url('/src/assets/EthbotLearn/bot6.png')",
        bot7: "url('/src/assets/EthbotLearn/bot7.png')",
      },
      colors: {
        orange: {
          "final": "#de8250",
        },
        green: {
          "050": "#6dc5a0",
          "dark-green": "#337062",
          teal: "#2CAE92",
          header: "#6AC59F",
          "light-green": "#E2F3EC",
          imgBg: "#9ED5AA",
        },
        purple: {
          overlay: "#240871",
          imgText: "#8C65F7",
          "final": "#896af9",
        },
        brown: {
          "dark-brown": "#262626",
        },
        gray: {
          "050": "#FFFFFF",
          1000: "#343a39",
        },
        red: {
          bloodred: "#ea1e5047",
          soldout: "#EB1E50",
        },
      },
    },
    fontFamily: {
      spacemono: ["Space Mono"],
      librefranklin: ["Libre Franklin"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      intro: "890px",
      "intro-mobile": "450px",
      ethbotlearn: "1005px",
      "ethbotlearn-mobile": "505px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
