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
    subtitle: 'Aquí está mi blog personal.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Freddy Figueroa - Senior Software Engineer'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
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
            text: 'Acerca',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Terminos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/freddyorlandofl'
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
                text: 'Ponte en contacto',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
