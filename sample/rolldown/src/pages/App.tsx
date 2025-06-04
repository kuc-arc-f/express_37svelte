import renderLayout from './renderLayout';
let PATH__JS = "/static/Home.js";

export default function Page(props: any) {
  if (process.env.NODE_ENV === "production"){
    PATH__JS = "/public/static/Home.js"
  } 
  //console.log(props); 
  const htm = `
  <div>
    <div id="app"></div>
    <input type="hidden" id="cookieAuth" value="${props.coolieAuth}"/>
    <script type="module" src="${PATH__JS}" ></script>
  </div>
  `;
  return renderLayout({children: htm, title: "Home"});
}
