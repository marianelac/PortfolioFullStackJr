package com.example.portfolioapi.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.portfolioapi.models.PersonaModel;
import com.example.portfolioapi.repositories.PersonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository personaRepo;

    /*public List<PersonaModel> getAll(){
        return (List<PersonaModel>)personaRepo.findAll();
    }

    public ResponseEntity<PersonaModel> getById(int id){
        Optional<PersonaModel> persona = personaRepo.findById(id);
        if(persona.isPresent()){
            return ResponseEntity.ok().body(persona.get());
        } else{
            return ResponseEntity.notFound().build();
        }
    }
    public PersonaModel save (PersonaModel persona){
        return personaRepo.save(persona);
    }

    public boolean deleteUser(Integer id) {
        try{
            personaRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    } */

    
    public ArrayList<PersonaModel>obtenerPersonas(){
        return (ArrayList<PersonaModel>) personaRepo.findAll();
    }

    public PersonaModel guardarPersona(PersonaModel persona){
        return personaRepo.save(persona);
    }

    public PersonaModel editarPersona(PersonaModel persona){
        return personaRepo.save(persona);
    }
    
    public Optional<PersonaModel> obtenerPersonaById(Integer id){
        return personaRepo.findById(id);
    }
    public boolean existsById(Integer id){
        return personaRepo.existsById(id);
    }

    public PersonaModel getByUsername(String username) {
        return personaRepo.findByUsername(username);
    }
    public ArrayList<PersonaModel> obtenerPersonaByApellido(String apellido){
        return personaRepo.findByApellido(apellido);
    }

    public boolean delete(int id) {
        try {
            personaRepo.deleteById(id);
            return true;
        } catch(Exception err){
            return false;
        }
    }
}
