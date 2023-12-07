const n=JSON.parse(`{"key":"v-5d3029f9","path":"/posts/Java/8.html","title":"8 多态","lang":"zh-CN","frontmatter":{"description":"8 多态 public class Father { static { System.out.println(\\"我是父类: 静态代码块\\"); } Father() { System.out.println(\\"我是父类: 构造方法\\"); } } public class Child extends Father { static { System.out.println(\\"我是子类: 静态代码块\\"); } Child() { // 子类的构造函数中, 隐藏了父类的构造方法 super() System.out.println(\\"我是子类: 构造方法\\"); } } public class Main { public static void main(String[] args) { Father fa = new Child(); // 首次加载父类和子类 // 输出： // 我是父类: 静态代码块 // 我是子类: 静态代码块 // 我是父类: 构造方法 // 我是子类: 构造方法 } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/Java/8.html"}],["meta",{"property":"og:site_name","content":"Becky's"}],["meta",{"property":"og:title","content":"8 多态"}],["meta",{"property":"og:description","content":"8 多态 public class Father { static { System.out.println(\\"我是父类: 静态代码块\\"); } Father() { System.out.println(\\"我是父类: 构造方法\\"); } } public class Child extends Father { static { System.out.println(\\"我是子类: 静态代码块\\"); } Child() { // 子类的构造函数中, 隐藏了父类的构造方法 super() System.out.println(\\"我是子类: 构造方法\\"); } } public class Main { public static void main(String[] args) { Father fa = new Child(); // 首次加载父类和子类 // 输出： // 我是父类: 静态代码块 // 我是子类: 静态代码块 // 我是父类: 构造方法 // 我是子类: 构造方法 } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Becky"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8 多态\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Becky\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.77,"words":231},"filePathRelative":"posts/Java/8.md","excerpt":"<h1> 8 多态</h1>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Father</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">static</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"我是父类: 静态代码块\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token class-name\\">Father</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"我是父类: 构造方法\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Child</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Father</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">static</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"我是子类: 静态代码块\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 子类的构造函数中, 隐藏了父类的构造方法 super()</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"我是子类: 构造方法\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Main</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">Father</span> fa <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 首次加载父类和子类</span>\\n    <span class=\\"token comment\\">// 输出：</span>\\n    <span class=\\"token comment\\">// 我是父类: 静态代码块</span>\\n    <span class=\\"token comment\\">// 我是子类: 静态代码块</span>\\n    <span class=\\"token comment\\">// 我是父类: 构造方法</span>\\n    <span class=\\"token comment\\">// 我是子类: 构造方法</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
