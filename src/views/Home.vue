<template>
    <div class="container grid-xs py-2">
      <!-- Chamar o método addToDo() sempre que eu submeter -->
      <form @submit.prevent="addToDo(toDo)"> <!-- prevent retira o auto reload ao submeter -->
        <div class="input-group">
          <input type="text" v-model="toDo.description" class="form-input" placeholder="Novo toDo">
          <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <toDo v-for="t in todos" :key="t.id" @toggle="toggleToDo" @remove="removeToDo" :toDo="t"/>
      </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo';

export default {
  name: 'App',
  components: {
    toDo: Todo
  },

  data() { // Estado do componente jogo aqui dentro
    return { toDo: { checked: false }, loading: false }
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },

  methods: { // Ações que possuo dentro do componente
    async addToDo(toDo) {
      try {
        this.loading = true;
        await this.$store.dispatch('addTodo', toDo);
        this.toDo = {checked: false};
      } finally {
        this.loading = false;
      }
    },

    toggleToDo(toDo) {
      const index = this.todos.findIndex(item => item.id === toDo.id);
      if(index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, {...this.todos[index], checked})
      }
    },

    removeToDo(toDo) {
      const index = this.todos.findIndex(item => item.id === toDo.id);
      if(index > -1) {
        this.$delete(this.todos, index);
      }
    }
  }
}
</script>

<style scoped>
.todo-list {
  padding-top: 2rem; /* 1rem para o spectre são 20px */
}
</style>