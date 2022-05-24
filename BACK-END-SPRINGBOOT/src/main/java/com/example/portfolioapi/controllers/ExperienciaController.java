package com.example.portfolioapi.controllers;

import java.util.ArrayList;

import java.util.Optional;

import com.example.portfolioapi.DTO.Mensaje;
import com.example.portfolioapi.models.ExperienciaModel;
import com.example.portfolioapi.services.ExperienciaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/experiencia")
public class ExperienciaController {
    @Autowired
    ExperienciaService expservice;

    /*
     * @GetMapping("/lista")
     * public List<ExperienciaModel> getAll(){
     * return expservice.getAll();
     * }
     * 
     * 
     * @GetMapping("/{id}")
     * public ResponseEntity<ExperienciaModel> getById(@PathVariable(value="id") int
     * id){
     * return expservice.getById(id);
     * }
     * 
     * @PostMapping("/crear")
     * public ExperienciaModel save(@Validated @RequestBody ExperienciaModel
     * experiencia){
     * return expservice.save(experiencia);
     * }
     * 
     * 
     * @PutMapping("/editar/{id}")
     * public ResponseEntity<ExperienciaModel> update(@PathVariable(value="id")int
     * id, @RequestBody ExperienciaModel experiencia){
     * if (id== experiencia.getIdExperiencia()){
     * ExperienciaModel nuevaExperiencia = expservice.save(experiencia);
     * return ResponseEntity.ok().body(nuevaExperiencia);
     * }else{
     * return ResponseEntity.badRequest().build();
     * }
     * }
     * 
     * @DeleteMapping( path = "/borrar/{id}")
     * public String deleteById(@PathVariable("id") Integer id){
     * boolean ok = this.expservice.deleteExperiencia(id);
     * if (ok){
     * return "Se eliminó experiencia con id " + id;
     * }else{
     * return "No pudo eliminar experiencia con id" + id;
     * }
     * }
     */
    @GetMapping("/lista")
    public ArrayList<ExperienciaModel> obtenerExperiencia() {
        return expservice.obtenerExperiencia();
    }

    @PostMapping("/crear")
    public ExperienciaModel guardarExperiencia(@RequestBody ExperienciaModel experiencia) {
        return this.expservice.guardarExperiencia(experiencia);
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<ExperienciaModel> editarExperiencia(@PathVariable(value = "id") Integer id,
            @Validated @RequestBody ExperienciaModel experiencia) {
        if (!expservice.existsById(id))
            return new ResponseEntity(new Mensaje("Esa experiencia laboral no existe"), HttpStatus.NOT_FOUND);

        ExperienciaModel exp = expservice.obtenerExperienciaById(id).get();
        exp.setPuesto(experiencia.getPuesto());
        exp.setDescripciontareas(experiencia.getDescripciontareas());
        exp.setEmpresanombre(experiencia.getEmpresanombre());
        exp.setLogo(experiencia.getLogo());
        exp.setFechainicio(experiencia.getFechainicio());
        exp.setFechafin(experiencia.getFechafin());
        exp.setPersona(experiencia.getPersona());
        expservice.guardarExperiencia(exp);
        return new ResponseEntity(new Mensaje("Experiencia laboral actualizada"), HttpStatus.OK);

    }

    @GetMapping(path = "/{id}")
    public Optional<ExperienciaModel> obtenerExperienciaById(@PathVariable("id") Integer id) {
        return this.expservice.obtenerExperienciaById(id);
    }

    @DeleteMapping(path = "/borrar/{id}")
    public String borrarExperiencia(@PathVariable("id") Integer id) {
        boolean ok = this.expservice.borrarExperiencia(id);
        if (ok) {
            return "Se eliminó experiencia de id" + id + " correctamente.";
        } else {
            return "El registro no existe o no pudo ser eliminado.";
        }
    }
}
