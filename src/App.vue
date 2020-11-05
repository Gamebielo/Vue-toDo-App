<template>
  <div class id="app">
    <div class="container grid-xs py-2">
      <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logomarca">
      <!-- Chamar o método addToDo() sempre que eu submeter -->
      <form @submit.prevent="addToDo(toDo)"> <!-- prevent retira o auto reload ao submeter -->
        <div class="input-group">
          <input type="text" v-model="toDo.description" class="form-input" placeholder="Novo toDo">
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <toDo v-for="t in toDos" :key="t.id" @toggle="toggleToDo" @remove="removeToDo" :toDo="t"/>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo';

export default {
  name: 'App',
  components: {
    toDo: Todo
  },

  data() { // Estado do componente jogo aqui dentro
    return {
      toDos: [],
      toDo: {
        checked: false
      }
    }
  },

  methods: { // Ações que possuo dentro do componente
    addToDo(toDo) {
      toDo.id = Date.now();
      this.toDos.push(toDo);
      this.toDo = {checked: false};
    },

    toggleToDo(toDo) {
      const index = this.toDos.findIndex(item => item.id === toDo.id);
      if(index > -1) {
        const checked = !this.toDos[index].checked;
        this.$set(this.toDos, index, {...this.toDos[index], checked})
      }
    },

    removeToDo(toDo) {
      const index = this.toDos.findIndex(item => item.id === toDo.id);
      if(index > -1) {
        this.$delete(this.toDos, index);
      }
    }
  }
}
</script>

<style scoped>
.img-logo {
  max-width: 200px;
  margin: 0 auto; /* Centralizar a imagem */
}

.todo-list {
  padding-top: 2rem; /* 1rem para o spectre são 20px */
}
</style>