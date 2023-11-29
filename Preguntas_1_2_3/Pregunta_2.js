class Pokemon {
  constructor(HP, ataque, defensa) {
      this.HP = HP;
      this.ataque = ataque;
      this.defensa = defensa;
      this.movimiento = "";
      this.nivel = 1;
      this.tipo = "";
  }

  flight() {
      if (!this.movimiento) {
          throw new Error("No se especifica ningún movimiento.");
      }
  }

  canFly() {
      if (!this.tipo) {
          throw new Error("No se especifica ningún tipo.");
      }
      return this.tipo.includes("volar");
  }
}

class Charizard extends Pokemon {
  constructor(HP, ataque, defensa, movimiento) {
      super(HP, ataque, defensa);
      this.movimiento = movimiento;
      this.tipo = "disparar/volar";
  }

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
