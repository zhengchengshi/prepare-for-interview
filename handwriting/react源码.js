import { shouldYield } from "../../explore react/react/packages/react-reconciler/src/SchedulerWithReactIntegration.new";
// 老版React不可中断的递归
function performUnitOfWork(fiber) {
  // 执行beginWork

  if (fiber.child) {
    performUnitOfWork(fiber.child);
  }

  // 执行completeWork

  if (fiber.sibling) {
    performUnitOfWork(fiber.sibling);
  }
}

// 新版React中通过遍历实现可中断的递归
// shouldYield会中止循环，直到浏览器有空闲时间后再继续遍历
function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}
function workLoopConcurrent() {
  // Perform work until Scheduler asks us to yield
  while (workInProgress !== null && shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}
// performUnitOfWork实现两个需求
// 1、创建下一个Fiber节点并赋值给workInProgress(下一轮循环中会使用，直到workInProgress为null)
// 2、将workInProgress与已创建的Fiber节点连接起来构成Fiber树

// Fiber Reconciler是从Stack Reconciler重构而来，通过遍历的方式实现可中断的递归
// 所以performUnitOfWork的工作可以分为两部分：“递”和“归”。

// “递”中调用beginWork，1、根据传入的Fiber节点创建子Fiber节点，2、将这两个Fiber节点连接起来。
// “归”中调用complete，处理返回的Fiber节点

function beginWork(current, workInProgress, renderLanes) {
  // update时：如果current存在可能存在优化路径，可以复用current（即上一次更新的Fiber节点）
  // 从current和workInProgress中获取props，会在后续是否复用中进行比较。
  const oldProps = current.memoizedProps;
  const newProps = workInProgress.pendingProps;
  // 可以通过current === null ?来区分组件是处于mount还是update。
  if (current !== null) {
    // update时
    if (
      oldProps !== newProps ||
      hasLegacyContextChanged() ||
      (__DEV__ ? workInProgress.type !== current.type : false)
    ) {
      // 存在更新，不可复用current
      didReceiveUpdate = true;
    } else if (!includesSomeLane(renderLanes, updateLanes)) {
      didReceiveUpdate = false;
      // 复用current
      switch (
        workInProgress.tag
        // 根据tag处理逻辑
      ) {
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    } else {
      didReceiveUpdate = false;
    }
  } else {
    // mount
    didReceiveUpdate = false;
  }
  // mount时：根据tag不同，创建不同的子Fiber节点
  switch (workInProgress.tag) {
    case IndeterminateComponent:
    // ...省略
    case LazyComponent:
    // ...省略
    case FunctionComponent:
    // ...省略
    case ClassComponent:
    // ...省略
    case HostRoot:
    // ...省略
    case HostComponent:
    // ...省略
    case HostText:
    // ...省略
    // ...省略其他类型
  }
}

// 根据fiber.tag不同，进入不同类型Fiber的创建逻辑，最终都会走到reconcileChildren()
function reconcileChildren(current, workInProgress, nextChild, renderLanes) {
  if (current === null) {
    // mount
    workInProgress.child = mountChildFiber(
      workInProgress,
      null, // mount时不可复用current
      nextChild,
      renderLanes
    );
  } else {
    // update
    workInProgress.child = reconcileChildFiber(
      workInProgress,
      current.child,
      nextChild,
      renderLanes
    );
  }
}
