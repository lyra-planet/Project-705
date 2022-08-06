import { Ident, mEventId } from 'base/uid'
import { GameContext } from './game_context'

export type Signal = { signalType: string }
export type SkillSignal = Signal & { skillId: string }
export type ActivitySignal = Signal & { activityId: string }
export type PlayerPropertyUpdatedSignal = Signal & { property: string }
export type TurnsSignal = Signal & { turns: number }
export type EventSignal = Signal & { eventId: string }

export const signals = {
   turnStart: (): Signal => ({ signalType: 'turn_start' }),
   turnOver: (): Signal => ({ signalType: 'turn_over' }),
   skillLearnt: (skillId: string): SkillSignal => ({
      signalType: 'skill',
      skillId
   }),
   activityPerformed: (activityId: string): ActivitySignal => ({
      signalType: 'activity',
      activityId
   }),
   playerPropertyUpdated: (property: string): PlayerPropertyUpdatedSignal => ({
      signalType: 'player',
      property,
   }),
   timer: (turns: number): TurnsSignal => ({
      signalType: 'turns',
      turns
   }),
   countDown: (turns: number): TurnsSignal => ({
      signalType: 'count_down',
      turns
   }),
   event: (sourceEventId: string): EventSignal => ({
      signalType: 'event',
      eventId: sourceEventId
   })
}

export function connect(gameContext: GameContext, signal: Signal, event: Ident) {
   const absoluteEventId = mEventId(gameContext.scope, event)
   // const absoluteEvent = gameContext.ruleSet.events[absoluteEventId]

   if (!(absoluteEventId in gameContext.ruleSet.events)) {
      console.warn(`[W] [connect] event '${event}(${absoluteEventId})' not found`)
      return
   }

   switch (signal.signalType) {
      case 'turn_start':
         gameContext.events.turnStart.add(absoluteEventId)
         break
      case 'turn_over':
         gameContext.events.turnOver.add(absoluteEventId)
         break
      case 'skill': {
         const sig = <SkillSignal>signal
         if (!(sig.skillId in gameContext.events.skillLearnt)) {
            gameContext.events.skillLearnt[sig.skillId] = new Set()
         }
         gameContext.events.skillLearnt[sig.skillId].add(absoluteEventId)
         break
      }
      case 'activity': {
         const sig = <ActivitySignal>signal
         if (!(sig.activityId in gameContext.events.activityPerformed)) {
            gameContext.events.activityPerformed[sig.activityId] = new Set()
         }
         gameContext.events.activityPerformed[sig.activityId].add(absoluteEventId)
         break
      }
      case 'player': {
         const sig = <PlayerPropertyUpdatedSignal>signal
         const propertyPath = sig.property.split('.')
         let container: any = gameContext.events.playerPropertyUpdated // any here for dynamic path
         for (const pathPart of propertyPath) {
            container = container[pathPart]
         }
         if (!(container instanceof Set<string>)) {
            console.warn(`[W] [connect] playerPropertyUpdated: invalid property path: '${sig.property}'`)
            return
         }
         (<Set<string>>container).add(absoluteEventId)
         break
      }
      case 'turns': {
         const sig = <TurnsSignal>signal
         gameContext.events.timedEvents.push({
            turn: sig.turns,
            eventId: absoluteEventId
         })
         break
      }
      case 'count_down': {
         const sig = <TurnsSignal>signal
         gameContext.events.timedEvents.push({
            turn: sig.turns + gameContext.turns,
            eventId: absoluteEventId
         })
         break
      }
      case 'event': {
         const sig = <EventSignal>signal
         const sourceEventId = mEventId(gameContext.scope, sig.eventId)
         if (!gameContext.events.eventsTriggered[sourceEventId]) {
            gameContext.events.eventsTriggered[sourceEventId] = new Set()
         }
         gameContext.events.eventsTriggered[sourceEventId].add(absoluteEventId)
         break
      }
      default:
         console.warn(`[W] [connect] invalid signal '${signal.signalType}'`)
   }
}

// TODO(chuigda): implement disconnect and disconnectAll

// eslint-disable-next-line no-unused-vars
export function disconnect(gameContext: GameContext, signal: Signal, event: Ident) { }

// eslint-disable-next-line no-unused-vars
export function disconnectAll(gameContext: GameContext, event: Ident) { }
