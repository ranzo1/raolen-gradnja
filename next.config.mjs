import createNextIntlPlugin from "next-intl/plugin";
import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom Next.js configuration here if needed
};

export default withNextIntl(withVideos(nextConfig));
