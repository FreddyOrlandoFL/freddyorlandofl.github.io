---
title: 'TAYP: Infraestructura Transaccional de Tiempo Aire'
description: Plataforma de alta disponibilidad desarrollada en Go para el procesamiento masivo de recargas electrónicas y servicios en tiempo real.
publishDate: 'MAR 10 2026'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-2.jpg'
    alt: Arquitectura del sistema TAYP
---

![Vista previa del proyecto](../../assets/images/project-2.jpg)

**Nota:** Este caso de estudio documenta el desarrollo de una infraestructura financiera real diseñada para Celucenter, optimizada para el procesamiento de transacciones de misión crítica.

**Resumen del Proyecto:**
TAYP es una plataforma transaccional de alto nivel diseñada para gestionar redes de distribución de tiempo aire en México. El sistema permite a una estructura jerárquica de vendedores adquirir "Saldo TAYP" y comercializar servicios de todas las operadoras. Reconstruí el núcleo del sistema utilizando **Go (Golang)** para garantizar que la plataforma soporte la alta demanda de transacciones concurrentes sin pérdida de datos ni latencia.

## Objetivos

1. **Escalabilidad Horizontal:** Crear un motor capaz de procesar ráfagas de miles de recargas simultáneas durante picos de demanda.
2. **Integridad Financiera:** Implementar un sistema de monedero virtual con precisión atómica para la gestión de saldos entre distribuidores y puntos de venta.
3. **Resiliencia Técnica:** Asegurar una conectividad ininterrumpida con los diversos Proveedores Autorizados de Certificación (PAC) y operadoras.

## Características Principales

1. **Motor de Concurrencia Avanzada:**
- Implementación de *Goroutines* y *Channels* para manejar peticiones asíncronas, permitiendo que cada recarga se procese de forma independiente y ultra-rápida.
- Optimización de recursos de servidor, logrando un rendimiento superior con un menor consumo de memoria comparado con arquitecturas tradicionales.

2. **Gestión de Red de Distribución:**
- Sistema de jerarquías para administrar múltiples niveles de vendedores, permitiendo la asignación de crédito y el monitoreo de ventas en tiempo real.
- Interfaz optimizada para puntos de venta (PDV) que requiere el mínimo de clics para concretar una transacción.

3. **Arquitectura de Failover Inteligente:**
- Integración con múltiples rutas de conexión para operadoras (Telcel, AT&T, Movistar, etc.).
- Algoritmo de conmutación automática: si un nodo de enlace presenta latencia o errores, el sistema redirige la petición a una ruta alterna de forma invisible para el usuario.

4. **Conciliación y Auditoría:**
- Dashboard administrativo con reportes detallados de movimientos, conciliación bancaria automatizada y protección contra doble gasto de saldo.

## Stack Tecnológico

- **Lenguaje:** [Go (Golang)](https://go.dev/) seleccionado por su manejo nativo de alta concurrencia.
- **Framework Web:** [Gin Gonic](https://gin-gonic.com/) para una capa de API de alto rendimiento.
- **Persistencia de Datos:** **PostgreSQL** con [GORM](https://gorm.io/) para asegurar transacciones ACID y relaciones de datos complejas.
- **Infraestructura:** Despliegue en entornos escalables con monitoreo constante de latencia y salud del sistema.

## Resultado

La arquitectura de TAYP ha demostrado una fiabilidad excepcional del 99.9% en producción. Gracias a la migración a Go, Celucenter logró reducir los tiempos de respuesta de las recargas en más de un 60%, soportando un crecimiento masivo en su red de vendedores sin necesidad de incrementar los costos de infraestructura.

## Testimonio del Cliente

> "La dirección técnica de Freddy transformó nuestra visión en una herramienta de alto impacto. La robustez del sistema TAYP nos ha permitido escalar nuestra red de distribución con la confianza de que cada transacción es segura y veloz."