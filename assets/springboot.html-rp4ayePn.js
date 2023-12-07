import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,d as t}from"./app-CONuJI3o.js";const p={},e=t(`<h1 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h1><p>虽然 Spring 的组件代码是轻量级的，但它的配置却是重量级的；所以 Spring Boot 的设计策略是通过【开箱即用】和【约定大于配置】来解决配置重的问题</p><p>SpringBoot的特点：</p><ol><li>为基于Spring的开发提供更快的入门体验</li><li>开箱即用，没有代码生成，也无需XML配置。同时也可以修改默认值来满足特定的需求</li><li>提供了一些大型项目中常见的非功能性特性，如嵌入式服务器、安全、指标，健康检测、外部配置等</li></ol><p>SpringBoot 不是对 Spring 功能上的增强，而是提供了一种快速使用 Spring 的方式</p><h2 id="分层结构" tabindex="-1"><a class="header-anchor" href="#分层结构" aria-hidden="true">#</a> 分层结构</h2><p>经典的 MVC 三层架构包括：表现层（UI）、业务逻辑层（BLL）、数据访问层（DAL） 区分层次的目的即为了“高内聚，低耦合”</p><ol><li>表现层（UI）：通俗讲就是展现给用户的界面，即用户在使用一个系统的时候他的所见所得</li><li>业务逻辑层（BLL）：针对具体问题的操作，也可以说是对数据层的操作，对数据业务逻辑处理</li><li>数据访问层（DAL）：该层所做事务直接操作数据库，针对数据的增添、删除、修改、更新、查找等</li></ol><p><code>@RestController</code>：用于标记一个类，表示它是一个控制器（Controller），用于处理请求和生成响应，并且该方法的<mark>返回值将直接作为响应体</mark>返回给客户端，而不是解析为视图。</p><p><code>@RequestMapping</code>：可以用于类级别和方法级别，在类级别上，用于指定处理所有请求的基本路径，设置后该类中的所有请求处理方法都将<mark>基于该路径</mark>进行映射；在方法级别上，用于指定处理特定请求路径的方法，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定 hello 方法处理 GET 请求，并且请求路径为 &quot;/hello&quot;。<code>@RequestMapping</code>注解还可以接受其他参数，用于指定请求的其他属性，如请求方法、请求头、请求参数等，这样可以更精确地匹配和处理请求。</p><p><code>@GetMapping</code>：标识一个方法可以处理 HTTP GET 请求，当客户端发送一个 HTTP GET 请求到指定的 URL 路径时，Spring 框架会调用被 <code>@GetMapping</code> 注解标识的方法来处理该请求，并返回相应的结果。</p><blockquote><p><code>@GetMapping</code> 是 <code>@RequestMapping(method = RequestMethod.GET)</code> 的简化形式，只处理 GET 请求</p></blockquote><p><code>@Service</code>：用于标记一个类，表示它是一个服务（Service）组件，服务组件通常用于处理业务逻辑，封装数据访问、事务管理、调用外部服务等操作。可以在其他类中通过<mark>依赖注入</mark>的方式使用该类，并调用其中的方法来执行业务逻辑。</p><p><code>@Autowired</code>：在 Spring Boot 应用程序中实现依赖注入，依赖注入是一种设计模式，它通过将依赖关系从代码中移除，由容器负责在运行时将依赖的实例注入到相应的位置。在需要注入依赖的地方使用 <code>@Autowired</code> 注解，可以告诉 Spring 容器自动装配相应的依赖对象。</p><p><code>@Repository</code>：标识一个类作为数据访问层（DAO）的组件，通常用于标识执行数据库访问操作的类，例如执行SQL查询、更新数据库等操作。标注后 Spring 为其提供相关的功能：</p><ul><li>异常转译：通过 Spring 的数据访问异常转译机制，将底层数据访问技术（如JDBC）抛出的异常转换为 Spring 的统一数据访问异常，简化了异常处理过程</li><li>自动事务管理：结合 Spring 的事务管理机制，可以自动管理数据访问层的事务，简化了事务管理的配置和编码工作</li><li>自动依赖注入：与 <code>@Autowired</code> 注解一起使用，实现对数据访问层的依赖注入，使得数据访问层与其他组件之间的协作更加方便</li></ul><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="springbootapplication" tabindex="-1"><a class="header-anchor" href="#springbootapplication" aria-hidden="true">#</a> SpringBootApplication</h3><p>启动 Spring 容器，加载 bean：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootStudyApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootStudyApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@SpringBootApplication</code> 可以看作是 <code>@Configuration</code>、<code>@EnableAutoConfiguration</code>、<code>@ComponentScan</code> 注解的集合</p><ul><li><code>@EnableAutoConfiguration</code>：启动自动配置机制</li><li><code>@ComponentScan</code>：扫描被 <code>@Component</code> 标识的 bean，默认扫描主类所在包下的所有类</li><li><code>@Configuration</code>：允许 Spring 上下文中注册额外的 bean</li></ul><h3 id="springboottest" tabindex="-1"><a class="header-anchor" href="#springboottest" aria-hidden="true">#</a> SpringBootTest</h3><p>测试类注解，写在测试类定义上方，用于设置 Junit 加载的 SpringBoot 启动类</p><h3 id="rest" tabindex="-1"><a class="header-anchor" href="#rest" aria-hidden="true">#</a> REST</h3><p>REST：表现形式状态转换（访问网络资源的格式）</p><p>REST 风格：</p><table><thead><tr><th style="text-align:left;">url</th><th style="text-align:left;"></th><th style="text-align:left;">request method</th></tr></thead><tbody><tr><td style="text-align:left;">http://localhost/users</td><td style="text-align:left;">查询所有用户信息</td><td style="text-align:left;">GET</td></tr><tr><td style="text-align:left;">http://localhost/users/1</td><td style="text-align:left;">查询指定用户信息</td><td style="text-align:left;">GET</td></tr><tr><td style="text-align:left;">http://localhost/users</td><td style="text-align:left;">添加</td><td style="text-align:left;">POST</td></tr><tr><td style="text-align:left;">http://localhost/users</td><td style="text-align:left;">修改</td><td style="text-align:left;">PUT</td></tr><tr><td style="text-align:left;">http://localhost/users/1</td><td style="text-align:left;">删除</td><td style="text-align:left;">DELETE</td></tr></tbody></table><p>根据 REST 风格对资源进行访问称为 RESTful</p><h2 id="集成第三方组件" tabindex="-1"><a class="header-anchor" href="#集成第三方组件" aria-hidden="true">#</a> 集成第三方组件</h2><h3 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> Mybatis</h3><p>必需的依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.26<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置相关信息：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>driver<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>name<span class="token operator">=</span>com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>Driver
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>url<span class="token operator">=</span>jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span><span class="token operator">//</span>localhost<span class="token punctuation">:</span><span class="token number">3306</span><span class="token operator">/</span>fmdata
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>username<span class="token operator">=</span>root
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>password<span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用注解的方式写查询语句：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FMDataDao</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from fmdata where id = #{csn}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">FMData</span> <span class="token function">getByCSN</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> csn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus" aria-hidden="true">#</a> Mybatis plus</h3><p>相关依赖，将 mybatis starter 改成：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库的配置不变，sql 语句可以简化成：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FMDataDao</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FMData</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h3><p>相关依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置：（也可以用之前的通用型配置）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>driver<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>name<span class="token operator">=</span>com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>Driver
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>url<span class="token operator">=</span>jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span><span class="token operator">//</span>localhost<span class="token punctuation">:</span><span class="token number">3306</span><span class="token operator">/</span>fmdata?serverTimezone<span class="token operator">=</span>UTC
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>username<span class="token operator">=</span>root
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>password<span class="token operator">=</span>zyx991106<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他与之前相同</p><h3 id="knife4j" tabindex="-1"><a class="header-anchor" href="#knife4j" aria-hidden="true">#</a> Knife4J</h3><p>生成 API 文档，添加依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.xiaoymin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>knife4j-openapi2-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关配置：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>knife4j<span class="token punctuation">.</span>enable<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将自定义的 API 接口添加到 UI 界面中显示</p><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3><p>在 SQL 语句中，分页有 <code>limit</code> 关键字（在原始查询的后面追加）这个追加的行为 Mybatis Plus 不会默认开启，需要手工控制 —— 使用【拦截器】</p><p>创建一个 MP 配置类，注意：</p><p>在 Spring 工程中，所有对象需要交给 Spring 管理（也就是 bean）因此需要将该类初始化成 bean，并加载到 Spring 容器。第三方 bean 的配置方式是加 <code>@Bean</code> 注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dolpvv<span class="token punctuation">.</span>ssmp<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">MybatisPlusInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">PaginationInnerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MPConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个拦截器的”壳“</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加一个分页的拦截器 并返回</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 test 中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SsmpApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">FMDataMapper</span> fmDataMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">IPage</span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fmDataMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 查询后 数据就存储在 page 中</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据存储在 <code>page.getRecords()</code> 中，<code>getPages()</code> 是总页数</p><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3><p>推荐使用 LambdaQueryWrapper，因为 QueryWrapper 接受的参数是列名字符串</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">selectBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;隧道标识=1123&quot;</span><span class="token punctuation">;</span>

    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FMData</span><span class="token punctuation">&gt;</span></span> lambdaQueryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 第一个参数判断为真 才会进行条件查询 否则查询所有</span>
    lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span>str <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token class-name">FMData</span><span class="token operator">::</span><span class="token function">getAdditionalInformation</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fmDataMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>lambdaQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中使用时间区间来进行条件查询：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">queryByTime</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">TimeRange</span> timeRange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FMData</span><span class="token punctuation">&gt;</span></span> lqw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> timeRange<span class="token punctuation">.</span><span class="token function">getStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span>timeRange<span class="token punctuation">.</span><span class="token function">getEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lqw<span class="token punctuation">.</span><span class="token function">between</span><span class="token punctuation">(</span><span class="token class-name">FMData</span><span class="token operator">::</span><span class="token function">getOccurTime</span><span class="token punctuation">,</span> timeRange<span class="token punctuation">.</span><span class="token function">getStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> timeRange<span class="token punctuation">.</span><span class="token function">getEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> iDataService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>lqw<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">ResponseStatus</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于请求体只能对应一个参数，因此新构建了一个实体类 TimeRange 来封装开始时间和结束时间。如果起始和结束时间不满足要求，则返回 false，表示查询失败，而 ResponseStatus.SUCCESS 表示连接成功</p><h2 id="参数校验" tabindex="-1"><a class="header-anchor" href="#参数校验" aria-hidden="true">#</a> 参数校验</h2><p>hibernate validation 对 Bean 校验的标准 validation-api 进行了实现，Spring Validation 是对hibernate validation 的二次封装，用于支持 spring MVC 参数自动校验</p>`,73),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","springboot.html.vue"]]);export{r as default};
