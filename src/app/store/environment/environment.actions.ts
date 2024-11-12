export class ChangeZoom {
  static readonly type = '[Environment] Change zoom';
  constructor(readonly zoom: number) {}
}

export class AddElement {
  static readonly type = '[Environment] Add element';
  constructor(readonly element: any) {}
}
