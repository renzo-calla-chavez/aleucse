import {
  screenSizesReference,
  screenSizesWidth,
  screenSizes,
} from '../constants';

// eslint-disable-next-line consistent-return
export function resizeHandler(width) {
  if (width < screenSizesWidth.xs) {
    return 'xss';
  }
  if (screenSizesWidth.xs <= width && width < screenSizesWidth.sm) {
    return 'xs';
  }
  if (screenSizesWidth.sm <= width && width < screenSizesWidth.md) {
    return 'sm';
  }
  if (screenSizesWidth.md <= width && width < screenSizesWidth.lg) {
    return 'md';
  }
  if (screenSizesWidth.lg <= width) {
    return 'lg';
  }
}

export function getInitialSize() {
  return resizeHandler(
    document.documentElement.clientWidth || document.body.clientWidth,
  );
}

export function getScreenSizeRedux(size = getInitialSize()) {
  const initialScreenSize = { ...screenSizesReference };
  initialScreenSize[size] = true;
  initialScreenSize.current = size;
  initialScreenSize[screenSizes.isSmMdLg] =
    size === screenSizes.sm ||
    size === screenSizes.md ||
    size === screenSizes.lg;
  initialScreenSize[screenSizes.isSmMd] =
    size === screenSizes.sm || size === screenSizes.md;
  return initialScreenSize;
}
