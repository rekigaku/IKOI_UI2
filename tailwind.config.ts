module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // ここにテーマをカスタマイズする設定を追加できます
    },
  },
  plugins: [
    require('daisyui'),
  ],


daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#D1C1D7",
        "secondary": "#F6CBD1",
        "accent": "#B4E9D6",
        "neutral": "#70ACC7",
        "base-100": "#F9FAFB",
      },
    },
    "light",
    "pastel",
  ],
},
}

