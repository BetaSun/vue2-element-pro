export function classNamePrefixer(classNames) {
  return classNames.reduce((result, className) => {
    result[className] = function() {
      const prefix = this.$options.name || '';
      return `${prefix}-${className}`;
    };
    return result;
  }, {});
}