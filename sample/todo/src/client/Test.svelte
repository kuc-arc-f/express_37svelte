<script lang="ts">
import Head from '../components/Head.svelte';
import Footer from '../components/Footer.svelte';
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './Test/CrudIndex';
console.log("#about");
//export let item = 100, pageItems = [];
//export let pageItems = [];
export let pageItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let v2: number = 0;
//
const handleClick = function(){
  console.log("#handleClick" , new Date().toString());
}

/**
 *
 * @param
 *
 * @return
 */
const addProc = async function(){
  const title = document.querySelector("#title");
  let titleValue: string = "";
  //@ts-ignore
  if(title){ titleValue = title.value }
  const addId = pageItems.length + 1;
  const target = pageItems;
  target.push({id: addId, title: titleValue});
  pageItems = target;
  title.value = "";
//console.log("addProc");
console.log(pageItems);
}

</script>

<!-- -->
<main>
  <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 class="text-4xl font-bold">Test.svelte</h1>
    <hr class="my-2" />
    <label>Title:
    <input type="text" id="title" 
    class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />    
    </label>
    <hr class="my-2" />
    <button on:click={addProc} class="btn btn-primary">Save</button>
    <hr class="my-2" />
    {#each pageItems as item}
    <div>
        <h3 class="text-3xl font-bold my-2">{item.title}</h3>
        <span class="mx-2">ID : {item.id}</span>
        <hr />
    </div>
    {/each}	    
  </div>
  <Footer />
</main>

<style>
</style>

<!--
item: {item}
<a href="/">[ home ]</a>
-->

