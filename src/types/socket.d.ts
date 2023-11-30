
interface ServerToClientEvents { }

interface ClientToServerEvents {
  find_folder: (
    name: string,
    includeSystem?: boolean,
    callback: (folders: FolderDocument[] | IBranchPublic[]) => any
  ) => void;
  find_file: (
    name: string,
    includeSystem?: boolean,
    callback: (
      files: Array<ImageDocument | INode<true, Record<string, any>>>
    ) => any
  ) => void;
  find_any: (
    name: string,
    includeSystem?: boolean,
    callback: (
      docs: {
        files: ImageDocument | INode<true, Record<string, any>>[],
        folders: FolderDocument[]
      }
    ) => any
  ) => void;
}

interface InterServerEvents { }

interface SocketData { }
