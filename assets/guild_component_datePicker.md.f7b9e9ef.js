import{_ as s,o as a,c as n,R as e}from"./chunks/framework.cd3534b6.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guild/component/datePicker.md","filePath":"guild/component/datePicker.md"}'),t={name:"guild/component/datePicker.md"},l=e(`<h2 id="kwmimport-组件用法" tabindex="-1">KwmImport 组件用法 <a class="header-anchor" href="#kwmimport-组件用法" aria-label="Permalink to &quot;KwmImport 组件用法&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">kwmDatePicker</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:startTime.sync</span><span style="color:#A6ACCD;">=</span><span style="color:#FFCB6B;">&quot;form.createTimeStart&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:endTime.sync</span><span style="color:#A6ACCD;">=</span><span style="color:#FFCB6B;">&quot;form.createTimeEnd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api-描述" tabindex="-1">API 描述 <a class="header-anchor" href="#api-描述" aria-label="Permalink to &quot;API 描述&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>startTime</td><td>开始时间（必传）</td><td><em>string</em></td><td></td></tr><tr><td>endTime</td><td>结束时间（必传）</td><td><em>string</em></td><td></td></tr><tr><td>rule</td><td>规则</td><td><em>object</em></td><td><code>{}</code></td></tr><tr><td>defaultDay</td><td>默认选择时间</td><td><em>string</em></td><td><code>7</code></td></tr></tbody></table><h2 id="rule-描述" tabindex="-1">rule 描述 <a class="header-anchor" href="#rule-描述" aria-label="Permalink to &quot;rule 描述&quot;">​</a></h2><p>主要用于控制 <code>el-date-picker</code> 组件自带参数的补充</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 自带参数 rangeSeparator，startPlaceholder，</span></span>
<span class="line"><span style="color:#A6ACCD;"># endPlaceholder，valueFormat，format</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># shortcuts为空时不显示</span></span>
<span class="line"><span style="color:#A6ACCD;">shortcuts:[</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &#39;未来一天&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    day: &#39;-1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &#39;最近一天&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    day: &#39;1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"># disabledDate 控制置灰时间</span></span>
<span class="line"><span style="color:#A6ACCD;">disabledDate: (time,pickerMinDate)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const day1 = 365 * 24 * 3600 * 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const maxTime = pickerMinDate + day1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const minTime = pickerMinDate - day1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return time.getTime() &gt; maxTime || time.getTime() &lt; minTime;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># noDefault 不需要默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">noDefault: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;KwmImport</span></span>
<span class="line"><span style="color:#A6ACCD;">  :rule=&quot;{ shortcuts: [] }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span></code></pre></div>`,7),p=[l];function o(c,r,i,d,C,A){return a(),n("div",null,p)}const D=s(t,[["render",o]]);export{y as __pageData,D as default};
