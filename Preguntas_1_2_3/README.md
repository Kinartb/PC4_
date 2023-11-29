## Pregunta 1

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
