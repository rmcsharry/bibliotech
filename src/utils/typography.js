import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  // note this is over-riding the fonts set in the import of the custom bootstrap theme in SEO component (Gatsby Helmet)
  // this way you can easily change the font but keep the rest of the Lux theme (from bootswatch.com)
  headerFontFamily: ['Nunito Sans', 'Roboto', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Nunito Sans', 'Roboto', 'Helvetica Neue', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
