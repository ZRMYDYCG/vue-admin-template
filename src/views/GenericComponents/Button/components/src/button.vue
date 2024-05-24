<template>
  <button :class="computedClass" @click="onClick" :disabled="props.disabled">
    <span class="ik-button_inner">
      <img v-if="props.ikun" src="https://laine001.github.io/ikun-ui/ikun.gif" alt="">
      <svg-icon v-if="props.icon" :color="iconColor" :name="props.icon"></svg-icon>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { buttonProps } from './type.ts'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

const computedClass = computed(() => {
  const { type, disabled, round, size, plain } = props
  return [
    'ik-button',
    `ik-button-${type}`,
    `ik-button-${size}`,
    {
      'ik-button-disabled': disabled,
      'ik-button-plain': plain,
      'ik-button__round': round
    }
  ]
})

const iconColor = computed(() => {
  if(!props.type || props.type === 'default') return ''
  return '#ffffff'
})

const onClick = () => {
  emits('click')
}

defineExpose({
  type: props.type
})

</script>

<style lang="scss" scoped>
.ik-button {
  display: inline-flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  min-width: 60px;
  padding: 6px 20px;
  font-size: 14px;
  transition: transform 0.26s ease-in-out;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  border-radius: var(--default-radius);
  &.ik-button__round {
    border-radius: var(--default-round-radius);
  }
  .ik-button__inner {
    height: 24px;
    line-height: 24px;
    display: inline-flex;
    align-items: center;
    .ik-icon {
      width: 18px !important;
      height: 18px !important;
      margin: 0 2px;
    }
  }
  .loading-icon {
    animation: rotating 1.6s linear infinite;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:focus {
    outline: none;
  }
  &.ik-button-small {
    padding: 2px 12px;
  }
  &.ik-button-large {
    padding: 8px 24px;
  }
  &.ik-button-default {
    background-color: var(--default-color);
    background-color: var(--primary-color);
    &.ik-button-disabled {
      background-color: var(--primary-color-lighter-3);
      &:hover,
      &:active {
        background-color: var(--primary-color-lighter-3);
      }
    }
    &.ik-button-plain {
      background-color: var(--button-plain-bg);
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      &:hover {
        background-color: var(--button-plain-bg);
      }
      &:active {
        background-color: var(--button-plain-bg);
      }
    }
    &:hover {
      background-color: var(--primary-color-lighter-1);
    }
    &:active {
      background-color: var(--primary-color-darker-1);
    }
  }
  &.ik-button-success {
    color: #fff;
    background-color: var(--success-color);
    &.ik-button-disabled {
      background-color: var(--success-color-lighter-2);
      &:hover,
      &:active {
        background-color: var(--success-color-lighter-2);
      }
    }
    &.ik-button-plain {
      background-color: var(--button-plain-bg);
      border: 1px solid var(--success-color);
      color: var(--success-color);
      &:hover {
        background-color: var(--button-plain-bg);
      }
      &:active {
        background-color: var(--button-plain-bg);
      }
    }
    &:hover {
      background-color: var(--success-color-lighter-1);
    }
    &:active {
      background-color: var(--success-color-darker-1);
    }
  }
  &.ik-button-warning {
    color: #fff;
    background-color: var(--warning-color);
    &.ik-button-disabled {
      background-color: var(--warning-color-lighter-2);
      &:hover,
      &:active {
        background-color: var(--warning-color-lighter-2);
      }
    }
    &.ik-button-plain {
      background-color: var(--button-plain-bg);
      border: 1px solid var(--warning-color);
      color: var(--warning-color);
      &:hover {
        background-color: var(--button-plain-bg);
      }
      &:active {
        background-color: var(--button-plain-bg);
      }
    }
    &:hover {
      background-color: var(--warning-color-lighter-1);
    }
    &:active {
      background-color: var(--warning-color-darker-1);
    }
  }
  &.ik-button-danger {
    color: #fff;
    background-color: var(--danger-color);
    &.ik-button-disabled {
      background-color: var(--danger-color-lighter-2);
      &:hover,
      &:active {
        background-color: var(--danger-color-lighter-2);
      }
    }
    &.ik-button-plain {
      background-color: var(--button-plain-bg);
      border: 1px solid var(--danger-color);
      color: var(--danger-color);
      &:hover {
        background-color: var(--button-plain-bg);
      }
      &:active {
        background-color: var(--button-plain-bg);
      }
    }
    &:hover {
      background-color: var(--danger-color-lighter-1);
    }
    &:active {
      background-color: var(--danger-color-darker-1);
    }
  }
  &.ik-button__ikun {
    position: relative;
    overflow: hidden;
    .ik-button__inner {
      z-index: 1;
    }
    &::before,
    &::after {
      content: '';
      border-radius: 65px 21px 76px 14px / 90px 17px 111px 26px;
      background-image: linear-gradient(to right, lightgrey, grey);
      width: 20px;
      height: 20px;
      z-index: 0;

      position: absolute;
    }
    &::before {
      left: calc(50% - 21px);
      top: -2px;
    }
    &::after {
      right: calc(50% - 19px);
      top: -3px;
      transform: rotate(270deg);
    }
  }
  &.ik-button-disabled {
    cursor: not-allowed;
    &:hover,
    &:active {
      transform: none;
    }
  }
}
</style>
