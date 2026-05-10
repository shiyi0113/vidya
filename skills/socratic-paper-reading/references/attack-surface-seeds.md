# Attack Surface Seeds

These are **seed examples** for generating paper-specific critiques in Phase 3. They are not a checklist. The goal is to prime thinking about what a hostile reviewer might attack, then generate critiques specific to the paper at hand.

For each paper type below: read the seeds for that type plus 1-2 adjacent types (papers often blur categories), then ask "what's the equivalent of these for *this specific paper*?"

---

## RL algorithm papers

**Hyperparameter parity.** Did baselines get the same hyperparameter search budget as the proposed method? Authors often tune their own method extensively while running baselines with reference settings. Check appendix carefully — if baseline HP search isn't documented, that's a flag.

**Number of seeds.** Below 5 seeds is essentially anecdotal in modern RL. Below 10 makes statistical claims questionable. Are confidence intervals or stratified bootstraps reported? Are the error bars over seeds or over evaluation episodes? (The latter is much less meaningful.)

**Aggregation choice.** Mean, median, IQM (Inter-Quartile Mean), or optimality gap? Different aggregations tell different stories. RLiable-style stratified bootstrap CIs are the current bar.

**Cherry-picked environments.** A method is presented as "general" but evaluated on 4 of the 26 envs in a benchmark. Why those 4? What happens on the other 22?

**Compute parity.** Does the new method use 10× the wall-clock or sample budget of baselines? Sample-efficient methods that consume vastly more compute per sample are still reporting a tradeoff, not a free lunch.

**Reward leakage.** Hand-engineered reward functions that smuggle in domain knowledge make the algorithm look smarter than it is. Trace where the reward came from.

**Generalization claims.** "Generalizes to new tasks" — same task family, or genuinely different? Held-out distribution should be specified concretely. Often "generalization" is "interpolation within training distribution".

**Eval frequency and best-checkpoint reporting.** Reporting the best checkpoint over training is different from reporting the final checkpoint. The former rewards being lucky.

---

## Training infrastructure papers

**Baseline hardware fairness.** Compared on H100s but baseline is benchmarked on A100s? Different interconnect (NVLink vs PCIe)? Different node count? These can swing throughput numbers by 2-5×.

**Workload representativeness.** Demonstrated on a 7B model with synthetic data — does it hold for 70B+ with real data and the realistic mix of operations (attention, MoE routing, gradient checkpointing)? Single-model ResNet-style benchmarks are often unrepresentative of modern workloads.

**Throughput: peak vs sustained vs achievable.** Peak FLOPs/s on a microbenchmark is not sustained throughput on a real training run. MFU (Model FLOPs Utilization) over the full run is the honest number.

**Convergence neutrality.** Speedup means nothing if convergence quality drops. Did they train to the same loss? Same downstream eval? For methods that change numerics (low-precision, fused ops), this is critical.

**Communication measurement.** When they report comm overhead, is it isolated communication time, or comm-not-overlapped-with-compute? The latter is what matters; the former always looks worse.

**Scaling claims.** Are scaling curves measured or extrapolated? Strong/weak scaling distinction maintained? Up to what scale does the actual measurement go?

**Memory measurements.** Peak, steady-state, or activation-only? Optimizer state? With or without gradient checkpointing? Different definitions hide different things.

**Baseline implementation quality.** Comparing against an under-optimized baseline (e.g., naive PyTorch DDP) when better baselines exist (FSDP, DeepSpeed ZeRO-3, Megatron) is a reviewer red flag. Top-tier baselines are the bar.

---

## Inference infrastructure papers

**Latency decomposition.** Time-To-First-Token (TTFT), Inter-Token-Latency (ITL), end-to-end? These should be reported separately. A method that helps TTFT but hurts ITL is not a free win.

**Tail latency.** P50 is decoration; P99 / P999 are what matter for serving. If only mean is reported, that's a flag.

**Batch size and arrival rate.** Throughput at saturating batch is different from throughput under realistic Poisson arrivals. What's the workload model?

**Quality-throughput tradeoff.** Speedups from quantization, speculative decoding, early exit, or KV compression typically come with quality loss. Was downstream eval quality measured at the operating point, not just at lossless settings?

**Hardware comparison fairness.** Same as training: GPU generation, interconnect, batch parallelism strategy.

**Cache behavior.** For KV cache methods: how does it behave with long context? Heavy reuse vs no reuse? Memory pressure at the boundary?

**Workload assumptions.** Many serving optimizations assume a workload shape (long prefill / short decode, or vice versa). Does the paper state its assumed workload distribution? Does it match production reality?

**Comparing apples-to-apples on systems.** Did they use the same kernels? Same scheduler? Many "novel" results disappear when you give the baseline a fair implementation.

---

## Embodied / robot learning papers

**Sim, sim-to-real, or real?** State this clearly. Sim-only results often do not transfer; sim-to-real with cherry-picked tasks is a known issue.

**Number of real trials.** Real robot evaluation often has laughably small N (10 trials per task is common). Confidence intervals at N=10 are wide. What's the variance across runs, environments, lighting?

**Task diversity vs task variety.** "100 tasks" can mean 100 genuinely different tasks, or 1 task with 100 object variations. Distinguish.

**Generalization scope.** In-distribution objects (seen in training)? Novel categories? Out-of-distribution lighting, backgrounds, distractors? Most papers test only the easiest level.

**Failure case reporting.** Do they show what fails, not just what works? Papers that only show successes are hiding a lot.

**Reset and intervention policy.** Were trials reset between attempts? Were there human interventions during rollouts (e.g., resetting object pose)? Continuous deployment is much harder than episodic eval.

**Teleoperation / human-in-the-loop disclosure.** Was there teleop assistance during data collection or eval that isn't mentioned in the abstract? Check methods carefully.

**Pretraining data leakage.** For VLA models: was eval scene/object overlap with pretraining data checked? Many "generalization" results are recall.

**Inference latency.** A policy that works at 1Hz is interesting research; a policy that works at 30Hz is deployable. Which is this?

---

## Benchmark / dataset papers

**Annotation quality.** What was the inter-annotator agreement? How were edge cases resolved? Was there a quality control pass?

**Selection bias.** Where did the data come from? Crowdsourced, scraped, expert-curated? Each has a known bias profile.

**Coverage of difficulty.** Easy / medium / hard subsets? Or one big bucket where SOTA solves it ~80% and the remaining 20% is a long tail of mostly-broken examples?

**Saturation risk.** Is SOTA already at 90%+? If so, what's the headroom for the field, and is the paper making a claim about a benchmark that's effectively done?

**Reproducibility.** Public split? Versioned? Clear eval protocol? Or "send us your model and we'll run it"?

**Train-test contamination.** Especially for benchmarks built from web data: is there leakage with common pretraining corpora?

---

## Position and survey papers

**Strawmen.** Are positions they argue against actually held by anyone? Or are they constructing strawmen to knock down?

**Selection of what to include.** Surveys make implicit claims via what they omit. What relevant work isn't cited?

**Author conflict of interest.** Especially for surveys advocating for a particular research direction — are the authors invested in that direction?

**Falsifiability.** A position paper should make claims that could be wrong. If every claim is "X is important", there's no content.

---

## Cross-cutting attacks (apply to most types)

**Ablation completeness.** Are the claimed contributions actually decomposed? Or is the "ablation" just removing one thing while leaving five others bundled?

**Statistical vs practical significance.** A 1.2% improvement that's "statistically significant" with N=3 is neither.

**The figure/text gap.** Sometimes the abstract claims more than the figures show. Read the figures literally — do they support the abstract's framing?

**The "we" vs "the field" gap.** Are claims about what *this method* does, or what the *category of methods* does? Conflating the two oversells.

**Engineering vs research contribution.** Excellent engineering applied to a known idea is valuable, but should be claimed as engineering, not novel research. Watch for the inverse too: a real research idea buried under bad engineering.

**Reproducibility.** Is code released? Are hyperparameters fully specified? Will someone be able to verify this in 6 months, or will it require emailing the authors?

---

## How to use these seeds in Phase 3

1. Identify the paper type (or types — many papers blend).
2. Read those sections plus the cross-cutting ones.
3. For each seed that *plausibly* applies, ask: "What would the equivalent attack be, *specifically* for this paper?"
4. Drop seeds that don't apply. Don't force-fit.
5. Look for paper-specific attacks the seeds didn't cover. Seeds are starting points, not boundaries.
6. Rank by severity — what would actually change the conclusion if true.

The output of this exercise is a critique tailored to the paper, not a generic audit. If the user could have written the same critique by reading any random paper of this type, the agent has failed.
