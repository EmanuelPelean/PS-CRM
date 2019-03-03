package controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import models.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repo.VehicleRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class VehicleController {

    @Autowired
    VehicleRepository repository;

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        System.out.println("Get all Vehicles...");

        List<Vehicle> vehicles = new ArrayList<>();
        repository.findAll().forEach(vehicles::add);

        return vehicles;
    }

    @PostMapping(value = "/vehicles/create")
    public Vehicle postVehicle(@RequestBody Vehicle vehicle) {

        Vehicle _vehicle = repository.save(new Vehicle(vehicle.getName(), vehicle.getAge()));
        return _vehicle;
    }

    @DeleteMapping("/vehicles/{id}")
    public ResponseEntity<String> deleteVehicles(@PathVariable("id") long id) {
        System.out.println("Delete Vehicle with ID = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("Vehicle has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/vehicles/delete")
    public ResponseEntity<String> deleteAllVehicles() {
        System.out.println("Delete All Vehicles...");

        repository.deleteAll();

        return new ResponseEntity<>("All vehicles have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "vehicles/age/{age}")
    public List<Vehicle> findByAge(@PathVariable int age) {

        List<Vehicle> vehicles = repository.findByAge(age);
        return vehicles;
    }

    @PutMapping("/vehicles/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable("id") long id, @RequestBody Vehicle vehicle) {
        System.out.println("Update Vehicle with ID = " + id + "...");

        Optional<Vehicle> vehicleData = repository.findById(id);

        if (vehicleData.isPresent()) {
            Vehicle _vehicle = vehicleData.get();
            _vehicle.setName(vehicle.getName());
            _vehicle.setAge(vehicle.getAge());
            _vehicle.setActive(vehicle.isActive());
            return new ResponseEntity<>(repository.save(_vehicle), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}