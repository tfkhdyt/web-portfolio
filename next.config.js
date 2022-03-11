/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPWA({
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_FORM_ID: process.env.NEXT_PUBLIC_FORM_ID
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
})
