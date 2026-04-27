package app.controller.Livro;

import app.entity.Livro;
import app.repository.app.livro.UserRepository;
import app.service.Livro.Livroservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livraria")
@CrossOrigin("*")
public class Livrocontroller {

    @Autowired
    private Livroservice Livroservice;
    @Autowired
    private UserRepository userRepository;
  @PostMapping("/user/{id}/salvar")
    public ResponseEntity<String> save(@RequestBody Livro livro, @PathVariable Long id){
     try {
       this.Livroservice.save( id, livro);
         return new ResponseEntity<>("livro salvo com sucesso", HttpStatus.CREATED);
     } catch (Exception e) {
        return new ResponseEntity<>("Erro!!", HttpStatus.BAD_REQUEST);
     }

    }
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Livro livro, @PathVariable Long id){
      try {
          this.Livroservice.update(livro, id);
          return new ResponseEntity<>("livro alterado", HttpStatus.OK);
      } catch (Exception e) {
          return new ResponseEntity<>("livro nao alterado", HttpStatus.BAD_REQUEST);
      }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> Delete( @PathVariable Long id){
      try {
          this.Livroservice.delete(id);
           return new ResponseEntity<>("livro apagado com sucesso", HttpStatus.OK);
      } catch (Exception e) {
          return new ResponseEntity<>("livro n apagado", HttpStatus.BAD_REQUEST);
      }

    }
    @GetMapping("/findall")
    public ResponseEntity<List<Livro>> findall(){
      try {
          List<Livro> lista = this.Livroservice.findall();
          return new ResponseEntity<>(lista, HttpStatus.OK);
      } catch (Exception e) {
          return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
      }

    }


}
