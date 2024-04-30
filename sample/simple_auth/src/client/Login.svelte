<script lang="ts">
import Head from '../components/Head.svelte';
import Footer from '../components/Footer.svelte';
import Layout from '../components/Layout.svelte'
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './Login/CrudIndex';
console.log("#Login");
//
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
//console.log("#Test4.getList");
  } catch (e) {
      console.error(e);
  } 
}

/**
 *
 * @param
 *
 * @return
 */
const loginProc = async function(){
  const resulte = await CrudIndex.login(); 
  if(!resulte) {
    alert("Error, login");
  }
//  location.reload();
  console.log("resulte", resulte);
}

</script>

<!-- -->
<main>
  <Layout>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <h1 class="text-4xl font-bold">Login!</h1>
      <hr class="my-2" />
  
      <label>Email:
      <input type="text" id="email" name="email"
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
      </label>
      <hr class="my-2" />
      <label>Password:
        <input type="text" id="password" name="password"
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />    
      </label>
      <hr class="my-2" />
      <button on:click={loginProc} class="btn btn-primary">Login</button>
      <hr class="my-2" />
    </div>
  </Layout>
</main>

<style>
</style>

<!--
item: {item}
<a href="/">[ home ]</a>
-->

