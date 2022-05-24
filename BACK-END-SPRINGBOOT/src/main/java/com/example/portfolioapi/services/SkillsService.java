package com.example.portfolioapi.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.portfolioapi.models.SkillsModel;
import com.example.portfolioapi.repositories.SkillsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SkillsService {
    @Autowired
    SkillsRepository skillsRepo;

    /*public List<SkillsModel> getAll(){
        return (List<SkillsModel>)skillsRepo.findAll();
    }

    public ResponseEntity<SkillsModel> getById(int id){
        Optional<SkillsModel> skill = skillsRepo.findById(id);
        if(skill.isPresent()){
            return ResponseEntity.ok().body(skill.get());
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    public SkillsModel save (SkillsModel skill){
        return skillsRepo.save(skill);
    }

    public boolean deleteSkill(Integer id) {
        try{
            skillsRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    } */

    public ArrayList<SkillsModel> obtenerSkills(){
        return (ArrayList<SkillsModel>) skillsRepo.findAll();
    }

    public SkillsModel guardarSkills(SkillsModel skills){
        return skillsRepo.save(skills);
    }

    public SkillsModel editarSkills(SkillsModel skills){
        return skillsRepo.save(skills);
    }
    
    public Optional<SkillsModel>obtenerSkillsPorId(Integer id){
        return skillsRepo.findById(id);
    }
    public boolean existsById(Integer id){
        return skillsRepo.existsById(id);
    }

    public boolean borrarSkills(Integer id){
        try{
            skillsRepo.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
