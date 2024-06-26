import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "develop") ? (
                <link href="/static/main.css" rel="stylesheet" /> 
            ): (
                <link href="/public/static/main.css" rel="stylesheet" /> 
            )} 
        </head>
        <body>
          <div>
            <div id="app"></div>
            {(process.env.NODE_ENV === "develop") ? (
                <script type="module" src="/static/Home.js"></script>
            ): (
                <script type="module" src="/public/static/Home.js"></script> 
            )}             
          </div>
        </body>
    </html>
    );
}
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<a href="/test">[ test ]</a>
<hr />
<h1 className="text-4xl font-bold">Hello!!</h1>
*/
