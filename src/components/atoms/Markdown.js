import React from 'react';
import marked from 'marked';

export const Markdown = ({ text, inline, ...rest }) => {
  const tag = inline ? 'span' : 'div';

  const innerHTML = {
    __html: inline ? marked.inlineLexer(text, []) : marked(text),
  };

  return React.createElement(tag, {
    dangerouslySetInnerHTML: innerHTML,
    ...rest,
  });
};
