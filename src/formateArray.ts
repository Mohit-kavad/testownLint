import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "testownlint" is now active! for array formating'
  );

  let disposable = vscode.commands.registerTextEditorCommand(
    "testownlint.formatArray",
    (textEditor, edit) => {
      console.log(textEditor, edit);
    }
  );

  context.subscriptions.push(disposable);
}
