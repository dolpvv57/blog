import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-CONuJI3o.js";const e={},p=t(`<h1 id="设置日志logback" tabindex="-1"><a class="header-anchor" href="#设置日志logback" aria-hidden="true">#</a> 设置日志Logback</h1><p>在没有配置文件的情况下，Logback 的日志信息会输出到控制台 配置文件在 src/main/resources 下，一般命名为 <code>logback-spring.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--
configuration 有三个属性：
scan：当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。
scanPeriod：设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒当scan为true时，此属性生效。默认的时间间隔为1分钟。
debug：当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org/springframework/boot/logging/logback/defaults.xml<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 定义日志文件名称 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APP_NAME<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sping-demo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 定义日志文件的路径 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOG_PATH<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>D:/Project/logs/\${APP_NAME}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 定义日志的文件名 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOG_FILE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${LOG_PATH}/sping-demo.log<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 滚动记录日志，先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APPLICATION<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 指定日志文件的名称 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>\${LOG_FILE}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
          当发生滚动时，决定 RollingFileAppender 的行为，涉及文件移动和重命名
          TimeBasedRollingPolicy： 最常用的滚动策略，它根据时间来制定滚动策略，既负责滚动也负责触发滚动。
          --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rollingPolicy</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.TimeBasedRollingPolicy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
           滚动时产生的文件的存放位置及文件名称
           %d{yyyy-MM-dd}：按天进行日志滚动
           %i：当文件大小超过maxFileSize时，按照i进行文件滚动
           --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>\${LOG_FILE}-%d{yyyy-MM-dd}-%i.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
           可选节点，控制保留的归档文件的最大数量，超出数量就删除旧文件。假设设置每天滚动，
           且maxHistory是7，则只保存最近7天的文件，删除之前的旧文件。
           注意，删除旧文件时，那些为了归档而创建的目录也会被删除。
           --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxHistory</span><span class="token punctuation">&gt;</span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxHistory</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
           当日志文件超过maxFileSize指定的大小时，根据上面提到的%i进行日志文件滚动
           注意此处配置SizeBasedTriggeringPolicy是无法实现按文件大小进行滚动的，
           必须配置timeBasedFileNamingAndTriggeringPolicy
           --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeBasedFileNamingAndTriggeringPolicy</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>50MB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeBasedFileNamingAndTriggeringPolicy</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rollingPolicy</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 日志输出格式： --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.PatternLayout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [ %logger{50} : %line ] - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ch.qos.logback.core.ConsoleAppender 表示控制台输出 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
       日志输出格式：
           %d表示日期时间，%green 绿色
           %thread表示线程名，%magenta 洋红色
           %-5level：级别从左显示5个字符宽度 %highlight 高亮色
           %logger{36} 表示logger名字最长36个字符，否则按照句点分割 %yellow 黄色
           %msg：日志消息
           %n是换行符
       --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.PatternLayout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%green(%d{yyyy-MM-dd HH:mm:ss.SSS}) [%magenta(%thread)] %highlight(%-5level) %yellow(%logger{36}): %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--
   root与logger是父子关系，没有特别定义则默认为root，任何一个类只会和一个logger对应，
   要么是定义的logger，要么是root，判断的关键在于找到这个logger，然后判断这个logger的appender和level。
   --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APPLICATION<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后在类上加 <code>@Slf4j</code> 注解，之后可以直接使用 log（添加 <code>@Slf4j</code> 注解后会自动添加一个 log 字段）记录日志：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m pretty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function o(c,i){return s(),a("div",null,l)}const r=n(e,[["render",o],["__file","logback.html.vue"]]);export{r as default};
