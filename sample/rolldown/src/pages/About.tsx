import renderLayout from './renderLayout';

let PATH__JS = "/static/About.js";

export default function Page(props: any) { 
  if (process.env.NODE_ENV === "production"){
    PATH__JS = "/public/static/About.js"
  }
  const htm = `
  <div>
    <div id="app"></div>
    <input type="hidden" id="cookieAuth" value="${props.coolieAuth}"/>
    <script type="module" src="${PATH__JS}" ></script>
  </div>
  `;
  return renderLayout({children: htm, title: "About"});
}
