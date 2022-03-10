/** @type {import('next').NextConfig} */
require('dotenv').config()
module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_FORM_ID: process.env.NEXT_PUBLIC_FORM_ID
  }
}
