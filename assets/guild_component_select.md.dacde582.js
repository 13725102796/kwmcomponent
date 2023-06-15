import{_ as t,o as s,c as a,R as e}from"./chunks/framework.1625126e.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guild/component/select.md","filePath":"guild/component/select.md"}'),n={name:"guild/component/select.md"},l=e(`<h2 id="kwmselect-组件用法" tabindex="-1">KwmSelect 组件用法 <a class="header-anchor" href="#kwmselect-组件用法" aria-label="Permalink to &quot;KwmSelect 组件用法&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">KwmSelect</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orgids</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eduAdmin/getMaterialList</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">机构名称: 全部</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">orgids:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/script&gt;</span></span></code></pre></div><h2 id="api-描述" tabindex="-1">API 描述 <a class="header-anchor" href="#api-描述" aria-label="Permalink to &quot;API 描述&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>value</td><td>v-model</td><td>String, Array, Number</td><td><code>-</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>请求地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>valkey</td><td>映射Key</td><td><em>string</em></td><td><code>id</code></td></tr><tr><td>label</td><td>映射label</td><td><em>string</em></td><td><code>name</code></td></tr><tr><td>text</td><td>placeholder的值</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>width</td><td>宽度大小</td><td><em>string</em></td><td><code>160px</code></td></tr><tr><td>data</td><td>选择框数据</td><td><em>Array</em></td><td><code>-</code></td></tr><tr><td>isMore</td><td>是否多选</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>isFilter</td><td>是否开启模糊匹配</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>params</td><td>查询参数</td><td><em>Object</em></td><td><code>{}</code></td></tr><tr><td>isDefault</td><td>只有一条数据时，默认选中</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;Event&quot;">​</a></h2><table><thead><tr><th>Event</th><th>Description</th><th>Callback Params</th></tr></thead><tbody><tr><td>change</td><td>点击选中项触发回调</td><td>cb(选中的值,选中当前项)</td></tr></tbody></table><h2 id="ref-event" tabindex="-1">$ref.Event <a class="header-anchor" href="#ref-event" aria-label="Permalink to &quot;$ref.Event&quot;">​</a></h2><table><thead><tr><th>Event</th><th>Description</th><th>return</th></tr></thead><tbody><tr><td>init</td><td>重新刷新列表数据</td><td>-</td></tr><tr><td>getSelectLabel</td><td>获取当前选中的label值</td><td>选中当前label值</td></tr></tbody></table>`,8),o=[l];function d(p,r,c,i,D,y){return s(),a("div",null,o)}const C=t(n,[["render",d]]);export{m as __pageData,C as default};
