export class ChangeZoom {
  static readonly type = '[Environment] Change zoom';
  constructor(readonly zoom: number) {}
}
