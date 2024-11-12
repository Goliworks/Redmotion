import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddElement, ChangeZoom } from './environment.actions';
import { Assets, Sprite } from 'pixi.js';

export interface EnvironmentStateModel {
  zoom: number;
  elements: any[];
}

@State<EnvironmentStateModel>({
  name: 'environment',
  defaults: {
    zoom: 1,
    elements: [],
  },
})
@Injectable()
export class EnvironmentState {
  @Selector()
  static getZoom(state: EnvironmentStateModel): number {
    return state.zoom;
  }

  @Selector()
  static getLastElement(state: EnvironmentStateModel): any[] {
    return state.elements.at(-1);
  }

  @Action(ChangeZoom)
  changeZoom(ctx: StateContext<EnvironmentStateModel>, { zoom }: ChangeZoom) {
    ctx.patchState({ zoom });
  }

  @Action(AddElement)
  async addElement(
    ctx: StateContext<EnvironmentStateModel>,
    { element }: AddElement,
  ) {
    ctx.patchState({
      elements: [...ctx.getState().elements, element],
    });
  }
}
