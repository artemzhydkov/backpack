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
  }} {...props}><path d="M17 9.3v.2c0 .7-.1 1.3-.3 1.9 1.3.7 2.3 2 2.3 3.6 0 2.2-1.8 4-4 4-1.6 0-2.9-.9-3.6-2.3-.6.2-1.3.3-1.9.3h-.2c.8 2.3 3 4 5.7 4 3.3 0 6-2.7 6-6 0-2.6-1.7-4.8-4-5.7zm-1 .2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16 16 13.1 16 9.5zm-9.4 2.6l.9-1.2c.7.4 1.2.6 1.7.6.6 0 .9-.2.9-.6 0-.8-3.2-1-3.2-2.8 0-1.1.7-1.8 1.9-2V5h1.4v1.1c.8.1 1.4.4 1.9.9L11 8c-.4-.3-.8-.5-1.3-.5s-.8.1-.8.5c0 .8 3.2.8 3.2 2.7 0 1-.6 1.8-1.9 2.1V14H8.8v-1c-.7-.1-1.6-.4-2.2-.9z" /></svg>;
});