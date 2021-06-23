import React, { useEffect, useRef } from "react"
import SplitPane from "react-split-pane"

// self.MonacoEnvironment = {
// 	getWorkerUrl: function (_moduleId: any, label: string) {
// 		if (label === 'json') {
// 			return './json.worker.bundle.js';
// 		}
// 		if (label === 'css' || label === 'scss' || label === 'less') {
// 			return './css.worker.bundle.js';
// 		}
// 		if (label === 'html' || label === 'handlebars' || label === 'razor') {
// 			return './html.worker.bundle.js';
// 		}
// 		if (label === 'typescript' || label === 'javascript') {
// 			return './ts.worker.bundle.js';
// 		}
// 		return './editor.worker.bundle.js';
// 	}
// }

const Editor = () => {
  const editorContainerRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef(null)
  // const editorState = useRef({})

  useEffect(() => {
    if (editorContainerRef.current) {
      import("monaco-editor").then(monaco => {
        editorRef.current = monaco.editor.create(editorContainerRef.current, {
          value: [`function x() {', '\tconsole.log("Hello world!");', '}`].join("\n"),
          language: "typescript"
        })
      })
    }

    return () => {
      editorRef.current.dispose()
    }
  }, [])

  useEffect(() => {
    console.log(editorRef.current)
    // const { editor, documents } = editorRef.current
    // const currentState = editor.saveViewState()
    // const currentModel = editor.getModel()

    // if (currentModel === documents.html.getModel()) {
    //   editorState.current.html = currentState
    // } else if (currentModel === documents.css.getModel()) {
    //   editorState.current.css = currentState
    // }

    // documents[activeTab].activate()
    // editor.restoreViewState(editorState.current[activeTab])
    // editor.focus()
  })

  return (
    <div>
      <SplitPane
        split="vertical"
        size="50%"
        style={{position: "relative"}}
      >
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 flex-auto flex">
          <div className="relative flex-auto">
            <div ref={editorRef} className="absolute inset-0 w-full h-full" style={{height: 400}}/>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 flex-auto flex">
          preview
        </div>
      </SplitPane>
    </div>
  )
}

export default Editor