<script>
import LibLayout from '../client/lib/LibLayout';
import Head from '../components/Head.svelte';
import Footer from '../components/Footer.svelte';
//
LibLayout.startProc();
</script>

<!-- Layout.svelte -->
<div>
  <header>
    <slot name="header"></slot>
  </header>
  <Head />
  <main>
    <slot></slot>
  </main>
  <Footer />
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!--
-->