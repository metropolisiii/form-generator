export class TextInput {
  constructor(
    public label: string,
     public position: string,
     public placeholder?: string,
     public required?: boolean,
     public readonly?: boolean
    ) { }
}
