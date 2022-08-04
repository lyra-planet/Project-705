const { perfectStringify } = require('../src/util/stringify')

const { emptyRuleSet, compileRuleSet } = require('../src/executor/ruleset')
const coreRuleSet = require('../core_ruleset')

const ruleSet = emptyRuleSet()
compileRuleSet(ruleSet, coreRuleSet)

console.log(perfectStringify(ruleSet))
