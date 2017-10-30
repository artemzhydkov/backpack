function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M17.6 4.2l-2.2 1.1c-.3-.2-.7-.3-1.1-.4l-.8-2.3c-.1-.4-.4-.6-.8-.6h-1.5c-.4 0-.7.2-.8.6l-.7 2.3c-.4.1-.8.2-1.1.4L6.4 4.2c-.3-.2-.7-.1-1 .2l-1 1.1c-.3.3-.3.6-.2 1l1.1 2.2c-.2.2-.3.6-.4 1l-2.3.8c-.4.1-.6.4-.6.8v1.5c0 .4.2.7.6.8l2.3.8.4 1.1-1.1 2.2c-.2.3-.1.7.2 1l1.1 1.1c.3.3.6.3 1 .2l2.2-1.1c.3.2.7.3 1.1.4l.8 2.3c.1.3.4.6.8.6h1.5c.4 0 .7-.2.8-.6l.8-2.3 1.1-.4 2.2 1.1c.3.2.7.1 1-.2l1.1-1.1c.3-.3.3-.6.2-1L19 15.5c.2-.3.3-.7.4-1.1l2.3-.8c.3-.1.6-.4.6-.8v-1.5c0-.4-.2-.7-.6-.8l-2.3-.8-.4-1.1 1.1-2.2c.2-.3.1-.7-.2-1l-1.1-1.1c-.5-.1-.9-.2-1.2-.1zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" /></svg>;
});