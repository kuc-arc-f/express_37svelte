<script lang="ts">
import Head from '../components/Head.svelte'; 

console.log("#about");

//
const handleClick = function(){
  console.log("#handleClick" , new Date().toString());
}
</script>

<!-- -->
<main>
  <div>
    <Head />
    <h1 class="text-4xl font-bold">Test</h1>
    <hr class="my-2" />
    <button on:click={handleClick} class="btn btn-primary">Test</button>
  </div>
</main>

<style>
</style>

<!--
<a href="/">[ home ]</a>
-->

