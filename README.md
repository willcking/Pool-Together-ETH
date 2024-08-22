https://github.com/Dapp-Learning-DAO/Dapp-Learning/tree/main/basic/33-pooltogether

# PoolTogether
PoolTogether 是一个无损彩票协议. 用户要参与就需要存钱进去买他的彩票, 这部分作为本金会被 PoolTogether 存入到 Compound 等 DeFi 平台中赚取利息, 然后平台会一段时间开一次奖, 中奖的玩家可以拿到 DeFi 平台中这段时间的理财收益。

在奖池开设期间，加注或者取消下注，平台不会对用户进行惩罚措施。中奖的可能性取决于在奖池开设期间存款的数目与时间。如：对于一个七天的奖池，用户A在第一天存入了$100，存放了七天直到开奖，那么A的平均存放数额为($100*7day)/7day=$100；而B在开奖前最后一天存入$200，则B的平均存放数额为$200/7day=$28.57。

但是，该协议存在“冷启动”问题：奖池吸引存款需要大额的奖金，但奖池在初期没有大额奖金，难以吸引用户。因此，PoolTogether提出了两种机制有助于克服这个问题：Reserve Capture 和 POOL token distribution。

POOL token distribution：POOL token的提出解决了冷启动问题。在早期阶段，当奖池的增长还不足以达到吸引用户的速度时，分发POOL token作为额外奖励被写入到协议中。通过吸引用户持有POOL token以增加token的价格，这样增加了总奖池的金额。随着奖池金额的增加，额外分配的POOL token数目会不断减少。

Reserve Capture：Reverse Capture是保存在奖池中的“储蓄金”，由POOL token持有者控制的每次奖品的百分比。用于储备金的资金使奖品金额更大，而不会降低中奖的几率。而奖品的发放反过来有助于吸引更大的储备量。这创造了一个永久的增长周期。从数学上讲，增加了PoolTogether存款的预期价值。大量储备加速了增长速度。 Reverse Capture还可以作为一种机制来奖励在早期阶段帮助引导协议的POOL持有者，可以将其作为奖励分配给那些质押其POOL代币的人。
