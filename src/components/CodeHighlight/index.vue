<template>
  语言：
  <el-select v-model="language" @change="languageChange" placeholder="Select" style="width: 240px">
    <el-option
        v-for="item in languageOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    />
  </el-select>
  <div style="height: 100vh;width: 100vh;line-height: 30px;padding: 5px;">
    <!--
          <highlightjs language="sql" :code="code"></highlightjs>
    -->
    <highlightjs :language="language" :code="code"></highlightjs>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {js, json, java, sql, yaml,xml} from '../../views/GenericComponents/Button/CodeHighlightData.ts'

//默认高亮JS代码
let code = ref(js)
let language = ref('javascript')
//语言选项
const languageOptions = [
  {
    value: 'javascript',
    label: 'js',
  },
  {
    value: 'java',
    label: 'Java'
  },
  {
    value: 'yaml',
    label: 'yaml',
  },
  {
    value: 'sql',
    label: 'sql',
  },
  {
    value: 'json',
    label: 'json',
  },
  {
    value: 'xml',
    label: 'xml',
    disabled: false,
  },
  {
    value: 'html',
    label: 'html',
    disabled: false,
  },
]

/**
 * 语言改变事件处理函数
 * @param language
 */
const languageChange = (language: string) => {
  if ('java' === language) {
    code.value = java
  } else if ('json' === language) {
    code.value = json
  } else if ('yaml' === language) {
    code.value = yaml
  } else if ('sql' === language) {
    code.value = sql
  } else if ('xml' === language) {
    code.value = xml
  } else {
    code.value = js
  }
}
</script>

<style lang="scss" scoped>

</style>
