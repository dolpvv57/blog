import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,d as s}from"./app-CONuJI3o.js";const o="/blog/assets/study/Java/4.png",c={},t=s(`<h1 id="_21-并发" tabindex="-1"><a class="header-anchor" href="#_21-并发" aria-hidden="true">#</a> 21 并发</h1><h2 id="_21-3-共享受限资源" tabindex="-1"><a class="header-anchor" href="#_21-3-共享受限资源" aria-hidden="true">#</a> 21.3 共享受限资源</h2><h3 id="synchronized关键字" tabindex="-1"><a class="header-anchor" href="#synchronized关键字" aria-hidden="true">#</a> synchronized关键字</h3><p><code>synchronized</code>可以加到方法前面，表示对方法上锁；也可以加到代码块前面，如果加到代码块前面，就一定要在括号内指定一个锁，这个锁可以是一个对象，也可以是一个类</p><p><mark>所有对象自动含有单一的锁</mark>，在该对象上调用任意的被<code>synchronized</code>修饰的方法都会对对象进行加锁，加锁后该对象其他所有的<code>synchronized</code>修饰的方法都不能用。</p><blockquote><p>使用并发时最好将域设置为private，否则synchronized不能防止其他任务直接访问域</p></blockquote><p><mark>一个任务可以多次获取对象的锁</mark>，方法调用方法时会发生这种情况。只有首先获得了锁的任务才可以继续获取多个锁，<u>JVM负责跟踪加锁的次数</u>。如果一个对象被解锁，计数为0，第一次给对象上锁，计数变为1，之后每当这个相同的任务在同一个对象上锁后计数+1，离开一个synchronized方法计数-1，当计数为0则表示锁被完全释放。</p><p>针对每个类也有一个锁，用于防止对<strong>static数据</strong>的访问</p><h3 id="显式的lock对象-reentrantlock" tabindex="-1"><a class="header-anchor" href="#显式的lock对象-reentrantlock" aria-hidden="true">#</a> 显式的Lock对象: ReentrantLock</h3><p>显式地创建、锁定和释放锁：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mutex</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//上锁</span>
    <span class="token comment">//...</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//释放锁</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-8-线程池" tabindex="-1"><a class="header-anchor" href="#_21-8-线程池" aria-hidden="true">#</a> 21.8 线程池</h2><h3 id="什么是线程池" tabindex="-1"><a class="header-anchor" href="#什么是线程池" aria-hidden="true">#</a> 什么是线程池</h3><p>运用了池化的技术，管理一系列线程的资源池，有任务要处理时直接从线程池中获取线程来处理，处理后不会立即销毁而是等待下一个任务。使用线程池可以<u>降低资源消耗</u>(重复利用已经创造的线程，而不需要频繁创建和销毁)、<u>提高响应速度</u>(任务到达时立即执行而不需要等到线程创建)、<u>提高线程的可管理性</u>(统一的分配线程，避免过多创建而消耗系统资源)</p><h3 id="如何创建线程池-threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#如何创建线程池-threadpoolexecutor" aria-hidden="true">#</a> 如何创建线程池：ThreadPoolExecutor</h3><p>属于<code>java.util.concurrent</code></p><p>七大参数：</p><ol><li><code>corePoolSize</code>：核心工作线程的数量。</li><li><code>maximumPoolSize</code>：允许创建的最大线程数。</li><li><code>keepAliveTime</code>：超出核心工作线程数量后，创建的线程的最大存活时间。</li><li><code>unit</code>：存活时间的单位。</li><li><code>workQueue</code>：工作队列(任务队列)，当线程数达到核心线程数后，会将任务存储在阻塞队列中。</li><li><code>threadFactory</code>：创建线程的工厂。</li><li><code>handler</code>：拒绝策略；当队列已满并且线程数量达到最大线程数量时，会调用该方法处理任务。</li></ol><figure><img src="`+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="提交一个任务后会发生什么" tabindex="-1"><a class="header-anchor" href="#提交一个任务后会发生什么" aria-hidden="true">#</a> 提交一个任务后会发生什么</h3><p>如果当前线程池里的线程数少于核心工作线程数，则通过<code>ThreadFactory</code>创建一个线程用于执行任务。任务结束后线程不会被销毁，而是去阻塞队列中获取任务来执行。</p><p>细节1：如果提交任务时，线程池里的线程数少于核心线程数，那么不管池子里的线程能不能从任务队列中获取到任务，依然会创建新的线程而不是复用已有的线程。</p><p>如果池子里的线程数达到了核心线程数，那么会尝试把任务放入工作队列，等到空闲线程来执行；如果队列满了放不进去，就会判断现在的线程数有没有达到最大线程数，如果没有就会创造新的工作线程来执行提交的任务。</p><p>细节2：就算队列中有任务，新创建的线程还是会优先处理提交的任务，因此<mark>先提交的任务不一定先执行</mark></p><p>如果工作队列满了且池子里的线程也达到了最大线程数，则执行拒绝策略，JDK自带的拒绝策略<strong>有4种</strong>：</p><ul><li><code>AbortPolicy</code>：丢弃任务，抛出异常（运行时异常）</li><li>由提交任务的线程来执行任务</li><li>丢弃这个任务，且不抛异常</li><li>从队列中剔除最先进入队列的任务，之后再次提交任务</li></ul><p>如果不指定拒绝策略的话，默认是第一种，也可以通过自己实现接口来自定义拒绝策略，比如把任务存在数据库或者缓存中，之后从数据库或缓存中获取被拒绝的任务。</p><h3 id="内部实现-线程复用的原理" tabindex="-1"><a class="header-anchor" href="#内部实现-线程复用的原理" aria-hidden="true">#</a> 内部实现：线程复用的原理</h3><p>线程池内部将线程封装成<code>Worker</code>对象，<code>Worker</code>对象将线程和任务一起封装，调用<code>runWorker</code>方法让线程执行任务。<code>runWorker</code>方法内部使用了<code>while</code>死循环，每次任务执行完会不断地通过<code>getTask</code>方法获取任务，获取任务后调用<code>run</code>执行，这是线程可以复用的主要原因。</p><p>如果获取不到方法，线程退出。</p><p>细节：<code>Worker</code>继承了AQS，每次任务执行前调用<code>lock</code>方法，任务执行结束后调用<code>unlock</code>，如果想知道线程是不是在执行任务，可以尝试对它加锁，加锁成功则表示没有执行任务</p>',31),i=[t];function p(d,r){return a(),e("div",null,i)}const k=n(c,[["render",p],["__file","21.html.vue"]]);export{k as default};