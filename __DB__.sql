-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Računalo: localhost
-- Vrijeme generiranja: Lip 06, 2019 u 07:28 PM
-- Verzija poslužitelja: 5.1.41
-- PHP verzija: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza podataka: `onlinechat`
--

-- --------------------------------------------------------

--
-- Tablična struktura za tablicu `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(12) COLLATE cp1250_croatian_ci NOT NULL,
  `message` text COLLATE cp1250_croatian_ci NOT NULL,
  `mtime` varchar(20) COLLATE cp1250_croatian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1250 COLLATE=cp1250_croatian_ci AUTO_INCREMENT=309 ;

--
-- Izbacivanje podataka za tablicu `messages`
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
