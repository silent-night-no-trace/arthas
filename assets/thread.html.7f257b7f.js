import{_ as c,o as r,c as i,a,b as s,w as l,e as n,d as e,r as p}from"./app.b8f28394.js";const u={},d=a("h1",{id:"thread",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#thread","aria-hidden":"true"},"#"),n(" thread")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn&id=command-thread",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"thread",-1),b=n("\u5728\u7EBF\u6559\u7A0B"),k=e('<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u67E5\u770B\u5F53\u524D\u7EBF\u7A0B\u4FE1\u606F\uFF0C\u67E5\u770B\u7EBF\u7A0B\u7684\u5806\u6808</p></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>id</em></td><td style="text-align:left;">\u7EBF\u7A0B id</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">\u6307\u5B9A\u6700\u5FD9\u7684\u524D N \u4E2A\u7EBF\u7A0B\u5E76\u6253\u5370\u5806\u6808</td></tr><tr><td style="text-align:right;">[b]</td><td style="text-align:left;">\u627E\u51FA\u5F53\u524D\u963B\u585E\u5176\u4ED6\u7EBF\u7A0B\u7684\u7EBF\u7A0B</td></tr><tr><td style="text-align:right;">[i <code>&lt;value&gt;</code>]</td><td style="text-align:left;">\u6307\u5B9A cpu \u4F7F\u7528\u7387\u7EDF\u8BA1\u7684\u91C7\u6837\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u503C\u4E3A 200</td></tr><tr><td style="text-align:right;">[--all]</td><td style="text-align:left;">\u663E\u793A\u6240\u6709\u5339\u914D\u7684\u7EBF\u7A0B</td></tr></tbody></table><h2 id="cpu-\u4F7F\u7528\u7387\u662F\u5982\u4F55\u7EDF\u8BA1\u51FA\u6765\u7684" tabindex="-1"><a class="header-anchor" href="#cpu-\u4F7F\u7528\u7387\u662F\u5982\u4F55\u7EDF\u8BA1\u51FA\u6765\u7684" aria-hidden="true">#</a> cpu \u4F7F\u7528\u7387\u662F\u5982\u4F55\u7EDF\u8BA1\u51FA\u6765\u7684\uFF1F</h2><p>\u8FD9\u91CC\u7684 cpu \u4F7F\u7528\u7387\u4E0E linux \u547D\u4EE4<code>top -H -p &lt;pid&gt;</code> \u7684\u7EBF\u7A0B<code>%CPU</code>\u7C7B\u4F3C\uFF0C\u4E00\u6BB5\u91C7\u6837\u95F4\u9694\u65F6\u95F4\u5185\uFF0C\u5F53\u524D JVM \u91CC\u5404\u4E2A\u7EBF\u7A0B\u7684\u589E\u91CF cpu \u65F6\u95F4\u4E0E\u91C7\u6837\u95F4\u9694\u65F6\u95F4\u7684\u6BD4\u4F8B\u3002</p><h3 id="\u5DE5\u4F5C\u539F\u7406\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406\u8BF4\u660E" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406\u8BF4\u660E\uFF1A</h3><ul><li>\u9996\u5148\u7B2C\u4E00\u6B21\u91C7\u6837\uFF0C\u83B7\u53D6\u6240\u6709\u7EBF\u7A0B\u7684 CPU \u65F6\u95F4(\u8C03\u7528\u7684\u662F<code>java.lang.management.ThreadMXBean#getThreadCpuTime()</code>\u53CA<code>sun.management.HotspotThreadMBean.getInternalThreadCpuTimes()</code>\u63A5\u53E3)</li><li>\u7136\u540E\u7761\u7720\u7B49\u5F85\u4E00\u4E2A\u95F4\u9694\u65F6\u95F4\uFF08\u9ED8\u8BA4\u4E3A 200ms\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>-i</code>\u6307\u5B9A\u95F4\u9694\u65F6\u95F4\uFF09</li><li>\u518D\u6B21\u7B2C\u4E8C\u6B21\u91C7\u6837\uFF0C\u83B7\u53D6\u6240\u6709\u7EBF\u7A0B\u7684 CPU \u65F6\u95F4\uFF0C\u5BF9\u6BD4\u4E24\u6B21\u91C7\u6837\u6570\u636E\uFF0C\u8BA1\u7B97\u51FA\u6BCF\u4E2A\u7EBF\u7A0B\u7684\u589E\u91CF CPU \u65F6\u95F4</li><li>\u7EBF\u7A0B CPU \u4F7F\u7528\u7387 = \u7EBF\u7A0B\u589E\u91CF CPU \u65F6\u95F4 / \u91C7\u6837\u95F4\u9694\u65F6\u95F4 * 100%</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF1A \u8FD9\u4E2A\u7EDF\u8BA1\u4E5F\u4F1A\u4EA7\u751F\u4E00\u5B9A\u7684\u5F00\u9500\uFF08JDK \u8FD9\u4E2A\u63A5\u53E3\u672C\u8EAB\u5F00\u9500\u6BD4\u8F83\u5927\uFF09\uFF0C\u56E0\u6B64\u4F1A\u770B\u5230 as \u7684\u7EBF\u7A0B\u5360\u7528\u4E00\u5B9A\u7684\u767E\u5206\u6BD4\uFF0C\u4E3A\u4E86\u964D\u4F4E\u7EDF\u8BA1\u81EA\u8EAB\u7684\u5F00\u9500\u5E26\u6765\u7684\u5F71\u54CD\uFF0C\u53EF\u4EE5\u628A\u91C7\u6837\u95F4\u9694\u62C9\u957F\u4E00\u4E9B\uFF0C\u6BD4\u5982 5000 \u6BEB\u79D2\u3002</p></div>',8),h={class:"custom-container tip"},g=a("p",{class:"custom-container-title"},"\u63D0\u793A",-1),T=n("\u53E6\u5916\u4E00\u79CD\u67E5\u770B Java \u8FDB\u7A0B\u7684\u7EBF\u7A0B cpu \u4F7F\u7528\u7387\u65B9\u6CD5\uFF1A\u53EF\u4EE5\u4F7F\u7528"),j={href:"https://github.com/oldratlee/useful-scripts/blob/dev-2.x/docs/java.md#-show-busy-java-threads",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"show-busy-java-threads",-1),A=n("\u8FD9\u4E2A\u811A\u672C\u3002"),C=e(`<h2 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h2><h3 id="\u652F\u6301\u4E00\u952E\u5C55\u793A\u5F53\u524D\u6700\u5FD9\u7684\u524D-n-\u4E2A\u7EBF\u7A0B\u5E76\u6253\u5370\u5806\u6808" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u4E00\u952E\u5C55\u793A\u5F53\u524D\u6700\u5FD9\u7684\u524D-n-\u4E2A\u7EBF\u7A0B\u5E76\u6253\u5370\u5806\u6808" aria-hidden="true">#</a> \u652F\u6301\u4E00\u952E\u5C55\u793A\u5F53\u524D\u6700\u5FD9\u7684\u524D N \u4E2A\u7EBF\u7A0B\u5E76\u6253\u5370\u5806\u6808\uFF1A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread <span class="token parameter variable">-n</span> <span class="token number">3</span>
<span class="token string">&quot;C1 CompilerThread0&quot;</span> <span class="token punctuation">[</span>Internal<span class="token punctuation">]</span> <span class="token assign-left variable">cpuUsage</span><span class="token operator">=</span><span class="token number">1.63</span>% <span class="token assign-left variable">deltaTime</span><span class="token operator">=</span>3ms <span class="token assign-left variable">time</span><span class="token operator">=</span>1170ms


<span class="token string">&quot;arthas-command-execute&quot;</span> <span class="token assign-left variable">Id</span><span class="token operator">=</span><span class="token number">23</span> <span class="token assign-left variable">cpuUsage</span><span class="token operator">=</span><span class="token number">0.11</span>% <span class="token assign-left variable">deltaTime</span><span class="token operator">=</span>0ms <span class="token assign-left variable">time</span><span class="token operator">=</span>401ms RUNNABLE
    at java.management@11.0.7/sun.management.ThreadImpl.dumpThreads0<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at java.management@11.0.7/sun.management.ThreadImpl.getThreadInfo<span class="token punctuation">(</span>ThreadImpl.java:466<span class="token punctuation">)</span>
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.processTopBusyThreads<span class="token punctuation">(</span>ThreadCommand.java:199<span class="token punctuation">)</span>
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.process<span class="token punctuation">(</span>ThreadCommand.java:122<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.process<span class="token punctuation">(</span>AnnotatedCommandImpl.java:82<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.access<span class="token variable">$100</span><span class="token punctuation">(</span>AnnotatedCommandImpl.java:18<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl<span class="token variable">$ProcessHandler</span>.handle<span class="token punctuation">(</span>AnnotatedCommandImpl.java:111<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl<span class="token variable">$ProcessHandler</span>.handle<span class="token punctuation">(</span>AnnotatedCommandImpl.java:108<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.system.impl.ProcessImpl<span class="token variable">$CommandProcessTask</span>.run<span class="token punctuation">(</span>ProcessImpl.java:385<span class="token punctuation">)</span>
    at java.base@11.0.7/java.util.concurrent.Executors<span class="token variable">$RunnableAdapter</span>.call<span class="token punctuation">(</span>Executors.java:515<span class="token punctuation">)</span>
    at java.base@11.0.7/java.util.concurrent.FutureTask.run<span class="token punctuation">(</span>FutureTask.java:264<span class="token punctuation">)</span>
    at java.base@11.0.7/java.util.concurrent.ScheduledThreadPoolExecutor<span class="token variable">$ScheduledFutureTask</span>.run<span class="token punctuation">(</span>ScheduledThreadPoolExecutor.java:304<span class="token punctuation">)</span>
    at java.base@11.0.7/java.util.concurrent.ThreadPoolExecutor.runWorker<span class="token punctuation">(</span>ThreadPoolExecutor.java:1128<span class="token punctuation">)</span>
    at java.base@11.0.7/java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>.run<span class="token punctuation">(</span>ThreadPoolExecutor.java:628<span class="token punctuation">)</span>
    at java.base@11.0.7/java.lang.Thread.run<span class="token punctuation">(</span>Thread.java:834<span class="token punctuation">)</span>


<span class="token string">&quot;VM Periodic Task Thread&quot;</span> <span class="token punctuation">[</span>Internal<span class="token punctuation">]</span> <span class="token assign-left variable">cpuUsage</span><span class="token operator">=</span><span class="token number">0.07</span>% <span class="token assign-left variable">deltaTime</span><span class="token operator">=</span>0ms <span class="token assign-left variable">time</span><span class="token operator">=</span>584ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=n("\u6CA1\u6709\u7EBF\u7A0B ID\uFF0C\u5305\u542B"),_=a("code",null,"[Internal]",-1),x=n("\u8868\u793A\u4E3A JVM \u5185\u90E8\u7EBF\u7A0B\uFF0C\u53C2\u8003"),E=n("dashboard"),N=n("\u547D\u4EE4\u7684\u4ECB\u7ECD\u3002"),y=a("code",null,"cpuUsage",-1),P=n("\u4E3A\u91C7\u6837\u95F4\u9694\u65F6\u95F4\u5185\u7EBF\u7A0B\u7684 CPU \u4F7F\u7528\u7387\uFF0C\u4E0E"),F=n("dashboard"),S=n("\u547D\u4EE4\u7684\u6570\u636E\u4E00\u81F4\u3002"),U=a("li",null,[a("code",null,"deltaTime"),n("\u4E3A\u91C7\u6837\u95F4\u9694\u65F6\u95F4\u5185\u7EBF\u7A0B\u7684\u589E\u91CF CPU \u65F6\u95F4\uFF0C\u5C0F\u4E8E 1ms \u65F6\u88AB\u53D6\u6574\u663E\u793A\u4E3A 0ms\u3002")],-1),L=a("li",null,[a("code",null,"time"),n(" \u7EBF\u7A0B\u8FD0\u884C\u603B CPU \u65F6\u95F4\u3002")],-1),R=e(`<p>\u6CE8\u610F\uFF1A\u7EBF\u7A0B\u6808\u4E3A\u7B2C\u4E8C\u91C7\u6837\u7ED3\u675F\u65F6\u83B7\u53D6\uFF0C\u4E0D\u80FD\u8868\u660E\u91C7\u6837\u95F4\u9694\u65F6\u95F4\u5185\u8BE5\u7EBF\u7A0B\u90FD\u662F\u5728\u5904\u7406\u76F8\u540C\u7684\u4EFB\u52A1\u3002\u5EFA\u8BAE\u95F4\u9694\u65F6\u95F4\u4E0D\u8981\u592A\u957F\uFF0C\u53EF\u80FD\u95F4\u9694\u65F6\u95F4\u8D8A\u5927\u8D8A\u4E0D\u51C6\u786E\u3002 \u53EF\u4EE5\u6839\u636E\u5177\u4F53\u60C5\u51B5\u5C1D\u8BD5\u6307\u5B9A\u4E0D\u540C\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u89C2\u5BDF\u8F93\u51FA\u7ED3\u679C\u3002</p><h3 id="\u5F53\u6CA1\u6709\u53C2\u6570\u65F6-\u663E\u793A\u7B2C\u4E00\u9875\u7EBF\u7A0B\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6CA1\u6709\u53C2\u6570\u65F6-\u663E\u793A\u7B2C\u4E00\u9875\u7EBF\u7A0B\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u5F53\u6CA1\u6709\u53C2\u6570\u65F6\uFF0C\u663E\u793A\u7B2C\u4E00\u9875\u7EBF\u7A0B\u7684\u4FE1\u606F</h3><p>\u9ED8\u8BA4\u6309\u7167 CPU \u589E\u91CF\u65F6\u95F4\u964D\u5E8F\u6392\u5217\uFF0C\u53EA\u663E\u793A\u7B2C\u4E00\u9875\u6570\u636E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread
Threads Total: <span class="token number">33</span>, NEW: <span class="token number">0</span>, RUNNABLE: <span class="token number">9</span>, BLOCKED: <span class="token number">0</span>, WAITING: <span class="token number">3</span>, TIMED_WAITING: <span class="token number">4</span>, TERMINATED: <span class="token number">0</span>, Internal threads: <span class="token number">17</span>
ID   NAME                           GROUP          PRIORITY  STATE     %CPU      DELTA_TIME TIME      INTERRUPT DAEMON
<span class="token parameter variable">-1</span>   C2 CompilerThread0             -              <span class="token parameter variable">-1</span>        -         <span class="token number">5.06</span>      <span class="token number">0.010</span>      <span class="token number">0</span>:0.973   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token parameter variable">-1</span>   C1 CompilerThread0             -              <span class="token parameter variable">-1</span>        -         <span class="token number">0.95</span>      <span class="token number">0.001</span>      <span class="token number">0</span>:0.603   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">23</span>   arthas-command-execute         system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.17</span>      <span class="token number">0.000</span>      <span class="token number">0</span>:0.226   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token parameter variable">-1</span>   VM Periodic Task Thread        -              <span class="token parameter variable">-1</span>        -         <span class="token number">0.05</span>      <span class="token number">0.000</span>      <span class="token number">0</span>:0.094   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token parameter variable">-1</span>   Sweeper thread                 -              <span class="token parameter variable">-1</span>        -         <span class="token number">0.04</span>      <span class="token number">0.000</span>      <span class="token number">0</span>:0.011   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token parameter variable">-1</span>   G1 Young RemSet Sampling       -              <span class="token parameter variable">-1</span>        -         <span class="token number">0.02</span>      <span class="token number">0.000</span>      <span class="token number">0</span>:0.025   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">12</span>   Attach Listener                system         <span class="token number">9</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.022   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">11</span>   Common-Cleaner                 InnocuousThrea <span class="token number">8</span>         TIMED_WAI <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">3</span>    Finalizer                      system         <span class="token number">8</span>         WAITING   <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">2</span>    Reference Handler              system         <span class="token number">10</span>        RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">4</span>    Signal Dispatcher              system         <span class="token number">9</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">15</span>   arthas-NettyHttpTelnetBootstra system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.029   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">22</span>   arthas-NettyHttpTelnetBootstra system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.196   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">24</span>   arthas-NettyHttpTelnetBootstra system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.038   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">16</span>   arthas-NettyWebsocketTtyBootst system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.001   <span class="token boolean">false</span>     <span class="token boolean">true</span>
<span class="token number">17</span>   arthas-NettyWebsocketTtyBootst system         <span class="token number">5</span>         RUNNABLE  <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.001   <span class="token boolean">false</span>     <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thread-all-\u663E\u793A\u6240\u6709\u5339\u914D\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#thread-all-\u663E\u793A\u6240\u6709\u5339\u914D\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> thread --all, \u663E\u793A\u6240\u6709\u5339\u914D\u7684\u7EBF\u7A0B</h3><p>\u663E\u793A\u6240\u6709\u5339\u914D\u7EBF\u7A0B\u4FE1\u606F\uFF0C\u6709\u65F6\u9700\u8981\u83B7\u53D6\u5168\u90E8 JVM \u7684\u7EBF\u7A0B\u6570\u636E\u8FDB\u884C\u5206\u6790\u3002</p><h3 id="thread-id-\u663E\u793A\u6307\u5B9A\u7EBF\u7A0B\u7684\u8FD0\u884C\u5806\u6808" tabindex="-1"><a class="header-anchor" href="#thread-id-\u663E\u793A\u6307\u5B9A\u7EBF\u7A0B\u7684\u8FD0\u884C\u5806\u6808" aria-hidden="true">#</a> thread id, \u663E\u793A\u6307\u5B9A\u7EBF\u7A0B\u7684\u8FD0\u884C\u5806\u6808</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread <span class="token number">1</span>
<span class="token string">&quot;main&quot;</span> <span class="token assign-left variable">Id</span><span class="token operator">=</span><span class="token number">1</span> WAITING on java.util.concurrent.CountDownLatch<span class="token variable">$Sync</span>@29fafb28
    at sun.misc.Unsafe.park<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    -  waiting on java.util.concurrent.CountDownLatch<span class="token variable">$Sync</span>@29fafb28
    at java.util.concurrent.locks.LockSupport.park<span class="token punctuation">(</span>LockSupport.java:175<span class="token punctuation">)</span>
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.parkAndCheckInterrupt<span class="token punctuation">(</span>AbstractQueuedSynchronizer.java:836<span class="token punctuation">)</span>
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.doAcquireSharedInterruptibly<span class="token punctuation">(</span>AbstractQueuedSynchronizer.java:997<span class="token punctuation">)</span>
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.acquireSharedInterruptibly<span class="token punctuation">(</span>AbstractQueuedSynchronizer.java:1304<span class="token punctuation">)</span>
    at java.util.concurrent.CountDownLatch.await<span class="token punctuation">(</span>CountDownLatch.java:231<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thread-b-\u627E\u51FA\u5F53\u524D\u963B\u585E\u5176\u4ED6\u7EBF\u7A0B\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#thread-b-\u627E\u51FA\u5F53\u524D\u963B\u585E\u5176\u4ED6\u7EBF\u7A0B\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> thread -b, \u627E\u51FA\u5F53\u524D\u963B\u585E\u5176\u4ED6\u7EBF\u7A0B\u7684\u7EBF\u7A0B</h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u53D1\u73B0\u5E94\u7528\u5361\u4F4F\u4E86\uFF0C \u901A\u5E38\u662F\u7531\u4E8E\u67D0\u4E2A\u7EBF\u7A0B\u62FF\u4F4F\u4E86\u67D0\u4E2A\u9501\uFF0C \u5E76\u4E14\u5176\u4ED6\u7EBF\u7A0B\u90FD\u5728\u7B49\u5F85\u8FD9\u628A\u9501\u9020\u6210\u7684\u3002 \u4E3A\u4E86\u6392\u67E5\u8FD9\u7C7B\u95EE\u9898\uFF0C arthas \u63D0\u4F9B\u4E86<code>thread -b</code>\uFF0C \u4E00\u952E\u627E\u51FA\u90A3\u4E2A\u7F6A\u9B41\u7978\u9996\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread <span class="token parameter variable">-b</span>
<span class="token string">&quot;http-bio-8080-exec-4&quot;</span> <span class="token assign-left variable">Id</span><span class="token operator">=</span><span class="token number">27</span> TIMED_WAITING
    at java.lang.Thread.sleep<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at test.arthas.TestThreadBlocking.doGet<span class="token punctuation">(</span>TestThreadBlocking.java:22<span class="token punctuation">)</span>
    -  locked java.lang.Object@725be470 <span class="token operator">&lt;</span>---- but blocks <span class="token number">4</span> other threads<span class="token operator">!</span>
    at javax.servlet.http.HttpServlet.service<span class="token punctuation">(</span>HttpServlet.java:624<span class="token punctuation">)</span>
    at javax.servlet.http.HttpServlet.service<span class="token punctuation">(</span>HttpServlet.java:731<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:303<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.doFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:208<span class="token punctuation">)</span>
    at org.apache.tomcat.websocket.server.WsFilter.doFilter<span class="token punctuation">(</span>WsFilter.java:52<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:241<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.doFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:208<span class="token punctuation">)</span>
    at test.filter.TestDurexFilter.doFilter<span class="token punctuation">(</span>TestDurexFilter.java:46<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:241<span class="token punctuation">)</span>
    at org.apache.catalina.core.ApplicationFilterChain.doFilter<span class="token punctuation">(</span>ApplicationFilterChain.java:208<span class="token punctuation">)</span>
    at org.apache.catalina.core.StandardWrapperValve.invoke<span class="token punctuation">(</span>StandardWrapperValve.java:220<span class="token punctuation">)</span>
    at org.apache.catalina.core.StandardContextValve.invoke<span class="token punctuation">(</span>StandardContextValve.java:122<span class="token punctuation">)</span>
    at org.apache.catalina.authenticator.AuthenticatorBase.invoke<span class="token punctuation">(</span>AuthenticatorBase.java:505<span class="token punctuation">)</span>
    at com.taobao.tomcat.valves.ContextLoadFilterValve<span class="token variable">$FilterChainAdapter</span>.doFilter<span class="token punctuation">(</span>ContextLoadFilterValve.java:191<span class="token punctuation">)</span>
    at com.taobao.eagleeye.EagleEyeFilter.doFilter<span class="token punctuation">(</span>EagleEyeFilter.java:81<span class="token punctuation">)</span>
    at com.taobao.tomcat.valves.ContextLoadFilterValve.invoke<span class="token punctuation">(</span>ContextLoadFilterValve.java:150<span class="token punctuation">)</span>
    at org.apache.catalina.core.StandardHostValve.invoke<span class="token punctuation">(</span>StandardHostValve.java:170<span class="token punctuation">)</span>
    at org.apache.catalina.valves.ErrorReportValve.invoke<span class="token punctuation">(</span>ErrorReportValve.java:103<span class="token punctuation">)</span>
    at org.apache.catalina.core.StandardEngineValve.invoke<span class="token punctuation">(</span>StandardEngineValve.java:116<span class="token punctuation">)</span>
    at org.apache.catalina.connector.CoyoteAdapter.service<span class="token punctuation">(</span>CoyoteAdapter.java:429<span class="token punctuation">)</span>
    at org.apache.coyote.http11.AbstractHttp11Processor.process<span class="token punctuation">(</span>AbstractHttp11Processor.java:1085<span class="token punctuation">)</span>
    at org.apache.coyote.AbstractProtocol<span class="token variable">$AbstractConnectionHandler</span>.process<span class="token punctuation">(</span>AbstractProtocol.java:625<span class="token punctuation">)</span>
    at org.apache.tomcat.util.net.JIoEndpoint<span class="token variable">$SocketProcessor</span>.run<span class="token punctuation">(</span>JIoEndpoint.java:318<span class="token punctuation">)</span>
    -  locked org.apache.tomcat.util.net.SocketWrapper@7127ee12
    at java.util.concurrent.ThreadPoolExecutor.runWorker<span class="token punctuation">(</span>ThreadPoolExecutor.java:1142<span class="token punctuation">)</span>
    at java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>.run<span class="token punctuation">(</span>ThreadPoolExecutor.java:617<span class="token punctuation">)</span>
    at org.apache.tomcat.util.threads.TaskThread<span class="token variable">$WrappingRunnable</span>.run<span class="token punctuation">(</span>TaskThread.java:61<span class="token punctuation">)</span>
    at java.lang.Thread.run<span class="token punctuation">(</span>Thread.java:745<span class="token punctuation">)</span>

    Number of locked synchronizers <span class="token operator">=</span> <span class="token number">1</span>
    - java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>@31a6493e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF0C \u76EE\u524D\u53EA\u652F\u6301\u627E\u51FA synchronized \u5173\u952E\u5B57\u963B\u585E\u4F4F\u7684\u7EBF\u7A0B\uFF0C \u5982\u679C\u662F<code>java.util.concurrent.Lock</code>\uFF0C \u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u3002</p></div><h3 id="thread-i-\u6307\u5B9A\u91C7\u6837\u65F6\u95F4\u95F4\u9694" tabindex="-1"><a class="header-anchor" href="#thread-i-\u6307\u5B9A\u91C7\u6837\u65F6\u95F4\u95F4\u9694" aria-hidden="true">#</a> thread -i, \u6307\u5B9A\u91C7\u6837\u65F6\u95F4\u95F4\u9694</h3><ul><li><p><code>thread -i 1000</code> : \u7EDF\u8BA1\u6700\u8FD1 1000ms \u5185\u7684\u7EBF\u7A0B CPU \u65F6\u95F4\u3002</p></li><li><p><code>thread -n 3 -i 1000</code> : \u5217\u51FA 1000ms \u5185\u6700\u5FD9\u7684 3 \u4E2A\u7EBF\u7A0B\u6808</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ thread <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token parameter variable">-i</span> <span class="token number">1000</span>
<span class="token string">&quot;as-command-execute-daemon&quot;</span> <span class="token assign-left variable">Id</span><span class="token operator">=</span><span class="token number">4759</span> <span class="token assign-left variable">cpuUsage</span><span class="token operator">=</span><span class="token number">23</span>% RUNNABLE
    at sun.management.ThreadImpl.dumpThreads0<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
    at sun.management.ThreadImpl.getThreadInfo<span class="token punctuation">(</span>ThreadImpl.java:440<span class="token punctuation">)</span>
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.processTopBusyThreads<span class="token punctuation">(</span>ThreadCommand.java:133<span class="token punctuation">)</span>
    at com.taobao.arthas.core.command.monitor200.ThreadCommand.process<span class="token punctuation">(</span>ThreadCommand.java:79<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.process<span class="token punctuation">(</span>AnnotatedCommandImpl.java:96<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl.access<span class="token variable">$100</span><span class="token punctuation">(</span>AnnotatedCommandImpl.java:27<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl<span class="token variable">$ProcessHandler</span>.handle<span class="token punctuation">(</span>AnnotatedCommandImpl.java:125<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.command.impl.AnnotatedCommandImpl<span class="token variable">$ProcessHandler</span>.handle<span class="token punctuation">(</span>AnnotatedCommandImpl.java:122<span class="token punctuation">)</span>
    at com.taobao.arthas.core.shell.system.impl.ProcessImpl<span class="token variable">$CommandProcessTask</span>.run<span class="token punctuation">(</span>ProcessImpl.java:332<span class="token punctuation">)</span>
    at java.util.concurrent.ThreadPoolExecutor.runWorker<span class="token punctuation">(</span>ThreadPoolExecutor.java:1142<span class="token punctuation">)</span>
    at java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>.run<span class="token punctuation">(</span>ThreadPoolExecutor.java:617<span class="token punctuation">)</span>
    at java.lang.Thread.run<span class="token punctuation">(</span>Thread.java:756<span class="token punctuation">)</span>

    Number of locked synchronizers <span class="token operator">=</span> <span class="token number">1</span>
    - java.util.concurrent.ThreadPoolExecutor<span class="token variable">$Worker</span>@546aeec1
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thread-state-\u67E5\u770B\u6307\u5B9A\u72B6\u6001\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#thread-state-\u67E5\u770B\u6307\u5B9A\u72B6\u6001\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> thread --state \uFF0C\u67E5\u770B\u6307\u5B9A\u72B6\u6001\u7684\u7EBF\u7A0B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@28114<span class="token punctuation">]</span>$ thread <span class="token parameter variable">--state</span> WAITING
Threads Total: <span class="token number">16</span>, NEW: <span class="token number">0</span>, RUNNABLE: <span class="token number">9</span>, BLOCKED: <span class="token number">0</span>, WAITING: <span class="token number">3</span>, TIMED_WAITING: <span class="token number">4</span>, TERMINATED: <span class="token number">0</span>
ID   NAME                           GROUP           PRIORITY   STATE     %CPU      DELTA_TIME TIME      INTERRUPTE DAEMON
<span class="token number">3</span>    Finalizer                      system          <span class="token number">8</span>          WAITING   <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>      <span class="token boolean">true</span>
<span class="token number">20</span>   arthas-UserStat                system          <span class="token number">9</span>          WAITING   <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.001   <span class="token boolean">false</span>      <span class="token boolean">true</span>
<span class="token number">14</span>   arthas-timer                   system          <span class="token number">9</span>          WAITING   <span class="token number">0.0</span>       <span class="token number">0.000</span>      <span class="token number">0</span>:0.000   <span class="token boolean">false</span>      <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function B(W,$){const t=p("ExternalLinkIcon"),o=p("RouterLink");return r(),i("div",null,[d,a("p",null,[a("a",m,[v,b,s(t)])]),k,a("div",h,[g,a("p",null,[T,a("a",j,[I,s(t)]),A])]),C,a("ul",null,[a("li",null,[f,_,x,s(o,{to:"/doc/dashboard.html"},{default:l(()=>[E]),_:1}),N]),a("li",null,[y,P,s(o,{to:"/doc/dashboard.html"},{default:l(()=>[F]),_:1}),S]),U,L]),R])}const M=c(u,[["render",B],["__file","thread.html.vue"]]);export{M as default};