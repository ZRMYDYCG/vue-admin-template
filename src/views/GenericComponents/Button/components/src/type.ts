// 定义按钮类型的常量数组，as const 语法使得数组元素是固定的，不会改变，可以用于类型守卫或类型断言，同时使用 as const 之后，buttonTypes 可以作为一个类型被使用
export const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger'] as const

// 定义 ButtonSize 类型别名，使用联合类型方式【联合类型允许将多个类型合并为一个类型】
export type ButtonSize = 'small' | 'default' | 'large'

export const buttonProps = {}
