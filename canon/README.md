# canon

计算机科学领域奠基性文章的中文版——图灵奖演讲、会议论文、公开讲座、笔记。每一篇都是某个非常聪明的人花了大量时间想清楚、再用力压缩的成品。

每一条下面的注是一段独立判断，不是摘要：这篇值不值得反复回来翻？它独有的贡献是什么？它在哪里高估了自己？标 ✎ 的为待翻译占位。

---

## 愿景

人与计算机的关系，以及工具应该是什么样子。

### [vision/bush_as_we_may_think.md](vision/bush_as_we_may_think.md) — As We May Think (1945) · Vannevar Bush

战时科学动员办公室主任的愿景文。Memex 的技术细节早过时，真正独特的贡献是认识论上的一步：主张人脑按联想工作，工具应该匹配联想而非强加层级。这一步被 Engelbart、Nelson、Berners-Lee 直接继承。但作为思想成品本身相对单薄——它的价值是作为水源，不是水本身。读一遍即可，不会反复回去翻。

### ✎ [vision/engelbart_augmenting_human_intellect.md](vision/engelbart_augmenting_human_intellect.md) — Augmenting Human Intellect: A Conceptual Framework (1962) · Douglas Engelbart

Bush 的愿景，Licklider 的共生，Victor 的当代继承——中间最关键的一环就是 Engelbart。他把 Bush 的诗变成可工程化的 H-LAM/T 系统，又在 1968 年用 Mother of All Demos 演给世界看。没有 Engelbart，Bush → Victor 这条线缺了承重墙。

### [vision/licklider_symbiosis.md](vision/licklider_symbiosis.md) — Man-Computer Symbiosis (1960) · J.C.R. Licklider

心理学家出身、后来主导 ARPA 资助网络计算研究的人。文章仔细分析人擅长什么、机器擅长什么，然后主张一种特定的伙伴关系——不是自动化、不是工具，是共生。这篇在 2026 年读起来惊人地当前：他的人机分工分析大体仍成立，只是 LLM 把边界往机器一侧推了一点。它是今天叫"人 AI 协作"的那件事最早的严肃 framing，没有任何替代品。

### [vision/victor_inventing_on_principle.md](vision/victor_inventing_on_principle.md) — Inventing on Principle (2012) · Bret Victor

演讲不是论文。Victor 主张伟大工作来自识别一个 principle 让它统摄一切。演示部分是顶级修辞，但核心论点是关于创造性工作的心理学／传记学主张——可以争辩，很多伟大工作来自具体问题而非原则。要带批判去读：他用极致演示让一个未必普适的论点显得自明。它独有的是把"原则驱动"严肃说出口。

### [vision/victor_learnable_programming.md](vision/victor_learnable_programming.md) — Learnable Programming (2012) · Bret Victor

表面在批 Khan Academy，真正内容是一个编程认知理论：大部分编程时间花在脑中模拟程序状态——如果环境显式呈现状态，这部分工作就消失了。论证比《Inventing on Principle》扎实得多。论点没被反驳，但十多年过去现实进展缓慢。读它会让你重新看待"看似在编码、其实在脑中跑模拟"的所有时间。

---

## 系统设计

如何构建大型、可靠、可维护的系统。

### [systems/lamport_time_clocks.md](systems/lamport_time_clocks.md) — Time, Clocks, and the Ordering of Events (1978) · Leslie Lamport

真正的研究论文，不是 essay。证明分布式系统里没有全局"现在"，只有事件的因果序。这是奠基性数学——每一个分布式数据库、共识算法、跨区服务的血缘都追到这里。给了我们一个永久的概念动作：什么时候能说 A 在 B 之前发生？只有当 A 的信息可能到达 B 时。这种确切性，其他系统论文很少有。

### [systems/lampson_hints.md](systems/lampson_hints.md) — Hints for Computer System Design (1983) · Butler Lampson

做过 Alto、Bravo、第一台激光打印机的人。这份名单里实践智慧密度最高的一篇。很多 hint 已经成了行业常识（"让常见情况快"、"shed load"），但常识丢掉了为什么——原文保留了推理。每条 hint 都有他亲手建过的系统作背书。这是一个在场的系统建造者把脑中规则讲出来，几乎没人再这样写过。

### [systems/parnas_decomposing_modules.md](systems/parnas_decomposing_modules.md) — On the Criteria To Be Used in Decomposing Systems into Modules (1972) · David Parnas

信息隐藏的源头。它用同一个问题（KWIC index）的两种分解对比，把"按步骤切 vs 按变化点切"从意见变成了论证。这个论证方法本身比结论更值钱——它教你怎么把模块化的争论从口味之争抬到证据之争。

### ✎ [systems/saltzer_reed_clark_end_to_end.md](systems/saltzer_reed_clark_end_to_end.md) — End-to-End Arguments in System Design (1984) · Saltzer, Reed, Clark

过去 50 年最有影响的系统论文之一，整个互联网的架构哲学搁在它上面。有 Lamport 没有它，像有牛顿没有伽利略。

### [systems/wirth_lean_software.md](systems/wirth_lean_software.md) — A Plea for Lean Software (1995) · Niklaus Wirth

Pascal、Modula、Oberon 的作者。经验观察对得不能再对（"软件变慢的速度比硬件变快还快"），2026 年只会更对。但处方部分更弱：Wirth 没有真正回答"为什么 lean software 在市场上输了"，他自己的语言也没赢。把它读成一种道德承诺，而不是工程方案。

---

## 语言与编程

编程语言的本质，以及怎样写好代码。

### [languages/backus_can_programming_be_liberated.md](languages/backus_can_programming_be_liberated.md) — Can Programming Be Liberated from the von Neumann Style? (1977) · John Backus

FORTRAN 的发明者反过来论证 FORTRAN 这类语言根本错了，把 von Neumann 瓶颈编码进了语言本身。野心很大但部分错了：具体替代方案（FP、FFP）没赢。精神被部分吸收（FP 元素满地都是），但 Backus 高估了——命令式语言不是残疾，只是一种工具。它独有的是一种姿态：一个工具的发明者反过来论证那个工具本身错了，这种姿态罕见且珍贵。

### [languages/hickey_simple_made_easy.md](languages/hickey_simple_made_easy.md) — Simple Made Easy (2011) · Rich Hickey

区分 simple（单一角色、解耦）和 easy（顺手、靠近）。这个区分本身是真的，词源 framing（complex 来自"编织在一起"）让它特别能粘住。它独有的：给一个遍布几乎每个软件争论中的混淆起了一对名字。一旦你有了这对词，你就再也看不见旧的混淆了。

### [languages/hickey_hammock_driven_development.md](languages/hickey_hammock_driven_development.md) — Hammock Driven Development (2010) · Rich Hickey

论硬问题需要离开键盘的思考时间，包括睡眠。对认知科学的引用比较松散，但实践建议——明确安排"看起来不像工作的思考时间"——逆着每个现代开发环境的偏置。在 AI 让动手成本接近零的 2026 年，反而更值钱。

### [languages/pike_notes_on_c.md](languages/pike_notes_on_c.md) — Notes on Programming in C (1989) · Rob Pike

贝尔实验室时期的 Rob Pike 笔记。Rules 1–6（不到测量过都不要优化；数据结构优先于算法）经典且永恒。但很多风格条目是 C 文化产物，翻译到今天要打折扣。它独有的：贝尔实验室"小心翼翼的简单"传统的最紧凑表达。

---

## AI 与机器学习

智能这件事本身——它是符号、是学习，还是别的东西？编程会被它改写吗？

### ✎ [ai/turing_computing_machinery_intelligence.md](ai/turing_computing_machinery_intelligence.md) — Computing Machinery and Intelligence (1950) · Alan Turing

至少这一篇应该在——它出乎意料地好读，且 2026 年关于 AI 的几乎每场争论都还在它画的框里。

### ✎ [ai/newell_simon_empirical_inquiry.md](ai/newell_simon_empirical_inquiry.md) — Computer Science as Empirical Inquiry (1976) · Newell & Simon

物理符号系统假说。AI 作为 CS 的奠基哲学位置，这一篇在那里。

### [ai/karpathy_software_2_0.md](ai/karpathy_software_2_0.md) — Software 2.0 (2017) · Andrej Karpathy

"编程"这件事正在被重新定义，这是把那个重新定义说清楚的文章。

### [ai/sutton_bitter_lesson.md](ai/sutton_bitter_lesson.md) — The Bitter Lesson (2019) · Richard Sutton

过去十年最有重量的短文，没有之一。组织了"如何思考 AI 进步"这件事。短到几页，每年回去读都不亏。

---

## 职业与思考

什么是好的程序员，什么是好的思考方式。

### [career/brooks_no_silver_bullet.md](career/brooks_no_silver_bullet.md) — No Silver Bullet (1986) · Fred Brooks

论点：没有单一技术能带来 10x 提升，因为软件难点大半是本质的（规约、设计、概念结构测试），不是附属的。40 年过去这个论断惊人地撑住了——语言、IDE、版本控制、云，没有一个真正给了 10x。今天唯一开放的问题是 AI 辅助是否打破它，而 Brooks 给了评估这个问题的框架。它独有的是一个能装下 40 年所有生产力宣称的分类法。

### [career/dijkstra_humble_programmer.md](career/dijkstra_humble_programmer.md) — The Humble Programmer — ACM Turing Lecture (1972) · Edsger Dijkstra

Dijkstra 在这里有一个立场——编程应该是数学——这个立场有争议，作为绝对主张大概是错的。演讲本身优美，但很多具体建议过时。它独有的是把编程当作 craft 的一种特定道德严肃性——这种严肃性今天稀缺，但 Dijkstra 给的版本偏教条。

### [career/dijkstra_cruelty.md](career/dijkstra_cruelty.md) — On the Cruelty of Really Teaching Computer Science (1988) · Edsger Dijkstra

这是名单里最两极分化的一篇。有些洞见真（拟人化批评），有些就是精英主义且错（说 BASIC 用户脑残）。它的价值是激发反驳，不是当指南。带着不同意去读。

### ✎ [career/hamming_you_and_your_research.md](career/hamming_you_and_your_research.md) — You and Your Research (1986) · Richard Hamming

是 Shannon《Creative Thinking》的天然伴侣（Hamming 还是 Shannon 演讲里的角色之一），但更直接讲怎么挑能改变领域的问题，怎么不浪费职业生涯做平庸的事。名单里 Dijkstra/Brooks/Hoare 三人讲职业，但都偏自省；Hamming 是缺的那种人本主义、行动导向的版本。

### [career/hoare_emperors_old_clothes.md](career/hoare_emperors_old_clothes.md) — The Emperor's Old Clothes — ACM Turing Lecture (1980) · C.A.R. Hoare

作为工程师跨越几十年的自传很精彩。技术细节过时，但元教训——你应该减特性，不是加——永恒。它独有的是一个资深工程师公开复盘自己错误（包括 null 引用）的视角，这在工程文学里非常罕见。

### [career/shannon_creative_thinking.md](career/shannon_creative_thinking.md) — Creative Thinking (1952) · Claude Shannon

信息论奠基者关于如何做创造性工作的演讲。列了一组变换：简化、找类似问题、改表示、推广、反证等。方法本身不是 Shannon 独创的（Polya 讲过类似的），但 Shannon 的压缩和权威让它落地。它独有的是：一个第一档创造性输出的人亲口讲他自己的方法清单。

### [career/thompson_trusting_trust.md](career/thompson_trusting_trust.md) — Reflections on Trusting Trust — ACM Turing Lecture (1984) · Ken Thompson

这是名单里单位篇幅信息量最高的一篇。约 5 页，证明了一个深的事实：信任必须在某处终止，而软件信任链可以在根部被颠覆。今天的供应链攻击（xz、SolarWinds）是它的直接实现。它独有的：一个单一的证明永久改变你看软件信任的方式。在所有篇目里，性价比第一。

### [career/wigner_unreasonable_effectiveness.md](career/wigner_unreasonable_effectiveness.md) — The Unreasonable Effectiveness of Mathematics in the Natural Sciences (1960) · Eugene Wigner

不是 CS，是物理。20 世纪科学哲学的伟大文章之一，但它不属于这份 CS 名单——除非和 Hamming 同名续篇（1980）或 Norvig/Halevy《Unreasonable Effectiveness of Data》(2009) 配对。在这里它是异类，价值是"引进问题，而不是答案"。坦白说我会把它从名单里拿掉，换一篇 CS 自己的同主题文章。
