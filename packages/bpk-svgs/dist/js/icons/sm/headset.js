import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" xmlnsXlink="http://www.w3.org/1999/xlink" {...this.props}><g stroke="#DFDCE3" strokeWidth=".2" transform="translate(1 1)"><use mask="url(#e)" xlinkHref="#a" /><use mask="url(#f)" xlinkHref="#b" /><use mask="url(#g)" xlinkHref="#c" /><use mask="url(#h)" xlinkHref="#d" /></g><path d="M17 9.866a3.05 3.05 0 0 0-.815-2.072c0-.034-.034-.034-.034-.068C15.947 3.99 12.82 1 9.017 1c-3.805 0-6.93 2.99-7.168 6.726 0 .034-.034.034-.034.068A2.987 2.987 0 0 0 1 9.866c0 1.563 1.36 2.865 2.888 3.068.17.034.34-.136.34-.305v-5.47c0-.17-.17-.34-.34-.305-.102 0-.238.034-.34.068-.068.034-.306-.08-.306-.147.68-2.616 2.99-4.518 5.775-4.518a5.905 5.905 0 0 1 5.741 4.484c.034.068-.217.189-.285.189-.102-.034-.238-.034-.34-.068-.17-.034-.34.136-.34.305v5.47c0 .17.17.34.34.305l.192-.003c.136 0 .195.053.161.188-.102.374-.272.816-.611 1.19-.374.407-.883.679-1.495.815-.068 0-.136 0-.204-.068-.204-.204-.51-.34-.883-.34-.611 0-1.121.374-1.121.85 0 .475.51.849 1.121.849.442 0 .85-.204 1.02-.51.033-.034.067-.102.135-.102.815-.17 1.46-.51 1.936-1.053.612-.68.782-1.529.85-2.038 0-.068.034-.136.101-.17.986-.51 1.665-1.53 1.665-2.684z" /></svg>;
  }

}