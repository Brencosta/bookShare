package app.repository.app.livro;

import app.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface repository extends JpaRepository<Livro, Long> {
}
