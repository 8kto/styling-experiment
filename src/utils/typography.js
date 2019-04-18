import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: "Roboto",
      styles: ["700", "700i"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i&amp;subset=latin-ext"],  // this is a fix to load the latin-ext chars, include in last style of last font.
    },
  ]
})

export const { scale, rhythm, options } = typography
export default typography