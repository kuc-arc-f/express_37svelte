# express_37svelte / basic_auth

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/02/12

 update :

***

basic_auth sample

***
* src/index.ts: user, password input


```
app.use(basicAuth({
  users: { "test": "1111" },
  challenge: true,
}));
```
***
