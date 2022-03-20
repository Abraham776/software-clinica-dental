-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.28
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `idCitas` int NOT NULL auto_increment,
  `TelefonoCitas` varchar(45) DEFAULT NULL,
  `AnotaciónCitas` varchar(45) DEFAULT NULL,
  `NombreDelPacienteCitas` varchar(45) DEFAULT NULL,
  `FechaCitas` date DEFAULT NULL,
  `Doctor_idDoctor` int NOT NULL,
  PRIMARY KEY (`idCitas`,`Doctor_idDoctor`),
  KEY `fk_Citas_Doctor1_idx` (`Doctor_idDoctor`),
  CONSTRAINT `fk_Citas_Doctor1` FOREIGN KEY (`Doctor_idDoctor`) REFERENCES `doctor` (`idDoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consentimientopaciente`
--

DROP TABLE IF EXISTS `consentimientopaciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consentimientopaciente` (
  `idConcentimientoPaciente` int NOT NULL auto_increment,
  `Ruta` varchar(500) DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idConcentimientoPaciente`,`Paciente_idPaciente`),
  KEY `fk_ConsentimientoPaciente_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_ConsentimientoPaciente_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consentimientopaciente`
--

LOCK TABLES `consentimientopaciente` WRITE;
/*!40000 ALTER TABLE `consentimientopaciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `consentimientopaciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `idDoctor` int NOT NULL auto_increment,
  `Estatus` varchar(45) DEFAULT NULL,
  `Contraseña` varchar(45) DEFAULT NULL,
  `NombreDoctor` varchar(45) DEFAULT NULL,
  `UsuarioDoctor` varchar(45) DEFAULT NULL,
  `Apellidos` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialedodoncia`
--

DROP TABLE IF EXISTS `historialedodoncia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialedodoncia` (
  `idHistorialEdodoncia` int NOT NULL auto_increment,
  `FechaEdo` date DEFAULT NULL,
  `MotivoEdo` varchar(1000) DEFAULT NULL,
  `Gingivitis` varchar(200) DEFAULT NULL,
  `DolorEdo` varchar(500) DEFAULT NULL,
  `InflamacionEdo` varchar(300) DEFAULT NULL,
  `DolorPercusionEdo` varchar(300) DEFAULT NULL,
  `DolorPalpacion` varchar(300) DEFAULT NULL,
  `Bolsas` varchar(1000) DEFAULT NULL,
  `DiagnosticoPulparDePresuncion` varchar(1000) DEFAULT NULL,
  `DiagnosticoPeriapical` varchar(1000) DEFAULT NULL,
  `DiagnosticoDefinitivo` varchar(1000) DEFAULT NULL,
  `TratamientoEdo` varchar(1000) DEFAULT NULL,
  `RestauracionPost` varchar(2000) DEFAULT NULL,
  `Pronostico` varchar(1000) DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idHistorialEdodoncia`,`Paciente_idPaciente`),
  KEY `fk_HistorialEdodoncia_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_HistorialEdodoncia_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialedodoncia`
--

LOCK TABLES `historialedodoncia` WRITE;
/*!40000 ALTER TABLE `historialedodoncia` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialedodoncia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialodontologiageneral`
--

DROP TABLE IF EXISTS `historialodontologiageneral`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialodontologiageneral` (
  `idHistorialOdontologiaGeneral` int NOT NULL auto_increment,
  `FechaGeneralOd` date DEFAULT NULL,
  `MotivoConsultaGeneral` varchar(1000) DEFAULT NULL,
  `AntecedentesMedicos` varchar(1000) DEFAULT NULL,
  `AnomaliasGeneral` varchar(1000) DEFAULT NULL,
  `DoloresGeneral` varchar(1000) DEFAULT NULL,
  `HigieneBucalGeneral` varchar(1000) DEFAULT NULL,
  `SarroGeneral` varchar(1000) DEFAULT NULL,
  `EnfermedadesPerioGeneral` varchar(1000) DEFAULT NULL,
  `Diagnostico` varchar(1000) DEFAULT NULL,
  `TratamientoGeneral` varchar(1000) DEFAULT NULL,
  `ObservacionesGenerales` varchar(1000) DEFAULT NULL,
  `PronosticoGeneral` varchar(1000) DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idHistorialOdontologiaGeneral`,`Paciente_idPaciente`),
  KEY `fk_HistorialOdontologiaGeneral_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_HistorialOdontologiaGeneral_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialodontologiageneral`
--

LOCK TABLES `historialodontologiageneral` WRITE;
/*!40000 ALTER TABLE `historialodontologiageneral` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialodontologiageneral` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialodontopediatria`
--

DROP TABLE IF EXISTS `historialodontopediatria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialodontopediatria` (
  `idHistorialOdontopediatria` int NOT NULL auto_increment,
  `FechaOdontopediatria` date DEFAULT NULL,
  `MotivoConsultaOdontopediatria` text,
  `EnfermedadesActualesOdontopedi` text,
  `AntecedentesFamiliaresOdontopedia` text,
  `AtencionOdontologica` text,
  `MatricesPerinatales` text,
  `TipoAlimentacion` text,
  `HigieneBucal` text,
  `Habitos` text,
  `PesoOdontopedia` float DEFAULT NULL,
  `AlturaOdontopedia` float DEFAULT NULL,
  `FrecuenciaRespiratoria` text,
  `ObservacionesFaringe` text,
  `PlanTratamientoOdontopedia` text,
  `EstadoGeneralOdontopedia` text,
  `EstadoBucalOdontopedia` text,
  `PronosticoOdontopedia` text,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idHistorialOdontopediatria`,`Paciente_idPaciente`),
  KEY `fk_HistorialOdontopediatria_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_HistorialOdontopediatria_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialodontopediatria`
--

LOCK TABLES `historialodontopediatria` WRITE;
/*!40000 ALTER TABLE `historialodontopediatria` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialodontopediatria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialortod`
--

DROP TABLE IF EXISTS `historialortod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialortod` (
  `idHistorialOrtod` int NOT NULL auto_increment,
  `EnfermedadesCronicas` varchar(300) DEFAULT NULL,
  `AlteracionesCongenitas` varchar(300) DEFAULT NULL,
  `IntervecionesQuirurgicas` varchar(300) DEFAULT NULL,
  `TratamientoPrevio` varchar(300) DEFAULT NULL,
  `PatronFacial` varchar(300) DEFAULT NULL,
  `Perfil` varchar(300) DEFAULT NULL,
  `Asimetria` varchar(300) DEFAULT NULL,
  `AlturaFacial` float DEFAULT NULL,
  `AnchoFacial` float DEFAULT NULL,
  `PerfilMaxilar` varchar(300) DEFAULT NULL,
  `PerfilMandibular` varchar(300) DEFAULT NULL,
  `SurcoLabioMenton` varchar(300) DEFAULT NULL,
  `LabiosReposo` varchar(300) DEFAULT NULL,
  `PerfilLabial` varchar(300) DEFAULT NULL,
  `Respiracion` varchar(300) DEFAULT NULL,
  `ActividadComisural` varchar(300) DEFAULT NULL,
  `ActividadLingual` varchar(300) DEFAULT NULL,
  `LabioSuperior` varchar(300) DEFAULT NULL,
  `LabioInferior` varchar(300) DEFAULT NULL,
  `Masetero` varchar(300) DEFAULT NULL,
  `Mentoniano` varchar(300) DEFAULT NULL,
  `HabitosDeSuccion` varchar(500) DEFAULT NULL,
  `AnalisisEsqueletal` varchar(500) DEFAULT NULL,
  `PlanDeTratamientoOrtod` varchar(1000) DEFAULT NULL,
  `TecnicaYApara` varchar(2000) DEFAULT NULL,
  `TiempoEstimadoTratamiento` varchar(200) DEFAULT NULL,
  `PronosticoOrtod` varchar(2000) DEFAULT NULL,
  `FechaOrtod` date DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idHistorialOrtod`,`Paciente_idPaciente`),
  KEY `fk_HistorialOrtod_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_HistorialOrtod_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialortod`
--

LOCK TABLES `historialortod` WRITE;
/*!40000 ALTER TABLE `historialortod` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialortod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialrehabilitacionoral`
--

DROP TABLE IF EXISTS `historialrehabilitacionoral`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialrehabilitacionoral` (
  `idHistorialRehabilitacionOral` int NOT NULL auto_increment,
  `MotivoConsultaRehabilitacion` varchar(1000) DEFAULT NULL,
  `HabitosRehabilitacion` varchar(1000) DEFAULT NULL,
  `InfeccionesRehabilitacion` varchar(1000) DEFAULT NULL,
  `EnfermedadesEruptivas` varchar(1000) DEFAULT NULL,
  `EnfermedadesSistematicas` varchar(1000) DEFAULT NULL,
  `Transfusiones` varchar(1000) DEFAULT NULL,
  `AlergiasRehabilitacion` varchar(1000) DEFAULT NULL,
  `OtrosReahbilitaciones` varchar(1000) DEFAULT NULL,
  `MovimientoDeAperturaMandibula` varchar(1000) DEFAULT NULL,
  `MovimientoDeCierreMandibula` varchar(1000) DEFAULT NULL,
  `HipertrofiaMuscular` varchar(1000) DEFAULT NULL,
  `MovimientoLateralDerecho` varchar(1000) DEFAULT NULL,
  `MovimientoLateralIzquierdo` varchar(1000) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `TratamientoRehabilitacion` varchar(1000) DEFAULT NULL,
  `ObservacionesRehabilitacion` varchar(1000) DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idHistorialRehabilitacionOral`,`Paciente_idPaciente`),
  KEY `fk_HistorialRehabilitacionOral_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_HistorialRehabilitacionOral_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialrehabilitacionoral`
--

LOCK TABLES `historialrehabilitacionoral` WRITE;
/*!40000 ALTER TABLE `historialrehabilitacionoral` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialrehabilitacionoral` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenesdia`
--

DROP TABLE IF EXISTS `imagenesdia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenesdia` (
  `idImagenesDia` int NOT NULL auto_increment,
  `ImagenesDiagro` blob,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idImagenesDia`,`Paciente_idPaciente`),
  KEY `fk_ImagenesDia_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_ImagenesDia_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenesdia`
--

LOCK TABLES `imagenesdia` WRITE;
/*!40000 ALTER TABLE `imagenesdia` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenesdia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `odontograma`
--

DROP TABLE IF EXISTS `odontograma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `odontograma` (
  `idOdontograma` int NOT NULL auto_increment,
  `JsonOdontograma` json DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idOdontograma`,`Paciente_idPaciente`),
  KEY `fk_Odontograma_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Odontograma_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odontograma`
--

LOCK TABLES `odontograma` WRITE;
/*!40000 ALTER TABLE `odontograma` DISABLE KEYS */;
/*!40000 ALTER TABLE `odontograma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `idPaciente` int NOT NULL auto_increment,
  `CodigoPostalPaciente` int DEFAULT NULL,
  `FotoPaciente` blob,
  `NombrePaciente` varchar(100) DEFAULT NULL,
  `ApellidosPaciente` varchar(100) DEFAULT NULL,
  `EstadoCivilPaciente` varchar(45) DEFAULT NULL,
  `FechaRegistroPaciente` date DEFAULT NULL,
  `Edad` int DEFAULT NULL,
  `LugarNacimientoPaciente` varchar(100) DEFAULT NULL,
  `Sexo` varchar(45) DEFAULT NULL,
  `CiudadPaciente` varchar(100) DEFAULT NULL,
  `DireccionPaciente` varchar(100) DEFAULT NULL,
  `FechaNacimientoPaciente` date DEFAULT NULL,
  `CelularPaciente` varchar(45) DEFAULT NULL,
  `TelefonoFijoPaciente` varchar(45) DEFAULT NULL,
  `Procedencia` varchar(45) DEFAULT NULL,
  `AlergiaMedicamentoPaciente` varchar(1000) DEFAULT NULL,
  `CorreoPaciente` varchar(60) DEFAULT NULL,
  `OcupacionPaciente` varchar(50) DEFAULT NULL,
  `Doctor_idDoctor` int NOT NULL,
  PRIMARY KEY (`idPaciente`,`Doctor_idDoctor`),
  KEY `fk_Paciente_Doctor1_idx` (`Doctor_idDoctor`),
  CONSTRAINT `fk_Paciente_Doctor1` FOREIGN KEY (`Doctor_idDoctor`) REFERENCES `doctor` (`idDoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `idReceta` int NOT NULL auto_increment,
  `Doctor_idDoctor` int NOT NULL,
  `Tratamientos_idTratamientos` int NOT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idReceta`,`Doctor_idDoctor`,`Tratamientos_idTratamientos`,`Paciente_idPaciente`),
  KEY `fk_Receta_Doctor1_idx` (`Doctor_idDoctor`),
  KEY `fk_Receta_Tratamientos1_idx` (`Tratamientos_idTratamientos`),
  KEY `fk_Receta_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Receta_Doctor1` FOREIGN KEY (`Doctor_idDoctor`) REFERENCES `doctor` (`idDoctor`),
  CONSTRAINT `fk_Receta_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`),
  CONSTRAINT `fk_Receta_Tratamientos1` FOREIGN KEY (`Tratamientos_idTratamientos`) REFERENCES `tratamientos` (`idTratamientos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recibo`
--

DROP TABLE IF EXISTS `recibo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recibo` (
  `idRecibo` int NOT NULL auto_increment,
  `FechaFactura` date DEFAULT NULL,
  `Total` float DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idRecibo`,`Paciente_idPaciente`),
  KEY `fk_Recibo_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_Recibo_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recibo`
--

LOCK TABLES `recibo` WRITE;
/*!40000 ALTER TABLE `recibo` DISABLE KEYS */;
/*!40000 ALTER TABLE `recibo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registroevolucion`
--

DROP TABLE IF EXISTS `registroevolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registroevolucion` (
  `idRegistroEvolucion` int NOT NULL auto_increment,
  `ObservacionesRegistro` varchar(2000) DEFAULT NULL,
  `FechaRegistro` date DEFAULT NULL,
  `Tratamiento` varchar(300) DEFAULT NULL,
  `Paciente_idPaciente` int NOT NULL,
  PRIMARY KEY (`idRegistroEvolucion`,`Paciente_idPaciente`),
  KEY `fk_RegistroEvolucion_Paciente1_idx` (`Paciente_idPaciente`),
  CONSTRAINT `fk_RegistroEvolucion_Paciente1` FOREIGN KEY (`Paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registroevolucion`
--

LOCK TABLES `registroevolucion` WRITE;
/*!40000 ALTER TABLE `registroevolucion` DISABLE KEYS */;
/*!40000 ALTER TABLE `registroevolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamientos`
--

DROP TABLE IF EXISTS `tratamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamientos` (
  `idTratamientos` int NOT NULL auto_increment,
  `NombreTratamiento` varchar(45) DEFAULT NULL,
  `PrecioTratamiento` float DEFAULT NULL,
  `Doctor_idDoctor` int NOT NULL,
  PRIMARY KEY (`idTratamientos`,`Doctor_idDoctor`),
  KEY `fk_Tratamientos_Doctor_idx` (`Doctor_idDoctor`),
  CONSTRAINT `fk_Tratamientos_Doctor` FOREIGN KEY (`Doctor_idDoctor`) REFERENCES `doctor` (`idDoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamientos`
--

LOCK TABLES `tratamientos` WRITE;
/*!40000 ALTER TABLE `tratamientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tratamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamientos_has_recibo`
--

DROP TABLE IF EXISTS `tratamientos_has_recibo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamientos_has_recibo` (
  `Tratamientos_idTratamientos` int NOT NULL auto_increment,
  `Recibo_idRecibo` int NOT NULL,
  PRIMARY KEY (`Tratamientos_idTratamientos`,`Recibo_idRecibo`),
  KEY `fk_Tratamientos_has_Recibo_Recibo1_idx` (`Recibo_idRecibo`),
  KEY `fk_Tratamientos_has_Recibo_Tratamientos1_idx` (`Tratamientos_idTratamientos`),
  CONSTRAINT `fk_Tratamientos_has_Recibo_Recibo1` FOREIGN KEY (`Recibo_idRecibo`) REFERENCES `recibo` (`idRecibo`),
  CONSTRAINT `fk_Tratamientos_has_Recibo_Tratamientos1` FOREIGN KEY (`Tratamientos_idTratamientos`) REFERENCES `tratamientos` (`idTratamientos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamientos_has_recibo`
--

LOCK TABLES `tratamientos_has_recibo` WRITE;
/*!40000 ALTER TABLE `tratamientos_has_recibo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tratamientos_has_recibo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-19 18:33:28
