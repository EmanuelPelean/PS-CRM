package repo;

import java.util.List;

import models.Vehicle;
import org.springframework.data.repository.CrudRepository;


public interface VehicleRepository extends CrudRepository<Vehicle, Long> {
    List<Vehicle> findByAge(int age);
}