/* eslint-disable react/prop-types */
import Editor from "@monaco-editor/react";
import './CodeEditor.css'; // Import CSS for styling

const CodeEditor = (props) => {
  // Monaco editor options
  const editorOptions = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false,
    },
  };

  return (
    <div className="code-editor">
      <Editor
        defaultLanguage="javascript"
        theme="vs-dark"
        value={props.code}
        options={editorOptions}
      />
    </div>
  );
};

export default CodeEditor;
