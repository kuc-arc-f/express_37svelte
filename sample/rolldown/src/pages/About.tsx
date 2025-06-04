import renderLayout from './renderLayout';

export default function Page(props: any) { 
  const htm = `
  <div>
    <div id="app"></div>
    <input type="hidden" id="cookieAuth" value="${props.coolieAuth}"/>
    <script type="module" src="/static/About.js" ></script>
  </div>
  `;
  return renderLayout({children: htm, title: "About"});
}
