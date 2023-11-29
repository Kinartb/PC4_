# PC4

## 1

**a.** Modifica la vista Index para incluir el número de fila de cada fila en la tabla de películas.

**c.** Modifica la acción Index del controlador para que devuelva las películas ordenadas alfabéticamente por título, en vez de por fecha de lanzamiento. No intentes ordenar el resultado de la llamada que hace el controlador a la base de datos. Los gestores de bases de datos ofrecen formas para especificar el orden en que se quiere una lista de resultados y, gracias al fuerte acoplamiento entre ActiveRecord y el sistema gestor de bases de datos (RDBMS) que hay debajo, los métodos find y all de la biblioteca de ActiveRecord en Rails ofrece una manera de pedirle al RDBMS que haga esto.
        
**d.** Simula que no dispones de ese fuerte acoplamiento de ActiveRecord, y que no puedes asumir que el sistema de almacenamiento que hay por debajo pueda devolver la colección de ítems en un orden determinado. Modifique la acción Index del controlador para que devuelva las películas ordenadas alfabéticamente por título. Utiliza el método sort del módulo Enumerable de Ruby.

Se implementa la siguiente linea de codigo para cubrir el numero de fila en `app/views/movies/index.html.haml`.
```haml
  - @movies.each_with_index do |movie, index|
      %tr{:id => "movie_row_#{index}", :class => "movie_row"}
        %td= index + 1
```
De este modo por cada pelicula (movie) se iterara el index de modo que este tenga un crecimiento en 1, en cada fila se muestra el index aumentando en 1 con respecto al anterior delimitado por la cantidad de peliculas.

Para mostrar el orden con respecto a las peliculas se agrega en `app/views/movies/index.html.haml` el siguiente fragmento de codigo.

```haml
 %th{class: "#{'hilite' if params[:sort] == "title"}"}
        = link_to "Movie Title", movies_path(:key_ratings => @ratings_to_show, :sort => "title"), id>
```
Esta celda de encabezado se utiliza para la columna de Movie Title en una tabla y se resaltara para la tabla ordenando por título. Además, el enlace proporciona la funcionalidad para cambiar la clasificación por título cuando se hace clic en el.

![](https://github.com/Kinartb/PC4/blob/main/imagenes/pc41.png)

## 1

## 2

## 3

## 4

## 5

##6
