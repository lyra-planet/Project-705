<template>
   <n-modal
      preset="dialog"
      :title="translate2(dialogInfo.title)"
      :closable="false"
      :close-on-esc="false"
      :mask-closable="false"
      :show="display"
      :auto-focus="false"
      @close="onClose"
   >
      <n-text type="primary">
         {{ translate2(dialogInfo?.text) }}
      </n-text>

      <div style="display: flex; flex-direction: column; row-gap: 1em; margin-top: 1em">
         <n-button
            v-for="button in dialogInfo?.options"
            :key="button.optionKey"
            :type="button.danger ? 'error' : 'primary'"
            strong
            :title="translate2(button.tooltip)"
            :bordered="true"
            @click="onClick(button.optionKey)"
         >
            {{ translate2(button.text) }}
         </n-button>
      </div>
   </n-modal>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { NModal, NText, NButton } from 'naive-ui'

import { ISimpleDialog } from '@protocol/index'
import { translate2 } from '@app/util/translation'

const props = defineProps<{ dialogInfo: ISimpleDialog }>()

const display = ref(true)

const emit = defineEmits<{
   (event: 'click', dialogId: string, buttonId: string): void,
   (event: 'closed', dialogId: string): void
}>()

function onClick(buttonId: string) {
   const dialogId = props.dialogInfo.uid || ''
   display.value = false
   emit('click', dialogId, buttonId)
}

function onClose() {
   const dialogId = props.dialogInfo.uid || ''
   display.value = false
   emit('closed', dialogId)
}

</script>

<style>
</style>
