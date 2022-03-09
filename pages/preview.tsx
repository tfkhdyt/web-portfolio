const Preview = () => {
  const mode = {
    dev: 'https://pukultikus.tfkhdyt.my.id/',
    prod: 'https://aljabar-linier-matriks-kelompok-2.vercel.app/',
  }
  return (
    <iframe
      src={mode.dev}
      // src={mode.prod}
      frameBorder='0'
      width='1366'
      height='768'
    ></iframe>
  )
}

export default Preview
