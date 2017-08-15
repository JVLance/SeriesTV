-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2017 a las 04:06:09
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `series`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `autor` varchar(60) NOT NULL,
  `director` varchar(60) NOT NULL,
  `anio` date NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`id`, `nombre`, `autor`, `director`, `anio`, `estado`) VALUES
(1, 'Doctor Who cinco', 'BBC', 'Desconocido', '2017-08-09', 1),
(3, 'Saint Seiya', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(4, 'Dioses del Olimpo', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(5, 'Dioses del Olimpo 2', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(6, 'ghfgdhfg', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(7, 'uiyuioui', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(8, 'uiyuioui 2', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1),
(9, 'uiyuioui 3', 'Desconocido', 'Tambien desconocido', '1999-08-09', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
