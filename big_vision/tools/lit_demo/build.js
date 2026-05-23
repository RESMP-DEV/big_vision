/**
 * @license
 * Copyright Big Vision Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const esbuild = require('esbuild');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

const buildOptions = {
  entryPoints: ['src/app.ts'],
  bundle: true,
  outfile: 'src/index.js',
  plugins: [
    sassPlugin({
      filter: /style.scss$/,
      type: 'style'
    }),
    sassPlugin({
      type: 'lit-css',
    }),
  ],
  sourcemap: true,
};

esbuild.context(buildOptions).then(async (ctx) => {
  await ctx.watch();
  await ctx.serve({
    servedir: 'src',
    port: 8000,
  });
  console.log('Serving on port 8000');
}).catch(() => process.exit(1));
