<template>
    Ini header
    <pre>Ini State            : {{ counter }}</pre>
    <pre>Ini Getter           : {{ getCount }}</pre>
    <pre>Ini Getter Double    : {{ doubleCount }}</pre>
    <pre>Ini Getter Parameter : {{ divided }}</pre>
    <hr />
    <pre>Pokemon              : {{ pokemon }}</pre>  
</template>

<script setup>
    import { computed } from 'vue';
    import { useCounterStore } from '../stores/counterStore'
    import { usePokemonStore } from '../stores/pokemonStore';
    
    const counterStore = useCounterStore()
    const counter      = computed(() => counterStore.count) // ambil langsung di state
    const getCount     = computed(() => counterStore.getCount) // pake getter
    const doubleCount  = computed(() => counterStore?.doubleCount) // pake getter
    const divided      = computed(() => counterStore?.dividedBy(2)) // getter dg parameter
    
    const pokemonStore = usePokemonStore()
    const pokemon      = computed(() =>  pokemonStore.pokemonDetails.abilities) // async action
</script>