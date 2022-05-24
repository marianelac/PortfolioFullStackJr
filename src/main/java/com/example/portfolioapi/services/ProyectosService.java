package com.example.portfolioapi.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.portfolioapi.models.ProyectosModel;
import com.example.portfolioapi.repositories.ProyectosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProyectosService {
    @Autowired
    ProyectosRepository proyectosRepo;

    /*public List<ProyectosModel> getAll(){
        return (List<ProyectosModel>)proyectosRepo.findAll();
    }

    public ResponseEntity<ProyectosModel> getById(int id){
        Optional<ProyectosModel> proyecto = proyectosRepo.findById(id);
        if(proyecto.isPresent()){
            return ResponseEntity.ok().body(proyecto.get());
        } else{
            return ResponseEntity.notFound().build();
        }
    }


    public ProyectosModel save (ProyectosModel proyecto){
        return proyectosRepo.save(proyecto);
    }

    public boolean deleteProyecto(Integer id) {
        try{
            proyectosRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    } */

    public ArrayList<ProyectosModel> obtenerProyecto(){
        return (ArrayList<ProyectosModel>) proyectosRepo.findAll();
    }

    public ProyectosModel guardarProyecto(ProyectosModel proyecto){
        return proyectosRepo.save(proyecto);
    }
    public ProyectosModel editarProyecto(ProyectosModel proyecto){
        return proyectosRepo.save(proyecto);
    }
    public Optional<ProyectosModel> obtenerProyectoPorId(Integer id){
        return proyectosRepo.findById(id);
    }
    public boolean existsById(Integer id){
        return proyectosRepo.existsById(id);
    }

    public boolean borrarProyecto(Integer id){
        try{
            proyectosRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
