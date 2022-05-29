package com.example.portfolioapi.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.portfolioapi.models.RedesModel;
import com.example.portfolioapi.repositories.RedesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RedesService {
    @Autowired
    RedesRepository redesRepo;

    
   /* public List<RedesModel> getAll(){
        return (List<RedesModel>)redesRepo.findAll();
    }

    public ResponseEntity<RedesModel> getById(int id){
        Optional<RedesModel> red = redesRepo.findById(id);
        if(red.isPresent()){
            return ResponseEntity.ok().body(red.get());
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    public RedesModel save (RedesModel red){
        return redesRepo.save(red);
    }

    public boolean deleteRed(Integer id) {
        try{
            redesRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    } */
    public ArrayList<RedesModel> obtenerRedes(){
        return (ArrayList<RedesModel>) redesRepo.findAll();
    }

    public RedesModel guardarRedes(RedesModel redes){
        return redesRepo.save(redes);
    }

    public RedesModel editarRedes(RedesModel redes){
        return redesRepo.save(redes);
    }
    public Optional<RedesModel> obtenerRedesPorId(Integer id){
        return redesRepo.findById(id);
    }

    public boolean existsById(Integer id){
        return redesRepo.existsById(id);
    }
    public boolean borrarRedes(Integer id){
        try{
            redesRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
