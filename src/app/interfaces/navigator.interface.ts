interface Clipboard {
    writeText(newClipText: string): Promise<void>;
    readText(): Promise<string>;
    // Add any other methods you need here.
  }
  
  interface NavigatorClipboard {
    // Only available in a secure context.
    readonly clipboard?: Clipboard;
  }
  
  interface Navigator extends NavigatorClipboard {}