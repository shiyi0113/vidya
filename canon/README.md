# canon

计算机科学领域奠基性的论文、演讲、笔记。每一篇都是某个非常聪明的人花了大量时间想清楚、再用力压缩出来的东西。

每篇下面那段是我自己的判断，只回答三件事：**它独有什么、哪里说过头了、值不值得反复翻**。不是摘要。标 ✎ 的还没翻译。

按"会被脑子调用的频率"排了一个分级——从"每天用的刀"到"读一次就够"——见 [PRIORITY.md](PRIORITY.md)。下面这份目录按主题分，不按优先级。

## 愿景

工具应该长什么样，人和工具应该是什么关系。

✎ [vision/engelbart_augmenting_human_intellect.md](vision/engelbart_augmenting_human_intellect.md) — Augmenting Human Intellect: A Conceptual Framework (1962) · Douglas Engelbart

Bush 那篇是诗，这篇是工程。Engelbart 把"用工具增强人"落成一个具体的框架——H-LAM/T——说人和工具本来就是一个系统，要一块儿进化。1968 年那场 Mother of All Demos 是它的现场版，鼠标、超文本、协同编辑都在里面。读它是为了看清，一个真正工程化的人机协作模型该长什么样。

[vision/licklider_symbiosis.md](vision/licklider_symbiosis.md) — Man-Computer Symbiosis (1960) · J.C.R. Licklider

把人擅长什么、机器擅长什么各自掰开说，然后主张一种特别的关系：不是机器替人，不是机器当工具，是共生。这篇在 2026 年读惊人地当下——他对人机分工的判断大体还成立，只是 LLM 把那条边界往机器那边推了一点。今天讲"人 AI 协作"，最早严肃的讨论就在这里，没替代品。

[vision/victor_inventing_on_principle.md](vision/victor_inventing_on_principle.md) — Inventing on Principle (2012) · Bret Victor

是演讲，不是论文。Victor 说，伟大的工作来自找到一条原则，然后让它管住一切。演示部分是顶级修辞，但他真正在说的是一种关于创作的心理学主张——可以争，很多伟大的工作来自具体问题而不是原则。带着怀疑去看：他用极致的演示让一个未必普适的论点显得自明。它真正独特的地方，是把"原则驱动"这件事抬上桌面认真讨论。

[vision/victor_learnable_programming.md](vision/victor_learnable_programming.md) — Learnable Programming (2012) · Bret Victor

表面在批 Khan Academy，实际是一套编程的认知理论：大部分编程时间花在脑子里跑程序状态——环境只要把状态显出来，这部分工作就消失了。论证比《Inventing on Principle》扎实得多。这套话没人能反驳，但十多年过去，现实进展很慢。读它会让你重新看那些"看着在写代码、其实在脑子里跑模拟"的时间。

## 系统设计

怎么造大、能撑得久、不会自己塌的东西。

[systems/lamport_time_clocks.md](systems/lamport_time_clocks.md) — Time, Clocks, and the Ordering of Events (1978) · Leslie Lamport

证明了一件事：分布式系统里没有全局的"现在"，只有事件之间的因果先后。今天每个分布式数据库、共识算法、跨区服务，血缘都追得回这里。它给了一个用一辈子的动作——什么时候能说 A 在 B 之前发生？只有 A 的信息可能到达 B 时才能说。这是论文，不是 essay，精确本身就是它的贡献。

[systems/lampson_hints.md](systems/lampson_hints.md) — Hints for Computer System Design (1983) · Butler Lampson

做过 Alto、Bravo、第一台激光打印机的人。很多 hint 现在已经成了常识（"让常见情况快"、"扛不住就丢负载"），但常识把背后的"为什么"丢了——原文留着推理。每一条都有他自己造过的系统作背书。一个真正在造东西的人，把脑子里的规则原样讲出来，后来几乎没人再这么写。

[systems/parnas_decomposing_modules.md](systems/parnas_decomposing_modules.md) — On the Criteria To Be Used in Decomposing Systems into Modules (1972) · David Parnas

信息隐藏的源头。用同一个问题（KWIC index）的两种切法做对照，把"按步骤切"和"按变化点切"之间的差别，从口味之争抬成了实证之争。这种论证方法本身比结论还值钱——它教你怎么不带情绪地争模块边界。

[systems/saltzer_reed_clark_end_to_end.md](systems/saltzer_reed_clark_end_to_end.md) — End-to-End Arguments in System Design (1984) · Saltzer, Reed, Clark

端到端论证：可靠性、安全、加密这些事，只有在通信链路的两端做才能做对；中间环节最多顺便加速，替代不了端点。今天互联网几乎所有的分层选择都是它支起来的。读它，是为了搞清楚这条边界为什么在那里、什么时候你不该把功能往下沉。

[systems/wirth_lean_software.md](systems/wirth_lean_software.md) — A Plea for Lean Software (1995) · Niklaus Wirth

Pascal、Modula、Oberon 的作者。那句话——"软件变慢的速度比硬件变快还快"——对得不能再对，2026 年只会更对。但他给的处方就弱多了：Wirth 没真回答"为什么 lean software 在市场上输了"，他自己做的语言也没赢。这篇当一种道德承诺读，别当工程方案读。

## 语言与编程

语言怎么塑造思考，代码怎么塑造行为。

[languages/backus_can_programming_be_liberated.md](languages/backus_can_programming_be_liberated.md) — Can Programming Be Liberated from the von Neumann Style? (1977) · John Backus

FORTRAN 的发明人回过头来说，FORTRAN 这类语言根本错了——它把 von Neumann 瓶颈直接写进了语言。野心大，但有一半是错的：他给的替代方案（FP、FFP）没赢。精神倒是被部分吸收了（今天到处是函数式元素），但 Backus 把话说重了——命令式语言不是残疾，就是一种工具。真正独特的是一种姿态：一个工具的发明人反过来论证这件工具本身错了，这种姿态非常罕见。

[languages/hickey_simple_made_easy.md](languages/hickey_simple_made_easy.md) — Simple Made Easy (2011) · Rich Hickey

把 simple（单一职责、解开了的）和 easy（顺手、就在手边）分开。这个区分真的成立，加上他对词源的解读（complex 本意是"编织在一起"），更容易粘住脑子。它给一个几乎每场软件争论里都在打转的混淆起了名字——一旦你有了这对词，那个旧的混淆就消失了。

[languages/hickey_hammock_driven_development.md](languages/hickey_hammock_driven_development.md) — Hammock Driven Development (2010) · Rich Hickey

主旨：硬问题需要离开键盘的思考时间，包括睡眠。他对认知科学的引用挺松散，但实践上的建议——明确给自己留"看起来不像工作的时间"——是反着所有现代开发环境的默认值的。在 AI 让动手成本几乎归零的 2026 年，反而更值钱。

[languages/pike_notes_on_c.md](languages/pike_notes_on_c.md) — Notes on Programming in C (1989) · Rob Pike

贝尔实验室时期 Rob Pike 的笔记。Rules 1–6（没量过就别优化；数据结构比算法更重要）经得起时间。但很多风格条目是 C 文化的产物，翻译到今天要打折扣。它真正独特的地方在于：贝尔实验室那一脉"小心翼翼的简单"，没人比这篇说得更紧。

## AI 与机器学习

智能是什么，编程被它改写到什么程度。

✎ [ai/turing_computing_machinery_intelligence.md](ai/turing_computing_machinery_intelligence.md) — Computing Machinery and Intelligence (1950) · Alan Turing

AI 哲学的源头。"模仿游戏"这个设定比"机器能不能思考"这个原问题更耐用——它把看不见的"思维"换成看得见的"分辨不出来"，这一换，今天每一场 AI 评估的争论都还在用。出乎意料地好读，2026 年讲 AI 的话大半还没跳出他画的那个框。

✎ [ai/newell_simon_empirical_inquiry.md](ai/newell_simon_empirical_inquiry.md) — Computer Science as Empirical Inquiry (1976) · Newell & Simon

物理符号系统假说：智能就是一套操作符号的物理系统。AI 作为 CS 的奠基哲学立场就在这里。但 2026 年读它，更多是知道有过这么个立场，不是真要拿来用——深度学习已经把这个立场至少推到了"必要但不充分"。

[ai/karpathy_software_2_0.md](ai/karpathy_software_2_0.md) — Software 2.0 (2017) · Andrej Karpathy

"编程"在分裂成两件事：写显式逻辑（1.0），和给数据加损失函数让模型自己学出行为（2.0）。这个区分比"用 AI 写代码"那类说法深得多——它说的不是工具，是软件本身在裂开。每次你犹豫"我现在是在写代码，还是在调一个模型"，回到这里。

[ai/sutton_bitter_lesson.md](ai/sutton_bitter_lesson.md) — The Bitter Lesson (2019) · Richard Sutton

一句话总结 AI 这 70 年：每次你想把人的知识手工编码进系统，长期都会输给那些靠算力做搜索和学习的方法。这条规律解释了为什么专家系统输给统计 ML、统计 ML 输给深度学习、深度学习还在往更大的算力堆。短，几页纸。但凡要评估 AI 路径，都得拿它来量。一年读一次都不亏。

## 职业与思考

怎样做有分量的工作。做事的人该怎么想问题。

[career/brooks_no_silver_bullet.md](career/brooks_no_silver_bullet.md) — No Silver Bullet (1986) · Fred Brooks

论点：没有哪一种单一技术能让软件开发提效 10x，因为软件的难处大半是本质的（写规约、做设计、测概念结构），不是附属的（工具不顺手那种）。40 年过去这个判断撑住了——语言、IDE、版本控制、云，没有一个真的给了 10x。今天唯一悬着的问题是：AI 是不是要打破这条？Brooks 给了评估这个问题的框架。它真正独特的，是一个分类法——过去 40 年所有提效声明都能装进去。

[career/dijkstra_cruelty.md](career/dijkstra_cruelty.md) — On the Cruelty of Really Teaching Computer Science (1988) · Edsger Dijkstra

一篇容易让人站队的檄文。有些洞见是真的——他批评把计算机拟人化的那种说法（"计算机思考、记忆、学习"这类话偷偷塞进了不该有的本体论），这一刀挺准；有些就是精英主义且错，比如说 BASIC 用户脑子已经废了。它的价值是激起反驳，不是当指南。带着不同意去读。

✎ [career/hamming_you_and_your_research.md](career/hamming_you_and_your_research.md) — You and Your Research (1986) · Richard Hamming

一份"怎么让你的研究不平庸"的实操手册，不是回忆录。两个核心问题——"你最重要的问题是什么？""为什么不在做它？"——简单、普适、扎人。Hamming 自己活在贝尔实验室那种允许员工下班做自己研究的环境里，具体建议带着那个环境的影子，但那两个问题穿过任何环境都还在。

[career/hoare_emperors_old_clothes.md](career/hoare_emperors_old_clothes.md) — The Emperor's Old Clothes — ACM Turing Lecture (1980) · C.A.R. Hoare

一个工程师跨越几十年的自传式演讲：Algol 60 的设计、CSP 的来源、为发明 null 引用公开道歉。具体技术细节过时了，但那个最大的教训——你该减功能，不是加——一直成立。一个老资格工程师当众复盘自己当年错的地方，这种东西在工程文献里很少见。

[career/shannon_creative_thinking.md](career/shannon_creative_thinking.md) — Creative Thinking (1952) · Claude Shannon

信息论的奠基者讲他自己怎么做创造性工作。给了一份动作清单：简化、找类似问题、换种表示、推广、反证。方法本身不是 Shannon 原创的（Polya 也讲过类似的），但 Shannon 的压缩力和权威让这份清单落得下来。它独特的地方是：一个真正在第一档做出东西的人，亲口讲自己的方法。

[career/thompson_trusting_trust.md](career/thompson_trusting_trust.md) — Reflections on Trusting Trust — ACM Turing Lecture (1984) · Ken Thompson

大约 5 页，证明了一件深的事：信任总要在某处停下来，而软件的信任链可以在根上被动手脚——一个被植入的编译器能让自己一直复制下去，哪怕你重新用干净的源码编译它。今天的供应链攻击（xz、SolarWinds）就是这件事的现实版本。一个证明，永久改变你看软件信任的方式。
