-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bgagb51v5z3gz4z622t7
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bgagb51v5z3gz4z622t7
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bgagb51v5z3gz4z622t7` DEFAULT CHARACTER SET utf8 ;
USE `bgagb51v5z3gz4z622t7` ;

-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`persona` (
  `idpersona` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `ocupacion` VARCHAR(60) NULL DEFAULT NULL,
  `ubicacion` VARCHAR(100) NULL DEFAULT NULL,
  `acerca` VARCHAR(200) NULL DEFAULT NULL,
  `fotoperfil` VARCHAR(1000) NULL DEFAULT NULL,
  `fotofondo` VARCHAR(1000) NULL DEFAULT NULL,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(2000) NULL DEFAULT NULL,
  PRIMARY KEY (`idpersona`),
  UNIQUE INDEX `idpersona_UNIQUE` (`idpersona` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`educacion` (
  `ideducacion` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NULL DEFAULT NULL,
  `institucion` VARCHAR(150) NULL DEFAULT NULL,
  `carrera` VARCHAR(150) NULL DEFAULT NULL,
  `logo` VARCHAR(200) NULL DEFAULT NULL,
  `fechainicio` DATE NULL DEFAULT NULL,
  `fechafin` DATE NULL DEFAULT NULL,
  `persona` INT(11) NOT NULL,
  PRIMARY KEY (`ideducacion`),
  UNIQUE INDEX `ideducacion_UNIQUE` (`ideducacion` ASC) VISIBLE,
  INDEX `persona_idx` (`persona` ASC) VISIBLE,
  CONSTRAINT `fk_edu_persona`
    FOREIGN KEY (`persona`)
    REFERENCES `bgagb51v5z3gz4z622t7`.`persona` (`idpersona`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`experiencia` (
  `idexperiencia` INT(11) NOT NULL AUTO_INCREMENT,
  `puesto` VARCHAR(200) NULL DEFAULT NULL,
  `descripciontareas` VARCHAR(1000) NULL DEFAULT NULL,
  `empresanombre` VARCHAR(100) NULL DEFAULT NULL,
  `logo` VARCHAR(200) NULL DEFAULT NULL,
  `fechainicio` DATE NULL DEFAULT NULL,
  `fechafin` DATE NULL DEFAULT NULL,
  `persona` INT(11) NOT NULL,
  PRIMARY KEY (`idexperiencia`),
  UNIQUE INDEX `idexperiencia_UNIQUE` (`idexperiencia` ASC) VISIBLE,
  INDEX `persona_idx` (`persona` ASC) VISIBLE,
  CONSTRAINT `fk_persona`
    FOREIGN KEY (`persona`)
    REFERENCES `bgagb51v5z3gz4z622t7`.`persona` (`idpersona`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`proyectos` (
  `idproyectos` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreproyecto` VARCHAR(250) NULL DEFAULT NULL,
  `descripcion` VARCHAR(1000) NULL DEFAULT NULL,
  `enlace` VARCHAR(1000) NULL DEFAULT NULL,
  `fechainicio` DATE NULL DEFAULT NULL,
  `fechafin` DATE NULL DEFAULT NULL,
  `persona` INT(11) NOT NULL,
  PRIMARY KEY (`idproyectos`),
  UNIQUE INDEX `idproyectos_UNIQUE` (`idproyectos` ASC) VISIBLE,
  INDEX `persona_idx` (`persona` ASC) VISIBLE,
  CONSTRAINT `fk_proyectos_persona`
    FOREIGN KEY (`persona`)
    REFERENCES `bgagb51v5z3gz4z622t7`.`persona` (`idpersona`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`redes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`redes` (
  `idredes` INT(11) NOT NULL AUTO_INCREMENT,
  `github` VARCHAR(1000) NULL DEFAULT NULL,
  `persona` INT(11) NOT NULL,
  `linkedin` VARCHAR(1000) NULL DEFAULT NULL,
  `instagram` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`idredes`),
  UNIQUE INDEX `idredes_UNIQUE` (`idredes` ASC) VISIBLE,
  INDEX `persona_idx` (`persona` ASC) VISIBLE,
  CONSTRAINT `fk_redes_persona`
    FOREIGN KEY (`persona`)
    REFERENCES `bgagb51v5z3gz4z622t7`.`persona` (`idpersona`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bgagb51v5z3gz4z622t7`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bgagb51v5z3gz4z622t7`.`skills` (
  `idskills` INT(11) NOT NULL AUTO_INCREMENT,
  `porcentaje` INT(11) NULL DEFAULT NULL,
  `area` VARCHAR(45) NULL DEFAULT NULL,
  `habilidadTipo` ENUM('HARD', 'SOFT') NULL DEFAULT NULL,
  `persona` INT(11) NOT NULL,
  PRIMARY KEY (`idskills`),
  UNIQUE INDEX `idskills_UNIQUE` (`idskills` ASC) VISIBLE,
  INDEX `persona_idx` (`persona` ASC) VISIBLE,
  CONSTRAINT `fk_skills_persona`
    FOREIGN KEY (`persona`)
    REFERENCES `bgagb51v5z3gz4z622t7`.`persona` (`idpersona`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
