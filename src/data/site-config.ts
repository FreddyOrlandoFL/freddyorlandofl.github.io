import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://freddyorlandofl.github.io',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Freddy Figueroa',
    subtitle: 'Here it is my personal Blog',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/freddyorlandofl'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/freddyorlandofl'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: `Hi there! I'm a **Senior Software Engineer** 💻 with over 17 years of experience, currently focused on **Golang & Software Architecture**. 

My approach involves embracing technical intuition, conducting just enough research, and leveraging clean architecture as a catalyst for exceptional, scalable products. 

With a FullStack toolkit that includes **Node, React, Vue, and Laravel**, I bridge the gap between high-performance backends and seamless user experiences. I have a profound appreciation for top-notch software design, distributed systems, and the principles of product-led growth.

Currently expanding my toolkit with **Java/Spring Boot and Python**, I’m always looking to collaborate on challenging projects. 

Feel free to explore my coding endeavors on [GitHub](https://github.com/freddyorlandofl) or connect with me to talk shop.`,
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
