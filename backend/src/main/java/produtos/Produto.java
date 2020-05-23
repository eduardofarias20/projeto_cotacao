
package produtos;

import java.lang.reflect.Constructor;

public class Produto {
    
    private Integer id;
    private String nome_produto;
    
    public Produto(){
        
    }

    public Produto(Integer id, String nome_produto) {
        this.id = id;
        this.nome_produto = nome_produto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome_produto() {
        return nome_produto;
    }

    public void setNome_produto(String nome_produto) {
        this.nome_produto = nome_produto;
    }
    
    
}
