/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [  {
            protocol: 'https',
            hostname:'**',       }]
    },
    isr:{
        expiration:10
    }
}

export default nextConfig;
