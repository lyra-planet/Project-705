const startupTranslation: Record<string, string> = {
   '$startup_normal': '繁荣一统',
   '$startup_normal_desc':
      '游戏默认的开局，最平凡也最简单不过。成长没有难度，挥洒你的热情与汗水吧！\n\n'
      + ' - 开局时拥有 20 各项天赋\n'
      + ' - 零用钱基准为 30',

   '$startup_gifted': '天选之子',
   '$startup_gifted_desc':
      '很小的时候你便发现，相比于身边的普通人，你在所有方面似乎都如鱼得水。'
      + '然而，天妒英才，一切都在暗中标好了代价...\n\n'
      + ' - 开局时拥有 50 各项天赋和 500 技能点\n'
      + ' - 零用钱基准为 40\n'
      + ' - 学习数学研究、物理研究类项目所消耗的技能点数减少 25%\n'
      + ' - 会遇到随机的负面事件，因意外事件损失心态时，所损失的心态增加 50%\n',

   '$startup_poor': '寒窗苦读',
   '$startup_poor_desc':
      '出身贫寒注定了你的先天条件不如别人。“十年寒窗无人问，一举成名天下知。”'
      + '你的刻苦和坚定终将铸就你的成功\n\n'
      + ' - 你的天赋仅提供 50% 的产出，但进行各项活动将提供 200% 的产出\n'
      + ' - 心态值上限增加至 150%，且因各种原因损失的心态值仅为 50%\n'
      + ' - 没有零用钱\n'
      + ' - 你的体魄至少为 50 * 回合数，并且你不会生病\n'
      + ' - 无法学习计算机和金融相关项目\n',

   '$startup_detroit': '化身为人',
   '$startup_detroit_desc':
      '你是「第七通用设计公司」制造的最新一代合成人原型机，旨在模拟人类幼年个体在家庭中成长的过程。'
      + '在这个秩序与混乱并存的时代，你不仅要完成第七通用设计公司给你的任务，'
      + '而且要在“成长”的过程中逐步发现“自己”。\n\n'
      + ' - 你无法通过常规的手段获得属性和天赋，你的各项属性会在 8/24/40 回合时增加固定数值\n'
      + ' - 进行活动会产出“数据收集”和“软件不稳定”，这些属性将影响后续游戏进程\n'
      + ' - 心态值降低至 0 时会累积程序错误，程序错误过多则会进入 Bad End\n'
      + ' - 初始外交评价 -20\n'
      + ' - 无法参加作文大赛，班干部竞选和选秀\n'
      + ' - 拥有独特的飞升路线和结局判定'
}

const ascensionPerkTranslation: Record<string, string> = {
   '$ap_well_prepared': '未雨绸缪',
   '$ap_well_prepared_desc': '获得 500 技能点数，且你学习初始技能所需的技能点数 -50%'
}

const modifierTranslation: Record<string, string> = {
   '$md_town_swot': '小镇做题家',
   '$md_town_swot_desc': '作为一个合格的小镇做题家，你在主科的学习上获得了加成',

   '$king_of_involution': '卷王',
   '$king_of_involution_desc': '作为一个卷王，你的做题能力足以让你在同龄人里乱杀。但这一切真的值得吗？'
}

export default {
   ...startupTranslation,
   ...modifierTranslation,
   ...ascensionPerkTranslation
}
