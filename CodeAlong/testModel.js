const model = {
    barneliste: [],
    leggTilBarn(navn, alder) {
      this.barneliste.push({ navn, alder }); // Vi bruker push
    },
    tellSkolestartere() {
      let antall = 0;
      for (let i = 0; i < this.barneliste.length; i++) { // Vi bruker length
        if (this.barneliste[i].alder >= 6) {
          antall++;
        }
      }
      return antall;
    }
  };