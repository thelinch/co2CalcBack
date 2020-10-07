-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.21 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table co2.driver_type: ~9 rows (approximately)
/*!40000 ALTER TABLE `driver_type` DISABLE KEYS */;
INSERT INTO `driver_type` (`id`, `name`, `quantityCo2ForKilometer`, `icon`) VALUES
	('0eae9ca3-bcff-4196-bf28-70a491bd8598', 'Motocicleta (Gasolina)', 0.092, 'two_wheeler'),
	('3d885825-b1e9-4d1f-b1bb-eb4d7ecafe75 ', 'Avión (Internacional)', 0.179, 'airplanemode_active'),
	('45bc1cae-084d-11eb-adc1-0242ac120002', 'MetroAuto (Gasolina)', 0.21, 'train'),
	('6d3a8c31-b45b-4efb-9e2c-4835c598719a', 'Bus Transantiago (Transporte público)', 0.039, 'directions_bus'),
	('75a5a8a1-237b-4008-b33e-c7c56c022157', 'Camioneta (Diésel)', 0.249, 'directions_car'),
	('d5191548-084b-11eb-adc1-0242ac120002', 'Metro(Tren,Subway,Subterraneo)', 0.033, 'directions_transit'),
	('d8936d71-fe09-4832-beaf-c2299848a0ba', 'Bus (Vehículo privado)', 0.012, 'directions_bus'),
	('e77c29c0-d440-4794-9a82-4a034eb3b8d4', 'Avión (Chile)', 0.279, 'airplanemode_active'),
	('f8657924-faf2-4f07-a0da-c28831da7b27 ', 'Caminando', 0, 'directions_run');
/*!40000 ALTER TABLE `driver_type` ENABLE KEYS */;

-- Dumping data for table co2.user: ~0 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `password`) VALUES
	('92942be5-2c3b-49b5-9adc-52646acda8ab', 'Antony', 'pesado123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
