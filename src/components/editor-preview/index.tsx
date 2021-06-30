import React, { useRef, useCallback, useState } from "react"
import SplitPane from "react-split-pane"
import Editor, { loader } from "@monaco-editor/react"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { EditorStyled } from "./styled"
import { TabBar, SplitBar } from "./bars"
import initContent from "./initialContent"
import Preview from "./preview"

const EditorPreview: React.FC = ({defaultValue}) => {
  const editorContainerRef = useRef(null)
  const previewRef = useRef(null)
  const [activeTab, setActiveTab] = useState("html")
  const [split, setSplit] = useState("vertical")

  const initialContent = defaultValue ? defaultValue : initContent

  if (typeof window !== "undefined") {
    loader.init()
      .then(monaco => {
        monaco.editor.defineTheme("night-owl", nightOwl)
      })
  }


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
            defaultValue={initialContent[activeTab]}
            theme="night-owl"
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
          />
        </div>
        <div className="relative w-full h-full" style={{height: split === "horizontal" ? 300 : null}}>
          <Preview ref={previewRef} inject={inject} initialContent={initialContent}/>
        </div>
      </SplitPane>
    </EditorStyled>
  )
}

export default EditorPreview