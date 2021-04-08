// GOAL: replicare le funzioni della todo-list viste a lezione con le seguenti caratteristiche
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista

function initVue() {
  new Vue({
    el: "#app",
    data: {
      list: [],
      newEl: "",
    },
    methods: {
        newTodo: function() {
            if (this.newEl) {
               this.list.push(this.newEl);
               this.newEl = '';
            }
        },
        deleteEl: function(index) {
            this.list.splice(index, 1);
            return list
        }
    },
  });
}

initVue();

document.addEventListener('DOMContentLoaded', initVue);
