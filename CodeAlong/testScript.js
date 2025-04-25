
const app = document.getElementById("app");
  
      // VIEW
      const view = {
        init(app) {
          const [inputNavn, inputAlder, leggTilKnapp, listeEl, sjekkKnapp, resultatEl] = app.children;
          this.inputNavn = inputNavn;
          this.inputAlder = inputAlder;
          this.leggTilKnapp = leggTilKnapp;
          this.listeEl = listeEl;
          this.sjekkKnapp = sjekkKnapp;
          this.resultatEl = resultatEl;
        },
        hentInput() {
          return {
            navn: this.inputNavn.value.trim(),
            alder: parseInt(this.inputAlder.value)
          };
        },
        tømInput() {
          this.inputNavn.value = '';
          this.inputAlder.value = '';
        },
        visBarn(barn) {
          const li = document.createElement('li');
          li.textContent = `${barn.navn}, ${barn.alder} år`;
          this.listeEl.appendChild(li);
        },
        visResultat(melding) {
          this.resultatEl.textContent = melding;
        }
      };
  
      // CONTROLLER
      const controller = {
        start(app) {
          view.init(app);
  
          view.leggTilKnapp.addEventListener('click', () => {
            const { navn, alder } = view.hentInput();
            if (navn && !isNaN(alder)) {
              model.leggTilBarn(navn, alder);   
              view.visBarn({ navn, alder });
              view.tømInput();
            } else {
              alert("Skriv inn både navn og alder.");
            }
          });
  
          view.sjekkKnapp.addEventListener('click', () => {
            const antall = model.tellSkolestartere(); 
            view.visResultat(`Antall barn som snart begynner på skolen: ${antall}`);
          });
        }
      };
  
     
     
      controller.start(app);

