<template>
  <div class="tile flex-centered" :class="{checked: toDo.checked}">
    <div class="tile-icon">
			<!-- Se estiver checked, troque o icone, se não, exiba o relógio -->
      <i class="icon" :class="toDo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <div class="tile-subtitle">{{ toDo.description }}</div>
    </div>
    <div class="tile-action">
      <button @click="$emit('toggle', toDo)" class="btn btn-link">
				<span v-if="toDo.checked">Desmarcar</span>
				<span v-else>Concluído</span>
			</button>
      <button @click="$emit('remove', toDo)" class="btn btn-link">
        <span class="text-error">Remover</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.checked {
	text-decoration: line-through; /* texto riscado */
	color: lightgray;
}
</style>