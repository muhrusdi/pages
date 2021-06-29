import React, { useRef, useCallback, useState } from "react"
import SplitPane from "react-split-pane"
import Editor, { loader } from "@monaco-editor/react"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { EditorStyled, TabBarStyled, SplitBarStyled } from "./styled"
import initContent from "./initialContent"

const TabBar = React.memo(({handleSelectTab, tabSeleceted}) => {
  return (
    <TabBarStyled className="px-4">
      <div className="flex items-center text-sm rounded-md border border-blueGray-800 bg-blueGray-800 ">
        <div>
          <button onClick={() => handleSelectTab("html")} className={`px-2 py-1 rounded-tl-md w-14 text-center rounded-bl-md ${tabSeleceted("html")}`}>HTML</button>
        </div>
        <div>
          <button onClick={() => handleSelectTab("css")} className={`px-2 py-1 w-14 text-center ${tabSeleceted("css")}`}>CSS</button>
        </div>
        <div>
          <button onClick={() => handleSelectTab("javascript")} className={`px-2 py-1 w-14 text-center rounded-tr-md rounded-br-md ${tabSeleceted("javascript")}`}>JS</button>
        </div>
      </div>
    </TabBarStyled>
  )
})

const SplitBar = ({handleSplit, split}) => {
  const siSplit = (val) => split === val ? ({
    stroke: "rgba(86, 204, 242, var(--tw-text-opacity))",
    fill: "rgba(86, 204, 242, var(--tw-text-opacity))",
  }) : ({
    stroke: "rgba(71, 85, 105, var(--tw-bg-opacity))",
    fill: "rgba(71, 85, 105, var(--tw-bg-opacity))"
  })
  return (
    <SplitBarStyled className="flex">
      <div>
        <button onClick={() => handleSplit("vertical")} type="button" className="group rounded-md border border-transparent focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-700 dark:text-white">
          <span className="sr-only">Switch to vertical split layout</span>
          <svg width="28" height="28" viewBox="-5 -5 34 34" strokeWidth="1.5" {...siSplit("vertical")}>
            <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="1.25" fill="none"></rect><path d="M2.75 6c0-.69.56-1.25 1.25-1.25h7.25v14.5H4c-.69 0-1.25-.56-1.25-1.25V6z"></path>
          </svg>
        </button>
      </div>
      <div>
        <button onClick={() => handleSplit("horizontal")} type="button" className="group rounded-md border border-transparent focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400">
          <span className="sr-only">Switch to horizontal split layout</span>
          <svg width="28" height="28" viewBox="-5 -5 34 34" strokeWidth="1.5" {...siSplit("horizontal")}>
            <rect x="21.25" y="19.25" width="18.5" height="14.5" rx="1.25" transform="rotate(-180 21.25 19.25)" fill="none"></rect><path d="M21.25 11.25H2.75V6c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v5.25z"></path>
          </svg>
        </button>
      </div>
    </SplitBarStyled>
  )
}

const EditorPreview: React.FC = () => {
  const editorContainerRef = useRef(null)
  const previewRef = useRef(null)
  const [activeTab, setActiveTab] = useState("html")
  const [split, setSplit] = useState("vertical")

  loader.init()
    .then(monaco => {
      monaco.editor.defineTheme("night-owl", nightOwl)
    })

  const handleEditorDidMount = (editor) => {
    editorContainerRef.current = editor
    editorContainerRef.current.updateOptions({
      minimap: {
        enabled: false
      },
      lineNumbersMinChars: 3
    })
  }

  const inject = useCallback((content) => {
    previewRef.current.contentWindow.postMessage(content, "*")
  }, [])

  const handleEditorChange = (value) => {
    if (activeTab === "html") {
      inject({ html: value })
    }
    if (activeTab === "css") {
      inject({ css: value })
    }
    if (activeTab === "javascript") {
      inject({ js: value })
    }
  }

  const handleSelectTab = useCallback((val) => {
    setActiveTab(val)
  }, [])

  const tabSeleceted = (val) => activeTab === val ? "bg-gray-900" : null

  const handleSplit = (val) => {
    setSplit(val)
  }

  return (
    <EditorStyled className="bg-blueGray-900 rounded-md overflow-hidden code-play">
      <div className="border-b border-blueGray-800">
        <div className="flex justify-between h-12 items-center text-base">
          <div className="px-4">
            <div className="flex items-center">
              <div>
                <span className="text-base uppercase font-bold text-blue-light">Play</span>
              </div>
              <TabBar tabSeleceted={tabSeleceted} handleSelectTab={handleSelectTab}/>
            </div>
          </div>
          <div className="px-4">
            <SplitBar split={split} handleSplit={handleSplit}/>
          </div>
        </div>
      </div>
      <SplitPane
        split={split}
        size="50%"
        style={{position: "relative"}}
      >
        <div>
          <Editor
            height="300px"
            defaultLanguage={activeTab}
            path={activeTab}
            defaultValue={initContent[activeTab]}
            theme="night-owl"
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
          />
        </div>
        <div className="relative w-full h-full" style={{height: split === "horizontal" ? 300 : null}}>
          <iframe
            ref={previewRef}
            title="Preview"
            onLoad={() => {
              inject({
                html: initContent.html,
                css: initContent.css,
                js: initContent.javascript,
              })
            }}
            className="absolute w-full h-full bg-white"
            sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    @import url('https://rsms.me/inter/inter.css');
                    html {
                      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    }
                    @supports (font-variation-settings: normal) {
                      html { font-family: 'Inter var', sans-serif; }
                    }
                  
                    body {
                      @apply bg-black text-white;
                    }
                  </style>
                  <style id="_style">
                  </style>
                  <script id="_script">
                  </script>
                  <script>
                  var hasHtml = false
                  var hasCss = false
                  var visible = false
                  var hasJs = false
                  window.addEventListener('message', (e) => {
                    if (typeof e.data.clear !== 'undefined') {
                      setHtml()
                      setCss()
                      setJs()
                      checkVisibility()
                      return
                    }
                    if (typeof e.data.css !== 'undefined') {
                      setCss(e.data.css)
                    }
                    if (typeof e.data.html !== 'undefined') {
                      setHtml(e.data.html)
                    }
                    if (typeof e.data.js !== 'undefined') {
                      setJs(e.data.js)
                    }
                    checkVisibility()
                  })
                  function checkVisibility() {
                    if (!visible && hasHtml && hasCss) {
                      visible = true
                      document.body.style.display = ''
                    } else if (visible && (!hasHtml || !hasCss)) {
                      visible = false
                      document.body.style.display = 'none'
                    }
                  }
                  function setHtml(html) {
                    if (typeof html === 'undefined') {
                      document.body.innerHTML = ''
                      hasHtml = false
                    } else {
                      document.body.innerHTML = html
                      hasHtml = true
                    }
                  }
                  function setCss(css) {
                    const style = document.getElementById('_style')
                    const newStyle = document.createElement('style')
                    newStyle.id = '_style'
                    newStyle.innerHTML = typeof css === 'undefined' ? '' : css
                    style.parentNode.replaceChild(newStyle, style)
                    hasCss = typeof css === 'undefined' ? false : true
                  }
                  function setJs(js) {
                    const _script = document.getElementById('_script')
                    const newScript = document.createElement('script')
                    newScript.id = '_script'
                    newScript.innerHTML = typeof js === 'undefined' ? '' : js
                    _script.parentNode.replaceChild(newScript, _script)
                    hasJs = typeof js === 'undefined' ? false : true
                  }
                  </script>
                </head>
                <body>
                </body>
                <script>
                // https://github.com/sveltejs/svelte-repl/blob/master/src/Output/srcdoc/index.html
                // https://github.com/sveltejs/svelte-repl/blob/master/LICENSE
                document.body.addEventListener('click', event => {
                  if (event.which !== 1) return;
                  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                  if (event.defaultPrevented) return;

                  // ensure target is a link
                  let el = event.target;
                  while (el && el.nodeName !== 'A') el = el.parentNode;
                  if (!el || el.nodeName !== 'A') return;

                  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external' || el.target) return;

                  event.preventDefault();
                  window.open(el.href, '_blank');
                });
                </script>
              </html>
            `}
          />
        </div>
      </SplitPane>
    </EditorStyled>
  )
}

export default EditorPreview