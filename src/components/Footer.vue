<template>
    Ini Footer
    <pre><button @click="increment">Increment +</button></pre>
    <pre><button @click="decrement">Decrement +</button></pre>
    <pre><button @click="increment">Increment +</button></pre>
    <pre><button @click="incrementWithAction">Increment With Action +</button></pre>
    <pre><button @click="decrementWithAction">Decrement With Action +</button></pre>
    <pre><button @click="incrementByWithAction(5)">Increment By 5 With Action +</button></pre>
    <pre><button @click="reset">Reset</button></pre>
    <hr />
    <pre><button @click="getPokemonDetail('ditto')">Fetch Ditto</button></pre>
    <pre><button @click="resetPokemon">Reset Pokemon</button></pre>
    
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore';
import { usePokemonStore } from '../stores/pokemonStore';

const counter = useCounterStore()
const increment = () => { // ubah state tanpa action
    counter.$patch((state) => {
        state.count++
    })
}

const decrement = () => { // ubah state tanpa action
    counter.$patch((state) => {
        state.count--
    })
}

const reset = () => {
    counter.$reset()
}

const incrementWithAction = () => {
    counter.increment()
}

const decrementWithAction = () => {
    counter.decrement()
}

const incrementByWithAction = (amount) => {
    counter.incrementBy(amount)
}

const pokemon = usePokemonStore()
const getPokemonDetail = (name) => {
    pokemon.getPokemonDetails(name)
}

const resetPokemon = () => {
    pokemon.$reset()
}
</script>