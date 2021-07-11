/*
 * @Author: yehuozhili
 * @Date: 2021-03-14 04:22:18
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-07 03:38:44
 * @FilePath: \dooringv2\packages\dooringx-lib\src\index.tsx
 */

// 初始化store用
export { useStoreState } from './hooks';
// 动态添加事件使用
export { useDynamicAddEventCenter } from './hooks';
// 画布组件
export { default as Container } from './components/container';
// 左边组件
export { default as LeftConfig } from './components/leftConfig';
// 预览组件
export { default as Preview } from './components/preview';
// 右侧配置组件
export { default as RightConfig } from './components/rightConfig';
// 画布外层
export { default as ContainerWrapper } from './components/wrapperMove';
// 控制全局 弹窗等
export { default as Control } from './components/control';
// 这个放到外层容器属性里 ...innerContainerDragUp()
export { innerContainerDragUp } from './core/innerDrag';
// 用于修改store
export { store } from './runtime/store';
// 用于获取运行中的实例
export { commander, componentRegister, formRegister, storeChanger } from './runtime';

export { unmountContextMenu } from './core/contextMenu';

// 用户的设置 包括可以获取store commander
export { default as UserConfig } from './config';
// 合并配置项
export { userConfigMerge } from './config';

//制作放大缩小的函数
export { scaleFn } from './core/scale/index';

// 以下导出用于制作插件
// 用于制作组件的函数
export { ComponentItemFactory } from './core/components/abstract';
// 用于制作组件配置项的函数
export { createPannelOptions } from './core/components/formTypes';
// 用于config类型定义
export { InitConfig } from './config';
// 用于制作函数转换
export { changeUserValueRecord } from './core/utils/index';
export { changeUserValue } from './core/utils/index';
// 用于制作快捷键
export { CommanderItemFactory } from './core/command/abstract';

export { defaultStore } from './config';
//state
export { focusState } from './core/focusHandler/state';
//utils
export { deepCopy, rgba2Obj, swap, createUid, arrayMove } from './core/utils';
export { specialCoList } from './core/utils/special';