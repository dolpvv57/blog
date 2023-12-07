const e=JSON.parse(`{"key":"v-ae30d226","path":"/posts/JVM.html","title":"JVM","lang":"zh-CN","frontmatter":{"title":"JVM","date":"2023-12-02T00:00:00.000Z","description":"1. Java内存区域详解 Java 程序运行时的数据区域有： 堆可以是连续空间，也可以不连续；可以大小固定，也可以在运行时按需扩展。堆的唯一目的就是存放对象实例，几乎所有对象实例以及数组都在这里分配内存。堆最容易出现的错误就是 OutOfMemoryError。 Java 虚拟机栈（简称栈）是线程私有的，因此它的生命周期和线程相同。除了本地方法之外的所有方法调用都通过栈来实现，方法调用的数据也通过栈来进行传递，每一次方法调用都会有一个对应的栈帧被压入栈中，方法调用结束后则有个栈帧弹出。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/JVM.html"}],["meta",{"property":"og:site_name","content":"Becky's"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:description","content":"1. Java内存区域详解 Java 程序运行时的数据区域有： 堆可以是连续空间，也可以不连续；可以大小固定，也可以在运行时按需扩展。堆的唯一目的就是存放对象实例，几乎所有对象实例以及数组都在这里分配内存。堆最容易出现的错误就是 OutOfMemoryError。 Java 虚拟机栈（简称栈）是线程私有的，因此它的生命周期和线程相同。除了本地方法之外的所有方法调用都通过栈来实现，方法调用的数据也通过栈来进行传递，每一次方法调用都会有一个对应的栈帧被压入栈中，方法调用结束后则有个栈帧弹出。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Becky"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Becky\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. Java内存区域详解","slug":"_1-java内存区域详解","link":"#_1-java内存区域详解","children":[]},{"level":2,"title":"2. Java对象创建的过程","slug":"_2-java对象创建的过程","link":"#_2-java对象创建的过程","children":[]},{"level":2,"title":"3. JVM垃圾回收详解","slug":"_3-jvm垃圾回收详解","link":"#_3-jvm垃圾回收详解","children":[{"level":3,"title":"1) 内存分配和回收原则","slug":"_1-内存分配和回收原则","link":"#_1-内存分配和回收原则","children":[]},{"level":3,"title":"2) 死亡对象的判断方法","slug":"_2-死亡对象的判断方法","link":"#_2-死亡对象的判断方法","children":[]},{"level":3,"title":"3) 垃圾收集器","slug":"_3-垃圾收集器","link":"#_3-垃圾收集器","children":[]}]},{"level":2,"title":"4. 类加载","slug":"_4-类加载","link":"#_4-类加载","children":[]}],"git":{},"readingTime":{"minutes":9.22,"words":2766},"filePathRelative":"posts/JVM.md","localizedDate":"2023年12月2日","excerpt":"<h2> 1. Java内存区域详解</h2>\\n<p>Java 程序运行时的数据区域有：</p>\\n<figure><img src=\\"/assets/study/JVM/1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>堆可以是连续空间，也可以不连续；可以大小固定，也可以在运行时按需扩展。堆的唯一目的就是存放对象实例，几乎所有对象实例以及数组都在这里分配内存。堆最容易出现的错误就是 <mark>OutOfMemoryError</mark>。</p>\\n<p>Java 虚拟机栈（简称栈）是线程私有的，因此它的生命周期和线程相同。除了本地方法之外的所有方法调用都通过栈来实现，方法调用的数据也通过栈来进行传递，每一次方法调用都会有一个对应的栈帧被压入栈中，方法调用结束后则有个栈帧弹出。</p>","autoDesc":true}`);export{e as data};
