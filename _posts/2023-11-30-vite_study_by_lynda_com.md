---
layout: single
title: vite_study_javascript_build_tool
toc: true
toc_label: "目次"
toc_icon: "heart" 
classes:
  - landing
  - dark-theme
  - wide
---

---

### CLI Log

{% highlight python linenos %}
$ cd demo-vite
$ pwd
/workspaces/javascript-build-tools-4300056/demo-vite
$ npm install --save vite

added 404 packages, and audited 405 packages in 12s

158 packages are looking for funding
  run `npm fund` for details

2 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
npm notice 
npm notice New minor version of npm available! 10.1.0 -> 10.2.4
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.4
npm notice Run npm install -g npm@10.2.4 to update!
npm notice 
{% endhighlight %}

### Add comand line interface in "package.json"

{% highlight python linenos %}

  "scripts": {
    "dev": "vite", 
    "build": "vite build",
    "preview": "vite preview" 
  },
{% endhighlight %}


### Change Config

create : 
 `vite.config.js`  file

#### then paste here

{% highlight python linenos %}

import { defineConfig } from 'vite';

export default defineConfig({
  root: `./src`,
  publicDir: '../public',
  build: { outDir: '../dist'},
  server: {
    host: true,
    port: 5173,
    hmr: { clientPort: 5173}
  }
});

{% endhighlight %}


### Execute command

{% highlight python linenos %}

$ npm run dev

> demo-vite@1.0.0 dev
> vite

The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

  VITE v5.0.4  ready in 503 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.16.5.4:5173/
  ➜  press h + enter to show help
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme

{% endhighlight %}
