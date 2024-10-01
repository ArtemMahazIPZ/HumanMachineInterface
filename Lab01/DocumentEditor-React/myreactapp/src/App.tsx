import React, { useRef } from 'react';
import './App.css';
import { DocumentEditorContainerComponent, Inject, Toolbar } from "@syncfusion/ej2-react-documenteditor";

function App() {
    const editorRef = useRef<DocumentEditorContainerComponent | null>(null);

    const onSave = () => {
        editorRef.current?.documentEditor.save("Sample", "Docx");
    };

    return (
        <div className="App">
            <button onClick={onSave} className="e-btn e-primary" style={{ marginBottom: 10 }}>Save</button>
            <DocumentEditorContainerComponent
                ref={editorRef}
                height='590px'
                enableToolbar={true}
                serviceUrl='https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'
            >
                <Inject services={[Toolbar]} />
            </DocumentEditorContainerComponent>
        </div>
    );
}

export default App;
