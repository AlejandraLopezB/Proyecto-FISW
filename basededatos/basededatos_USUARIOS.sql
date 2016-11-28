-- MySQL dump 10.13  Distrib 5.7.12, for linux-glibc2.5 (x86_64)
--
-- Host: 127.0.0.1    Database: basededatos
-- ------------------------------------------------------
-- Server version	5.7.16-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `USUARIOS`
--

DROP TABLE IF EXISTS `USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USUARIOS` (
  `id_mail` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL DEFAULT '2',
  `perfil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_mail`)
) ENGINE=InnoDB DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIOS`
--

LOCK TABLES `USUARIOS` WRITE;
/*!40000 ALTER TABLE `USUARIOS` DISABLE KEYS */;
INSERT INTO `USUARIOS` VALUES ('a@A.A','a','a','a','1',NULL),('ale@gmail.com','alejandra','lopez','123','0',NULL),('arthur@earth.com','arthur','dent','1234','2','asimilador'),('dean@alsonotdead.com','dean','winchester','cas','2','convergente'),('donald@gmail.com','donald','duck','123','1',NULL),('dumbledore@hogwarts.com','albus','dumbledore','ariana','1',NULL),('ford@space.com','ford','prefect','1234','0',NULL),('kero@clow.com','kero','el peluche','123','2','asimilador'),('marcom@gmail.com','marcom','moyano','123','2','adaptador'),('marvin@space.com','marvin','the android','1234','2','divergente'),('mickey@disney.com','mickey','mouse','123','1',NULL),('minnie@disney.com','minnie','mouse','123','1',NULL),('pacman@gmail.com','pac','man','123','1',NULL),('paula.marianjel.13@sansano.usm.cl','paula','marianjel','Aptx4869','2','convergente'),('profe@gmail.com','profesor','sadasd','123','1',NULL),('sam@notdead.com','sam','winchester','jess','1',NULL),('tricia@earth.com','tricia','mcmillan','1234','2','convergente');
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-27  0:00:14
