function deepFreeze(target) {
  //객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}
