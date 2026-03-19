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
        title: '¡Hola! ¡Bienvenidos a mi rincón de la web!!',
        text: `¡Hola! Soy **Ingeniero de Software Senior** 💻 con más de 17 años de experiencia, actualmente enfocado en **Golang y Arquitectura de Software**.

Mi enfoque se basa en la intuición técnica, la investigación justa y necesaria, y el uso de una arquitectura limpia como catalizador para productos excepcionales y escalables.

Con un conjunto de herramientas FullStack que incluye **Node, React, Vue y Laravel**, conecto backends de alto rendimiento con experiencias de usuario fluidas. Valoro profundamente el diseño de software de primer nivel, los sistemas distribuidos y los principios del crecimiento impulsado por el producto.

Actualmente estoy ampliando mis conocimientos con **Java/Spring Boot y Python**, y siempre busco colaborar en proyectos desafiantes.

Puedes explorar mis proyectos de programación en [GitHub](https://github.com/freddyorlandofl) o contactarme para hablar de temas profesionales..`,
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
