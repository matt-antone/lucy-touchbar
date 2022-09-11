// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "lucy-touchbar" is now active!');

    
	// Open and focus the file explorer
	const fileExplorer = vscode.commands.registerCommand('extension.fileExplorer', () => {
        vscode.commands.executeCommand('workbench.view.explorer');
    });

    // Toggle the terminal
	const terminal = vscode.commands.registerCommand('extension.terminal', () => {
        vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal');
    });

	// open the git tab
	const git = vscode.commands.registerCommand('extension.sourceControl', () => {
        vscode.commands.executeCommand('workbench.scm.focus');
    });

	context.subscriptions.push(fileExplorer,terminal,git);
}

// this method is called when your extension is deactivated
export function deactivate() {}
