# canon / 索引

持续更新——会增，也会减。读完之后觉得放错了的，会拿掉。

当前按"沉淀的厚度"和"对其他文章的解释力"分成几类，分类本身也会随内容变化调整。

每一篇入选前都尽量按 vidyā 的标准看过：作者在这件事上花过很长时间，付过代价，写的时候没有在表演。宁缺毋滥。

每一类内部按推荐阅读顺序排列——越靠前的，越能改变你读后面文章的方式。

---

## 推荐起点

最先读这五篇。不是因为它们最重要，是因为读完之后你看 canon 其它东西的方式会变。

1. **[You and Your Research](career/hamming_you_and_your_research.md)** — Hamming
2. **[Creative Thinking](career/shannon_creative_thinking.md)** — Shannon
3. **[Augmenting Human Intellect](vision/engelbart_augmenting_human_intellect.md)** — Engelbart
4. **[Simple Made Easy](languages/hickey_simple_made_easy.md)** — Hickey
5. **[The Bitter Lesson](ai/sutton_bitter_lesson.md)** — Sutton

---

## 一、计算的愿景

这一组的共同问题：计算机到底是用来做什么的？

### [Augmenting Human Intellect: A Conceptual Framework](vision/engelbart_augmenting_human_intellect.md) — Douglas Engelbart, 1962
Engelbart 是鼠标、超文本、协同编辑的发明者；1968 年他主持的演示后来被称为 "the Mother of All Demos"，一次性预演了之后五十年的个人计算图景。他一生在做同一件事：让人类的集体智识被工具放大。本文是他这件事的纲领——提出 H-LAM/T 框架：人与他的语言、人工物、方法论、训练共同构成一个增智系统。我们今天习以为常的工作方式，几乎都可以追溯到这份纲领。

### [Man-Computer Symbiosis](vision/licklider_symbiosis.md) — J.C.R. Licklider, 1960
Licklider 是 ARPA IPTO 的第一任主任。后来的互联网、个人计算的研究网络，是他用国防经费铺出来的。他自己是心理学出身——所以他从一开始就不把计算机看成"工具"，看成"伙伴"。本文比 Engelbart 的文章早两年，提出"人机共生"：人定义问题、做判断，机器处理可形式化的部分。HCI 与交互式计算的源头。

### [Inventing on Principle](vision/victor_inventing_on_principle.md) — Bret Victor, 2012
Victor 早年在 Apple 做交互设计，离开后用十多年时间打磨少数几篇极有重量的文章和演示（*Magic Ink*、*Up and Down the Ladder of Abstraction*），现在做 Dynamicland。他的产出节奏本身就在说明什么叫"在一件事上待够久"。本文是一场演讲。表面上讲"创造者需要与所创之物即时连接"，底下问的是：你愿意为某一条原则，组织你的一生吗？

### [Learnable Programming](vision/victor_learnable_programming.md) — Bret Victor, 2012
同上作者。对 Khan Academy 编程课程的回应。论点是：程序员不该在脑子里执行代码——环境应当让抽象当下可见。背后问的是工具与思考之间的关系。

---

## 二、系统设计的工艺

这一组是几位老工匠在自己的台子上做了几十年之后，留下的几页笔记。

### [Hints for Computer System Design](systems/lampson_hints.md) — Butler Lampson, 1983
Lampson 是 1992 年图灵奖得主、Xerox PARC 的核心成员之一。Alto——第一台带图形界面的个人计算机——是他参与设计的；激光打印机也是。他这一生都在做能跑起来的真东西，而且做得快。本文是他做了二十年系统之后写下的"提示"——不是定理，不是方法论，是一些他亲手验证过的判断。"Make it work, then make it work fast." "Plan to throw one away."

### [No Silver Bullet](career/brooks_no_silver_bullet.md) — Fred Brooks, 1986
Brooks 1999 图灵奖。早年在 IBM 领导 System/360——1960 年代最大的工程项目之一。他从那段亲身经历里写出了 *The Mythical Man-Month*，之后写了这篇。本文区分"本质复杂性"与"偶然复杂性"，预言十年内不会有任何单一技术带来一个数量级的生产力提升。三十多年过去，他基本对。

### [On the Criteria To Be Used in Decomposing Systems into Modules](systems/parnas_decomposing_modules.md) — David Parnas, 1972
Parnas 是软件工程"信息隐藏"原则的奠基者。值得记住的一件事：八十年代美国搞星球大战导弹防御时，他是少数几个看清这件事在工程上不可能、辞职离开的科学家。他对责任的立场，写在他的工程判断里。本文用同一个系统（KWIC index）的两种分解方式，论证模块划分应依据"什么会变"，而非"系统按什么顺序运行"。是面向对象与现代软件架构的所有讨论的起点。

### [End-to-End Arguments in System Design](systems/saltzer_reed_clark_end_to_end.md) — Saltzer, Reed, Clark, 1984
三位都在 MIT。David Clark 在 1981–1989 担任互联网首席协议架构师——TCP/IP 真正成型的那几年，是他在主持。这三个人造的不是论文，是基础设施。本文论证：网络的智能应当放在端点，而非中间节点。这条原则解释了为什么 TCP/IP 赢了 X.25，也解释了今天关于网络中立性的所有争论。

### [A Plea for Lean Software](systems/wirth_lean_software.md) — Niklaus Wirth, 1995
Wirth 是 Pascal、Modula-2、Oberon 的设计者，1984 图灵奖。他在 ETH Zürich 一生只做一件事：让语言与系统再简单一点。本文给出"Wirth 定律"——软件变慢的速度比硬件变快的速度更快——并讨论为什么。短，恼火，对今天仍然适用。

### [Notes on Programming in C](languages/pike_notes_on_c.md) — Rob Pike, 1989
Pike 在 Bell Labs（C 与 Unix 的诞生地）与 K&R 同处一屋檐下做 Unix。后来共同发明 UTF-8、设计 Plan 9，再后来在 Google 主导 Go。本文是他在贝尔实验室时期写的非正式 notes，讲 C 的命名、分支、数据结构选择——短，密度高，每一条都出自一个真正做过 Unix 内核的人。

---

## 三、编程作为思考

这一组的共同前提：编程不主要是打字，编程是想清楚。

### [Simple Made Easy](languages/hickey_simple_made_easy.md) — Rich Hickey, 2011
Hickey 是 Clojure 与 Datomic 的设计者，一个人（后来加入少数几人）做出了一门被严肃公司大规模采用的语言。在那之前他做过十几年作曲——这件事影响了他对"事物如何相互交织"的判断。本文（原为一场 talk）论证 *simple*（客观，未交织）与 *easy*（主观，熟悉）的区别。这套区分一旦看清楚，很多技术选型的争论会自动失语。

### [Hammock Driven Development](languages/hickey_hammock_driven_development.md) — Rich Hickey, 2010
同上。讲的是真正的工作发生在你不打字的时间里——躺在吊床上，让问题在背景中转。讲深度思考为什么不能被冲刺替代。

### [The Emperor's Old Clothes](career/hoare_emperors_old_clothes.md) — C.A.R. Hoare, 1980
Hoare 发明了快速排序、Hoare logic、CSP（Go 的并发模型来源于此）。这是他 1980 年的图灵奖演讲。本文是他对自己职业生涯的反省，包含著名的"十亿美元的错误"——空引用是他在 ALGOL W 中引入的，他公开为此道歉。一位资深从业者用自己的名字承认错误的文章。

### [Can Programming Be Liberated from the von Neumann Style?](languages/backus_can_programming_be_liberated.md) — John Backus, 1977
Backus 发明了 FORTRAN——在他写这篇之前，"高级语言"这个概念基本是他建立的。他在 IBM 工作了三十多年。这篇是他的图灵奖演讲。他在文中批评了他自己一辈子工作所奠基的范式：基于 von Neumann 架构的命令式编程。一个人在职业生涯顶峰公开质疑自己所建之物——这一姿态本身就值得读。

### [On the Cruelty of Really Teaching Computer Science](career/dijkstra_cruelty.md) — Edsger Dijkstra, 1988
Dijkstra 1972 图灵奖。算法、结构化编程、形式方法。脾气大，文笔毒辣。他用手稿（EWD 系列）写了几十年，每篇签自己名字。本文论证：计算机科学本质上是形式符号操作，不是工程。立场极端——但极端立场容易暴露问题。读他不是为了同意，是为了被迫表态。

---

## 四、时间与信任

两篇基础假设的重审。一个动了"时间"，一个动了"信任"。

### [Time, Clocks, and the Ordering of Events](systems/lamport_time_clocks.md) — Leslie Lamport, 1978
Lamport 2013 图灵奖。LaTeX 是他写的。Paxos、TLA+ 也是。分布式系统这一大半个领域是他建的。本文引入逻辑时钟与因果序——给"两个相距事件谁在先"这个问题第一个干净的答案。之后所有分布式系统的讨论都建立在这个基础上。

### [Reflections on Trusting Trust](career/thompson_trusting_trust.md) — Ken Thompson, 1984
Thompson 与 Ritchie 共同造了 Unix，也参与了 B、UTF-8、Plan 9、Go。1983 图灵奖。这是他的图灵奖演讲。他展示一种攻击：编译器可以被植入后门，而这个后门可以在它编译自身时再种入自身——源码里看不见，但代代相传。短。读完之后你看软件供应链的方式会变。

---

## 五、AI 的根基

四篇覆盖三个范式（图灵测试 / 符号 AI / 深度学习）和一个总结性判断。

### [Computing Machinery and Intelligence](ai/turing_computing_machinery_intelligence.md) — Alan Turing, 1950
Turing 一个人把"计算"这件事的形式定义做出来。战时破解 Enigma。1952 年因同性恋被英国法庭定罪并强制荷尔蒙治疗，两年后死，41 岁。本文提出图灵测试。但更值得读的部分在后半：他对"机器不能思考"的九种典型反驳逐一回应。这九种反驳今天仍在被反复重提——他七十多年前就已经答完。

### [The Bitter Lesson](ai/sutton_bitter_lesson.md) — Richard Sutton, 2019
Sutton 是强化学习两位奠基人之一，与 Barto 合写了那本经典教材。从 1980 年代起在做 RL——四十多年。2024 年与 Barto 共同获图灵奖。本文极短（不到两千字），但争议巨大。论点：AI 七十年的经验表明，依赖通用方法+算力的路径，长期总赢过依赖人类领域知识的路径。直接预言了今天大模型范式的胜利。

### [Software 2.0](ai/karpathy_software_2_0.md) — Andrej Karpathy, 2017
Karpathy 是 Fei-Fei Li 的博士、OpenAI 创始成员、特斯拉 AI 总监；他的 CS231n 和后来的 nanoGPT 教程影响了一整代人。本文是一篇短博客，但提出了一个被广泛采用的框架：神经网络是一种新的写软件的方式——你定义目标行为，让搜索（梯度下降）替你写程序。2017 年提出时并不显然，今天回头看几乎是事实陈述。

### [Computer Science as Empirical Inquiry](ai/newell_simon_empirical_inquiry.md) — Newell & Simon, 1976
两位都在 CMU，1975 图灵奖。Simon 同时是 1978 年经济学诺奖得主——很少有人同时在 AI、决策科学、组织行为、心理学留下基础工作。两人合作四十多年。本文是他们联合图灵奖演讲，提出"物理符号系统假说"：智能的充分必要条件是符号操作。这是经典符号 AI 的奠基命题，也是后来联结主义与深度学习要回应的命题。

---

## 六、做出好东西

两篇 meta：怎么挑要做的事，以及怎么做。

### [You and Your Research](career/hamming_you_and_your_research.md) — Richard Hamming, 1986
Hamming 是 Bell Labs 的人——和 Shannon、Tukey 在同一栋楼的同一代人。误差校正码是他做的。Manhattan 项目早期他在场。他用职业生涯的后半段反复琢磨同一个问题：为什么有些人做出的工作能留下来，绝大多数人不能？本文是他在 Bell Labs 的一场演讲。直白，不留情面：如果你不在重要的问题上工作，你不会做出重要的工作。其它一切优先级判断都从这一句出发。

### [Creative Thinking](career/shannon_creative_thinking.md) — Claude Shannon, 1952
Shannon 一个人造出了信息论。MIT 的人，玩独轮车，会变魔术。能在一个人的工作里看到一个完整学科被完整铺设——上世纪只有少数几个例子，他是其中之一。本文是他 1952 年在贝尔实验室的一场非正式演讲，录音残存。讲的是他自己面对一个问题时的几种手法——简化、类比、提问、反向。罕见——天才本人愿意把自己工作时的内部步骤说出来，而且说得朴素。
