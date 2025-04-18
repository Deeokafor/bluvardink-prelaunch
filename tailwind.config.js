module.exports = {
  purge: ["index.html"],
  media: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumar: "'Kumar One', cursive",
        KumarOutline: "'Kumar One Outline', cursive",
        dancingScript: "'Dancing Script', cursive",
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}
