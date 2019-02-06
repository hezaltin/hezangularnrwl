interface DocumentBase {
  uri: string
  title: string
  html: string
  attachments?: string[]
  references?: string[]
}

export interface Patent extends DocumentBase {
  abstract: string
  priorityDate: string
  assignees: string[]
  inventors: string[]
  type: "application" | "grant"
  status: string
}

export interface News extends DocumentBase {
  description: string
  timestamp: string
}

export type DocumentUnion = Patent | News