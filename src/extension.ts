import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "testownlint" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.helloWorld", () => {
      vscode.window.showInformationMessage(
        "Hello World from testOwnLint! running"
      );
    })
  );

  // function formatArray(
  //   document: vscode.TextDocument,
  //   edit: vscode.TextEditorEdit,
  //   range:vscode
  // );

  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.formatArray", () => {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor) {
        const doc = activeTextEditor.document;
        const edit = new vscode.WorkspaceEdit();
        const selection = activeTextEditor.selection;

        const fullRange = new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(
            doc.lineCount - 1,
            doc.lineAt(doc.lineCount - 1).text.length
          )
        );

        const text = doc.getText(fullRange);
        console.log("text", text);
        const elements = text.split(",");
        console.log("elements", elements);
        const formattedElements = elements
          .map((element) => element.trim())
          .join("\n,");
        console.log(formattedElements);

        // Replace the content of the document
        edit.replace(doc.uri, fullRange, formattedElements);

        // Apply the edit to the document
        return vscode.workspace.applyEdit(edit);
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
