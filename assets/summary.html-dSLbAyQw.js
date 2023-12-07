import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as a,c as r,a as e,b as o,e as i,d as c}from"./app-CONuJI3o.js";const n={},s=c('<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><h2 id="关键字总结" tabindex="-1"><a class="header-anchor" href="#关键字总结" aria-hidden="true">#</a> 关键字总结</h2><ul><li>访问控制：<code>protected</code>, <code>public</code>, <code>private</code></li></ul><blockquote><p>访问控制权限有4种，除了public，private，protected，还有default，在不添加访问控制修饰符的时候就是使用默认的default权限（但如果写了<code>default</code>这个词在前面就会报错）</p></blockquote><ul><li>类、方法和变量相关的关键字：<code>abstract</code>, <code>class</code>, <code>extends</code>, <code>final</code>, <code>implements</code>, <code>interface</code>, <code>native</code>, <code>new</code>, <code>static</code>, <code>strictfp</code>, <code>synchronized</code>, <code>transient</code>, <code>volatile</code>, <code>enum</code></li></ul><blockquote><p>一个native method就是一个java调用非java代码的接口（可以将native方法比作Java程序同Ｃ程序的接口）</p></blockquote><blockquote><p>使用strictfp关键字标记的方法必须使用严格的浮点计算来生成可再生的结果。严格的浮点计算表示浮点计算完全依照浮点规范IEEE-754来执行。目的是<strong>使浮点计算的结果在各处理器平台都一样</strong></p></blockquote><blockquote><p>transient修饰的对象不会被序列化（即使是在实现了Serializable接口的类中的对象）</p></blockquote>',8),u={href:"https://javabetter.cn/thread/volatile.html",target:"_blank",rel:"noopener noreferrer"},p=c("<ul><li>程序控制：<code>break</code>, <code>contine</code>, <code>return</code>, <code>do</code>, <code>while</code>, <code>if</code>, <code>else</code>, <code>for</code>, <code>instanceof</code>, <code>switch</code>, <code>case</code>, <code>default</code>, <code>assert</code></li></ul><blockquote><p>instanceof判断某个对象是否属于某个类型</p></blockquote><ul><li>异常处理：<code>try</code>, <code>catch</code>, <code>throw</code>, <code>throws</code>, <code>finally</code></li></ul><blockquote><p>throw用来抛出异常，throws用来声明异常（用于函数签名）</p></blockquote><ul><li>包相关：<code>import</code>, <code>package</code></li><li>基本类型：<code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>boolean</code></li><li>变量引用：<code>super</code>, <code>this</code>, <code>void</code></li></ul><blockquote><p>super调用父类的方法和字段</p></blockquote><ul><li>保留字：<code>goto</code>, <code>const</code></li></ul>",7);function h(b,f){const d=l("ExternalLinkIcon");return a(),r("div",null,[s,e("blockquote",null,[e("p",null,[e("a",u,[o("volatile"),i(d)]),o("保证不同线程对它修饰的变量进行操作时的可见性，即一个线程修改了某个变量的值，新值对其他线程来说是立即可见的")])]),p])}const m=t(n,[["render",h],["__file","summary.html.vue"]]);export{m as default};
