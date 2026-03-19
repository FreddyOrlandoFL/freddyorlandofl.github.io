---
title: 'Powerlifting GORM & Gin API 🏋️‍♂️'
description: 'API de alto rendimiento para la gestión de atletas y analítica de rendimiento en Venezuela, desarrollada con Go.'
publishDate: 'MAR 19 2026'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-3.jpg'
    alt: 'Arquitectura del sistema de gestión de Powerlifting'
---

![Vista previa del proyecto](../../assets/images/project-3.jpg)

**Nota:** Este proyecto documenta el desarrollo de un sistema de gestión deportiva centralizado, optimizado para el procesamiento de datos biométricos y proyecciones de fuerza.

**Resumen del Proyecto:**
Este sistema es una infraestructura backend diseñada para organizar el Powerlifting en Venezuela. La plataforma permite el registro estructurado de atletas por estado y municipio, gestionando sus ciclos de entrenamiento y participaciones en competencias. Utilizando **Go (Golang)**, el motor procesa volúmenes de datos de entrenamiento para generar estimaciones de carga máxima en tiempo real, ofreciendo una herramienta analítica robusta para el levantamiento de potencia.

## Objetivos

1. **Geolocalización Deportiva:** Estructurar el censo nacional de atletas organizados jerárquicamente por su ubicación geográfica.
2. **Cálculo de Proyecciones:** Implementar lógica de backend para estimar el RM (Repetición Máxima) basándose en el historial de entrenamiento.
3. **Gestión de Competencias:** Crear un registro histórico de marcas oficiales que permita evaluar la progresión de los atletas en plataforma.

## Características Principales

1. **Gestión de Atletas por Región:**
- Arquitectura de datos diseñada para mapear estados y municipios de Venezuela.
- Perfiles de atletas vinculados a su historial de marcas, peso corporal y categoría competitiva.

2. **Seguimiento de Entrenamientos:**
- Registro de sesiones detalladas para los tres levantamientos principales (Sentadilla, Banca y Peso Muerto).
- Persistencia de datos de volumen y fatiga para un análisis post-entrenamiento.

3. **Motor de Estimación de RM:**
- Integración de fórmulas matemáticas (como Brzycki o Epley) para calcular proyecciones de fuerza máxima.
- Visualización de la progresión de carga, permitiendo a los atletas ajustar sus bloques de entrenamiento.

4. **Auditoría de Resultados:**
- Módulo para registrar resultados oficiales de competencias, diferenciando entre levantamientos válidos y nulos.
- Generación de rankings locales y nacionales basados en el total acumulado o puntos de coeficiente de fuerza.

## Stack Tecnológico

- **Lenguaje:** [Go (Golang)](https://go.dev/) por su eficiencia y manejo de tipos.
- **Framework Web:** [Gin Gonic](https://gin-gonic.com/) para el manejo de una API RESTful de baja latencia.
- **Persistencia de Datos:** **PostgreSQL** con [GORM](https://gorm.io/) para gestionar relaciones complejas entre atletas, ubicaciones y entrenamientos.
- **Lógica de Dominio:** Implementación de algoritmos de fuerza específicos del Powerlifting integrados en la capa de servicios.

## Resultado

El sistema proporciona una base de datos centralizada y confiable para el deporte. Gracias al uso de Go y GORM, las consultas de progresión histórica se ejecutan de forma instantánea, permitiendo que el registro de una sesión de entrenamiento genere actualizaciones inmediatas en las proyecciones de rendimiento del atleta.