/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.

    extend: {
      colors: {
        primary: "#624E88",
        primary_hover: "#8967B3",
        dark: "#526D82",
        darker: "#27374D",
      },
    },
  },
  darkMode: 'selector',

}

