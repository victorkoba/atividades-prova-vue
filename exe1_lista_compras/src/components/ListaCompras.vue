<script setup>
// ref cria uma variável reativa: quando o valor mudar
// a tela atualiza sozinha
import { ref } from 'vue';

const texto = ref(''); // guardar o que o usuário digitar
const itens = ref([]); // guardar a lista de compras

function adicionar() {
    if (texto.value=='') return; // não deixa adicionar itens vazios
    itens.value.push(texto.value); // adicona o texto digitado
    texto.value = ''; // limpa o campo de texto
}
</script>
<template>

    <h2>Lista de Compras</h2>
    <!-- v-model "liga" o input à variável de texto -->
     <input v-model="texto">
     <!-- @click chama a função adicionar quando o botão for clicado -->
    <button @click="adicionar">Adicionar</button>
    
    <ul v-if="itens.length">
        <!-- v-for repete o "li" para cada item; :key identifica cada um -->
         <!-- {{  }} exibe o valor da variável na tela (no template não usa .value) -->
        <li v-for="item in itens" :key="item">{{ item }}</li>
    </ul>
    <p v-else>Lista vazia</p>
</template>
