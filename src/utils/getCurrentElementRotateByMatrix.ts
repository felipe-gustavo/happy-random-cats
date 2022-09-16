export function getCurrentElementRotateByMatrix(el: Element) {
  const st = window.getComputedStyle(el, null);
  const transformValue =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "none";

  if (transformValue === "none") {
    return 0;
  }

  const values = transformValue
    .match(/matrix\(([\d. ,-e]+)/)?.[1]
    .split(", ")
    .map((value) => parseFloat(value));

  if (values) {
    const [x, y] = values;
    let radians = Math.atan2(y, x);
    if (radians < 0) {
      radians += 2 * Math.PI;
    }
    const angle = Math.round(radians * (180 / Math.PI));
    return angle < 0 ? angle + 360 : angle;
  }

  throw new Error(
    `Cannot get rotate from element ${el.tagName}, value received isn't a matrix: ${transformValue}`
  );
}
