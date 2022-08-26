export type ITranslationKey = string

export interface IPlayerAttributes {
   strength: number
   intelligence: number
   emotionalIntelligence: number
   memorization: number
   imagination: number
   charisma: number
}

export interface IPartialPlayerAttributes {
   strength?: number
   intelligence?: number
   emotionalIntelligence?: number
   memorization?: number
   imagination?: number
   charisma?: number
}

export interface ISkillCost {
   base: number
   attributes?: IPartialPlayerAttributes
}

export interface ISkillOutput {
   attributes: IPartialPlayerAttributes
}

export interface ISkill {
   ident: string
   name: ITranslationKey
   description: ITranslationKey

   category?: string
   cost: ISkillCost
   output?: ISkillOutput
   activities?: string[]
}

export interface IActivityOutput {
   attributes?: IPartialPlayerAttributes
   skillPoints?: number
   pressure?: number
   satisfactory?: number
   money?: number
}

export interface IActivity {
   ident: string
   name: ITranslationKey
   description: ITranslationKey

   category: string
   level: number
   output?: IActivityOutput
}

export interface IAscensionPerk {
   ident: string
   name: ITranslationKey
   description: ITranslationKey
}

export interface IPlayerStatus {
   attributes?: IPlayerAttributes
   talent?: IPlayerAttributes

   skillPoints?: number
   skills?: Record<string, ISkill>
   activities?: Record<string, IActivity>
   ascensionPerks?: Record<string, IAscensionPerk>

   pressure?: number
   satisfactory?: number
   money?: number
   moneyPerTurn?: number
}

export interface IPotentialFunctionResult {
   type: 'fn'
   result: boolean
   description: string
}

export interface IPotentialLogicOpResult {
   type: 'logicOp'
   result: boolean
   resultPieces: IPotentialResult[]
}

export interface IHasSkillOrNot {
   type: 'skill'
   result: boolean
   skillId: string
   skillName: ITranslationKey
}

export type IPotentialResult = IPotentialFunctionResult | IPotentialLogicOpResult

export type ISkillPotentialResult = IPotentialResult | IHasSkillOrNot

export interface IAvailableSkill {
   skill: ISkill
   cost: number
}

export interface IUnavailableSkill {
   skill: ISkill
   resultPieces: ISkillPotentialResult
}

export interface IComputedSkills {
   available: IAvailableSkill[]
   unavailable: IUnavailableSkill[]
}

export interface IUnavailableAscensionPerk {
   ascensionPerk: IAscensionPerk
   resultPieces: IPotentialResult[]
}

export interface IComputedAscensionPerks {
   available: IAscensionPerk[]
   unavailable: IUnavailableAscensionPerk[]
}

export interface IButton {
   ident: string

   text: ITranslationKey
   tooltip: ITranslationKey
}

export interface ISimpleDialog {
   uid: string

   title: ITranslationKey
   text: ITranslationKey
   closable: boolean
   options: IButton[]
}

export interface IGameState {
   turns: number
   player?: IPlayerStatus

   modifiers?: object
   variables: Record<string, any>

   computedModifiers?: object
   computedSkills?: IComputedSkills
   computedAscensionPerks?: IComputedAscensionPerks
}
