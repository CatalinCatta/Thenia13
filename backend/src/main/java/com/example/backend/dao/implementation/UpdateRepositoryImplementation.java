//package com.example.backend.dao.implementation;
//
//import com.example.backend.dao.UpdateRepository;
//import com.example.backend.model.Update;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public class UpdateRepositoryImplementation implements UpdateRepository {
//
//    @Override
//    public List<Update> GetAllUpdatesFromPage(){
//        log.debug("Get all Employees with limit {} and offset {}", limit, offset);
//        Pageable pageable = new OffsetBasedPageRequest(limit, offset);
//        return employeeRepository.findAll(pageable).getContent();
//    }
//}

