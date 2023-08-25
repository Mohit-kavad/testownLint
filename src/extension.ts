import * as vscode from "vscode";
import formatCustomCode from "./formatWithCustomPrettier";
// import formatCustomCode from "./fomatplug";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "testownlint" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.helloWorld", () => {
      vscode.window.showInformationMessage(
        "Hello World from testOwnLint! running",
      );
    }),
  );

  //format selected element
  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.formatArray", () => {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor) {
        const doc = activeTextEditor.document;
        const edit = new vscode.WorkspaceEdit();
        const selection = activeTextEditor.selection;

        if (selection.isEmpty) {
          return vscode.window.showInformationMessage(
            "Please Select Text for formate",
          );
        }

        const text = doc.getText(selection);

        const elements = text.split(",");

        const formattedElements = elements
          .map((element) => element.trim())
          .join(`\n\t,${" "}`);

        const splitSemicolon = formattedElements.split(/(?<=[\]}])\s*;\s*/);
        // const splitSemicolon = formattedElements.split(";");
        const fullFormate = splitSemicolon
          .map((element) => element.trim())
          .join(`\n;`);

        // formate array with reguler expression
        // const fullFormate = text
        //   .replace(/ *, */g, "\n\t,")
        //   .replace(/ *; */g, "\n;");

        // Replace the content of the document
        edit.replace(doc.uri, selection, fullFormate);

        // Apply the edit to the document
        return vscode.workspace.applyEdit(edit);
      }
    }),
  );

  // format file
  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.formateFile", () => {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor) {
        const doc = activeTextEditor.document;
        console.log(
          "🚀 ~ file: extension.ts:52 ~ vscode.commands.registerCommand ~ doc:",
          doc,
        );
        const edit = new vscode.WorkspaceEdit();

        const fullRange = new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(
            doc.lineCount - 1,
            doc.lineAt(doc.lineCount - 1).text.length,
          ),
        );

        const text = doc.getText(fullRange);
        console.log(
          "🚀 ~ file: extension.ts:67 ~ vscode.commands.registerCommand ~ text:",
          typeof text,
        );

        const elements = text.split(",");
        const formattedElements = elements
          .map((element) => element.trim())
          .join(`\n,${" "}`);

        edit.replace(doc.uri, fullRange, formattedElements);

        // Apply the edit to the document
        return vscode.workspace.applyEdit(edit);
      }
    }),
  );

  // formate with prettier plugin for selected element

  context.subscriptions.push(
    vscode.commands.registerCommand("testownlint.prettierFormate", async () => {
      try {
        const activeTextEditor = vscode.window.activeTextEditor;
        if (activeTextEditor) {
          const doc = activeTextEditor.document;
          const edit = new vscode.WorkspaceEdit();
          // const selection = activeTextEditor.selection;
          const text = doc.getText();

          const formattedText = await formatCustomCode(text);
          console.log(
            "🚀 ~ file: extension.ts:108 ~ vscode.commands.registerCommand ~ formattedText:",
            formattedText,
          );

          const fullRange = new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(
              doc.lineCount - 1,
              doc.lineAt(doc.lineCount - 1).text.length,
            ),
          );

          // Replace the content of the document
          edit.replace(doc.uri, fullRange, formattedText);

          // Apply the edit to the document
          return vscode.workspace.applyEdit(edit);
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: extension.ts:131 ~ vscode.commands.registerCommand ~ error:",
          error,
        );
      }
    }),
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
