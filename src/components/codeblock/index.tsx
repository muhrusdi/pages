import React from "react"
import Highlight, {defaultProps} from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

const CodeBlock: React.FC = ({children}) => {
  const matches = children.props.className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
        {...defaultProps}
        code={children.props.children}
        theme={theme}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
  )
}

export default CodeBlock