import React, { useRef, useState, memo, useCallback } from "react"
import Editor, { loader } from "@monaco-editor/react"
import { parseToReact } from "@/components/utils"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { EditorStyled } from "./styled"

const snippet = `<div>
  <div className="bg-blueGray-700 rounded-full inline-flex items-center text-xs uppercase pr-4">
    <span className="bg-indigo-600 rounded-l-full px-3 text-xs font-medium py-1 mr-2">
      Package
    </span>
    Play
  </div>
  <h2 className="text-4xl sm:text-5xl sm:leading-12 mt-6 font-black line-clamp-3">
    Shipless Play
  </h2>
  <p className="mt-4 sm:mt-8 text-lg text-gray-400 line-clamp-2">
    Simple playground for HTML, CSS and JavaScript
  </p>
  <a href="https://github.com/shipless/play" target="_blank" rel="noreferrer" className="mt-8 sm:mt-10 inline-block text-lg">
    <div className="flex items-center">
      <span>
        Get Package
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </a>
</div>
`

const MemoEditor = memo(({defaultValue, onMount, onChange}) => (
  <Editor
    height="300px"
    defaultLanguage="html"
    defaultValue={defaultValue}
    theme="night-owl"
    onMount={onMount}
    loading={null}
    onChange={onChange}
  />
))

if (typeof window !== "undefined") {
  loader.init()
    .then(monaco => {
      monaco.editor.defineTheme("night-owl", nightOwl)
    })
}

const PlayCode: React.FC = () => {
  const editorContainerRef = useRef(null)
  const [value, setValue] = useState(snippet)

  

  const handleEditorDidMount = useCallback((editor) => {
    editorContainerRef.current = editor
    editorContainerRef.current.updateOptions({
      minimap: {
        enabled: false
      },
      fontSize: 16,
      lineNumbersMinChars: 3
    })
  }, [])

  const handleEditorChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return (
    <div className="md:flex -mx-6 items-center">
      <div className="w-full md:w-1/2 px-6">
        {parseToReact(value || snippet)}
      </div>
      <div className="w-full sm:w-1/2 px-6 mt-12 sm:mt-0">
        <EditorStyled className="sm:pr-4">
          <div className="relative z-20">
            <div className="relative w-full flex flex-col bg-blueGray-900 rounded-2xl overflow-hidden">
              <div className="flex-none h-11 flex items-center px-4 border-b border-blueGray-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 rounded-full border-red-500">
                  </div>
                  <div className="w-3 h-3 border-2 rounded-full border-amber-400">
                  </div>
                  <div className="w-3 h-3 border-2 rounded-full border-green-400">
                  </div>
                </div>
              </div>
              <div>
                <MemoEditor
                  defaultValue={value}
                  onMount={handleEditorDidMount}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </div>
        </EditorStyled>
      </div>
    </div>
  )
}

export default PlayCode

PlayCode.defaultProps = {
  badge: "Latest from the blog"
}