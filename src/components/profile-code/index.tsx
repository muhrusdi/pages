import React, { useRef, useState, memo, useCallback } from "react"
import Editor, { loader } from "@monaco-editor/react"
import { parseToReact } from "components/utils"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { EditorStyled } from "./styled"

const snippet = `<!-- code editor -->

<div className="bg-white rounded-4xl overflow-hidden p-8 text-center text-black">
  <img className="object-cover rounded-full m-auto w-36 h-36 sm:w-52 sm:h-52" src="https://res.cloudinary.com/muhrusdi/image/upload/v1616335341/thumb-612467.png" alt="muhrusdi"/>
  <div className="mt-6">
    <p className="font-semibold">
      &quot;I’m Front End Engineer with 4+ years of experience in web development. I like to code things from scratch and enjoy bringing ideas to life in the browser.&quot;
    </p>
    <div className="mt-6">
      <p className="text-blue-600 font-medium text-lg">
        Muhammad Rusdi
      </p>
      <p className="text-blueGray-700">
        Front End Engineer
      </p>
    </div>
  </div>
</div>
`

const MemoEditor = memo(({defaultValue, onMount, onChange}) => (
  <Editor
    height="400px"
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

type Props = {
  isPreview: boolean
}

const PlayCode: React.FC<Props> = ({isPreview}) => {
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
    <div className="flex flex-col sm:flex-row -mx-4">
      <div className={`w-full sm:w-1/2 sm:px-4 sm:block ${isPreview ? "block" : "hidden"}`}>
        {parseToReact(value || snippet)}
      </div>
      <div className={`w-full sm:w-1/2 sm:px-4 sm:block  ${!isPreview ? "block" : "hidden"}`}>
        <EditorStyled>
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
              <div style={{background: "#011627"}}>
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