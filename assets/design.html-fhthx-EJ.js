const n=JSON.parse(`{"key":"v-83625074","path":"/posts/design.html","title":"设计模式","lang":"zh-CN","frontmatter":{"title":"设计模式","date":"2023-12-02T00:00:00.000Z","description":"单例模式 单例模式：一个类只有一个实例，并提供一个访问该实例的全局节点。 运作方式： 如果首先创建了一个对象，后续再创建一个新对象， 单例模式下会获得之前已创建的对象， 而不是一个新对象。 应用场景：比如日期类、时间类，服务于整个项目，保持一致性。工具类用于提供一些统一的东西。 饿汉式单例模式 class Danli { public static Danli instance = new Danli(); private Danli() { } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/design.html"}],["meta",{"property":"og:site_name","content":"Becky's"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"单例模式 单例模式：一个类只有一个实例，并提供一个访问该实例的全局节点。 运作方式： 如果首先创建了一个对象，后续再创建一个新对象， 单例模式下会获得之前已创建的对象， 而不是一个新对象。 应用场景：比如日期类、时间类，服务于整个项目，保持一致性。工具类用于提供一些统一的东西。 饿汉式单例模式 class Danli { public static Danli instance = new Danli(); private Danli() { } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Becky"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Becky\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[{"level":3,"title":"饿汉式单例模式","slug":"饿汉式单例模式","link":"#饿汉式单例模式","children":[]},{"level":3,"title":"懒汉式单例模式","slug":"懒汉式单例模式","link":"#懒汉式单例模式","children":[]}]},{"level":2,"title":"抽象工厂模式","slug":"抽象工厂模式","link":"#抽象工厂模式","children":[]}],"git":{},"readingTime":{"minutes":2.09,"words":626},"filePathRelative":"posts/design.md","localizedDate":"2023年12月2日","excerpt":"<h2> 单例模式</h2>\\n<p>单例模式：一个类只有一个实例，并提供一个访问该实例的全局节点。</p>\\n<p>运作方式： 如果首先创建了一个对象，后续再创建一个新对象， 单例模式下会获得之前已创建的对象， 而不是一个新对象。</p>\\n<p>应用场景：比如日期类、时间类，服务于整个项目，保持一致性。工具类用于提供一些统一的东西。</p>\\n<h3> 饿汉式单例模式</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Danli</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Danli</span> instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Danli</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Danli</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};