
package config;

import java.util.Set;
import javax.ws.rs.core.Application;

@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends Application{
    @Override
    public Set<Class<?>> getClasses(){
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourcesClasses(resources);
        return resources;
    }
    
    private void addRestResourcesClasses(Set<Class<?>> resources){
        resources.add(produtos.ProdutoService.class);
    }
}
