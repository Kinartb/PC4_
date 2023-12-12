## Pregunta 1

Nos piden crear el comando Grep en JacaScrip, una vez creado realizamos las siguientes configuraciones para su ejecucion.

Otorgamos el permiso de ejecucion en la cmd de ubuntu `chmod +x grep.js` y para sus funcionalidades realizamos segun queremos cromprobar. EJM:


ara buscar la cadena "texto" en el archivo "archivo.txt" y mostrar las líneas coincidentes:

```
./grep.js texto archivo.txt
```

Para buscar la cadena "texto" en varios archivos y mostrar las líneas coincidentes con números de línea:

```
./grep.js texto -n archivo1.txt archivo2.txt
```

Para buscar la cadena "texto" de manera insensible a mayúsculas y minúsculas en un solo archivo:

```
./grep.js texto -i archivo.txt
```

Para buscar la cadena "texto" en varios archivos y mostrar solo los nombres de los archivos que contienen coincidencias:

```
./grep.js texto -l archivo1.txt archivo2.txt
```

## Pregunta 2
     
Diseña 2 clases, una llamada "Pokemon" y otra llamada "Charizard". Las clases deben hacer lo siguiente:

Clase Pokémon:
  
• El constructor toma 3 parámetros (HP, ataque, defensa)

• El constructor debe crear 6 campos (HP, ataque, defensa, movimiento, nivel, tipo). Los valores de (mover, nivelar, tipo) debe inicializarse en ("", 1, "").

• Implementa un método flight que arroje un error que indique que no se especifica ningún movimiento.

• Implementa un método canFly que verifica si se especifica un tipo. Si no, arroja un error. Si es así, verifica si el tipo incluye ‘’flying’. En caso afirmativo, devuelve verdadero; si no, devuelve falso.

Clase Charizard:

• El constructor toma 4 parámetros (HP, ataque, defensa, movimiento)

• El constructor configura el movimiento y el tipo (para "disparar/volar") además de establecer HP, ataque y defensa como el constructor de superclase.

• Sobreescribe el método fight . Si se especifica un movimiento, imprime una declaración que indique que se está utilizando el movimiento y devuelve el campo de ataque. Si no arroja un error.
(implementa utilizando JavaScript )  (1 punto).
    
```javascript
class Pokemon {
// El constructor toma 3 parámetros
  constructor(HP, ataque, defensa) {
//El constructor debe crear 6 campos 
      this.HP = HP;
      this.ataque = ataque;
      this.defensa = defensa;
      this.movimiento = "";
      this.nivel = 1;
      this.tipo = "";
  }
//método flight que arroje un error que indique que no se especifica ningún movimiento
  flight() {
      if (!this.movimiento) {
          throw new Error("No se especifica ningún movimiento.");
      }
  }
//método canFly que verifica si se especifica un tipo. Si no, arroja un error. Si es así, verifica si el tipo incluye ‘’flying’.
//En caso afirmativo, devuelve verdadero; si no, devuelve falso.
  canFly() {
      if (!this.tipo) {
          throw new Error("No se especifica ningún tipo.");
      }
      return this.tipo.includes("volar");
  }
}
//clase Charizard
class Charizard extends Pokemon {
//constructor toma 4 parámetros
  constructor(HP, ataque, defensa, movimiento) {
      super(HP, ataque, defensa);
      this.movimiento = movimiento;
      this.tipo = "disparar/volar";
  }
//Sobreescribe el método fight .
  fight() {
      if (this.movimiento) {
          console.log(`Utilizando el movimiento ${this.movimiento}.`);
          return this.ataque;
      } else {
          throw new Error("No se especifica ningún movimiento.");
      }
  }
}



// Crear una instancia de Charizard
const charizard = new Charizard(100, 50, 40, "Lanzallamas");

// Llamar al método fight
try {
  charizard.fight();
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// Llamar al método flight
try {
  charizard.flight();
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// Llamar al método canFly
try {
  console.log(charizard.canFly());
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```
## Pregunta 3

```rb
class CurrentDay

     def initialize
          @date = Date.today
          @schedule = MonthlySchedule.new(@date.year,@date.month)
     end

     def work_hours
          @schedule.work_hours_for(@date)
     end

     def workday?
          !@schedule.holidays.include?(@date)
     end

end
```

¿Cuál es el problema con este enfoque dado, cuando quieres probar el metodo workday?. 


El problema con el enfoque dado es que la clase CurrentDay está fuertemente acoplada a la clase MonthlySchedule y a la fecha actual. Esto hace que sea difícil probar el método workday? de manera aislada, ya que siempre estará vinculado a la implementación concreta de MonthlySchedule y a la fecha actual, lo que hace que las pruebas sean difíciles de controlar.

Para solucionar este problema y seguir el principio de inversión de dependencia (DIP), puedes aplicar la inyección de dependencia para pasar la instancia de MonthlySchedule como un parámetro en lugar de crearla internamente en el constructor de CurrentDay. Esto permitirá que CurrentDay dependa de una abstracción (una interfaz o clase base) en lugar de depender directamente de la implementación concreta de MonthlySchedule. Además, facilitará la prueba del método workday? al permitir la inyección de un objeto de prueba.

```
before do
     Date.singleton_class.class_eval do
          alias_method :_today, :today
          define_method(:today){Date.new(2020, 12, 16)}
     end
end

after do
     Date.singleton_class.class_eval do
          alias_method :today, :_today
          remove_method :_today
     end
end
```


En el código proporcionado en Ruby, se está utilizando la biblioteca RSpec con los bloques before y after para modificar el comportamiento de la clase Date durante las pruebas. Esto se hace mediante la creación de un alias del método today antes de las pruebas, redefiniendo temporalmente el método para devolver una fecha específica (Date.new(2020, 12, 16) en este caso), y luego restaurando el método original después de las pruebas.

Este enfoque se utiliza para controlar el tiempo y simular fechas específicas durante las pruebas, lo cual es común en pruebas unitarias o de integración donde la fecha actual puede afectar el comportamiento del código.


EJM de uso en JavaScrip

```js
// Clase MonthlySchedule representa el horario mensual
class MonthlySchedule {
  constructor(year, month) {
    // Implementación de ejemplo: guardar el año y el mes
    this.year = year;
    this.month = month;
  }

  // Método para obtener las horas de trabajo para una fecha específica
  workHoursFor(date) {
    // Implementación de ejemplo: siempre devuelve 8 horas
    return 8;
  }

  // Método para verificar si una fecha es un día feriado
  isHoliday(date) {
    // Implementación de ejemplo: no hay días feriados
    return false;
  }
}

// Clase CurrentDay representa el día actual
class CurrentDay {
  constructor(scheduleProvider) {
    this.date = new Date();
    this.scheduleProvider = scheduleProvider;
  }

  // Método para obtener las horas de trabajo para el día actual
  workHours() {
    const schedule = this.scheduleProvider(this.date.getFullYear(), this.date.getMonth() + 1);
    return schedule.workHoursFor(this.date);
  }

  // Método para verificar si el día actual es laborable
  workday() {
    const schedule = this.scheduleProvider(this.date.getFullYear(), this.date.getMonth() + 1);
    return !schedule.isHoliday(this.date);
  }
}

// Función de proveedor para MonthlySchedule
function monthlyScheduleProvider(year, month) {
  return new MonthlySchedule(year, month);
}

// Ejemplo de uso
const currentDay = new CurrentDay(monthlyScheduleProvider);

// Resultados de ejemplo
console.log(`Horas de trabajo hoy: ${currentDay.workHours()}`);
console.log(`¿Hoy es un día laborable? ${currentDay.workday()}`);

```
