-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema airinfonew
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema airinfonew
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `airinfonew` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `airinfonew` ;

-- -----------------------------------------------------
-- Table `airinfonew`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `senha` VARCHAR(255) NULL DEFAULT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `userType` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`avaliacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `avaliacao` VARCHAR(5) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacao_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_avaliacao_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `airinfonew`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`passageiro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`passageiro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `sobrenome` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `cpf` VARCHAR(15) NULL DEFAULT NULL,
  `rg` VARCHAR(11) NULL DEFAULT NULL,
  `data_nascimento` DATE NULL DEFAULT NULL,
  `telefone` VARCHAR(15) NULL DEFAULT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `idUsuario` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `passageiro_idUsuario_foreign_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `passageiro_idUsuario_foreign_idx`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `airinfonew`.`usuario` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`viagem_aviao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`viagem_aviao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_aviao` VARCHAR(255) NULL DEFAULT NULL,
  `local_embarque` VARCHAR(255) NULL DEFAULT NULL,
  `local_desembarque` VARCHAR(255) NULL DEFAULT NULL,
  `data_partida` DATE NULL DEFAULT NULL,
  `data_chegada` DATE NULL DEFAULT NULL,
  `total_assentos` INT NULL DEFAULT NULL,
  `empresa_aerea` VARCHAR(255) NULL DEFAULT NULL,
  `codigo_portao` VARCHAR(255) NULL DEFAULT NULL,
  `modelo_aeronave` VARCHAR(255) NULL DEFAULT NULL,
  `valor` INT NULL DEFAULT NULL,
  `updatedAt` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `hora_partida` TIME NULL DEFAULT NULL,
  `hora_chegada` TIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`passageiroviagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`passageiroviagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `passageiroId` INT NOT NULL,
  `viagemId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `assento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `passageiroId` (`passageiroId` ASC) VISIBLE,
  INDEX `viagemId` (`viagemId` ASC) VISIBLE,
  CONSTRAINT `passageiroviagem_ibfk_1`
    FOREIGN KEY (`passageiroId`)
    REFERENCES `airinfonew`.`passageiro` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `passageiroviagem_ibfk_2`
    FOREIGN KEY (`viagemId`)
    REFERENCES `airinfonew`.`viagem_aviao` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`bagagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`bagagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(10) NULL DEFAULT NULL,
  `id_passagem` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_passagem` (`id_passagem` ASC) VISIBLE,
  CONSTRAINT `bagagem_ibfk_1`
    FOREIGN KEY (`id_passagem`)
    REFERENCES `airinfonew`.`passageiroviagem` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `airinfonew`.`checkin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airinfonew`.`checkin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `localizador` VARCHAR(255) NULL DEFAULT NULL,
  `cpf` VARCHAR(255) NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `sobrenome` VARCHAR(255) NULL DEFAULT NULL,
  `id_passagem` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `passageiroviagem_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_checkin_passageiroviagem1_idx` (`passageiroviagem_id` ASC) VISIBLE,
  CONSTRAINT `fk_checkin_passageiroviagem1`
    FOREIGN KEY (`passageiroviagem_id`)
    REFERENCES `airinfonew`.`passageiroviagem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
