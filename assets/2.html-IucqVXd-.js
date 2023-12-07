import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,d as t}from"./app-CONuJI3o.js";const r="/blog/assets/study/Java/1.png",c="/blog/assets/study/Java/2.png",d={},s=t('<h1 id="_2-对象" tabindex="-1"><a class="header-anchor" href="#_2-对象" aria-hidden="true">#</a> 2 对象</h1><h2 id="_2-2-创建对象" tabindex="-1"><a class="header-anchor" href="#_2-2-创建对象" aria-hidden="true">#</a> 2.2 创建对象</h2><h3 id="对象储存在什么地方" tabindex="-1"><a class="header-anchor" href="#对象储存在什么地方" aria-hidden="true">#</a> 对象储存在什么地方</h3><ol><li><mark>寄存器</mark>，位于处理器的内部，数量极其有限，根据需求分配，开发人员不能直接控制</li><li><mark>栈(堆栈)</mark>，位于RAM(主存)，栈指针向下移动-&gt;分配内存，栈指针向上移动-&gt;释放内存，对象的引用存在堆栈，对象本身不在</li><li><mark>堆</mark>，位于RAM(主存)，存放所有的Java对象</li><li><mark>常量存储</mark>，通常直接存放在程序代码内部</li><li><mark>非RAM存储</mark>，存活于程序之外，不受程序控制</li></ol><p>补充存储区域的科普：（缓存指CPU里面的L1、L2缓存）</p><figure><img src="'+r+'" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure><figure><img src="'+c+'" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure><h2 id="_2-4-创建新的类" tabindex="-1"><a class="header-anchor" href="#_2-4-创建新的类" aria-hidden="true">#</a> 2.4 创建新的类</h2><p>如果类的某些成员是基本类型，则Java会自动给它初始化默认值；如果是类外的局部变量<code>int x;</code>，则不会给它赋初始值。</p><h2 id="_2-5-static关键字" tabindex="-1"><a class="header-anchor" href="#_2-5-static关键字" aria-hidden="true">#</a> 2.5 static关键字</h2><p><code>static</code>：创建一个域，这个域不与该类的任何对象关联，为这个域分配单一的存储空间。</p><p><code>static</code>修饰的字段成为类的静态成员或静态方法，这些成员只有一份存储空间，可以通过对象访问，也可以直接通过类来访问（推荐通过类名访问，给编译器优化提供更好的机会）</p><p>非static字段则是每个对象都有一份存储空间。</p>',13),o=[s];function n(h,l){return i(),e("div",null,o)}const m=a(d,[["render",n],["__file","2.html.vue"]]);export{m as default};