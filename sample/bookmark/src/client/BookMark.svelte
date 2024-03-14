<script lang="ts">
import Head from '../components/Head.svelte';
import Footer from '../components/Footer.svelte';
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './Todo/CrudIndex';
console.log("#about");
export let pageItems = [];
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
const getList = async function() {
  try{
  console.log("#Test4.getList");
    const item  = {
      "userId": 0,
    }      
    const json = await HttpCommon.serverPost(item, "/api/todos/get_list");
    pageItems = json.data;
    console.log(json.data);
  } catch (e) {
      console.error(e);
  } 
}
getList();

/**
 *
 * @param
 *
 * @return
 */
const addProc = async function(){
  await CrudIndex.addItem(); 
  location.reload();
//    console.log("addProc");
}

</script>

<!-- -->
<main>
  <div class="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 class="text-4xl font-bold mt-2">Todos</h1>
    <hr class="my-2" />
    <label class="text-3xl font-bold">Title:
    <input type="text" id="title" 
    class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />    
    </label>
    <label class="text-3xl font-bold">Content:
      <input type="text" id="content" 
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    <hr class="my-2" />
    <button on:click={addProc} class="btn btn-primary">Save</button>
    <hr class="my-2" />
    {#each pageItems as item}
    <div>
        <h3 class="text-3xl font-bold my-2">{item.title}</h3>
        <span class="mx-2">ID : {item.id}, date: {item.createdAt}</span>
        <a href={`/todos/show?id=${item.id}`} >
          <button class="btn-outline-purple">Show</button>
        </a>
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

