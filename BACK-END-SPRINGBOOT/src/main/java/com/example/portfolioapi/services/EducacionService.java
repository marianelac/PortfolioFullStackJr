package com.example.portfolioapi.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.portfolioapi.models.EducacionModel;
import com.example.portfolioapi.repositories.EducacionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EducacionService {
    @Autowired
    EducacionRepository educaRepo;

    /*public List<EducacionModel> getAll(){
        return (List<EducacionModel>)eduRepo.findAll();
    }


    public ResponseEntity<EducacionModel> getById(int id){
        Optional<EducacionModel> edu = eduRepo.findById(id);
        if(edu.isPresent()){
            return ResponseEntity.ok().body(edu.get());
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    
    public EducacionModel save (EducacionModel edu){
        return eduRepo.save(edu);
    }

    public boolean deleteEducacion(Integer id) {
        try{
            eduRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    } */

    public ArrayList<EducacionModel>obtenerEducacion(){
        return (ArrayList<EducacionModel>) educaRepo.findAll();
    }
    public EducacionModel guardarEducacion(EducacionModel educacion){
        return educaRepo.save(educacion);
    }
    public EducacionModel editarEducacion(EducacionModel educacion){
        return educaRepo.save(educacion);
    }
    public Optional<EducacionModel>obtenerEducacionPorId(Integer id){
        return educaRepo.findById(id);
    }
    
    public boolean existsById(Integer id){
        return educaRepo.existsById(id);
    }
    public boolean borrarEducacion(Integer id){
        try{
            educaRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
