package app.service.Livro;

import app.entity.Livro;
import app.entity.User;
import app.repository.app.livro.UserRepository;
import app.repository.app.livro.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Livroservice {
    @Autowired
    private repository repository;
    @Autowired
    private UserRepository userRepository;

    public Livro save(Long user_id, Livro livro){
        if (!userRepository.existsById(user_id)) {
            throw new RuntimeException("Usuário não encontrado");
        }
        User usuario = userRepository.getReferenceById(user_id);  // associacao ao usuario
        livro.setUser(usuario);
        return repository.save(livro);

    }

    public Livro update(Livro livro, Long id){
        if (!repository.existsById(id)){
            throw new RuntimeException("livro não encontrado");
        }
        Livro novolivro = this.repository.getReferenceById(id); // pega o livro direto do banco
        livro.setTitulo(livro.getTitulo());
        livro.setAutor(livro.getAutor());
        livro.setGenero(livro.getGenero());

        return this.repository.save(novolivro);
    }

    public void delete(Long id ){
        if (!repository.existsById(id)){
            throw new RuntimeException("livro não encontrado");
        }
        this.repository.deleteById(id);
    }
    public List<Livro> findall(){
        List<Livro> listas = this.repository.findAll();
        return listas;

    }

}